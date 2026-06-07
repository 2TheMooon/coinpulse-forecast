# AI Daily Summary — 2026-06-07 (run 2)

## Per-horizon calibration (shipped engine)
| Horizon | cov80 | meanPIT | Target |
|---------|-------|---------|--------|
| 7d      | 82%   | 0.49    | 80%    |
| 14d     | 83%   | 0.50    | 80%    |
| 30d     | 73%   | 0.53    | 80%    |

## Action taken
No code change. The 7d and 14d horizons are well-calibrated (within 3pp of
80% target, PIT near 0.50). The 30d under-coverage (73%) was already addressed
in the previous run by adding `longHorizonBoost: 0.10`. Awaiting the next
backtest report (post-fix) to evaluate the effect before further adjustments.

## Recommendation
Tournament says KEEP shipped engine (best challenger gbm_t score 22.0 vs shipped 22.5, below 3-point switch margin).
