# AI Daily Summary — 2026-06-14

**Calibration**: 7d cov80=82% · 14d cov80=79% · 30d cov80=83% (target 80%)
**meanPIT**: 7d=0.48 · 14d=0.48 · 30d=0.54
**Tournament**: KEEP `live_engine` (score 25.2 vs ensemble 28.7)

**Action**: No code change. All horizons within tolerance. Auto-tuner adjusted
volPremium 1.1→1.05 and driftDamp 0.55→0.70 today, which should tighten 30d
slightly on the next run. INJ remains an outlier (30d cov80=63%, PIT=0.70)
but is a single-coin trend effect, not a systemic issue.
