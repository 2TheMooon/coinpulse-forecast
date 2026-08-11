# AI Daily Summary — 2026-08-11

**Verdict:** No new model change. The run recovered yesterday's `capHistory` harness fix,
which had been silently lost in a stuck rebase, and realigned the repo. Coverage on the
now-honest 200-day window is on target at 7d/14d and −2.1 at 30d; the `switch → momentum`
recommendation was declined for the fifth time.

## Shipped-engine calibration (2026-08-11 · first clean 200-day regime)
| Horizon | cov80 (target 80) | meanPIT (~0.50) | zero-drift PIT | drift spread | score |
|---|---|---|---|---|---|
| 7d  | 80.4 (+0.4) | 0.537 | 0.497 | +0.040 | 19.7 |
| 14d | 80.6 (+0.6) | 0.556 | 0.473 | +0.083 | 24.0 |
| 30d | 77.9 (−2.1) | 0.585 | 0.473 | +0.112 | 40.6 |

Auto-tuner: baseline error 25.26, best 25.26, improvement 0 — kept `volPremium 0.85,
driftDamp 0.4, tDof 5`.

## What was wrong, and what I did
- The tree arrived **mid-interactive-rebase** (step 1 of 2) onto `origin/master` @ `3e51d37`,
  halted on add/add conflicts in `backtest/reports/2026-08-09.json`/`.md` — 120
  conflict-marker lines, i.e. committed report data that was invalid JSON.
- The **unapplied** second pick `b3ff1d6` held yesterday's 13-line `capHistory` fix, so that
  fix was missing from `HEAD` and from the working tree. Restoring it is today's one change.
- Root cause of the loop (4th time: 07-31, 08-09, 08-10, today): cloud and local both commit
  `backtest/reports/<date>.*`; one failed push → divergence → `git pull --rebase` halts on
  add/add → next push fails → repeat.
- Repair: stranded work preserved on branch `ai-stranded-2026-08-11`; rebase aborted; `master`
  realigned to `origin/master`; harness fix, 7 local-only `tuning-*.json` records and the
  08-09/08-10 changelog entries restored; origin's published 08-09/08-10 reports **kept, not
  overwritten**. All 103 report JSONs parse; no conflict markers anywhere.

## Why the fix's premise is now confirmed outright
Every committed report 07-23 → 08-10 is `coinbase ×14` with **275–350 candles** while
declaring `config.historyDays: 200`; today's is `binance ×14` with exactly **200**. The
tournament really was scoring a different window depth than `auto-tune.js`.

This also reframes (without contradicting) the 08-09 verdict. The engine's drift spread over
the zero-drift control is **+0.112 today and +0.111 on 08-10** — the same 0.082–0.122 it has
always shown. Under the ~350-day window the sample's uplift dragged the control to 0.39–0.40
and absorbed that +0.11, landing live near 0.50. The honest 200-day window puts the control at
0.473, so the ≈**+0.085 30d PIT bias is real and now visible**, not a market artifact.

## Why no model change
- **Momentum declined again.** Its 3.3-point lead is entirely 7d/14d PIT; at 30d it collapses
  (cov80 68.1 today, 66.4 on 08-10, vs live's 77.9/76.8), and 30d already routes to
  `block_boot`. Across 24 scored runs live beats momentum by a mean 4.9 points — today's +3.3
  is a ~1.9σ excursion the wrong way. All five prior switch flags mean-reverted within a day.
- **Two clean days are ≈one observation.** 08-10 and 08-11 share ~199/200 of their window set.
- **The drift lever isn't mine, and it is currently jammed.** `auto-tune.js` searches
  `DAMP_GRID = [0.4, 0.55, 0.7]` while `DAMP_BOUNDS` permits `[0.2, 0.95]`; `driftDamp` has sat
  at the grid's **lowest** value for weeks, so the tuner structurally cannot reach the smaller
  drift the 30d PIT now calls for. **Next run's top candidate:** extend the grid downward
  (0.25/0.30) — after ≥3 independent clean-regime days.

## Verification
- `node backtest/selftest.js` → **OK** (martingale 0.976, calibration 3/3), exit 0
- `node -e "require('./forecast.js')"` → **OK**, exit 0
- `node --check` on `run-backtest.js` and `auto-tune.js` → exit 0
- `capHistory` unit test from shipped source: 350→200 (most-recent slice), 291→200, 200→200,
  150→150, 0→0, null/undefined pass-through
- `forecast.js`, `app.js`, `data.js`, `index.html`, `styles.css`, `strategies.js` byte-identical
  to `origin/master`; `MODEL` unchanged (volPremium 0.85, driftDamp 0.4, tDof 5,
  longHorizonBoost 0.3); `analyze` / `backtestCalibration` / `MODEL` all present
