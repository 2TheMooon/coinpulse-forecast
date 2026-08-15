# AI daily summary — 2026-08-15

**Calibration (shipped-engine row, first report measured on the real engine):** cov80
**81.3 / 82.7 / 80.4** (7d / 14d / 30d, target 80), meanPIT **0.499 / 0.513 / 0.526**.
Yesterday's un-pinning of the tournament baseline moved the row exactly as predicted
(was 79.3/79.0/76.9 and 0.545/0.552/0.582). Tournament says **KEEP → `live_engine`**;
declined `switch → momentum` for the 9th time (leads by 0.7, inside the 3-point margin,
and collapses at 30d — cov80 67 vs 80.4 — where routing already uses `block_boot`).

**Changed:** removed the spurious Itô `0.5σ²` correction in `forecast.js` at all three
sites (`simulate`, `analyticTerminal`, `backtestCalibration`). `muDaily = mean(logReturns)`
is already a log drift, so subtracting `0.5σ²` double-corrected it and pushed the cone's
median down ≈1.8% at 30d for no modelled reason. `simulate` now sets `drift = muLog` and
`mu = muLog + kappa`, so `mu` still means "E[S_T] = s0·exp(mu·H)" and selftest #2 keeps
genuinely testing kappa (martingale ratio unchanged at 0.976).

**Why it survived the corrected metric — and why the original case did not.** The
pre-registered justification (PIT biased +0.056/+0.083/+0.113) was mostly the stale-baseline
artifact; the real bias is +0.001/+0.013/+0.026, only 0.04/0.38/0.49 SE, so *not* grounds
for a model change on its own. It ships as a correctness fix that is measurably not harmful.
Measured offline, no network: σ inverted from the report's own `sharpness` column
(`w = 2·sinh(1.2816σ√H)`) gives 0.0315/0.0317/0.0306 — consistent across three horizons;
a probe whose loop was byte-verified against the shipped function then put the PIT shift at
−0.0104/−0.0161/−0.0284, **invariant to true drift** (<0.0006 as μ sweeps −0.003→+0.0015),
with cov80 moving ≤2.1pp and toward 80 where it moves most. Predicted meanPIT
**0.489 / 0.497 / 0.498**; PIT penalty 8.0 → 3.3. Decisive point: the shift is
`E[φ(z)]·0.5·σ√H` and `E[φ(z)] ≤ φ(0) = 0.3989`, so even the worst attainable case scores
7.4 — the fix cannot make calibration worse. Caveats: 7d degrades slightly (|bias|
0.001 → 0.011, it sat on 0.500 today), and this is n=1 corrected report.

**Falsification test for tomorrow:** `strategies.js` keeps the same double-correction on
purpose, so the challengers are an unchanged control group. If `live_engine`'s meanPIT does
not land near 0.489/0.497/0.498 while `gbm_normal` / `ewma_t_zero` hold still, revert this
commit rather than defend it.

**Verified:** `node backtest/selftest.js` 3/3 (martingale 0.976) exit 0, `node -e
"require('./forecast.js')"` exit 0, `node --check app.js` exit 0. Probe deleted; public API,
`MODEL`, candle shape and `strategies.js` exports intact.
