# CoinPulse Strategy Tournament — 2026-07-15

_Generated 2026-07-15T17:16:31.115Z · 14 coins · 300 samples/window · 45.6s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Momentum) does not beat the shipped engine by the required 3-point margin.

Overall best: **momentum** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`block_boot`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Momentum | 26.6 |
| 2 | EWMA vol, zero drift (t) | 27.6 |
| 3 | GBM + Student-t | 28.8 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 29.1 |
| 5 | Block bootstrap | 29.8 |
| 6 | GBM (normal) | 30.1 |
| 7 | GARCH(1,1)-lite | 30.6 |
| 8 | Mean-reversion (OU) | 32.9 |
| 9 | Ensemble (GBM-t + bootstraps) | 33.2 |
| 10 | Bootstrap (IID) | 35.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **79** | 90 | 0.52 | 47 | 24% | 17.8 |
| 2 | EWMA vol, zero drift (t) | 56 | **85** | 91 | 0.50 | 55 | 23% | 21.4 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 51 | **77** | 86 | 0.55 | 51 | — | 24.9 |
| 4 | GBM + Student-t | 53 | **83** | 91 | 0.55 | 52 | 23% | 25.6 |
| 5 | GARCH(1,1)-lite | 55 | **84** | 92 | 0.54 | 50 | 23% | 26.0 |
| 6 | GBM (normal) | 56 | **85** | 92 | 0.54 | 51 | 24% | 26.3 |
| 7 | Block bootstrap | 58 | **88** | 95 | 0.52 | 51 | 25% | 26.6 |
| 8 | Ensemble (GBM-t + bootstraps) | 57 | **87** | 94 | 0.53 | 52 | 25% | 27.9 |
| 9 | Mean-reversion (OU) | 62 | **86** | 93 | 0.50 | 49 | 26% | 30.9 |
| 10 | Bootstrap (IID) | 59 | **89** | 95 | 0.53 | 49 | 27% | 31.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 48 | **76** | 85 | 0.53 | 46 | 34% | 19.3 |
| 2 | EWMA vol, zero drift (t) | 58 | **83** | 89 | 0.50 | 52 | 34% | 23.3 |
| 3 | GBM + Student-t | 51 | **81** | 88 | 0.56 | 51 | 33% | 25.2 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 49 | **79** | 88 | 0.57 | 51 | — | 26.0 |
| 5 | GBM (normal) | 55 | **83** | 89 | 0.56 | 51 | 34% | 27.0 |
| 6 | Mean-reversion (OU) | 56 | **83** | 89 | 0.50 | 52 | 34% | 28.1 |
| 7 | GARCH(1,1)-lite | 53 | **84** | 91 | 0.56 | 51 | 33% | 28.4 |
| 8 | Block bootstrap | 59 | **86** | 95 | 0.53 | 47 | 35% | 29.0 |
| 9 | Ensemble (GBM-t + bootstraps) | 58 | **86** | 95 | 0.55 | 48 | 36% | 31.0 |
| 10 | Bootstrap (IID) | 60 | **89** | 96 | 0.54 | 50 | 38% | 36.2 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 57 | **81** | 90 | 0.54 | 53 | 50% | 33.9 |
| 2 | GBM + Student-t | 49 | **75** | 83 | 0.57 | 56 | 46% | 35.7 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 50 | **79** | 86 | 0.58 | 56 | — | 36.6 |
| 4 | GBM (normal) | 49 | **76** | 84 | 0.57 | 56 | 47% | 37.0 |
| 5 | Bootstrap (IID) | 58 | **84** | 93 | 0.54 | 55 | 55% | 37.2 |
| 6 | GARCH(1,1)-lite | 50 | **80** | 90 | 0.58 | 55 | 48% | 37.5 |
| 7 | EWMA vol, zero drift (t) | 61 | **77** | 84 | 0.47 | 52 | 50% | 38.0 |
| 8 | Mean-reversion (OU) | 53 | **72** | 81 | 0.49 | 54 | 44% | 39.8 |
| 9 | Ensemble (GBM-t + bootstraps) | 62 | **87** | 95 | 0.54 | 55 | 61% | 40.7 |
| 10 | Momentum | 41 | **67** | 78 | 0.52 | 47 | 49% | 42.8 |

## Winner consistency — `momentum` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 80% / 0.51 / 50% / 3.6 | 72% / 0.51 / 49% / 20.7 | 57% / 0.49 / 44% / 55.7 |
| ETH | 78% / 0.51 / 46% / 12 | 77% / 0.52 / 51% / 17.1 | 62% / 0.49 / 44% / 46.7 |
| SOL | 78% / 0.5 / 48% / 12.4 | 72% / 0.54 / 32% / 29.7 | 73% / 0.52 / 33% / 31.1 |
| BNB | 92% / 0.51 / 38% / 20.1 | 81% / 0.51 / 38% / 13.8 | 67% / 0.49 / 38% / 31.2 |
| XRP | 82% / 0.49 / 40% / 14.4 | 79% / 0.49 / 36% / 4.5 | 79% / 0.46 / 51% / 18 |
| SUI | 80% / 0.52 / 44% / 11.4 | 77% / 0.56 / 36% / 21.3 | 71% / 0.56 / 52% / 28.2 |
| AVAX | 84% / 0.49 / 42% / 19.9 | 85% / 0.51 / 45% / 13.1 | 63% / 0.47 / 46% / 49.8 |
| LINK | 76% / 0.51 / 48% / 8.5 | 74% / 0.52 / 45% / 14 | 79% / 0.51 / 43% / 10 |
| INJ | 82% / 0.57 / 60% / 22.5 | 81% / 0.59 / 55% / 24.5 | 60% / 0.6 / 59% / 70.5 |
| OP | 72% / 0.53 / 46% / 29.9 | 72% / 0.54 / 53% / 18.9 | 68% / 0.6 / 57% / 49.5 |
| ARB | 68% / 0.53 / 48% / 46.1 | 74% / 0.53 / 49% / 25.3 | 56% / 0.55 / 54% / 62.4 |
| DOGE | 82% / 0.48 / 52% / 11.5 | 81% / 0.49 / 55% / 7 | 70% / 0.48 / 51% / 24.6 |
| TIA | 78% / 0.54 / 42% / 20.1 | 74% / 0.55 / 45% / 26.6 | 68% / 0.59 / 38% / 56.9 |
| APT | 78% / 0.54 / 52% / 16.8 | 68% / 0.55 / 53% / 33.3 | 57% / 0.49 / 43% / 64.8 |

Coins: BTC (binance), ETH (binance), SOL (binance), BNB (binance), XRP (binance), SUI (binance), AVAX (binance), LINK (binance), INJ (binance), OP (binance), ARB (binance), DOGE (binance), TIA (binance), APT (binance)
