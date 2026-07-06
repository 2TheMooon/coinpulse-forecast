# AI Daily Summary — 2026-07-06

**Calibration (live_engine)**: 7d cov80=75.7% · 14d cov80=80.8% · 30d cov80=80.0% (target 80%)
**meanPIT**: 7d=0.52 · 14d=0.54 · 30d=0.57 (target ~0.50, all inside the 0.43–0.57 band)
**Tournament**: KEEP `live_engine` (#3 overall, score 25.2; gbm_t & momentum tied at 24.7, inside the 3-pt margin)

**Action**: No code change (conservative no-op). The headline cov80 target is on-target
at the two longer horizons (14d 80.8, 30d 80.0). The 7d cov80 dipped to 75.7 today, but
that is a one-day low against a stable 78–80 run over the prior week (07-05 80.4, 06-30
79.3, 06-29 79.0) — data-window noise, not a persistent deviation, so acting on it would
chase noise. The auto-tuner ran and applied NO change (volPremium held at 0.85, driftDamp
0.4, improvement 0, best aggregate cov80 79.5), i.e. the deterministic layer already
judged the current params optimal.

The only persistent residual remains the 30d meanPIT=0.565 upper-edge upward bias, which
is concentrated in idiosyncratic per-coin outliers (INJ 0.72, TIA 0.64) and is the
driftDamp effect — an auto-tuner-owned lever already at 0.4. Special-casing those coins
risks overfitting, and an AI drift change would thrash the auto-tuner's optimization.
No AI-owned lever (`longHorizonBoost`, `tDof`) is indicated: cov80 is not persistently
off at any horizon.

Verified: `node backtest/selftest.js` (martingale 0.976, calibration 3/3) and
`node -e "require('./forecast.js')"` both exit 0.
