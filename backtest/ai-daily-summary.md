# AI Daily Summary — 2026-07-03

**Calibration**: 7d cov80=79.6% · 14d cov80=81.0% · 30d cov80=80.8% (target 80%)
**meanPIT**: 7d=0.52 · 14d=0.53 · 30d=0.56 (target ~0.50)
**Tournament**: KEEP `live_engine` (#2 overall, score 22.8; 0.4 behind gbm_t 22.4)

**Action**: No code change (conservative no-op). Every horizon's cov80 is within
~1pp of the 80% target and all meanPIT sit inside the "roughly unbiased"
0.43–0.57 band, so the engine is well-calibrated. gbm_t edges the engine by
0.4 pts overall — far inside the 3-pt switch margin — so KEEP stands.

The sole residual is the long-standing horizon-growing PIT (0.52→0.53→0.56)
upward (bullish) drift. Its lever is `driftDamp`, owned by the deterministic
auto-tuner, which ACTED this run (driftDamp 0.55→0.4, error 22.26→21.4,
cov80→80.7%), directly targeting that 30d bias. driftDamp has oscillated
0.4↔0.55 for days because a single scalar knob is fighting a horizon-shaped
bias; layering a manual drift/horizon change on top of the fresh auto-tune would
thrash it and is unverifiable against the offline (no-network) backtest. The
residual bias stays concentrated in idiosyncratic per-coin outliers (INJ 30d
PIT 0.72/cov80 62%, TIA 30d 0.63); special-casing coins risks overfitting.

Verified: `node backtest/selftest.js` (martingale 0.974, calibration 3/3) and
`node -e "require('./forecast.js')"` both exit 0.
