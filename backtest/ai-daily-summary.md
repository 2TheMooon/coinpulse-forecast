# AI Daily Summary — 2026-07-10

**Verdict:** Calibration within tolerance at the two longer horizons; 7d mildly light. **No model change** (conservative no-op).

## Shipped-engine calibration (2026-07-10)
| Horizon | cov80 (target 80) | meanPIT (~0.50) | score |
|---|---|---|---|
| 7d  | 76.6 (−3.4) | 0.541 | 21.0 |
| 14d | 80.9 (on target) | 0.553 | 23.7 |
| 30d | 79.9 (on target) | 0.571 | 35.8 |

Tournament: **KEEP `live_engine`** (#1 overall, mean score 26.9; Momentum #2 at 27.0). Auto-tuner ran and applied **no change** (volPremium 0.85, driftDamp 0.4, improvement 0, its aggregate best cov80 79.9). Routing: 7d→momentum, mid→momentum, long→gbm_normal.

## Why no change
- **Only 7d is off (76.6, ~3.4pp light); 14d/30d are on target** (80.9 / 79.9, both within ~0.9pp of 80). The single global width lever is `volPremium`, which is auto-tuner-owned; the tuner ran today with an on-target aggregate (cov80 79.9) and held it. Raising it globally to lift 7d would push the two on-target horizons over 80.
- **No safe horizon-targeted short-end lever exists.** `longHorizonBoost` (0.30) widens the *long* end and is exactly 1.0 at 7d. With the linear `horizonFactor = 1 + boost·(H−7)/23`, holding both 14d and 30d multipliers fixed mathematically pins volPremium=0.85 — i.e. there is no free parameter to add 7d width without disturbing the on-target horizons. Introducing a new short-end knob is a structural change with overfitting risk against a single offline snapshot.
- **The 7d shortfall is a coin-mix effect, not a global bug.** Majors are on/over target at 7d (BTC 81, ETH 82, XRP 81, LINK 81, BNB 81, AVAX 86); the deficit lives in idiosyncratic alts (ARB 59, OP 68, INJ 72, SOL 74, APT 74). Special-casing coins risks overfitting (repeatedly judged so).
- **7d is recent/window-driven.** cov80 has oscillated 75.7–80.4 day to day over the past week (07-05 80.4, 07-06 75.7, 07-07 76.8, 07-09 77.6, 07-10 76.6) — a soft patch in the recent cohort, not a stable structural deviation.
- **meanPIT 0.541/0.553/0.571:** the 30d=0.571 edge-of-band upward bias is the long-standing driftDamp effect (auto-tuner-owned at 0.4), systemic across strategies at 30d and concentrated in INJ (0.62/0.66/0.72) and TIA (0.56/0.60/0.65) — not AI-actionable without overfitting.

## Verification
- `node backtest/selftest.js` → **OK** (martingale ratio 0.976, calibration 3/3), exit 0
- `node -e "require('./forecast.js')"` → **OK**, exit 0
