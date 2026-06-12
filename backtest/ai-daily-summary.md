# AI Daily Summary — 2026-06-12

## Per-horizon calibration (shipped engine, from fresh 2026-06-12 report)
| Horizon | cov80 | meanPIT | Target |
|---------|-------|---------|--------|
| 7d      | 78%   | 0.47    | 80%    |
| 14d     | 77%   | 0.48    | 80%    |
| 30d     | 78%   | 0.53    | 80%    |

## Action taken
No code change. First fresh report since longHorizonBoost 0.20→0.30 (06-09).
30d cov80 improved 76%→78%, confirming the boost is working. However, all
horizons are now uniformly 2-3pp under 80% — including 7d where longHorizonBoost
has zero effect (factor=1.0). This points to a data-window shift rather than a
structural deficiency. Live engine remains overall #1 (score 25.6 vs 26.4).
Will monitor for persistence before making further parameter changes.
