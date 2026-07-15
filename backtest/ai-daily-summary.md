# AI Daily Summary — 2026-07-15

**Verdict:** Calibration within tolerance; aggregate running mildly light with all three horizons at/just-below 80. **No model change** (conservative no-op).

## Shipped-engine calibration (2026-07-15)
| Horizon | cov80 (target 80) | meanPIT (~0.50) | score |
|---|---|---|---|
| 7d  | 76.8 (−3.2) | 0.550 | 24.9 |
| 14d | 79.3 (−0.7) | 0.566 | 26.0 |
| 30d | 78.9 (−1.1) | 0.577 | 36.6 |

Tournament: **KEEP `live_engine`** (#4 overall, mean score 29.1; best challenger Momentum 26.6, gap 2.5 — inside the 3-pt switch margin). Auto-tuner ran and applied **no change** (volPremium 0.85, driftDamp 0.4); its best alternative was volPremium 0.9 (aggregate cov80 81.1) but improvement was only 0.37 (25.58→25.21), below the application threshold. Routing: 7d→momentum, mid→momentum, long→block_boot.

## Why no change
- **All three horizons sit at/just-below 80** (76.8 / 79.3 / 78.9) — not one off horizon but a mildly light aggregate. The only global cov80 lever is `volPremium`, which is **auto-tuner-owned**, and the tuner **evaluated exactly volPremium 0.85→0.9 this run and declined** (improvement 0.37, below threshold). Manually overriding to 0.9 would second-guess the tuner on a noise-level gain and thrash it — the anti-pattern prior runs avoided.
- **The AI-owned lever targets the wrong end.** `longHorizonBoost` (0.30) widens the LONG end (`horizonFactor = 1 + boost·(H−7)/23`, =1.0 at 7d), but 14d/30d are the on-target horizons (within ~1pp). The largest deficit is at 7d — the short end where the boost is 0 by construction — and no safe short-end AI lever exists. Adding one is a structural change with overfitting risk against one offline snapshot (repeatedly judged so).
- **7d is window/coin-mix noise.** cov80 has oscillated 75.7–80.4 day-to-day this past week (07-05 80.4, 07-06 75.7, 07-07 76.8, 07-09 77.6, 07-10 76.6, today 76.8), sitting ~76–77 — a persistent-but-modest soft patch, not far-from-80.
- **meanPIT 0.55/0.566/0.577:** the 30d=0.577 upper-edge upward bias is the long-standing driftDamp effect (auto-tuner-owned, held at 0.4), systemic across strategies at 30d and concentrated in idiosyncratic INJ/TIA outliers — not AI-actionable without overfitting.

## Verification
- `node backtest/selftest.js` → **OK** (martingale ratio 0.976, calibration 3/3), exit 0
- `node -e "require('./forecast.js')"` → **OK**, exit 0
