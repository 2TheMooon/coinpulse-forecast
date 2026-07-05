# CoinPulse Forecast — Changelog

A running log of changes, especially the automated daily calibration runs that
tune and improve the forecasting model.

## Unreleased

### Added
- Monte-Carlo forecasting engine (GBM + Student-t fat tails), probability cone,
  scenario targets, touch probabilities, analytic cross-check.
- Walk-forward **calibration backtest** (PIT coverage of the cone).
- Triple-source data layer: CryptoCompare → Binance → deterministic synthetic.
- Interactive fan chart with sample paths, date axis, hover readout.
- Persistence, coin filter, per-coin live/demo dots, 3-min auto-refresh.
- Node-requireable engine + headless backtest harness (`backtest/run-backtest.js`).

<!-- Daily calibration runs append below this line -->

- 2026-07-05 auto-tune: volPremium 0.9→0.85, driftDamp 0.4→0.4 (calibration error 22.59→21.9, cov80→79.7%)

- 2026-07-05 AI daily: no change — cov80 (the headline target) is essentially perfect at every horizon (7d 80.4 / 14d 81.8 / 30d 81.0) and meanPIT (0.52/0.53/0.55) sits inside the roughly-unbiased 0.43–0.57 band; live_engine #1 overall (score 23.5, gbm_t 23.6), tournament KEEP. Investigated the one persistent residual — cov50 runs ~3–6pp high (54.9/54.3/56.9) and cov90 ~1–2pp low (88.5/89.9/88.1) across 8+ days, the classic "center too wide, tails too thin" leptokurtic signature. Confirmed this is NOT fixable by the AI-owned Monte-Carlo levers: `backtestCalibration` computes PIT analytically via `normCdf(z)` (pure Gaussian), so `tDof` and the fat-tailed cone have ZERO effect on the reported cov50/cov90 (verified: tDof only feeds the live MC sim, and it has never been changed from 5). The signature is inherent to the Gaussian cross-check meeting fat-tailed crypto returns. The only true fix (a Student-t PIT inside `backtestCalibration`) would change the metric's semantics, break historical comparability, and shift the auto-tuner's own optimization target (it minimizes this error to tune volPremium) — out of bounds and destabilizing. `longHorizonBoost` (the other AI lever, which DOES affect the metric) is not indicated: cov80 is flat/on-target across horizons. driftDamp (the PIT-drift lever) is auto-tuner-owned and already at 0.4; the auto-tuner ACTED today (volPremium 0.9→0.85). Conservative no-op. selftest 3/3 (martingale 0.976) + require both exit 0

- 2026-07-03 auto-tune: volPremium 0.9→0.9, driftDamp 0.55→0.4 (calibration error 22.26→21.4, cov80→80.7%)

- 2026-07-03 AI daily: no change — aggregate calibration within tolerance (7d cov80=79.6%/14d 81.0%/30d 80.8%, all within ~1pp of 80; meanPIT 0.52/0.53/0.56, inside the roughly-unbiased band); live_engine #2 overall (score 22.8), only 0.4 behind gbm_t (22.4) — well inside the 3-pt switch margin, tournament KEEP. The deterministic auto-tuner ALREADY applied the relevant drift lever today (driftDamp 0.55→0.4, error 22.26→21.4), directly targeting the residual 30d meanPIT=0.558 upward bias — layering a manual drift change on top would thrash the fresh auto-tune and is unverifiable against the offline (no-network) backtest. driftDamp has oscillated 0.4↔0.55 for days (a scalar knob fighting a horizon-shaped bias) and is auto-tuner-owned. Residual bias stays concentrated in idiosyncratic per-coin outliers (INJ 30d PIT 0.72/cov80 62%, TIA 30d 0.63); special-casing risks overfitting. Conservative no-op. selftest 3/3 + require both exit 0

- 2026-07-02 auto-tune: volPremium 0.9→0.9, driftDamp 0.4→0.55 (calibration error 23.98→23.15, cov80→80.8%)

- 2026-07-02 AI daily: no change — calibration within tolerance (7d cov80=79/14d 82/30d 82, all within 2pp of 80; meanPIT 0.50/0.53/0.55, all inside the "roughly unbiased" 0.43–0.57 band); live_engine #2 overall (score 23.6), 0.4 behind Momentum (23.2) — well inside the 3-pt switch margin, tournament KEEP. The only residual is the long-standing horizon-growing meanPIT (0.50→0.53→0.55) upward drift, which is owned by the deterministic auto-tuner via driftDamp — and it ACTED this run (driftDamp 0.4→0.55). driftDamp has oscillated 0.4↔0.55 for days because a scalar drift knob is fighting a horizon-shaped bias; layering a manual drift/horizon change on top would thrash the fresh auto-tune and is unverifiable against the offline (no-network) backtest. Residual bias stays concentrated in idiosyncratic per-coin outliers (INJ 30d 0.65, TIA 30d 0.59); special-casing risks overfitting. Conservative no-op. selftest 3/3 + require both exit 0

- 2026-07-01 auto-tune: volPremium 0.95→0.9, driftDamp 0.55→0.4 (calibration error 21.82→21.27, cov80→79.5%)

- 2026-07-01 AI daily: no change — aggregate calibration within tolerance (7d cov80=80.1%/14d 81.4%/30d 80.7%, all within ~1.4pp of 80; meanPIT 0.51/0.53/0.56); live_engine #1 overall (score 22.3), tournament KEEP. The deterministic auto-tuner ALREADY applied the relevant drift lever today (driftDamp 0.55→0.4, volPremium 0.95→0.9, error 21.82→21.27), which directly targets the residual 30d meanPIT=0.56 upward bias — layering a manual drift change on top would thrash the fresh auto-tune and is unverifiable against the offline network backtest. That residual bias stays concentrated in idiosyncratic per-coin outliers (INJ 0.73, TIA 0.65); special-casing coins risks overfitting. Conservative no-op. selftest 3/3 + require both exit 0

- 2026-06-30 AI daily: no change — calibration within tolerance (7d cov80=79.3%/14d 81.6%/30d 83.2%); 7d/14d meanPIT near 0.50 (0.50/0.53); live_engine #3 overall (score 23.5), only 0.2 behind gbm_normal (23.3) — well inside the 3-pt switch margin, tournament KEEP; auto-tuner's best alt (volPremium 0.9) gained just 0.07 error and was not applied; the only residual is the long-standing 30d meanPIT=0.56 upward (bullish) bias, which is a drift effect owned by the deterministic auto-tuner (driftDamp=0.55) and concentrated in idiosyncratic outliers (INJ 0.73, TIA 0.65) — special-casing risks overfitting and an AI drift change would thrash the auto-tuner. Conservative no-op. selftest 3/3 + require both exit 0

- 2026-06-29 AI daily: no change — calibration within tolerance (7d 79%/14d 80%/30d 81%, all within 1pp of target); live_engine #1 overall (score 21.7), tournament KEEP; 7d/14d meanPIT near 0.50; residual 30d PIT=0.56 upward bias is stable and concentrated in INJ (0.73)/TIA (0.65) idiosyncratic outliers; auto-tuner's best drift alternative (driftDamp 0.4) gained only 0.18 error and was not applied, and driftDamp has oscillated 0.4↔0.55 for days, so no AI drift change is justified (overfitting/thrash risk). selftest 3/3 + require both exit 0

- 2026-06-28 auto-tune: volPremium 0.95→0.95, driftDamp 0.4→0.55 (calibration error 23.4→22.71, cov80→80.3%)

- 2026-06-28 AI daily: no change — calibration within tolerance (7d 78%/14d 80%/30d 83%); live_engine score 23.2, effectively tied with top cluster (~22.9), tournament KEEP; auto-tuner already raised driftDamp 0.4→0.55 today (error 23.4→22.71, PIT 0.526) which directly addresses the stable 30d PIT=0.56 upward bias, so no further drift change is justified; INJ/TIA remain idiosyncratic per-coin outliers (overfitting risk to special-case). selftest 3/3 + require both exit 0

- 2026-06-27 auto-tune: volPremium 0.95→0.95, driftDamp 0.55→0.4 (calibration error 21.81→21.02, cov80→79.2%)

- 2026-06-27 AI daily: no change — calibration within tolerance (7d 78%/14d 79%/30d 81%); live_engine #1 overall (score 22.3), tournament KEEP; auto-tuner already cut driftDamp 0.55→0.4 today (error 21.81→21.02, PIT 0.51) so no further drift change is justified; 30d PIT=0.56 stable upward bias, INJ/TIA remain idiosyncratic per-coin outliers (overfitting risk to special-case). selftest 3/3 + require both exit 0

- 2026-06-25 AI daily: no change — calibration within tolerance (7d 78%/14d 78%/30d 81%); live_engine #1 overall (score 22.4), tournament KEEP; 30d PIT=0.56 stable upward bias (not worsening); INJ remains idiosyncratic per-coin outlier (30d PIT=0.74)

- 2026-06-24 auto-tune: volPremium 1→0.95, driftDamp 0.55→0.55 (calibration error 23.2→22.49, cov80→79.3%)

- 2026-06-20 auto-tune: volPremium 1.05→1, driftDamp 0.7→0.55 (calibration error 24.35→23.23, cov80→79.4%)
- 2026-06-20 AI daily: no change — calibration within tolerance (7d 81%/14d 79%/30d 84%); auto-tuner already adjusted volPremium and driftDamp today; live_engine #1 overall (score 24.1)
- 2026-06-21 AI daily: no change — calibration within tolerance (7d 79%/14d 77%/30d 82%); live_engine #1 overall (score 23.1); 30d PIT=0.56 stable, no actionable drift

- 2026-06-14 auto-tune: volPremium 1.1→1.05, driftDamp 0.55→0.7 (calibration error 24.77→24.19, cov80→78.9%)
- 2026-06-14 AI daily: no change — calibration within tolerance (7d 82%/14d 79%/30d 83%); auto-tuner already adjusted volPremium and driftDamp today
- 2026-06-17 AI daily: no change — calibration within tolerance (7d 80%/14d 78%/30d 82%); 7d now perfect at target; live_engine #1 overall (score 23.2)

- 2026-06-13 auto-tune: volPremium 1→1.1, driftDamp 0.55→0.55 (calibration error 23.01→21.88, cov80→80%)
- 2026-06-13 AI daily: no change — auto-tuner already raised volPremium 1.0→1.1 today; awaiting next report to evaluate effect (cov80 currently 78%/76%/77% at 7d/14d/30d)

- 2026-06-07 auto-tune: volPremium 1.05→1, driftDamp 0.7→0.55 (calibration error 21.35→19.53, cov80→77.3%)

- 2026-06-07 auto-tune: volPremium 1.05→1.05, driftDamp 0.4→0.7 (calibration error 22.87→18.35, cov80→78%)
- 2026-06-07 AI daily: add longHorizonBoost=0.10 — horizon-dependent vol scaling to fix persistent 30d under-coverage (cov80 73% vs 80% target)
- 2026-06-07 AI daily: no change — 7d/14d within tolerance (82%/83%), 30d fix (longHorizonBoost) awaiting next report
- 2026-06-08 AI daily: longHorizonBoost 0.10→0.20 — 30d cov80 still 67% (13pp under target) after first boost; doubling horizon-dependent vol scaling
- 2026-06-09 AI daily: longHorizonBoost 0.20→0.30 — 30d cov80 improved to 76% but still 4pp under target; 7d/14d on target (80%/79%)
- 2026-06-10 AI daily: no change — awaiting fresh report to evaluate longHorizonBoost 0.30 effect; 7d/14d on target (80%/79%)
- 2026-06-11 AI daily: no change — report still dated 06-08 (pre-0.30 boost); awaiting fresh backtest to evaluate longHorizonBoost 0.30
- 2026-06-12 AI daily: no change — fresh report shows uniform ~2-3pp under-coverage (7d 78%/14d 77%/30d 78%); 30d improved from 76%→78% confirming boost effect; 7d drop is data-window shift (boost=0 at 7d)

- 2026-06-06 auto-tune: volPremium 1→1.05, driftDamp 0.55→0.4 (calibration error 26.44→25.18, cov80→78.3%)
