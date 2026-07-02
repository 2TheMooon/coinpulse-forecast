# AI Daily Summary — 2026-07-02

**Calibration**: 7d cov80=79% · 14d cov80=82% · 30d cov80=82% (target 80%)
**meanPIT**: 7d=0.50 · 14d=0.53 · 30d=0.55 (target ~0.50)
**Tournament**: KEEP `live_engine` (#2 overall, score 23.6; 0.4 behind Momentum 23.2)

**Action**: No code change (conservative no-op). Every horizon's cov80 is within
~2pp of the 80% target and all meanPIT sit inside the "roughly unbiased"
0.43–0.57 band, so the engine is well-calibrated. Momentum edges the engine by
0.4 pts overall — far inside the 3-pt switch margin — so KEEP stands.

The sole residual is the long-standing horizon-growing PIT (0.50→0.53→0.55)
upward drift. Its lever is `driftDamp`, owned by the deterministic auto-tuner,
which ACTED this run (driftDamp 0.4→0.55). driftDamp has oscillated 0.4↔0.55 for
days because a single scalar knob is fighting a horizon-shaped bias; layering a
manual drift/horizon change on top of the fresh auto-tune would thrash it and is
unverifiable against the offline (no-network) backtest. The residual bias stays
concentrated in idiosyncratic per-coin outliers (INJ 30d 0.65, TIA 30d 0.59);
special-casing coins risks overfitting.

Verified: `node backtest/selftest.js` (martingale 0.974, calibration 3/3) and
`node -e "require('./forecast.js')"` both exit 0.
