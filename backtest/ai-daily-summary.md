# AI Daily Summary — 2026-06-09

## Per-horizon calibration (shipped engine, from 2026-06-08 report)
| Horizon | cov80 | meanPIT | Target |
|---------|-------|---------|--------|
| 7d      | 80%   | 0.48    | 80%    |
| 14d     | 79%   | 0.48    | 80%    |
| 30d     | 76%   | 0.52    | 80%    |

## Action taken
Increased `longHorizonBoost` from 0.20 to 0.30. The previous bump (0.10→0.20)
improved 30d cov80 from 67%→76%, but it remains 4pp below the 80% target.
Per-coin 30d coverage: BTC 68%, ETH 73%, XRP 83%, SUI 73%, TIA 84%, APT 75%.
The 30% vol boost at 30d leaves 7d untouched (80.2%) and gives 14d a minor push
(79.1% → should approach 80%).

## Recommendation
Tournament says KEEP shipped engine (score 20.4 vs next-best ensemble 23.5).
