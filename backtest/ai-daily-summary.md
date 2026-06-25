# AI Daily Summary — 2026-06-25

**Calibration**: 7d cov80=78% · 14d cov80=78% · 30d cov80=81% (target 80%)
**meanPIT**: 7d=0.50 · 14d=0.52 · 30d=0.56
**Tournament**: KEEP `live_engine` (#1 overall, score 22.4)

**Action**: No code change. All horizons within tolerance; cov80 is within
normal sampling noise of 80% across ~700–1000 windows. 30d meanPIT=0.56 is the
same mild upward bias seen on prior days (stable, not worsening) — "fixing" it
would require adding upward drift, i.e. overfitting to a rising backtest window.
INJ stays an idiosyncratic per-coin outlier (30d PIT=0.74, cov80=67%); per-coin
special-casing would be risky overfitting. Auto-tuner already set volPremium
1→0.95 yesterday. selftest + require-forecast both pass (exit 0).
