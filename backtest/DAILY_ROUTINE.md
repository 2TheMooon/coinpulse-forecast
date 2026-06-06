# CoinPulse — Daily Self-Improvement Routine

This fork runs a daily loop that **backtests many forecasting strategies, tunes
the live model, and commits the improvement** — converging toward a consistently
well-calibrated "where will price go" cone over time.

## What runs each day

`node backtest/daily.js` does three things:

1. **Strategy tournament** (`run-backtest.js`) — fetches ~200 daily candles for
   every tracked coin (CryptoCompare → Binance fallback) and walk-forward
   calibrates **8 strategies** (GBM, GBM+Student-t, IID & block bootstrap,
   mean-reversion/OU, momentum, zero-drift EWMA-t, GARCH-lite) **plus the
   shipped engine**. Ranks them by calibration error and writes
   `reports/<date>.{json,md}` + a `recommendation` (keep / switch).
2. **Auto-tune** (`auto-tune.js --apply`) — grid-searches the engine's
   `MODEL` config (`volPremium`, `driftDamp`) to minimise calibration error and,
   when it clears the margin, rewrites the `AUTO-TUNED MODEL CONFIG` block in
   `forecast.js` and appends `CHANGELOG.md`.
3. **Commit** — stages the day's report + any engine change to git.

Calibration target: the 80% cone should contain ~80% of realised prices and
mean PIT ≈ 0.50. `score = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|`
(lower is better).

## Option A — Cloud routine (always-on, even with your PC off)

A Claude cloud routine runs on Anthropic's servers, so it **cannot see local
`C:\…` files** — the fork must live on **GitHub** first.

1. One-time: push this fork to GitHub
   ```
   gh auth login                 # interactive, once
   gh repo create coinpulse-forecast --private --source . --push
   ```
2. Create the daily cloud routine (via the `schedule` skill) with this prompt:

   > **Daily CoinPulse calibration.** Clone/pull `coinpulse-forecast`. Run
   > `node backtest/daily.js`. Read `backtest/reports/latest.json` and
   > `backtest/reports/tuning-latest.json`. If the tournament `recommendation`
   > is `switch`, or calibration drifted (any horizon `|cov80−80| > 8`),
   > investigate and adjust the engine (`MODEL` config, or adopt the winning
   > strategy) to improve calibration; re-run to confirm the score dropped;
   > otherwise keep. Commit and **push** all changes with a dated message and
   > a one-line summary of what moved. Never push a change that worsened the
   > aggregate calibration score.

## Option B — Local scheduled task (runs while your PC is on)

Immediate, no GitHub. Windows Task Scheduler, daily at 09:00:

```
schtasks /Create /TN "CoinPulse Fork Daily" /TR "node \"%CD%\backtest\daily.js\"" /SC DAILY /ST 09:00 /F
```
(or run `backtest/install-daily-task.cmd`). Remove with
`schtasks /Delete /TN "CoinPulse Fork Daily" /F`.

## Safety

- The auto-tuner only applies a change that **reduces** calibration error by a
  margin, and clamps `volPremium`∈[0.7,1.8], `driftDamp`∈[0.2,0.95].
- Everything is committed, so every automated change is reviewable / revertible.
- Dry-run anytime: `node backtest/auto-tune.js` (no `--apply`).
