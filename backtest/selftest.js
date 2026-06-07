#!/usr/bin/env node
/*
 * Fast, network-free sanity test for the forecast engine. Used by the daily AI
 * maintainer to verify a change didn't break the math (no API calls, ~instant).
 * Exits 0 on pass, 1 on failure with a reason.
 */
"use strict";
const F = require("../forecast.js");

function fail(msg) {
  console.error("SELFTEST FAIL: " + msg);
  process.exit(1);
}

// deterministic synthetic GBM-ish series
function series(vol, n, seed) {
  let p = 100;
  let s = seed >>> 0;
  const c = [];
  const r = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = 0; i < n; i += 1) {
    const z = Math.sqrt(-2 * Math.log(r() || 1e-9)) * Math.cos(2 * Math.PI * r());
    p *= Math.exp(-0.5 * vol * vol + vol * z);
    c.push({ time: 1700000000 + i * 86400, open: p, high: p * 1.01, low: p * 0.99, close: p, volume: 1e6 });
  }
  return c;
}

if (typeof F.analyze !== "function" || typeof F.backtestCalibration !== "function") {
  fail("Forecast API missing (analyze/backtestCalibration).");
}

const c = series(0.05, 220, 7);

// 1) analyze produces finite, sane output
const a = F.analyze(c, { symbol: "TEST", horizon: 30, paths: 4000, fatTails: true });
if (!a || !a.sim || !a.sim.terminal) fail("analyze returned nothing usable.");
["p5", "p50", "p95", "mean"].forEach((k) => {
  if (!Number.isFinite(a.sim.terminal[k])) fail("terminal." + k + " not finite.");
});
if (!(a.sim.terminal.p5 <= a.sim.terminal.p50 && a.sim.terminal.p50 <= a.sim.terminal.p95))
  fail("terminal percentiles out of order.");
if (!Number.isFinite(a.score) || a.score < 0 || a.score > 100) fail("score out of range.");

// 2) martingale: E[S_T] ~ S0 * exp(mu*H) (kappa correction working)
const ratio = a.sim.terminal.mean / (a.sim.s0 * Math.exp(a.sim.mu * 30));
if (!(ratio > 0.9 && ratio < 1.1)) fail("martingale ratio off (" + ratio.toFixed(3) + ") — kappa bug?");

// 3) touch probabilities are valid percentages
const R = a.stats.levels.nearResistance;
const tp = a.sim.touchProbAbove(R);
if (!(tp >= 0 && tp <= 100)) fail("touchProbAbove out of [0,100].");

// 4) calibration on GBM data should be roughly calibrated
let ok = 0;
[7, 14, 30].forEach((h) => {
  const cal = F.backtestCalibration(c, { horizon: h, fatTails: true });
  if (cal && cal.ok && cal.cov80 >= 55 && cal.cov80 <= 98) ok += 1;
});
if (ok < 2) fail("calibration cov80 implausible on GBM data (only " + ok + "/3 horizons sane).");

console.log("SELFTEST OK — engine sane (martingale ratio " + ratio.toFixed(3) + ", calibration " + ok + "/3).");
process.exit(0);
