# CoinPulse Forecast 📈

**Live demo → https://2themooon.github.io/coinpulse-forecast/**

A browser-only crypto **forecasting terminal** that shows *where a coin's price could
go* — a Monte-Carlo **probability cone** built from real daily history, with honest
calibration instead of fake certainty. No backend, no API keys, no build step.

## What it does
- **Probability cone** — 800-path Monte-Carlo projection (GBM + Student-t fat tails),
  per-day percentile bands, median path, scenario targets, touch probabilities.
- **Honest calibration** — walk-forward backtest shows how often past cones actually
  contained the realized price (target: the 80% band contains ~80% of outcomes).
- **Live data** — CryptoCompare → Binance fallback → deterministic synthetic, so it
  always renders.
- Log-scale toggle, date axis, hover read-out, per-coin live/demo dots.

> ⚠️ Educational tool. Forecasts are probabilistic simulations from historical
> volatility — **not financial advice.** It models volatility, not news/liquidations/macro.

## It improves itself every day 🤖
Two layers keep the model calibrated over time:
1. **Deterministic tuner (cloud, free, no AI)** — a daily [GitHub Action](.github/workflows/daily.yml)
   runs a tournament of forecasting strategies (`backtest/strategies.js`), walk-forward
   calibrates them, grid-searches the model config, and commits the best — even with no PC on.
2. **AI maintainer (Opus)** — a daily pass reads the calibration report and may make ONE
   small, **self-verified** improvement (new strategy, estimator/param fix), with automatic
   rollback if it doesn't pass `backtest/selftest.js`. See its latest note:
   [`backtest/ai-daily-summary.md`](backtest/ai-daily-summary.md) (also shown live in the app).

Every change is a reviewable git commit — see `CHANGELOG.md` and the commit history.

## Layout
| File | Role |
|---|---|
| `forecast.js` | engine: Monte-Carlo cone, calibration, tunable `MODEL` config |
| `data.js` | keyless live data (CryptoCompare → Binance) + synthetic fallback |
| `app.js`, `index.html`, `styles.css` | the terminal UI |
| `backtest/` | strategy lab, daily tournament, auto-tuner, AI maintainer |
