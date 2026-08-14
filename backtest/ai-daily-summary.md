# AI daily summary — 2026-08-14

**Calibration (shipped-engine row, as reported today):** cov80 **79.3 / 79.0 / 76.9**
(7d / 14d / 30d, target 80), meanPIT 0.545 / 0.552 / 0.582. With overlap-corrected
`nEff` = 148 / 71 / 29.4 (se80 = 3.3 / 4.8 / 7.4), the deviations are 0.21 / 0.21 / 0.42 SE
— within tolerance everywhere. Tournament says **KEEP → `live_engine`** (momentum leads by
1.5 points, inside the 3-point margin; declined for the 8th time — it still collapses at 30d,
cov80 65 vs 76.9, and 30d already routes to `block_boot`).

**Changed:** one line in `backtest/run-backtest.js` (`calibrateEntry`, baseline branch) —
removed the hard-coded `driftDamp: 0.55` so the "Shipped engine" row is scored with
`MODEL.driftDamp` (0.25 today). That literal dates to the fork's first commit and never
matched the shipped value (0.4 back then), so the tournament and the auto-tuner have been
grading two different configurations of the same engine for 70 days: today the tuner reports
cov80 80.8 / meanPit 0.515 while the tournament's window-weighted baseline reports 78.47 /
0.5586, on the same coins, horizons and 200-day windows. It also explains why the tuner's
`driftDamp 0.4 → 0.3` move showed no effect in today's report — the row was pinned at 0.55.
**Expect tomorrow's baseline numbers to step** (lower meanPIT, higher cov80); that is the
honest value, not an improvement. `forecast.js` untouched apart from the tuner's own line.

**Next run (quantified offline today, top candidate):** `forecast.js` applies the Itô/κ
correction to a drift that is already in log space (`muDaily = mean(logReturns)`), pushing the
cone's median down ≈`0.5σ²H` (−3.7% at 30d). On 40 seeded **driftless** random walks (true
meanPIT = 0.500) the shipped form reports 0.518 / 0.526 / 0.545 while dropping the term
reports 0.504 / 0.503 / 0.504, with cov50/80/90 moving ≤1pp. Held back one day on purpose:
the metric that would judge a model change was itself mis-specified until this fix.

**Verified:** `node backtest/selftest.js` 3/3 (martingale 0.976) exit 0, `node -e
"require('./forecast.js')"` exit 0, `node --check backtest/run-backtest.js` exit 0.
