# AI Daily Summary — 2026-06-27

**Calibration**: 7d cov80=78% · 14d cov80=79% · 30d cov80=81% (target 80%)
**meanPIT**: 7d=0.51 · 14d=0.52 · 30d=0.56
**Tournament**: KEEP `live_engine` (#1 overall, score 22.3; ties block_boot)

**Action**: No code change. All three horizons are within sampling noise of the
80% target across ~700–1000 windows, and aggregate meanPIT is near 0.50. The
deterministic auto-tuner already made today's meaningful adjustment — driftDamp
0.55→0.4 (calibration error 21.81→21.02, cov80 79.2%, PIT 0.511) — so stacking
an AI drift/vol change on top would be unjustified and risky. The residual 30d
upward PIT bias (0.56) and the INJ/TIA per-coin outliers (INJ 30d PIT=0.74) are
the same stable, non-worsening artifacts of a rising backtest window; correcting
them would mean adding upward drift or per-coin special-casing, i.e. overfitting.
selftest passes 3/3, `require('./forecast.js')` exits 0.
