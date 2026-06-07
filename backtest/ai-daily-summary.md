# AI Daily Summary — 2026-06-07

## Per-horizon calibration (shipped engine)
| Horizon | cov80 | meanPIT | Target |
|---------|-------|---------|--------|
| 7d      | 82%   | 0.49    | 80%    |
| 14d     | 83%   | 0.50    | 80%    |
| 30d     | 73%   | 0.53    | 80%    |

## Action taken
Added `longHorizonBoost: 0.10` to MODEL config — a horizon-dependent vol scaling
that linearly increases sigma from 1.0x at 7d to 1.10x at 30d. This addresses
persistent 30d under-coverage (70-73% cov80 across both available report days)
that the flat `volPremium` knob cannot fix without over-covering shorter horizons.
Applied consistently in simulate(), backtestCalibration(), and analyticTerminal().
Updated auto-tune.js rewriteModelBlock to preserve the new parameter.

## Recommendation
Tournament says KEEP shipped engine (best challenger gbm_t score 22.0 vs shipped 22.5, below 3-point switch margin).
