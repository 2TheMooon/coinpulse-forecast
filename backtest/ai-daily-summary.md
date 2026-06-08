# AI Daily Summary — 2026-06-08

## Per-horizon calibration (shipped engine, from 2026-06-07 report)
| Horizon | cov80 | meanPIT | Target |
|---------|-------|---------|--------|
| 7d      | 79%   | 0.47    | 80%    |
| 14d     | 77%   | 0.47    | 80%    |
| 30d     | 67%   | 0.50    | 80%    |

## Action taken
Increased `longHorizonBoost` from 0.10 to 0.20. The previous boost (0.10, added
2026-06-07) was confirmed insufficient by the post-fix report: 30d cov80 remained
at 67%, still 13pp below the 80% target. Per-coin 30d coverage: BTC 73%, ETH 75%,
OP 63%, ARB 57%. Doubling the horizon-dependent vol scaling gives a 20% vol boost
at 30d while leaving 7d untouched (already at 79%).

## Recommendation
Tournament says KEEP shipped engine (score 25.1 vs next-best ensemble 28.2).
