# AI Daily Summary — 2026-06-30

**Calibration**: 7d cov80=79.3% · 14d cov80=81.6% · 30d cov80=83.2% (target 80%)
**meanPIT**: 7d=0.50 · 14d=0.53 · 30d=0.56 (target ~0.50)
**Tournament**: KEEP `live_engine` (#3 overall, score 23.5, only 0.2 behind gbm_normal 23.3 — inside the 3-pt switch margin)

**Action**: No code change. Every horizon's cov80 sits within ~3pp of the 80%
target and 7d/14d meanPIT is essentially 0.50, so the engine is about as
well-calibrated as it gets. The only residual is the long-standing 30d upward
(bullish) PIT bias (0.56), driven by two idiosyncratic coins (INJ 0.73, TIA
0.65); the other 12 coins are near 0.50–0.56 at 30d. That bias is a drift effect
owned by the deterministic auto-tuner (driftDamp=0.55), which today found only a
0.07-error gain (volPremium 0.9) and did not apply it. An AI drift change would
thrash the auto-tuner and special-casing INJ/TIA risks overfitting, so a
conservative no-op is correct. Verified: `node backtest/selftest.js` 3/3 and
`require('./forecast.js')` both exit 0.
