# AI Daily Summary — 2026-06-10

## Per-horizon calibration (shipped engine, from 2026-06-08 report)
| Horizon | cov80 | meanPIT | Target |
|---------|-------|---------|--------|
| 7d      | 80%   | 0.48    | 80%    |
| 14d     | 79%   | 0.48    | 80%    |
| 30d     | 76%   | 0.52    | 80%    |

## Action taken
No code change. The previous run (06-09) bumped `longHorizonBoost` 0.20→0.30,
but the latest report (06-08) predates that change. Waiting for a fresh report
to evaluate the 0.30 boost before making further adjustments. 7d and 14d are
on target; no strategy switch warranted (KEEP, score 20.4 vs next-best 23.5).

## Recommendation
Tournament says KEEP shipped engine. Next run should evaluate 0.30 boost effect.
