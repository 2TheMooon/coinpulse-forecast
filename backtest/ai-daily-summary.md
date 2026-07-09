# AI Daily Summary — 2026-07-09

**Verdict:** Calibration within tolerance. **No model change** (conservative no-op). Also performed a repo recovery.

## Shipped-engine calibration (2026-07-09)
| Horizon | cov80 (target 80) | meanPIT (~0.50) | score |
|---|---|---|---|
| 7d  | 77.6 (−2.4) | 0.551 | 23.2 |
| 14d | 79.9 (on target) | 0.553 | 23.0 |
| 30d | 79.7 (on target) | 0.574 | 36.2 |

Tournament: **KEEP `live_engine`**. Best challenger block_boot (mean score 26.3) does not beat the shipped engine (27.5) by the 3-pt switch margin (gap 1.2). Routing unchanged (7d→momentum, mid→momentum, long→block_boot). Auto-tuner applied **no change** (volPremium 0.85, driftDamp 0.4, improvement 0).

## Why no change
- **7d is only ~2.4pp light and recovering.** Its cov80 fell to 73.1/73.0 on 07-06/07 and has climbed monotonically since (75.4 → 77.6) back toward its usual ~77–80 band. This is window noise, not a persistent structural deviation.
- **Longer horizons are on-target** (14d 79.9, 30d 79.7). The only cov80 lever, volPremium, is global — widening it to lift 7d would push 14d/30d over 80. The auto-tuner correctly held it.
- **meanPIT swung up in one day** (from ~0.45–0.49 all last week to 0.55–0.57 today), which confirms today's data window carries upward drift — a single-snapshot draw, not a basis for a term-structure change. The 30d=0.574 upper-edge bias is the long-standing driftDamp effect (auto-tuner-owned, repeatedly judged overfitting-risk to special-case).

## Repo recovery (this run)
On entry the working tree was stuck mid-`pull --rebase` in a corrupted conflict state, replaying a stale yesterday ai-daily commit onto origin's fresh 2026-07-09 calibration (`19e2d05`). Resolved conflicts by taking origin's fresh report data for every conflicted file, abandoned the broken rebase machinery without clobbering the fresh working-tree reports, and re-synced `master` to origin's tip. No model/engine code was touched.

## Verification
- `node backtest/selftest.js` → **OK** (martingale ratio 0.976, calibration 3/3), exit 0
- `node -e "require('./forecast.js')"` → **OK**, exit 0
