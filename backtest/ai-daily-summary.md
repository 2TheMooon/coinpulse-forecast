# AI Daily Summary — 2026-07-24

**Verdict:** Tournament says KEEP → `live_engine` (best challenger gbm_t misses the 3-pt switch margin), and drift is well-centered (meanPIT 0.48–0.50 everywhere). One persistent structural issue remained: the **short horizon is chronically overconfident**. **Change made:** a term-structure width fix that lifts 7d/14d coverage while preserving the on-target 30d exactly.

## Shipped-engine calibration (2026-07-24, pre-change)
| Horizon | cov80 (target 80) | meanPIT (~0.50) | score |
|---|---|---|---|
| 7d  | 76 (−4)        | 0.50 | 17.9 |
| 14d | 76 (−4)        | 0.49 | 18.2 |
| 30d | 80 (on target) | 0.48 | 23.5 |

## What changed and why
- **Root cause:** `horizonFactor = 1 + boost·max(0,(h−7)/23)` gave the 7d cone *zero* extra width (factor exactly 1.000). But the calibration scores a **normal** model, and at short horizons daily fat tails haven't averaged toward normal (CLT) — so the plain sqrt-time band under-covers. Result: 7d cov80 has sat at ~75.5 (73–78, basically never 80) for 2+ weeks; 14d ~77.5; only the boosted 30d is on-target.
- **Why the auto-tuner can't fix it:** `volPremium` is global (auto-tuner-owned) — raising it to lift 7d would over-widen the on-target 30d. The tuner ran today and applied no change (improvement 0, best cov80 78.9). The term structure is the only lever, and it's AI-owned.
- **The fix:** reparameterize `horizonFactor` → `1 + boost·(h/30)` in all three sites (`simulate`, `analyticTerminal`, `backtestCalibration`), keeping `longHorizonBoost` = 0.30. This **pivots on 30d**: factor at 30d unchanged (1.300, on-target horizon preserved exactly); 7d 1.000→1.070 (+7%), 14d 1.091→1.140 (+4.5%). By the normal approximation this moves 7d cov80 ≈76→79 and 14d ≈77→79.5 — toward target, no overshoot.
- **Why safe:** single-parameter change, no new knob, no API-shape change; 30d preserved bit-for-bit; self-correcting via the daily loop (tomorrow's network backtest measures it; the tuner re-optimizes `volPremium` around the new term structure).

## Housekeeping
- Repo arrived mid-rebase (leftover from a prior run) with conflicts in generated report files. The stuck commit was a code-free "no change" report recording, superseded by 4 newer calibrations. Aborted the rebase and realigned `master` to `origin/master` @ `8ae64a2` (today's 2026-07-24 calibration). No code lost.

## Verification
- `node backtest/selftest.js` → **OK** (martingale ratio 0.976, calibration 3/3), exit 0
- `node -e "require('./forecast.js')"` → **OK**, exit 0
- horizonFactor round-trips: 7d 1.070 / 14d 1.140 / 30d 1.300; auto-tuner MODEL-block regex still matches, `longHorizonBoost` 0.30 preserved
