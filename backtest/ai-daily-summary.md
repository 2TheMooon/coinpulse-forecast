# AI Daily Summary — 2026-06-28

**Calibration**: 7d cov80=78% · 14d cov80=80% · 30d cov80=83% (target 80%)
**meanPIT**: 7d=0.50 · 14d=0.53 · 30d=0.56
**Tournament**: KEEP `live_engine` (score 23.2, effectively tied with top cluster ~22.9)

**Action**: No code change. cov80 is on target across all three horizons and
aggregate meanPIT is near 0.50. The only mild residual is the long-standing 30d
meanPIT upward bias (~0.56) — stable for weeks and not worsening. The
deterministic auto-tuner already addressed it **today** by raising `driftDamp`
0.4→0.55 (calibration error 23.4→22.71, cov80→80.3%, aggregate PIT→0.526), which
moves the 30d median upward in the correct direction. Stacking an AI drift change
on top of a same-day grid-search adjustment — one that has oscillated
0.55→0.4→0.55 over three days — would conflict with the deterministic layer.
INJ/TIA remain idiosyncratic per-coin outliers; special-casing them risks
overfitting. Conservative no-op is the correct call. Verified:
`node backtest/selftest.js` 3/3 and `require('./forecast.js')` both exit 0.
