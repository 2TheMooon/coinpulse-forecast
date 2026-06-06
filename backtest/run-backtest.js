#!/usr/bin/env node
/*
 * CoinPulse — Daily Strategy Tournament + Calibration Harness (Node 18+, no deps)
 * ==============================================================================
 * The engine of the "try many strategies until one is consistently best" loop.
 *
 * It:
 *   1. reads the tracked coin universe out of data.js (single source of truth),
 *   2. fetches ~200 daily candles per coin (CryptoCompare primary, Binance
 *      fallback), normalising both to {time,open,high,low,close,volume},
 *   3. runs a TOURNAMENT of forecasting strategies (backtest/strategies.js) plus
 *      the currently-shipped engine (forecast.js) as a baseline competitor,
 *      scoring each by walk-forward calibration across horizons [7,14,30],
 *   4. ranks strategies per horizon and overall, and emits a machine-readable
 *      recommendation (which strategy to ship) that the daily auto-improve
 *      routine acts on,
 *   5. writes dated JSON + Markdown to backtest/reports/ and latest.{json,md}.
 *
 * Exit code is nonzero ONLY on total failure (no coin produced any usable
 * calibration window). Partial failures are tolerated and reported.
 *
 * Usage:  node backtest/run-backtest.js
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { STRATEGIES, calibrate } = require("./strategies.js");

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
const ROOT = path.resolve(__dirname, "..");
const DATA_JS = path.join(ROOT, "data.js");
const FORECAST_JS = path.join(ROOT, "forecast.js");
const REPORTS_DIR = path.join(__dirname, "reports");

const HISTORY_LIMIT = 200;
const HORIZONS = [7, 14, 30];
const SAMPLES = 300; // MC terminal samples per calibration window
const MAX_WINDOWS = 45;
const REQUEST_TIMEOUT_MS = 12000;
const PER_REQUEST_GAP_MS = 120;

// What "well calibrated" means.
const TARGETS = { cov50: 50, cov80: 80, cov90: 90 };
// A challenger must beat the shipped engine's score by at least this margin
// (lower score = better) before we recommend switching.
const SWITCH_MARGIN = 3;

// ---------------------------------------------------------------------------
// Load the shipped forecast engine (baseline competitor). Works whether or not
// forecast.js exports a module; falls back to evaluating the browser IIFE in a
// sandbox. Returns null if it cannot be loaded (tournament still runs).
// ---------------------------------------------------------------------------
function loadForecast() {
  try {
    const mod = require(FORECAST_JS);
    if (mod && typeof mod.backtestCalibration === "function") return mod;
    if (mod && mod.Forecast && typeof mod.Forecast.backtestCalibration === "function") return mod.Forecast;
  } catch (err) {
    /* fall through */
  }
  try {
    const src = fs.readFileSync(FORECAST_JS, "utf8");
    const sandbox = {};
    sandbox.window = sandbox;
    sandbox.module = { exports: {} };
    sandbox.exports = sandbox.module.exports;
    vm.createContext(sandbox);
    vm.runInContext(src, sandbox, { filename: FORECAST_JS });
    const F = sandbox.Forecast || (sandbox.module.exports && sandbox.module.exports.backtestCalibration ? sandbox.module.exports : null);
    if (F && typeof F.backtestCalibration === "function") return F;
  } catch (err) {
    /* give up */
  }
  return null;
}

// ---------------------------------------------------------------------------
// Read the tracked coin list out of data.js (one source of truth).
// ---------------------------------------------------------------------------
function loadCoins() {
  const src = fs.readFileSync(DATA_JS, "utf8");
  try {
    const sandbox = {};
    sandbox.window = sandbox;
    sandbox.module = { exports: {} };
    sandbox.exports = sandbox.module.exports;
    sandbox.fetch = function () {
      return Promise.reject(new Error("no network during coin-list load"));
    };
    sandbox.AbortController = typeof AbortController !== "undefined" ? AbortController : function () {};
    sandbox.setTimeout = setTimeout;
    sandbox.clearTimeout = clearTimeout;
    vm.createContext(sandbox);
    vm.runInContext(src, sandbox, { filename: DATA_JS });
    const cd = sandbox.CoinData || sandbox.module.exports;
    if (cd && Array.isArray(cd.COINS) && cd.COINS.length) {
      return cd.COINS.map((c) => ({ symbol: c.symbol, name: c.name || c.symbol }));
    }
  } catch (err) {
    /* fall through to regex */
  }
  const coins = [];
  const re = /symbol:\s*["']([A-Z0-9]+)["']\s*,\s*name:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) coins.push({ symbol: m[1], name: m[2] });
  if (!coins.length) throw new Error("Could not extract COINS from data.js");
  return coins;
}

// ---------------------------------------------------------------------------
// Networking — fetch + normalise daily candles.
// ---------------------------------------------------------------------------
async function fetchJson(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal, headers: { accept: "application/json" } });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}
function num(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}
function normalizeCryptoCompare(payload) {
  if (!payload || payload.Response !== "Success" || !payload.Data || !payload.Data.Data) return null;
  const rows = payload.Data.Data;
  const out = [];
  for (let i = 0; i < rows.length; i += 1) {
    const r = rows[i];
    const close = num(r.close, NaN);
    if (!Number.isFinite(close) || close <= 0) continue;
    out.push({ time: num(r.time, 0), open: num(r.open, close), high: num(r.high, close), low: num(r.low, close), close: close, volume: num(r.volumeto, 0) });
  }
  return out.length >= 60 ? out : null;
}
function normalizeBinance(rows) {
  if (!Array.isArray(rows)) return null;
  const out = [];
  for (let i = 0; i < rows.length; i += 1) {
    const r = rows[i];
    const close = num(r[4], NaN);
    if (!Number.isFinite(close) || close <= 0) continue;
    out.push({ time: Math.floor(num(r[0], 0) / 1000), open: num(r[1], close), high: num(r[2], close), low: num(r[3], close), close: close, volume: num(r[7], num(r[5], 0)) });
  }
  return out.length >= 60 ? out : null;
}
async function fetchCandles(symbol) {
  const ccUrl = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=" + encodeURIComponent(symbol) + "&tsym=USD&limit=" + HISTORY_LIMIT;
  try {
    const candles = normalizeCryptoCompare(await fetchJson(ccUrl));
    if (candles) return { candles, source: "cryptocompare" };
  } catch (err) {
    /* fall through */
  }
  const bnUrl = "https://api.binance.com/api/v3/klines?symbol=" + encodeURIComponent(symbol + "USDT") + "&interval=1d&limit=" + HISTORY_LIMIT;
  try {
    const candles = normalizeBinance(await fetchJson(bnUrl));
    if (candles) return { candles, source: "binance" };
  } catch (err) {
    /* both failed */
  }
  return { candles: null, source: null };
}

// ---------------------------------------------------------------------------
// Scoring + aggregation
// ---------------------------------------------------------------------------
function scoreFrom(cov50, cov80, cov90, meanPit) {
  return Math.abs(cov50 - 50) + Math.abs(cov80 - 80) + Math.abs(cov90 - 90) + Math.abs(meanPit - 0.5) * 200;
}
function mean(xs) {
  if (!xs.length) return NaN;
  let s = 0;
  for (let i = 0; i < xs.length; i += 1) s += xs[i];
  return s / xs.length;
}
function round(v, dp) {
  if (!Number.isFinite(v)) return null;
  const f = Math.pow(10, dp == null ? 1 : dp);
  return Math.round(v * f) / f;
}
function fmtPct(v) {
  return Number.isFinite(v) ? v.toFixed(0) + "%" : "—";
}
function fmtNum(v, dp) {
  return Number.isFinite(v) ? v.toFixed(dp == null ? 2 : dp) : "—";
}
function fmtDateUTC(d) {
  return d.getUTCFullYear() + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0");
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Window-weighted aggregate of per-coin calibration records for one entry/horizon.
function aggregate(records) {
  const ok = records.filter(Boolean);
  if (!ok.length) return null;
  let wTot = 0;
  let c50 = 0;
  let c80 = 0;
  let c90 = 0;
  let pit = 0;
  let dir = 0;
  let sc = 0;
  let shW = 0;
  let sh = 0;
  for (const r of ok) {
    const w = r.windows || 1;
    wTot += w;
    c50 += r.cov50 * w;
    c80 += r.cov80 * w;
    c90 += r.cov90 * w;
    pit += r.meanPit * w;
    dir += r.dirAccuracy * w;
    sc += r.score * w;
    if (Number.isFinite(r.sharpness)) {
      sh += r.sharpness * w;
      shW += w;
    }
  }
  return {
    coins: ok.length,
    windows: wTot,
    cov50: c50 / wTot,
    cov80: c80 / wTot,
    cov90: c90 / wTot,
    meanPit: pit / wTot,
    dirAccuracy: dir / wTot,
    sharpness: shW ? sh / shW : null,
    score: sc / wTot,
  };
}

// Calibrate one entry (strategy or shipped baseline) on one coin/horizon.
function calibrateEntry(entry, candles, closes, horizon, Forecast) {
  if (entry.baseline) {
    if (!Forecast) return null;
    let r;
    try {
      r = Forecast.backtestCalibration(candles, { horizon: horizon, driftDamp: 0.55, volScale: 1, fatTails: true });
    } catch (err) {
      return null;
    }
    if (!r || !r.ok) return null;
    return {
      cov50: r.cov50,
      cov80: r.cov80,
      cov90: r.cov90,
      meanPit: r.meanPit,
      dirAccuracy: r.dirAccuracy,
      windows: r.windows,
      sharpness: null,
      score: scoreFrom(r.cov50, r.cov80, r.cov90, r.meanPit),
    };
  }
  const r = calibrate(entry.strat, closes, horizon, { samples: SAMPLES, maxWindows: MAX_WINDOWS });
  if (!r) return null;
  return r; // already has cov*, meanPit, dirAccuracy, windows, sharpness, score
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const startedAt = Date.now();
  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  const Forecast = loadForecast();
  const coins = loadCoins();
  const entries = STRATEGIES.map((s) => ({ key: s.key, label: s.label, strat: s })).concat(
    Forecast ? [{ key: "live_engine", label: "Shipped engine (forecast.js)", baseline: true }] : []
  );

  console.log("CoinPulse strategy tournament · " + coins.length + " coins · " + entries.length + " strategies · horizons [" + HORIZONS.join(", ") + "]");
  console.log("Fetching ~" + HISTORY_LIMIT + " daily candles per coin…");

  // Fetch all coins (politely paced, resilient).
  const fetchTasks = coins.map(async (coin, idx) => {
    if (idx) await sleep(Math.min(PER_REQUEST_GAP_MS * idx, 1500));
    return { coin, res: await fetchCandles(coin.symbol) };
  });
  const settled = await Promise.allSettled(fetchTasks);

  const dataSummary = { total: coins.length, fetched: 0, cryptocompare: 0, binance: 0, failed: [] };
  const series = [];
  for (let i = 0; i < settled.length; i += 1) {
    const s = settled[i];
    if (s.status === "fulfilled" && s.value && s.value.res && s.value.res.candles) {
      const candles = s.value.res.candles;
      series.push({ symbol: s.value.coin.symbol, candles: candles, closes: candles.map((c) => c.close), source: s.value.res.source });
      dataSummary.fetched += 1;
      if (s.value.res.source === "cryptocompare") dataSummary.cryptocompare += 1;
      else dataSummary.binance += 1;
    } else {
      dataSummary.failed.push(coins[i].symbol);
    }
  }
  console.log("Fetched " + dataSummary.fetched + "/" + dataSummary.total + " (CC " + dataSummary.cryptocompare + ", Binance " + dataSummary.binance + ")" + (dataSummary.failed.length ? " · failed: " + dataSummary.failed.join(", ") : ""));

  if (!series.length) {
    console.error("TOTAL FAILURE: no candles could be fetched for any coin.");
    process.exitCode = 1;
    return;
  }

  // Run the tournament: entry × horizon × coin.
  console.log("Running tournament…");
  const perEntryHorizon = {}; // key -> horizon -> aggregate
  const perCoinBest = {}; // for the overall winner, per-coin detail
  let totalWindows = 0;

  for (const entry of entries) {
    perEntryHorizon[entry.key] = {};
    for (const h of HORIZONS) {
      const records = [];
      for (const s of series) {
        const rec = calibrateEntry(entry, s.candles, s.closes, h, Forecast);
        records.push(rec);
        if (rec) totalWindows += rec.windows || 0;
      }
      const agg = aggregate(records);
      if (agg) perEntryHorizon[entry.key][h] = agg;
    }
  }

  if (!totalWindows) {
    console.error("TOTAL FAILURE: no usable calibration window produced.");
    process.exitCode = 1;
    return;
  }

  // Rank per horizon (lower score = better) and overall.
  const ranking = {};
  for (const h of HORIZONS) {
    ranking[h] = entries
      .map((e) => ({ key: e.key, label: e.label, baseline: !!e.baseline, agg: perEntryHorizon[e.key][h] }))
      .filter((r) => r.agg)
      .sort((a, b) => a.agg.score - b.agg.score);
  }
  const overall = entries
    .map((e) => {
      const scores = HORIZONS.map((h) => perEntryHorizon[e.key][h] && perEntryHorizon[e.key][h].score).filter((v) => Number.isFinite(v));
      return { key: e.key, label: e.label, baseline: !!e.baseline, meanScore: scores.length ? mean(scores) : Infinity };
    })
    .sort((a, b) => a.meanScore - b.meanScore);

  // Recommendation: switch only if a challenger beats the shipped baseline by margin.
  const baselineOverall = overall.find((o) => o.key === "live_engine");
  const winner = overall[0];
  let recommendation;
  if (!baselineOverall) {
    recommendation = { action: "adopt", strategy: winner.key, reason: "No shipped baseline available; best strategy is " + winner.label + "." };
  } else if (winner.key === "live_engine") {
    recommendation = { action: "keep", strategy: "live_engine", reason: "Shipped engine is already the best-calibrated overall." };
  } else if (baselineOverall.meanScore - winner.meanScore >= SWITCH_MARGIN) {
    recommendation = {
      action: "switch",
      strategy: winner.key,
      reason: winner.label + " beats the shipped engine by " + (baselineOverall.meanScore - winner.meanScore).toFixed(1) + " score points (lower=better).",
      from: { key: "live_engine", meanScore: round(baselineOverall.meanScore, 1) },
      to: { key: winner.key, meanScore: round(winner.meanScore, 1) },
    };
  } else {
    recommendation = { action: "keep", strategy: "live_engine", reason: "Best challenger (" + winner.label + ") does not beat the shipped engine by the required " + SWITCH_MARGIN + "-point margin." };
  }

  // Per-coin detail for the overall winner (consistency check).
  for (const s of series) {
    perCoinBest[s.symbol] = {};
    const e = entries.find((x) => x.key === winner.key);
    for (const h of HORIZONS) {
      const rec = calibrateEntry(e, s.candles, s.closes, h, Forecast);
      if (rec) perCoinBest[s.symbol][h] = { cov80: round(rec.cov80, 0), meanPit: round(rec.meanPit, 2), dir: round(rec.dirAccuracy, 0), score: round(rec.score, 1) };
    }
  }

  const now = new Date();
  const dateStr = fmtDateUTC(now);
  const report = {
    date: dateStr,
    generatedAt: now.toISOString(),
    durationMs: Date.now() - startedAt,
    config: { horizons: HORIZONS, samples: SAMPLES, maxWindows: MAX_WINDOWS, historyDays: HISTORY_LIMIT, switchMargin: SWITCH_MARGIN },
    dataSummary: dataSummary,
    coins: series.map((s) => ({ symbol: s.symbol, source: s.source, candles: s.closes.length })),
    strategies: entries.map((e) => ({ key: e.key, label: e.label, baseline: !!e.baseline })),
    ranking: Object.fromEntries(HORIZONS.map((h) => [h, ranking[h].map((r) => ({ key: r.key, label: r.label, baseline: r.baseline, ...roundAgg(r.agg) }))])),
    overall: overall.map((o) => ({ key: o.key, label: o.label, baseline: o.baseline, meanScore: round(o.meanScore, 1) })),
    best: { overall: winner.key, byHorizon: Object.fromEntries(HORIZONS.map((h) => [h, ranking[h][0] ? ranking[h][0].key : null])) },
    recommendation: recommendation,
    winnerPerCoin: perCoinBest,
  };

  // Horizon-dependent routing: which model to trust per horizon bucket. The live
  // app / engine can read this to pick short→best@7d, mid→best@14d, long→best@30d.
  const routing = {
    generatedAt: report.generatedAt,
    short: { maxDays: 7, strategy: report.best.byHorizon[7] || report.best.overall },
    mid: { maxDays: 21, strategy: report.best.byHorizon[14] || report.best.overall },
    long: { maxDays: 9999, strategy: report.best.byHorizon[30] || report.best.overall },
  };
  report.routing = routing;
  fs.writeFileSync(path.join(REPORTS_DIR, "model-routing.json"), JSON.stringify(routing, null, 2));

  const jsonPath = path.join(REPORTS_DIR, dateStr + ".json");
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(REPORTS_DIR, "latest.json"), JSON.stringify(report, null, 2));
  const md = buildMarkdown(report);
  fs.writeFileSync(path.join(REPORTS_DIR, dateStr + ".md"), md);
  fs.writeFileSync(path.join(REPORTS_DIR, "latest.md"), md);

  // stdout summary
  console.log("\n=== Tournament results ===");
  for (const h of HORIZONS) {
    const top = ranking[h][0];
    if (top) console.log("  " + h + "d best: " + top.label.padEnd(26) + " cov80=" + fmtPct(top.agg.cov80) + " pit=" + fmtNum(top.agg.meanPit, 2) + " dir=" + fmtPct(top.agg.dirAccuracy) + " score=" + fmtNum(top.agg.score, 1));
  }
  console.log("  OVERALL best: " + winner.label + " (score " + round(winner.meanScore, 1) + ")");
  console.log("  RECOMMENDATION: " + recommendation.action.toUpperCase() + " → " + recommendation.strategy + " — " + recommendation.reason);
  console.log("  ROUTING: short(≤7d)→" + routing.short.strategy + " · mid(≤21d)→" + routing.mid.strategy + " · long→" + routing.long.strategy);
  console.log("\nReport: " + jsonPath);
  console.log("Done in " + (report.durationMs / 1000).toFixed(1) + "s");
}

function roundAgg(a) {
  return {
    coins: a.coins,
    windows: a.windows,
    cov50: round(a.cov50, 1),
    cov80: round(a.cov80, 1),
    cov90: round(a.cov90, 1),
    meanPit: round(a.meanPit, 3),
    dirAccuracy: round(a.dirAccuracy, 1),
    sharpness: round(a.sharpness, 3),
    score: round(a.score, 1),
  };
}

function buildMarkdown(report) {
  const L = [];
  L.push("# CoinPulse Strategy Tournament — " + report.date);
  L.push("");
  L.push("_Generated " + report.generatedAt + " · " + report.coins.length + " coins · " + report.config.samples + " samples/window · " + (report.durationMs / 1000).toFixed(1) + "s_");
  L.push("");
  const rec = report.recommendation;
  L.push("## 🏆 Recommendation: **" + rec.action.toUpperCase() + " → `" + rec.strategy + "`**");
  L.push("");
  L.push("> " + rec.reason);
  L.push("");
  L.push("Overall best: **" + report.best.overall + "** · by horizon: " + report.config.horizons.map((h) => h + "d→`" + report.best.byHorizon[h] + "`").join(" · "));
  L.push("");
  L.push("> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.");
  L.push("> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).");
  L.push("");

  L.push("## Overall ranking (mean score across horizons)");
  L.push("");
  L.push("| Rank | Strategy | mean score |");
  L.push("|---|---|---|");
  report.overall.forEach((o, i) => {
    L.push("| " + (i + 1) + " | " + o.label + (o.baseline ? " _(shipped)_" : "") + " | " + fmtNum(o.meanScore, 1) + " |");
  });
  L.push("");

  for (const h of report.config.horizons) {
    L.push("## " + h + "-day horizon");
    L.push("");
    L.push("| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |");
    L.push("|---|---|---|---|---|---|---|---|---|");
    (report.ranking[h] || []).forEach((r, i) => {
      L.push("| " + (i + 1) + " | " + r.label + (r.baseline ? " _(shipped)_" : "") + " | " + fmtNum(r.cov50, 0) + " | **" + fmtNum(r.cov80, 0) + "** | " + fmtNum(r.cov90, 0) + " | " + fmtNum(r.meanPit, 2) + " | " + fmtNum(r.dirAccuracy, 0) + " | " + (Number.isFinite(r.sharpness) ? (r.sharpness * 100).toFixed(0) + "%" : "—") + " | " + fmtNum(r.score, 1) + " |");
    });
    L.push("");
  }

  L.push("## Winner consistency — `" + report.best.overall + "` per coin (cov80 / PIT / dir / score)");
  L.push("");
  L.push("| Coin | " + report.config.horizons.map((h) => h + "d").join(" | ") + " |");
  L.push("|---|" + report.config.horizons.map(() => "---").join("|") + "|");
  for (const c of report.coins) {
    const cells = report.config.horizons.map((h) => {
      const d = report.winnerPerCoin[c.symbol] && report.winnerPerCoin[c.symbol][h];
      return d ? d.cov80 + "% / " + d.meanPit + " / " + d.dir + "% / " + d.score : "—";
    });
    L.push("| " + c.symbol + " | " + cells.join(" | ") + " |");
  }
  L.push("");
  L.push("Coins: " + report.coins.map((c) => c.symbol + " (" + c.source + ")").join(", "));
  if (report.dataSummary.failed.length) L.push("\n_Failed to fetch: " + report.dataSummary.failed.join(", ") + "_");
  L.push("");
  return L.join("\n");
}

main().catch((err) => {
  console.error("FATAL: " + (err && err.stack ? err.stack : String(err)));
  process.exitCode = 1;
});
