# AI Daily Summary — 2026-06-20

**Calibration**: 7d cov80=81% · 14d cov80=79% · 30d cov80=84% (target 80%)
**meanPIT**: 7d=0.50 · 14d=0.50 · 30d=0.56
**Tournament**: KEEP `live_engine` (score 24.1 vs ensemble 25.7)

**Action**: No code change. Calibration within tolerance across all horizons.
Auto-tuner already adjusted today: volPremium 1.05→1.0, driftDamp 0.7→0.55.
7d and 14d are near-perfect; 30d slightly over-covered (84%) but the lowered
volPremium should tighten bands. INJ remains a per-coin outlier (30d PIT=0.73).
