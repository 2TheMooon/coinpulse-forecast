# AI Daily Summary — 2026-08-12

**Verdict:** Coverage is on target at 7d/14d and −2.6 at 30d; the standing defect is the
**+0.098 30d PIT bias contributed by the drift term**. Today's one change un-jams the
lever that fixes it: `auto-tune.js`'s `DAMP_GRID` did not cover its own `DAMP_BOUNDS`,
so the tuner has been pinned at the grid corner — a structural no-op — for 37 days.

## Shipped-engine calibration (2026-08-12 · 2nd clean 200-day day · binance ×14)
| Horizon | cov80 (target 80) | meanPIT (~0.50) | zero-drift PIT | drift spread | score |
|---|---|---|---|---|---|
| 7d  | 80.3 (+0.3) | 0.539 | 0.485 | +0.054 | 20.1 |
| 14d | 79.7 (−0.3) | 0.544 | 0.469 | +0.075 | 21.9 |
| 30d | 77.4 (−2.6) | 0.573 | 0.475 | +0.098 | 38.1 |

Auto-tuner: baseline error 24.85, best 24.85, improvement 0 — kept `volPremium 0.85,
driftDamp 0.4, tDof 5`. Tournament: **KEEP → `live_engine`** (momentum leads by 0.2,
inside the 3-pt margin). Routing: 7d/14d → momentum, 30d → block_boot.

## The change (one line + comment, `backtest/auto-tune.js`)
`DAMP_GRID [0.4, 0.55, 0.7]` → `[0.2, 0.25, 0.3, 0.4, 0.55, 0.7]`. `DAMP_BOUNDS`,
`MIN_IMPROVE`, `VOL_GRID` and `forecast.js` are all untouched — this hands a decision to
the deterministic tuner rather than making one.

## Why — two facts, both independent of the clean-window count
- **The tuner is jammed, not converged.** Every `tuning-*.json` since **2026-07-06** (17
  runs / 37 days) reports `improvement 0` with `best == current == (0.85, 0.4)` — the
  search terminates at the exact lower-left **corner** of its grid every time. Over that
  same stretch `meanPit` wandered 0.523 → 0.569 → 0.532 and error 22.9 → 29.4 → 24.9.
- **The drift term is what biases PIT.** Live meanPIT minus the `ewma_t_zero` control
  isolates drift from the window set. Across **all 66 reports (06-06 → today)** that
  spread is positive in **66/66** runs at 30d (0.053–0.122, mean ≈ 0.090), 66/66 at 14d,
  65/66 at 7d — surviving the coinbase→binance switch, the 07-24 term-structure fix and
  the 08-10 `capHistory` fix. Two regimes, one invariant.

## Why it cannot overshoot
Interpolating between `damp 0.4` (30d PIT 0.573) and `damp 0` (control 0.475) puts the
PIT-neutral damp at ≈**0.10** — *below* `DAMP_BOUNDS[0]`. So the new floor of 0.2 is a
guard rail, not a risk: worst case is 30d PIT ≈0.524 instead of 0.573, better at every
horizon, with 20% of the drift still carried (no collapse to the zero-drift strategy).

## Verification
- `node backtest/selftest.js` → **OK** (martingale 0.976, calibration 3/3), exit 0
- `node -e "require('./forecast.js')"` → **OK**, exit 0
- `node --check` on `auto-tune.js` and `run-backtest.js` → exit 0
- **Not a one-way ratchet:** re-ran the tuner's own `aggError` loop offline over all six
  damp values on 14 synthetic GBM series (200 candles, seeded) where the fitted drift is
  real — `0.4` still wins (err 39.00), `0.2` is *worse* (40.17). The tuner will descend
  only when live data supports it.
- Cost: grid 13×3 → 13×6, measured 18 ms/point → ~1.4 s (from ~0.7 s). Negligible.

## Noted, deliberately not done
`VOL_GRID` starts at 0.85 while `VOL_BOUNDS` permits 0.7 — `volPremium` is pinned at that
edge too, the same bug on the other axis. But cov80 is on target (80.3 aggregate), so
there is no measured miscalibration to justify moving two levers at once. Revisit once the
damp axis settles. Momentum declined a 6th time (30d cov80 66.3 vs live's 77.4).
