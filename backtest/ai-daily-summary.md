# AI Daily Summary — 2026-06-29

**Calibration**: 7d cov80=79% · 14d cov80=80% · 30d cov80=81% (target 80%)
**meanPIT**: 7d=0.51 · 14d=0.52 · 30d=0.56
**Tournament**: KEEP `live_engine` (#1 overall, mean score 21.7)

**Action**: No code change. cov80 is within 1pp of the 80% target at every
horizon and 7d/14d aggregate meanPIT is near 0.50 — about as well-calibrated as
this engine gets. The only residual is the long-standing 30d meanPIT upward bias
(~0.56), which is stable (not worsening) and concentrated in two idiosyncratic
coins (INJ PIT 0.73, TIA 0.65); the other 12 coins sit near 0.50–0.55 at 30d.
The auto-tuner already explored drift today — its best alternative (driftDamp
0.4) improved error by only 0.18 and was not applied — and driftDamp has
oscillated 0.4↔0.55 for several days, so an AI drift change would thrash the
deterministic layer. Special-casing INJ/TIA risks overfitting. Conservative
no-op is correct. Verified: `node backtest/selftest.js` 3/3 and
`require('./forecast.js')` both exit 0.
