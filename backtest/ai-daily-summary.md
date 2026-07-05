# AI Daily Summary — 2026-07-05

**Calibration (live_engine)**: 7d cov80=80.4% · 14d cov80=81.8% · 30d cov80=81.0% (target 80%)
**meanPIT**: 7d=0.52 · 14d=0.53 · 30d=0.55 (target ~0.50, all inside 0.43–0.57 band)
**Tournament**: KEEP `live_engine` (#1 overall, score 23.5; gbm_t 23.6, well inside 3-pt margin)

**Action**: No code change (conservative no-op). The headline target — cov80,
"80% band contains ~80%" — is essentially perfect at every horizon, and every
meanPIT is roughly unbiased. The engine is well-calibrated.

Investigated the sole persistent residual: cov50 runs ~3–6pp high (54.9/54.3/56.9)
and cov90 ~1–2pp low (88.5/89.9/88.1) across 8+ days — the leptokurtic
"center too wide, tails too thin" signature. Key finding: `backtestCalibration`
derives its PIT analytically via `normCdf(z)` (a pure Gaussian), so `tDof` and the
fat-tailed Monte-Carlo cone have **no effect** on the reported cov50/cov90. The
signature is inherent to a Gaussian cross-check meeting fat-tailed crypto returns,
not something the AI-owned MC levers can move. The only real fix — a Student-t PIT
inside `backtestCalibration` — would change the metric's semantics, break historical
comparability, and shift the auto-tuner's optimization target (it minimizes this
error to tune volPremium); that's out of bounds and destabilizing. `longHorizonBoost`
(the AI lever that *does* affect the metric) isn't indicated: cov80 is flat across
horizons. driftDamp is auto-tuner-owned and already at 0.4, and the auto-tuner acted
today (volPremium 0.9→0.85).

Verified: `node backtest/selftest.js` (martingale 0.976, calibration 3/3) and
`node -e "require('./forecast.js')"` both exit 0.
