# AI Daily Summary — 2026-07-18

**Verdict:** Calibration sound (14d/30d on-target, 7d mildly light). Tournament flagged `switch → momentum` (gap 5.4), but a full-record audit shows this is a transient-drift artifact. **No model change** (conservative, evidence-backed no-op).

## Shipped-engine calibration (2026-07-18)
| Horizon | cov80 (target 80) | meanPIT (~0.50) | score |
|---|---|---|---|
| 7d  | 76.4 (−3.6) | 0.541 | 21.6 |
| 14d | 80.4 (on target) | 0.566 | 25.2 |
| 30d | 80.6 (on target) | 0.572 | 36.9 |

## Why the `switch → momentum` recommendation was declined
Today momentum leads by **5.4** points (22.5 vs live_engine 27.9) — the largest gap on record and outside the 3-pt margin. But the day-by-day 40-day history (06-06 → today) shows momentum is **not** a durable improvement:
- It beats the shipped engine on only **~5 of 40 days** (06-16, 06-18, 07-15, today) and loses on the other ~85% — often by −5 to −20 points.
- Every win coincides **exactly** with days the live engine's meanPIT is transiently elevated to 0.52–0.58, i.e. recent upward-drift windows (07-05 −1.8, 07-09 −2.1, 07-10 −0.1, 07-15 +2.5, today +5.4). Momentum drifts off the recent-14-day mean, so it only aligns with realized drift in such windows; on the ~0.45–0.48-PIT majority it drift-chases and calibrates worse.
- Momentum is chronically **overconfident at 30d** (cov80 69% today vs live's 81%) — it lacks the engine's `longHorizonBoost`/`volPremium` width. Adopting its idea would regress the two on-target horizons to help a minority of upward-drift days (overfit).
- Every prior `switch` flag (06-16, 06-18, 07-06, 07-15) was correctly kept and mean-reverted the next day; today's spike is the same transient.

## Why no other change either
- **7d −3.6pp softness** is the same weeks-long window/coin-mix soft patch. The only global width lever, `volPremium`, is auto-tuner-owned; the tuner ran today and applied no change (improvement 0, best cov80 79.7). No safe short-end AI lever exists (`longHorizonBoost` is 1.0 at 7d by construction).
- **meanPIT 0.541/0.566/0.572** sits at the upper edge of the engine's own "roughly unbiased" 0.43–0.57 band — the same window-driven upward drift that triggered the momentum flag (it was ~0.45 on 07-16/07-17), not a structural regression. `driftDamp` (the drift lever) is auto-tuner-owned and held at 0.4.

## Verification
- `node backtest/selftest.js` → **OK** (martingale ratio 0.976, calibration 3/3), exit 0
- `node -e "require('./forecast.js')"` → **OK**, exit 0
