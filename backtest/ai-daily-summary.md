# AI Daily Summary — 2026-06-11

## Per-horizon calibration (shipped engine, from 2026-06-08 report)
| Horizon | cov80 | meanPIT | Target |
|---------|-------|---------|--------|
| 7d      | 80%   | 0.48    | 80%    |
| 14d     | 79%   | 0.48    | 80%    |
| 30d     | 76%   | 0.52    | 80%    |

## Action taken
No code change. The report (still dated 2026-06-08) predates the longHorizonBoost
0.20→0.30 change from 06-09. This is the second consecutive no-op waiting for a
fresh backtest. 7d and 14d remain on target; 30d under-coverage (76%) may already
be addressed by the 0.30 boost but we cannot confirm without new data.

## Recommendation
Tournament says KEEP shipped engine (score 20.4 vs next-best 23.5). Next run
should evaluate 0.30 boost effect once a fresh report is available.
