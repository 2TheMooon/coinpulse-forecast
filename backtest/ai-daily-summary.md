# AI Daily Summary — 2026-08-13

**Verdict:** Well calibrated — coverage is within **0.3 SE of 80% at every horizon**, and
yesterday's un-jamming of the auto-tuner produced its first real decision in 38 days:
`driftDamp` **0.4 → 0.3**. **No AI change today.** The right move after firing a lever is
to measure it, not to pull the next one.

## Shipped-engine calibration (2026-08-13 · 3rd clean 200-day day · binance ×14)
Today's tournament ran *before* the tuner, so these numbers still reflect `damp 0.4`.

| Horizon | cov80 (target 80) | dev / se80 | meanPIT (~0.50) | zero-drift PIT | drift spread | score |
|---|---|---|---|---|---|---|
| 7d  | 80.9 (+0.9) | +0.27 SE (se 3.3) | 0.530 | 0.485 | +0.045 | 19.3 |
| 14d | 80.6 (+0.6) | +0.13 SE (se 4.8) | 0.553 | 0.473 | +0.080 | 23.3 |
| 30d | 78.0 (−2.0) | −0.27 SE (se 7.4) | 0.580 | 0.472 | +0.108 | 39.9 |

`se80` uses the engine's own overlap correction (`nEff = windows/horizon` = 148 / 71 /
29.4). The 30d shortfall that *looks* like a defect is a quarter of one standard error.

Tournament: **KEEP → `live_engine`**. Routing: 7d/14d → momentum, 30d → garch.

## What changed (deterministic layer, not me)
Auto-tuner: baseline error **25.21 → 24.62**, improvement **0.59** (clears the 0.5
margin) → `driftDamp` **0.4 → 0.3**, `volPremium` unchanged at 0.85. Best-point cov80
81.1%, meanPit **0.518** (0.532 yesterday). This is the **first non-zero improvement since
2026-07-06** — an 18-run / 38-day streak of `improvement 0` is over.

Two details confirm the 08-12 diagnosis rather than just its outcome:
- it picked **0.3, not the new floor 0.2** → the damp axis is now searching an *interior*
  optimum, so the grid really was the binding constraint, not the model;
- it moved `volPremium` **not at all** → the gain is attributable to the drift term alone.

## Why no second change — both pre-registered gates still fail
The queued lever is `VOL_GRID = gridRange(0.85, 1.45)` vs `VOL_BOUNDS = [0.7, 1.8]` — the
same cover-your-own-bounds bug on the vol axis. The 08-12 entry gated it on two conditions:
1. **"No measured cov80 miscalibration"** — still true, now quantified at ≤0.3 SE everywhere.
2. **"Revisit once the damp axis settles"** — it moved *today*, with **zero** tournament
   observations. Tomorrow's report is the first measurement of `damp 0.3`.

The interaction is real, not hypothetical: the tuner weights PIT **200×**, `volPremium`
touches PIT only via the −0.5σ²H median term, and `driftDamp` has just moved the PIT level
the vol axis would optimise against. Searching it now searches a stale target.

The evidence is also much weaker than the damp case. Damp pinned at its floor **37/37**
runs with a 66-run control measurement behind it; `volPremium` chose 0.85 in 19 of 20 runs
but broke **upward** to 0.9 on 07-15 — a floor that is escapable upward says the optimum is
near 0.85, not far below. And the risk is asymmetric: lowering `volPremium` narrows the
cone, and "too narrow (overconfident)" is the user-harmful direction.

## Momentum declined a 7th time — stated against my own position
Momentum has edged the live engine **four clean-regime days running** (−0.6, −3.5, −0.8,
−2.1) after averaging **+4.27 points worse** across all 66 reports (sd 5.03). That is a
real streak. But its whole edge is 7d/14d PIT — exactly the bias `damp 0.3` attacks — and
it still collapses at 30d (cov80 **67.2**, cov90 78.0 vs live's 78.0 / 86.7). All five
prior `switch` flags mean-reverted within a day. If the gap survives the `damp 0.3`
measurement, that is a finding; adopting it today would be adopting noise.

## Verification
- `node backtest/selftest.js` → **OK** (martingale 0.976, calibration 3/3), exit 0
- `node -e "require('./forecast.js')"` → **OK**, exit 0
- `MODEL` now (volPremium 0.85, driftDamp 0.3, tDof 5, longHorizonBoost 0.30) —
  `longHorizonBoost` correctly preserved by `rewriteModelBlock`; public API + candle shape intact.
- No source file edited by me: `forecast.js` differs from `HEAD` only by the tuner's own
  `driftDamp` line; `app.js`, `data.js`, `index.html`, `styles.css`, `strategies.js`,
  `run-backtest.js`, `auto-tune.js`, `selftest.js` unmodified.

## Pre-registered for the next run, in order
1. After the `damp 0.3` measurement lands, re-check whether the residual PIT spread wants
   0.25 / 0.2 — let the tuner decide; no code needed.
2. **Only once PIT is inside ±0.03 of 0.50**, extend `VOL_GRID` to cover `VOL_BOUNDS` at
   *both* ends (0.70…1.80) — the upper edge 1.45 falls short of 1.80 as well.
3. `backtestCalibration` scores a lognormal PIT while `simulate()` draws capped Student-t
   shocks — defensible at 30d by CLT, weakest at 7d. Worth quantifying before changing.
