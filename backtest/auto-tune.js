#!/usr/bin/env node
/*
 * CoinPulse — Auto-Tuner (headless, Node 18+, no deps)
 * ====================================================
 * The "correct & improve the program" half of the daily loop. It grid-searches
 * the shipped engine's tunable MODEL config (volPremium, driftDamp) to MINIMISE
 * walk-forward calibration error across the whole coin universe, and — when an
 * improvement clears a margin — rewrites the AUTO-TUNED MODEL CONFIG block in
 * forecast.js and logs the change to CHANGELOG.md.
 *
 * Usage:
 *   node backtest/auto-tune.js            # dry run — report only
 *   node backtest/auto-tune.js --apply    # apply the best config if it improves
 *
 * Calibration error (lower = better), aggregated window-weighted across coins:
 *   |cov50-50| + |cov80-80| + |cov90-90| + 200*|meanPIT-0.5|
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const DATA_JS = path.join(ROOT, "data.js");
const FORECAST_JS = path.join(ROOT, "forecast.js");
const CHANGELOG = path.join(ROOT, "CHANGELOG.md");
const REPORTS_DIR = path.join(__dirname, "reports");

const HORIZONS = [7, 14, 30];
const HISTORY_LIMIT = 200;
const REQUEST_TIMEOUT_MS = 12000;
const APPLY = process.argv.includes("--apply");

// Search grid + guard rails.
const VOL_GRID = gridRange(0.85, 1.45, 0.05);
const DAMP_GRID = [0.4, 0.55, 0.7];
const MIN_IMPROVE = 0.5; // require at least this much error reduction to apply
const VOL_BOUNDS = [0.7, 1.8];
const DAMP_BOUNDS = [0.2, 0.95];

function gridRange(a, b, step) {
  const out = [];
  for (let v = a; v <= b + 1e-9; v += step) out.push(Math.round(v * 100) / 100);
  return out;
}

// ---------- load engine + coins ----------
function loadForecast() {
  const mod = require(FORECAST_JS);
  const F = mod && mod.backtestCalibration ? mod : mod && mod.Forecast ? mod.Forecast : null;
  if (!F || typeof F.backtestCalibration !== "function" || !F.MODEL) {
    throw new Error("forecast.js must export Forecast with backtestCalibration + MODEL");
  }
  return F;
}
function loadCoins() {
  const src = fs.readFileSync(DATA_JS, "utf8");
  try {
    const sandbox = { window: null, module: { exports: {} } };
    sandbox.window = sandbox;
    sandbox.exports = sandbox.module.exports;
    sandbox.fetch = () => Promise.reject(new Error("no net"));
    sandbox.AbortController = typeof AbortController !== "undefined" ? AbortController : function () {};
    sandbox.setTimeout = setTimeout;
    sandbox.clearTimeout = clearTimeout;
    vm.createContext(sandbox);
    vm.runInContext(src, sandbox, { filename: DATA_JS });
    const cd = sandbox.CoinData || sandbox.module.exports;
    if (cd && Array.isArray(cd.COINS) && cd.COINS.length) return cd.COINS.map((c) => c.symbol);
  } catch (e) {
    /* fall through */
  }
  const out = [];
  const re = /symbol:\s*["']([A-Z0-9]+)["']/g;
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}

// ---------- data ----------
async function fetchJson(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { accept: "application/json" } });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}
function num(v, f) {
  const n = Number(v);
  return Number.isFinite(n) ? n : f;
}
async function fetchCandles(sym) {
  try {
    const d = await fetchJson("https://min-api.cryptocompare.com/data/v2/histoday?fsym=" + encodeURIComponent(sym) + "&tsym=USD&limit=" + HISTORY_LIMIT);
    if (d && d.Response === "Success" && d.Data && d.Data.Data) {
      const c = d.Data.Data.map((r) => ({ close: num(r.close, NaN), high: num(r.high, NaN), low: num(r.low, NaN), open: num(r.open, NaN), volume: num(r.volumeto, 0), time: num(r.time, 0) })).filter((x) => x.close > 0);
      if (c.length >= 60) return c;
    }
  } catch (e) {
    /* fall through */
  }
  try {
    const rows = await fetchJson("https://api.binance.com/api/v3/klines?symbol=" + encodeURIComponent(sym + "USDT") + "&interval=1d&limit=" + HISTORY_LIMIT);
    if (Array.isArray(rows)) {
      const c = rows.map((r) => ({ close: num(r[4], NaN), high: num(r[2], NaN), low: num(r[3], NaN), open: num(r[1], NaN), volume: num(r[7], 0), time: Math.floor(num(r[0], 0) / 1000) })).filter((x) => x.close > 0);
      if (c.length >= 60) return c;
    }
  } catch (e) {
    /* fall through */
  }
  return null;
}

// ---------- scoring ----------
function aggError(F, seriesList) {
  // window-weighted calibration error across all coins × horizons
  let wTot = 0;
  let errAcc = 0;
  const covAcc = { 50: 0, 80: 0, 90: 0, pit: 0 };
  for (const candles of seriesList) {
    for (const h of HORIZONS) {
      let r;
      try {
        r = F.backtestCalibration(candles, { horizon: h });
      } catch (e) {
        continue;
      }
      if (!r || !r.ok) continue;
      const w = r.windows || 1;
      const err = Math.abs(r.cov50 - 50) + Math.abs(r.cov80 - 80) + Math.abs(r.cov90 - 90) + Math.abs(r.meanPit - 0.5) * 200;
      errAcc += err * w;
      covAcc[50] += r.cov50 * w;
      covAcc[80] += r.cov80 * w;
      covAcc[90] += r.cov90 * w;
      covAcc.pit += r.meanPit * w;
      wTot += w;
    }
  }
  if (!wTot) return null;
  return { error: errAcc / wTot, cov50: covAcc[50] / wTot, cov80: covAcc[80] / wTot, cov90: covAcc[90] / wTot, meanPit: covAcc.pit / wTot, windows: wTot };
}

function round(v, dp) {
  const f = Math.pow(10, dp == null ? 2 : dp);
  return Math.round(v * f) / f;
}

// ---------- apply ----------
function rewriteModelBlock(volPremium, driftDamp, tDof) {
  const src = fs.readFileSync(FORECAST_JS, "utf8");
  // Preserve longHorizonBoost from the existing MODEL block
  const lhbMatch = src.match(/longHorizonBoost:\s*([\d.]+)/);
  const lhb = lhbMatch ? lhbMatch[1] : "0";
  const block =
    "var MODEL = {\n" +
    "    volPremium: " + volPremium + ", // global multiplier on estimated daily sigma\n" +
    "    driftDamp: " + driftDamp + ", // fraction of raw drift carried forward\n" +
    "    tDof: " + tDof + ", // Student-t degrees of freedom (fat tails)\n" +
    "    longHorizonBoost: " + lhb + ", // horizon-dependent vol boost (0 at 7d, full at 30d)\n" +
    "  };";
  const re = /var MODEL = \{[\s\S]*?\};/;
  if (!re.test(src)) throw new Error("Could not find MODEL block in forecast.js");
  fs.writeFileSync(FORECAST_JS, src.replace(re, block));
}

function appendChangelog(line) {
  try {
    let md = fs.readFileSync(CHANGELOG, "utf8");
    const marker = "<!-- Daily calibration runs append below this line -->";
    if (md.indexOf(marker) >= 0) md = md.replace(marker, marker + "\n\n" + line);
    else md += "\n" + line + "\n";
    fs.writeFileSync(CHANGELOG, md);
  } catch (e) {
    /* changelog optional */
  }
}

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

// ---------- main ----------
async function main() {
  const F = loadForecast();
  const symbols = loadCoins();
  const current = { volPremium: F.MODEL.volPremium, driftDamp: F.MODEL.driftDamp, tDof: F.MODEL.tDof };
  console.log("Auto-tuner · current MODEL " + JSON.stringify(current) + " · " + symbols.length + " coins · " + (APPLY ? "APPLY" : "dry run"));

  const fetched = await Promise.all(symbols.map((s) => fetchCandles(s)));
  const seriesList = fetched.filter(Boolean);
  if (!seriesList.length) {
    console.error("FATAL: no candles fetched.");
    process.exit(1);
  }
  console.log("Fetched " + seriesList.length + "/" + symbols.length + " coins. Searching " + VOL_GRID.length + "×" + DAMP_GRID.length + " grid…");

  // Baseline (current config).
  F.MODEL.volPremium = current.volPremium;
  F.MODEL.driftDamp = current.driftDamp;
  const baseline = aggError(F, seriesList);

  // Grid search.
  let best = { volPremium: current.volPremium, driftDamp: current.driftDamp, agg: baseline };
  for (const vp of VOL_GRID) {
    for (const dd of DAMP_GRID) {
      F.MODEL.volPremium = vp;
      F.MODEL.driftDamp = dd;
      const agg = aggError(F, seriesList);
      if (agg && agg.error < best.agg.error) best = { volPremium: vp, driftDamp: dd, agg: agg };
    }
  }
  // restore current in-memory
  F.MODEL.volPremium = current.volPremium;
  F.MODEL.driftDamp = current.driftDamp;

  const improvement = baseline.error - best.agg.error;
  console.log("\nBaseline error " + round(baseline.error) + " (cov80=" + round(baseline.cov80, 1) + " pit=" + round(baseline.meanPit, 3) + ")");
  console.log("Best     error " + round(best.agg.error) + " (cov80=" + round(best.agg.cov80, 1) + " pit=" + round(best.agg.meanPit, 3) + ")  @ volPremium=" + best.volPremium + " driftDamp=" + best.driftDamp);
  console.log("Improvement: " + round(improvement) + " points");

  const date = isoDate(new Date());
  const tuningReport = {
    date,
    current,
    baselineError: round(baseline.error),
    best: { volPremium: best.volPremium, driftDamp: best.driftDamp, error: round(best.agg.error), cov80: round(best.agg.cov80, 1), meanPit: round(best.agg.meanPit, 3) },
    improvement: round(improvement),
    applied: false,
    coinsUsed: seriesList.length,
  };

  const changed = best.volPremium !== current.volPremium || best.driftDamp !== current.driftDamp;
  const vpOk = best.volPremium >= VOL_BOUNDS[0] && best.volPremium <= VOL_BOUNDS[1];
  const ddOk = best.driftDamp >= DAMP_BOUNDS[0] && best.driftDamp <= DAMP_BOUNDS[1];

  if (APPLY && changed && improvement >= MIN_IMPROVE && vpOk && ddOk) {
    rewriteModelBlock(best.volPremium, best.driftDamp, current.tDof);
    const line =
      "- " + date + " auto-tune: volPremium " + current.volPremium + "→" + best.volPremium +
      ", driftDamp " + current.driftDamp + "→" + best.driftDamp +
      " (calibration error " + round(baseline.error) + "→" + round(best.agg.error) + ", cov80→" + round(best.agg.cov80, 1) + "%)";
    appendChangelog(line);
    tuningReport.applied = true;
    console.log("\nAPPLIED → forecast.js MODEL updated. " + line);
  } else if (APPLY) {
    console.log("\nNo change applied (" + (!changed ? "already optimal" : improvement < MIN_IMPROVE ? "improvement below " + MIN_IMPROVE + " margin" : "out of bounds") + ").");
  } else {
    console.log("\nDry run — re-run with --apply to write the change.");
  }

  try {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
    fs.writeFileSync(path.join(REPORTS_DIR, "tuning-" + date + ".json"), JSON.stringify(tuningReport, null, 2));
    fs.writeFileSync(path.join(REPORTS_DIR, "tuning-latest.json"), JSON.stringify(tuningReport, null, 2));
  } catch (e) {
    /* non-fatal */
  }
}

main().catch((err) => {
  console.error("FATAL: " + (err && err.stack ? err.stack : String(err)));
  process.exit(1);
});
