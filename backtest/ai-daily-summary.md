# AI Daily Summary — 2026-07-01

**Calibration**: 7d cov80=80.1% · 14d cov80=81.4% · 30d cov80=80.7% (target 80%)
**meanPIT**: 7d=0.51 · 14d=0.53 · 30d=0.56 (target ~0.50)
**Tournament**: KEEP `live_engine` (#1 overall, score 22.3)

**Action**: No code change (conservative no-op). Every horizon's cov80 is within
~1.4pp of the 80% target and 7d/14d meanPIT is near 0.50, so the engine is
well-calibrated. The deterministic auto-tuner ALREADY applied the relevant drift
lever this run (driftDamp 0.55→0.4, volPremium 0.95→0.9; error 21.82→21.27),
which directly targets the residual 30d upward (bullish) PIT bias (0.56).
Layering a manual drift change on top of the fresh auto-tune would thrash it and
is unverifiable against the offline network backtest. The residual bias stays
concentrated in idiosyncratic outliers (INJ 0.73, TIA 0.65); special-casing
coins risks overfitting. Verified: `node backtest/selftest.js` (martingale
0.974, calibration 3/3) and `node -e "require('./forecast.js')"` both exit 0.
