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

- 2026-06-07 auto-tune: volPremium 1.05→1, driftDamp 0.7→0.55 (calibration error 21.35→19.53, cov80→77.3%)

- 2026-06-07 auto-tune: volPremium 1.05→1.05, driftDamp 0.4→0.7 (calibration error 22.87→18.35, cov80→78%)
- 2026-06-07 AI daily: add longHorizonBoost=0.10 — horizon-dependent vol scaling to fix persistent 30d under-coverage (cov80 73% vs 80% target)
- 2026-06-07 AI daily: no change — 7d/14d within tolerance (82%/83%), 30d fix (longHorizonBoost) awaiting next report
- 2026-06-08 AI daily: longHorizonBoost 0.10→0.20 — 30d cov80 still 67% (13pp under target) after first boost; doubling horizon-dependent vol scaling
- 2026-06-09 AI daily: longHorizonBoost 0.20→0.30 — 30d cov80 improved to 76% but still 4pp under target; 7d/14d on target (80%/79%)

- 2026-06-06 auto-tune: volPremium 1→1.05, driftDamp 0.55→0.4 (calibration error 26.44→25.18, cov80→78.3%)
