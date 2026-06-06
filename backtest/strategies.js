/*
 * CoinPulse — Forecasting Strategy Lab (Node, headless)
 * =====================================================
 * A registry of competing forecasting strategies plus a walk-forward
 * calibration scorer. The daily backtest runs every strategy on real history
 * and keeps whichever predicts the future distribution best.
 *
 * Each strategy is a TERMINAL SAMPLER:
 *     fn(trainCloses, horizon, N, gauss, rng, opts) -> Float64Array(N) of
 *     simulated prices `horizon` days after the last training close.
 *
 * Calibration is fully MODEL-CONSISTENT: we take the strategy's own simulated
 * terminal samples and ask where the realized price fell among them (its
 * probability-integral transform / PIT). A well-calibrated strategy puts the
 * realized price inside its 80% interval ~80% of the time, with mean PIT ~0.5.
 *
 * No external deps. Exposed via module.exports.
 */
"use strict";

// ---------- math helpers ----------
function mean(a) {
  if (!a.length) return 0;
  let s = 0;
  for (let i = 0; i < a.length; i += 1) s += a[i];
  return s / a.length;
}
function variance(a) {
  if (a.length < 2) return 0;
  const m = mean(a);
  let s = 0;
  for (let i = 0; i < a.length; i += 1) {
    const d = a[i] - m;
    s += d * d;
  }
  return s / (a.length - 1);
}
function stdev(a) {
  return Math.sqrt(variance(a));
}
function clamp(x, a, b) {
  return Math.min(b, Math.max(a, x));
}
function logReturns(closes) {
  const o = [];
  for (let i = 1; i < closes.length; i += 1) {
    if (closes[i - 1] > 0 && closes[i] > 0) o.push(Math.log(closes[i] / closes[i - 1]));
  }
  return o;
}
function ewmaVar(rets, lambda) {
  if (!rets.length) return 0;
  const lam = lambda == null ? 0.94 : lambda;
  const m = mean(rets);
  let v = (rets[0] - m) * (rets[0] - m);
  for (let i = 1; i < rets.length; i += 1) {
    const e = rets[i] - m;
    v = lam * v + (1 - lam) * e * e;
  }
  return v;
}
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
// Box-Muller with cached second deviate (halves trig cost).
function makeGauss(rng) {
  let has = false;
  let cache = 0;
  return function () {
    if (has) {
      has = false;
      return cache;
    }
    let u = 0;
    let v = 0;
    while (u === 0) u = rng();
    while (v === 0) v = rng();
    const r = Math.sqrt(-2 * Math.log(u));
    const ang = 2 * Math.PI * v;
    cache = r * Math.sin(ang);
    has = true;
    return r * Math.cos(ang);
  };
}
function quantileSorted(s, q) {
  if (!s.length) return 0;
  if (s.length === 1) return s[0];
  const pos = clamp(q, 0, 1) * (s.length - 1);
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  if (lo === hi) return s[lo];
  const f = pos - lo;
  return s[lo] * (1 - f) + s[hi] * f;
}

// ---------- shared parameter fit ----------
function fitParams(closes, opts) {
  opts = opts || {};
  const damp = opts.damp == null ? 0.5 : opts.damp;
  const lambda = opts.lambda == null ? 0.94 : opts.lambda;
  const rets = logReturns(closes);
  const muRaw = mean(rets);
  let sigma = Math.sqrt(ewmaVar(rets, lambda)) || stdev(rets) || 0.02;
  sigma = Math.max(1e-6, sigma);
  let mu = clamp(muRaw * damp, -3 * sigma, 3 * sigma);
  mu = clamp(mu, -0.02, 0.02);
  return { mu, sigma, muRaw, rets };
}

// Variance-1 scaled Student-t shock (chi-square via sum of squared normals).
function makeTShock(gauss, dof) {
  const tScale = dof > 2 ? Math.sqrt((dof - 2) / dof) : 1;
  return function () {
    const z = gauss();
    let chi = 0;
    for (let k = 0; k < dof; k += 1) {
      const g = gauss();
      chi += g * g;
    }
    return (z / Math.sqrt(chi / dof)) * tScale;
  };
}

// ============================================================================
// STRATEGIES — each returns Float64Array(N) of terminal prices
// ============================================================================

function gbmNormal(closes, H, N, gauss, rng, opts) {
  const p = fitParams(closes, opts);
  const s0 = closes[closes.length - 1];
  const drift = (p.mu - 0.5 * p.sigma * p.sigma) * H;
  const vol = p.sigma * Math.sqrt(H);
  const out = new Float64Array(N);
  for (let i = 0; i < N; i += 1) out[i] = s0 * Math.exp(drift + vol * gauss());
  return out;
}

function gbmT(closes, H, N, gauss, rng, opts) {
  opts = opts || {};
  const dof = opts.dof || 5;
  const p = fitParams(closes, opts);
  const s0 = closes[closes.length - 1];
  const shock = makeTShock(gauss, dof);
  // Martingale (Ito) correction. At daily sigma the fat-tail term beyond
  // 0.5*sigma^2 is negligible, so the Gaussian correction is accurate enough.
  const stepDrift = p.mu - 0.5 * p.sigma * p.sigma;
  const out = new Float64Array(N);
  for (let i = 0; i < N; i += 1) {
    let x = 0;
    for (let d = 0; d < H; d += 1) x += stepDrift + p.sigma * shock();
    out[i] = s0 * Math.exp(x);
  }
  return out;
}

function bootstrapIid(closes, H, N, gauss, rng, opts) {
  opts = opts || {};
  const rets = logReturns(closes);
  if (rets.length < 8) return gbmNormal(closes, H, N, gauss, rng, opts);
  const s0 = closes[closes.length - 1];
  const m = mean(rets);
  const damp = opts.damp == null ? 0.5 : opts.damp;
  const L = rets.length;
  const out = new Float64Array(N);
  for (let i = 0; i < N; i += 1) {
    let x = 0;
    for (let d = 0; d < H; d += 1) {
      const r = rets[(Math.floor(rng() * L)) % L];
      x += r - m + m * damp; // de-mean, re-add damped drift
    }
    out[i] = s0 * Math.exp(x);
  }
  return out;
}

function blockBootstrap(closes, H, N, gauss, rng, opts) {
  opts = opts || {};
  const rets = logReturns(closes);
  const L = rets.length;
  if (L < 12) return gbmNormal(closes, H, N, gauss, rng, opts);
  const s0 = closes[closes.length - 1];
  const m = mean(rets);
  const damp = opts.damp == null ? 0.5 : opts.damp;
  const block = opts.block || 5;
  const out = new Float64Array(N);
  for (let i = 0; i < N; i += 1) {
    let x = 0;
    let d = 0;
    while (d < H) {
      const start = Math.floor(rng() * L);
      for (let b = 0; b < block && d < H; b += 1, d += 1) {
        const r = rets[(start + b) % L];
        x += r - m + m * damp;
      }
    }
    out[i] = s0 * Math.exp(x);
  }
  return out;
}

// Ornstein-Uhlenbeck / AR(1) on log price (mean reversion toward fitted level).
function ou(closes, H, N, gauss, rng, opts) {
  const n = closes.length;
  if (n < 20) return gbmNormal(closes, H, N, gauss, rng, opts);
  const lp = new Array(n);
  for (let i = 0; i < n; i += 1) lp[i] = Math.log(closes[i]);
  let sx = 0;
  let sy = 0;
  let sxx = 0;
  let sxy = 0;
  let k = 0;
  for (let i = 1; i < n; i += 1) {
    const x = lp[i - 1];
    const y = lp[i];
    sx += x;
    sy += y;
    sxx += x * x;
    sxy += x * y;
    k += 1;
  }
  const denom = k * sxx - sx * sx || 1e-9;
  let phi = (k * sxy - sx * sy) / denom;
  const c = (sy - phi * sx) / k;
  phi = clamp(phi, -0.9995, 0.9995);
  const resid = [];
  for (let i = 1; i < n; i += 1) resid.push(lp[i] - (c + phi * lp[i - 1]));
  const sig = Math.max(1e-6, stdev(resid) || 0.02);
  const s0log = lp[n - 1];
  const out = new Float64Array(N);
  for (let i = 0; i < N; i += 1) {
    let x = s0log;
    for (let d = 0; d < H; d += 1) x = c + phi * x + sig * gauss();
    out[i] = Math.exp(x);
  }
  return out;
}

// Momentum: drift from the recent return window, carried partially forward.
function momentum(closes, H, N, gauss, rng, opts) {
  opts = opts || {};
  const rets = logReturns(closes);
  if (rets.length < 14) return gbmNormal(closes, H, N, gauss, rng, opts);
  const s0 = closes[closes.length - 1];
  const sigma = Math.max(1e-6, Math.sqrt(ewmaVar(rets, 0.94)) || stdev(rets) || 0.02);
  const carry = opts.carry == null ? 0.6 : opts.carry;
  const recent = rets.slice(-14);
  const mu = clamp(mean(recent) * carry, -0.03, 0.03);
  const drift = (mu - 0.5 * sigma * sigma) * H;
  const vol = sigma * Math.sqrt(H);
  const out = new Float64Array(N);
  for (let i = 0; i < N; i += 1) out[i] = s0 * Math.exp(drift + vol * gauss());
  return out;
}

// GARCH(1,1)-lite: volatility evolves stochastically through the horizon.
function garchLite(closes, H, N, gauss, rng, opts) {
  opts = opts || {};
  const rets = logReturns(closes);
  if (rets.length < 20) return gbmNormal(closes, H, N, gauss, rng, opts);
  const s0 = closes[closes.length - 1];
  const m = mean(rets);
  const uncond = variance(rets) || 0.0004;
  const alpha = opts.alpha == null ? 0.1 : opts.alpha;
  const beta = opts.beta == null ? 0.85 : opts.beta;
  const omega = Math.max(1e-10, uncond * (1 - alpha - beta));
  const var0 = Math.max(ewmaVar(rets, 0.94) || uncond, 1e-8);
  const damp = opts.damp == null ? 0.5 : opts.damp;
  const mu = clamp(m * damp, -0.02, 0.02);
  const out = new Float64Array(N);
  for (let i = 0; i < N; i += 1) {
    let x = 0;
    let v = var0;
    let lastShock = 0;
    for (let d = 0; d < H; d += 1) {
      v = omega + alpha * lastShock * lastShock + beta * v;
      const sig = Math.sqrt(Math.max(v, 1e-10));
      const e = sig * gauss();
      x += mu - 0.5 * v + e;
      lastShock = e;
    }
    out[i] = s0 * Math.exp(x);
  }
  return out;
}

const STRATEGIES = [
  { key: "gbm_normal", label: "GBM (normal)", fn: gbmNormal, opts: { damp: 0.5 } },
  { key: "gbm_t", label: "GBM + Student-t", fn: gbmT, opts: { damp: 0.5, dof: 5 } },
  { key: "bootstrap_iid", label: "Bootstrap (IID)", fn: bootstrapIid, opts: { damp: 0.5 } },
  { key: "block_boot", label: "Block bootstrap", fn: blockBootstrap, opts: { damp: 0.5, block: 5 } },
  { key: "ou", label: "Mean-reversion (OU)", fn: ou, opts: {} },
  { key: "momentum", label: "Momentum", fn: momentum, opts: { carry: 0.6 } },
  { key: "ewma_t_zero", label: "EWMA vol, zero drift (t)", fn: gbmT, opts: { damp: 0, dof: 5 } },
  { key: "garch", label: "GARCH(1,1)-lite", fn: garchLite, opts: { damp: 0.5 } },
];

// ============================================================================
// CALIBRATION — walk-forward PIT coverage for one strategy on one series
// ============================================================================
function calibrate(strategy, closes, horizon, opts) {
  opts = opts || {};
  const minTrain = opts.minTrain || 45;
  const lastAnchor = closes.length - 1 - horizon;
  if (lastAnchor < minTrain + 1) return null;
  const maxWindows = opts.maxWindows || 40;
  const span = lastAnchor - minTrain;
  const step = Math.max(1, Math.floor(span / maxWindows));
  const N = opts.samples || 200;
  const rng = mulberry32((opts.seed || 1337) ^ Math.imul(horizon, 2654435761));
  const gauss = makeGauss(rng);

  const pits = [];
  let in50 = 0;
  let in80 = 0;
  let in90 = 0;
  let dirHits = 0;
  let widthAcc = 0;
  let total = 0;

  for (let i = minTrain; i <= lastAnchor; i += step) {
    const train = closes.slice(0, i + 1);
    const s0 = train[train.length - 1];
    const realized = closes[i + horizon];
    if (!(s0 > 0) || !(realized > 0)) continue;
    const term = strategy.fn(train, horizon, N, gauss, rng, strategy.opts);
    let below = 0;
    for (let j = 0; j < term.length; j += 1) if (term[j] <= realized) below += 1;
    const pit = below / term.length;
    pits.push(pit);
    if (pit >= 0.25 && pit <= 0.75) in50 += 1;
    if (pit >= 0.1 && pit <= 0.9) in80 += 1;
    if (pit >= 0.05 && pit <= 0.95) in90 += 1;
    const sorted = Array.prototype.slice.call(term).sort((a, b) => a - b);
    const medForecast = quantileSorted(sorted, 0.5);
    if (medForecast >= s0 === realized >= s0) dirHits += 1;
    widthAcc += (quantileSorted(sorted, 0.9) - quantileSorted(sorted, 0.1)) / s0;
    total += 1;
  }
  if (!total) return null;

  const meanPit = mean(pits);
  const cov50 = (in50 / total) * 100;
  const cov80 = (in80 / total) * 100;
  const cov90 = (in90 / total) * 100;
  // Calibration error: distance of coverage from nominal + drift bias penalty.
  const calErr = Math.abs(cov50 - 50) + Math.abs(cov80 - 80) + Math.abs(cov90 - 90);
  const biasPenalty = Math.abs(meanPit - 0.5) * 200;
  // Effective sample size accounting for overlapping horizon windows.
  const nEff = Math.max(1, total / horizon);
  return {
    horizon,
    windows: total,
    nEff,
    cov50,
    cov80,
    cov90,
    meanPit,
    dirAccuracy: (dirHits / total) * 100,
    sharpness: widthAcc / total, // mean relative p10–p90 width (lower = sharper)
    calErr,
    biasPenalty,
    score: calErr + biasPenalty, // lower is better
  };
}

module.exports = {
  STRATEGIES,
  calibrate,
  _util: { mean, variance, stdev, logReturns, ewmaVar, mulberry32, makeGauss, quantileSorted, fitParams },
};
