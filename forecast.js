/*
 * CoinPulse Forecast Engine
 * -------------------------
 * Pure, dependency-free quantitative core that answers one question:
 * "Where is this coin likely to go?"
 *
 * It takes a series of daily OHLCV candles and produces:
 *   - drift / volatility / regime statistics estimated from history
 *   - a Monte Carlo simulation (Geometric Brownian Motion with optional
 *     Student-t fat tails) projected forward N days
 *   - per-day percentile bands (the probability cone / fan chart)
 *   - representative bull / base / bear paths
 *   - terminal distribution + expected value + confidence intervals
 *   - touch probabilities for technical targets and stops
 *
 * Everything is deterministic for a given (series, options) pair because the
 * RNG is seeded. That keeps the chart stable across re-renders.
 *
 * Exposed as the global `Forecast`.
 */
(function (global) {
  "use strict";

  // ---- small math helpers -------------------------------------------------

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function mean(values) {
    if (!values.length) return 0;
    let sum = 0;
    for (let i = 0; i < values.length; i += 1) sum += values[i];
    return sum / values.length;
  }

  function stdev(values, sampleMean) {
    if (values.length < 2) return 0;
    const m = sampleMean === undefined ? mean(values) : sampleMean;
    let acc = 0;
    for (let i = 0; i < values.length; i += 1) {
      const d = values[i] - m;
      acc += d * d;
    }
    return Math.sqrt(acc / (values.length - 1));
  }

  function quantileSorted(sorted, q) {
    if (!sorted.length) return 0;
    if (sorted.length === 1) return sorted[0];
    const pos = clamp(q, 0, 1) * (sorted.length - 1);
    const lo = Math.floor(pos);
    const hi = Math.ceil(pos);
    if (lo === hi) return sorted[lo];
    const frac = pos - lo;
    return sorted[lo] * (1 - frac) + sorted[hi] * frac;
  }

  // Deterministic PRNG (mulberry32) -> uniform in (0,1)
  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Box-Muller standard normal from a uniform RNG
  function gaussian(rng) {
    let u = 0;
    let v = 0;
    while (u === 0) u = rng();
    while (v === 0) v = rng();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }

  // Cheap string -> 32bit seed so each symbol gets a stable but distinct seed
  function hashSeed(str) {
    let h = 2166136261;
    const s = String(str || "seed");
    for (let i = 0; i < s.length; i += 1) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  // Standard-normal CDF (Abramowitz & Stegun 7.1.26 approximation)
  function normCdf(x) {
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989422804014327 * Math.exp((-x * x) / 2);
    let p =
      d *
      t *
      (0.31938153 +
        t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
    if (x > 0) p = 1 - p;
    return p;
  }

  // ---- feature extraction from candles -----------------------------------

  function logReturns(closes) {
    const out = [];
    for (let i = 1; i < closes.length; i += 1) {
      const prev = closes[i - 1];
      const cur = closes[i];
      if (prev > 0 && cur > 0) out.push(Math.log(cur / prev));
    }
    return out;
  }

  // Linear-regression slope of y against x = 0..n-1, returned per-step.
  function regressionSlope(values) {
    const n = values.length;
    if (n < 2) return 0;
    const meanX = (n - 1) / 2;
    const meanY = mean(values);
    let num = 0;
    let den = 0;
    for (let i = 0; i < n; i += 1) {
      const dx = i - meanX;
      num += dx * (values[i] - meanY);
      den += dx * dx;
    }
    return den ? num / den : 0;
  }

  // Average True Range over the last `period` candles (volatility in price units)
  function atr(candles, period) {
    if (candles.length < 2) return 0;
    const trs = [];
    for (let i = 1; i < candles.length; i += 1) {
      const c = candles[i];
      const prevClose = candles[i - 1].close;
      const tr = Math.max(
        c.high - c.low,
        Math.abs(c.high - prevClose),
        Math.abs(c.low - prevClose)
      );
      if (Number.isFinite(tr)) trs.push(tr);
    }
    return mean(trs.slice(-period));
  }

  // Detect recent swing pivots -> nearest support / resistance around price.
  function findLevels(candles, lastPrice) {
    const lookback = candles.slice(-90);
    const highs = lookback.map((c) => c.high).filter(Number.isFinite);
    const lows = lookback.map((c) => c.low).filter(Number.isFinite);
    if (!highs.length || !lows.length) {
      return {
        resistance: lastPrice * 1.12,
        support: lastPrice * 0.9,
        nearResistance: lastPrice * 1.06,
        nearSupport: lastPrice * 0.95,
      };
    }

    // Pivot detection: local extreme over a +/- window
    const win = 3;
    const pivotHighs = [];
    const pivotLows = [];
    for (let i = win; i < lookback.length - win; i += 1) {
      let isHigh = true;
      let isLow = true;
      for (let j = i - win; j <= i + win; j += 1) {
        if (lookback[j].high > lookback[i].high) isHigh = false;
        if (lookback[j].low < lookback[i].low) isLow = false;
      }
      if (isHigh) pivotHighs.push(lookback[i].high);
      if (isLow) pivotLows.push(lookback[i].low);
    }

    const above = pivotHighs.filter((h) => h > lastPrice).sort((a, b) => a - b);
    const below = pivotLows.filter((l) => l < lastPrice).sort((a, b) => b - a);

    // Fallbacks must stay on the correct side of price (matters at ATH / ATL),
    // otherwise touch-probabilities read ~100% and the entry range reverses.
    const nearResistance = above.length ? above[0] : Math.max(lastPrice * 1.06, Math.max.apply(null, highs));
    const nearSupport = below.length ? below[0] : Math.min(lastPrice * 0.95, Math.min.apply(null, lows));

    return {
      resistance: Math.max(...highs),
      support: Math.min(...lows),
      nearResistance,
      nearSupport,
    };
  }

  // ---- statistics bundle --------------------------------------------------

  function computeStats(candles) {
    const closes = candles.map((c) => c.close).filter(Number.isFinite);
    const lastPrice = closes[closes.length - 1];
    const rets = logReturns(closes);

    const muDaily = mean(rets);
    const sigmaDaily = stdev(rets, muDaily) || 0.02;

    // Annualized (crypto trades 365 days)
    const muAnnual = muDaily * 365;
    const sigmaAnnual = sigmaDaily * Math.sqrt(365);

    // Sharpe-like ratio (risk-free assumed 0)
    const sharpe = sigmaDaily ? (muDaily / sigmaDaily) * Math.sqrt(365) : 0;

    // Trend slope on log-price over the last 30 sessions, expressed as %/day
    const recentLog = closes.slice(-30).map((c) => Math.log(c));
    const slopePerDay = (Math.exp(regressionSlope(recentLog)) - 1) * 100;

    // Volatility regime: compare recent vol to longer baseline
    const recentVol = stdev(rets.slice(-14));
    const baseVol = stdev(rets.slice(-60)) || sigmaDaily;
    const volRatio = baseVol ? recentVol / baseVol : 1;

    // Blend recent and baseline vol so the cone reacts to volatility clustering
    // without over-fitting a noisy 14-day window. This is what the simulator
    // actually uses for sigma.
    const simSigma = recentVol > 0 && baseVol > 0 ? 0.6 * recentVol + 0.4 * baseVol : sigmaDaily;

    // Momentum windows — NaN (not a misleading 0) when history is too short.
    const pct = (from, to) => (from ? ((to - from) / from) * 100 : 0);
    const change7 = closes.length > 8 ? pct(closes[closes.length - 8], lastPrice) : NaN;
    const change30 = closes.length > 31 ? pct(closes[closes.length - 31], lastPrice) : NaN;
    const change90 = closes.length > 91 ? pct(closes[closes.length - 91], lastPrice) : pct(closes[0], lastPrice);

    // Volume trend
    const volumes = candles.map((c) => c.volume).filter(Number.isFinite);
    const recentVolAvg = mean(volumes.slice(-7));
    const baseVolAvg = mean(volumes.slice(-30)) || recentVolAvg;
    const volumeRatio = baseVolAvg ? recentVolAvg / baseVolAvg : 1;

    // Regime classification
    let trend;
    if (slopePerDay > 0.6) trend = "Strong Uptrend";
    else if (slopePerDay > 0.12) trend = "Uptrend";
    else if (slopePerDay < -0.6) trend = "Strong Downtrend";
    else if (slopePerDay < -0.12) trend = "Downtrend";
    else trend = "Range / Chop";

    const volState = volRatio > 1.35 ? "Expanding" : volRatio < 0.75 ? "Compressing" : "Stable";

    const levels = findLevels(candles, lastPrice);
    const atr14 = atr(candles, 14);

    // Max drawdown over the visible window (peak-to-trough on closes)
    let peak = closes[0];
    let maxDd = 0;
    for (let i = 0; i < closes.length; i += 1) {
      if (closes[i] > peak) peak = closes[i];
      const dd = (closes[i] - peak) / peak;
      if (dd < maxDd) maxDd = dd;
    }

    return {
      lastPrice,
      muDaily,
      sigmaDaily,
      simSigma,
      muAnnual,
      sigmaAnnual,
      sharpe,
      slopePerDay,
      change7,
      change30,
      change90,
      recentVol,
      baseVol,
      volRatio,
      volState,
      volumeRatio,
      trend,
      levels,
      atr14,
      atrPct: lastPrice ? (atr14 / lastPrice) * 100 : 0,
      maxDrawdown: maxDd * 100,
      sampleSize: rets.length,
    };
  }

  // ---- Monte Carlo simulation --------------------------------------------

  /*
   * Simulates forward price paths and reduces them into percentile bands.
   * Uses GBM increments with an optional Student-t shock for fatter tails,
   * antithetic variates for variance reduction, and a seeded RNG.
   */
  function simulate(stats, options) {
    const opts = options || {};
    const horizon = Math.max(1, Math.round(opts.horizon || 30));
    const paths = Math.max(50, Math.round(opts.paths || 600));
    const driftDamp = opts.driftDamp == null ? 0.55 : opts.driftDamp;
    const volScale = opts.volScale == null ? 1 : opts.volScale;
    const fatTails = opts.fatTails !== false; // on by default
    const tDof = opts.tDof || 5; // degrees of freedom for Student-t tails
    const seed = opts.seed == null ? 1337 : opts.seed;

    const s0 = stats.lastPrice;
    const sigma = Math.max(1e-6, (stats.simSigma || stats.sigmaDaily) * volScale);

    // Damp the raw drift toward zero (recent trend rarely persists fully) and
    // clamp it so the cone never runs away.
    let mu = stats.muDaily * driftDamp;
    mu = clamp(mu, -3 * sigma, 3 * sigma);
    mu = clamp(mu, -0.02, 0.02);

    const rng = mulberry32(seed);

    // Student-t scaling so variance stays ~sigma^2 when fat tails are on
    const tScale = tDof > 2 ? Math.sqrt((tDof - 2) / tDof) : 1;
    function shock() {
      const z = gaussian(rng);
      if (!fatTails) return z;
      // t = z / sqrt(chi2_dof / dof); approximate chi2 via sum of squared normals
      let chi = 0;
      for (let k = 0; k < tDof; k += 1) {
        const g = gaussian(rng);
        chi += g * g;
      }
      const t = z / Math.sqrt(chi / tDof);
      return t * tScale;
    }

    // valuesPerDay[d] holds every path's price at day d (d=0 is today)
    const valuesPerDay = [];
    for (let d = 0; d <= horizon; d += 1) valuesPerDay.push(new Float64Array(paths));
    for (let p = 0; p < paths; p += 1) valuesPerDay[0][p] = s0;

    const terminalMax = new Float64Array(paths); // highest price reached on path
    const terminalMin = new Float64Array(paths); // lowest price reached on path

    const drift = mu - 0.5 * sigma * sigma;

    // Antithetic variates: simulate paths in pairs (+shock / -shock)
    for (let p = 0; p < paths; p += 2) {
      let sA = s0;
      let sB = s0;
      let maxA = s0;
      let maxB = s0;
      let minA = s0;
      let minB = s0;
      for (let d = 1; d <= horizon; d += 1) {
        const z = shock();
        sA = sA * Math.exp(drift + sigma * z);
        sB = sB * Math.exp(drift - sigma * z);
        if (sA > maxA) maxA = sA;
        if (sA < minA) minA = sA;
        if (sB > maxB) maxB = sB;
        if (sB < minB) minB = sB;
        valuesPerDay[d][p] = sA;
        if (p + 1 < paths) valuesPerDay[d][p + 1] = sB;
      }
      terminalMax[p] = maxA;
      terminalMin[p] = minA;
      if (p + 1 < paths) {
        terminalMax[p + 1] = maxB;
        terminalMin[p + 1] = minB;
      }
    }

    // Reduce to percentile bands per day
    const pcts = [0.05, 0.1, 0.25, 0.5, 0.75, 0.9, 0.95];
    const bands = { p5: [], p10: [], p25: [], p50: [], p75: [], p90: [], p95: [] };
    const keyByPct = {
      0.05: "p5",
      0.1: "p10",
      0.25: "p25",
      0.5: "p50",
      0.75: "p75",
      0.9: "p90",
      0.95: "p95",
    };
    for (let d = 0; d <= horizon; d += 1) {
      const sorted = Array.prototype.slice.call(valuesPerDay[d]).sort((a, b) => a - b);
      for (let i = 0; i < pcts.length; i += 1) {
        bands[keyByPct[pcts[i]]].push(quantileSorted(sorted, pcts[i]));
      }
    }

    // Terminal distribution
    const terminal = Array.prototype.slice.call(valuesPerDay[horizon]).sort((a, b) => a - b);
    const terminalMean = mean(terminal);
    const terminalMedian = quantileSorted(terminal, 0.5);

    // Representative bull / base / bear FULL paths: pick the simulated path
    // whose terminal value is closest to the p90 / p50 / p10 terminal price.
    function nearestPathTo(targetTerminal) {
      let bestIdx = 0;
      let bestDist = Infinity;
      const lastDay = valuesPerDay[horizon];
      for (let p = 0; p < paths; p += 1) {
        const dist = Math.abs(lastDay[p] - targetTerminal);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = p;
        }
      }
      const path = [];
      for (let d = 0; d <= horizon; d += 1) path.push(valuesPerDay[d][bestIdx]);
      return path;
    }

    const bullPath = nearestPathTo(quantileSorted(terminal, 0.9));
    const basePath = nearestPathTo(terminalMedian);
    const bearPath = nearestPathTo(quantileSorted(terminal, 0.1));

    // A spread of individual paths for the "spaghetti" backdrop.
    const sampleCount = Math.min(26, paths);
    const samplePaths = [];
    for (let s = 0; s < sampleCount; s += 1) {
      const idx = Math.floor((s + 0.5) * (paths / sampleCount));
      const path = [];
      for (let d = 0; d <= horizon; d += 1) path.push(valuesPerDay[d][idx]);
      samplePaths.push(path);
    }

    // Touch probability for an arbitrary level within the horizon
    function touchProbAbove(level) {
      let hit = 0;
      for (let p = 0; p < paths; p += 1) if (terminalMax[p] >= level) hit += 1;
      return (hit / paths) * 100;
    }
    function touchProbBelow(level) {
      let hit = 0;
      for (let p = 0; p < paths; p += 1) if (terminalMin[p] <= level) hit += 1;
      return (hit / paths) * 100;
    }
    function terminalProbAbove(level) {
      let hit = 0;
      for (let p = 0; p < terminal.length; p += 1) if (terminal[p] >= level) hit += 1;
      return (hit / terminal.length) * 100;
    }

    return {
      horizon,
      paths,
      mu,
      sigma,
      s0,
      bands,
      samplePaths,
      bullPath,
      basePath,
      bearPath,
      terminal: {
        values: terminal,
        mean: terminalMean,
        median: terminalMedian,
        p5: quantileSorted(terminal, 0.05),
        p10: quantileSorted(terminal, 0.1),
        p25: quantileSorted(terminal, 0.25),
        p50: terminalMedian,
        p75: quantileSorted(terminal, 0.75),
        p90: quantileSorted(terminal, 0.9),
        p95: quantileSorted(terminal, 0.95),
        expectedReturnPct: s0 ? (terminalMean / s0 - 1) * 100 : 0,
        medianReturnPct: s0 ? (terminalMedian / s0 - 1) * 100 : 0,
      },
      probUp: terminalProbAbove(s0),
      touchProbAbove,
      touchProbBelow,
      terminalProbAbove,
    };
  }

  // ---- closed-form analytic check (lognormal terminal) -------------------
  // Used to cross-validate the Monte Carlo and to label confidence.
  function analyticTerminal(stats, options) {
    const opts = options || {};
    const horizon = Math.max(1, Math.round(opts.horizon || 30));
    const driftDamp = opts.driftDamp == null ? 0.55 : opts.driftDamp;
    const volScale = opts.volScale == null ? 1 : opts.volScale;
    const sigma = Math.max(1e-6, (stats.simSigma || stats.sigmaDaily) * volScale);
    let mu = stats.muDaily * driftDamp;
    mu = clamp(mu, -3 * sigma, 3 * sigma);
    mu = clamp(mu, -0.02, 0.02);
    const s0 = stats.lastPrice;
    const drift = (mu - 0.5 * sigma * sigma) * horizon;
    const vol = sigma * Math.sqrt(horizon);
    // P(S_T > level) under lognormal
    function probAbove(level) {
      if (level <= 0) return 100;
      const d = (Math.log(level / s0) - drift) / vol;
      return (1 - normCdf(d)) * 100;
    }
    return { probAbove, drift, vol };
  }

  // ---- calibration backtest ----------------------------------------------
  /*
   * The honesty centerpiece. Walks back through history; at each anchor it
   * builds the SAME lognormal forecast from data available up to that day, then
   * checks where the realised price (anchor + horizon) actually landed inside
   * the predicted distribution (its probability-integral transform / PIT).
   *
   * If the model is well calibrated, ~80% of realised prices fall inside the
   * 80% band, ~50% inside the 50% band, and the average PIT sits near 0.5.
   */
  function quickMuSigma(closes) {
    const rets = logReturns(closes);
    const muDaily = mean(rets);
    const sigmaFull = stdev(rets) || 0.02;
    const recentVol = stdev(rets.slice(-14));
    const baseVol = stdev(rets.slice(-60)) || sigmaFull;
    const sigma = recentVol > 0 && baseVol > 0 ? 0.6 * recentVol + 0.4 * baseVol : sigmaFull;
    return { muDaily: muDaily, sigma: sigma };
  }

  function backtestCalibration(candles, options) {
    const opts = options || {};
    const horizon = Math.max(1, Math.round(opts.horizon || 30));
    const driftDamp = opts.driftDamp == null ? 0.55 : opts.driftDamp;
    const volScale = opts.volScale == null ? 1 : opts.volScale;
    const closes = candles.map((c) => c.close).filter((v) => Number.isFinite(v) && v > 0);

    const minTrain = 45;
    const lastAnchor = closes.length - 1 - horizon;
    if (lastAnchor < minTrain + 1) {
      return { ok: false, reason: "Not enough history for a " + horizon + "d calibration." };
    }

    const span = lastAnchor - minTrain;
    const step = Math.max(1, Math.floor(span / 60)); // ~60 windows max
    const pits = [];
    let in50 = 0;
    let in80 = 0;
    let in90 = 0;
    let total = 0;
    let dirHits = 0;

    for (let i = minTrain; i <= lastAnchor; i += step) {
      const slice = closes.slice(0, i + 1);
      const est = quickMuSigma(slice);
      const sig = Math.max(1e-6, est.sigma * volScale);
      let mu = clamp(est.muDaily * driftDamp, -3 * sig, 3 * sig);
      mu = clamp(mu, -0.02, 0.02);
      const drift = (mu - 0.5 * sig * sig) * horizon;
      const vol = sig * Math.sqrt(horizon);
      const s0 = closes[i];
      const realized = closes[i + horizon];
      if (!(s0 > 0) || !(realized > 0) || vol <= 0) continue;
      const z = (Math.log(realized / s0) - drift) / vol;
      const pit = normCdf(z);
      pits.push(pit);
      if (pit >= 0.25 && pit <= 0.75) in50 += 1;
      if (pit >= 0.1 && pit <= 0.9) in80 += 1;
      if (pit >= 0.05 && pit <= 0.95) in90 += 1;
      // did the median-direction call match reality?
      const predUp = drift >= 0;
      const realUp = realized >= s0;
      if (predUp === realUp) dirHits += 1;
      total += 1;
    }

    if (!total) return { ok: false, reason: "Calibration produced no valid windows." };

    const cov50 = (in50 / total) * 100;
    const cov80 = (in80 / total) * 100;
    const cov90 = (in90 / total) * 100;
    const meanPit = mean(pits);
    const dirAccuracy = (dirHits / total) * 100;

    let verdict;
    if (cov80 >= 72 && cov80 <= 90) verdict = "Well calibrated";
    else if (cov80 > 90) verdict = "Cone too wide (conservative)";
    else verdict = "Cone too narrow (overconfident)";

    let bias;
    if (meanPit > 0.57) bias = "Tends to under-shoot (price ran higher)";
    else if (meanPit < 0.43) bias = "Tends to over-shoot (price ran lower)";
    else bias = "Roughly unbiased";

    return {
      ok: true,
      horizon: horizon,
      windows: total,
      cov50: cov50,
      cov80: cov80,
      cov90: cov90,
      meanPit: meanPit,
      dirAccuracy: dirAccuracy,
      verdict: verdict,
      bias: bias,
    };
  }

  // ---- top-level analyze --------------------------------------------------

  function analyze(candles, options) {
    if (!candles || candles.length < 12) {
      return null;
    }
    const stats = computeStats(candles);
    const opts = Object.assign({}, options);
    if (opts.seed == null) opts.seed = hashSeed(opts.symbol || "coinpulse");
    const sim = simulate(stats, opts);
    const analytic = analyticTerminal(stats, opts);

    // Composite forecast score (0-100): blends expected edge, hit odds and
    // a risk penalty. Used to rank coins by opportunity quality.
    const edge = clamp(sim.terminal.medianReturnPct, -40, 60);
    const odds = sim.probUp - 50; // -50..50
    const riskPenalty = clamp(stats.sigmaDaily * 100, 0, 12) + clamp(-stats.maxDrawdown * 0.15, 0, 12);
    const rawScore = 50 + edge * 0.7 + odds * 0.6 - riskPenalty;
    const score = Math.round(clamp(rawScore, 1, 99));

    return { stats, sim, analytic, score };
  }

  global.Forecast = {
    analyze,
    computeStats,
    simulate,
    backtestCalibration,
    // expose helpers for testing / reuse
    _util: { clamp, mean, stdev, quantileSorted, logReturns, normCdf, hashSeed },
  };
})(typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : this);

// CommonJS export so the headless backtest harness can `require('./forecast.js')`.
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = (typeof globalThis !== "undefined" ? globalThis : this).Forecast;
}
