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
