# AI Daily Summary — 2026-06-13

## Per-horizon calibration (shipped engine, from 2026-06-13 report)
| Horizon | cov80 | meanPIT | Target |
|---------|-------|---------|--------|
| 7d      | 78%   | 0.49    | 80%    |
| 14d     | 76%   | 0.49    | 80%    |
| 30d     | 77%   | 0.54    | 80%    |

## Action taken
No code change. The auto-tuner already raised volPremium from 1.0 to 1.1 today
(tuning predicts cov80→80%, meanPIT→0.504). Need next report to evaluate the
effect before making structural changes. Live engine remains overall #1 across
all horizons (score 23.3 vs next-best ensemble at 26.1). INJ and ARB remain
poorly calibrated outliers (INJ 30d cov80=62%, PIT=0.69) but per-coin fixes
would be a complex structural change — not warranted until global tuning settles.
