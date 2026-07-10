# CoinPulse Strategy Tournament — 2026-07-10

_Generated 2026-07-10T12:33:09.452Z · 14 coins · 300 samples/window · 42.5s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`gbm_normal`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 26.9 |
| 2 | Momentum | 27.0 |
| 3 | GBM + Student-t | 27.2 |
| 4 | GBM (normal) | 28.0 |
| 5 | Block bootstrap | 28.2 |
| 6 | GARCH(1,1)-lite | 29.1 |
| 7 | EWMA vol, zero drift (t) | 29.9 |
| 8 | Ensemble (GBM-t + bootstraps) | 30.9 |
| 9 | Mean-reversion (OU) | 31.6 |
| 10 | Bootstrap (IID) | 33.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **81** | 88 | 0.53 | 47 | 24% | 18.0 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 51 | **77** | 87 | 0.54 | 55 | — | 21.0 |
| 3 | EWMA vol, zero drift (t) | 58 | **83** | 91 | 0.51 | 53 | 24% | 21.1 |
| 4 | GBM + Student-t | 56 | **81** | 90 | 0.55 | 53 | 24% | 23.2 |
| 5 | GARCH(1,1)-lite | 56 | **81** | 90 | 0.54 | 52 | 23% | 23.7 |
| 6 | Block bootstrap | 59 | **83** | 93 | 0.52 | 48 | 25% | 23.7 |
| 7 | GBM (normal) | 59 | **83** | 91 | 0.54 | 53 | 24% | 23.8 |
| 8 | Ensemble (GBM-t + bootstraps) | 60 | **85** | 93 | 0.53 | 51 | 25% | 25.4 |
| 9 | Mean-reversion (OU) | 60 | **82** | 90 | 0.51 | 48 | 26% | 27.7 |
| 10 | Bootstrap (IID) | 61 | **86** | 94 | 0.53 | 52 | 27% | 29.8 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 47 | **79** | 89 | 0.53 | 46 | 35% | 19.6 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **81** | 88 | 0.55 | 53 | — | 23.7 |
| 3 | GBM + Student-t | 56 | **84** | 90 | 0.55 | 52 | 33% | 24.6 |
| 4 | Block bootstrap | 58 | **87** | 94 | 0.52 | 46 | 35% | 26.1 |
| 5 | Mean-reversion (OU) | 54 | **83** | 89 | 0.50 | 52 | 34% | 26.2 |
| 6 | GBM (normal) | 57 | **85** | 91 | 0.55 | 52 | 35% | 26.5 |
| 7 | GARCH(1,1)-lite | 55 | **85** | 93 | 0.55 | 53 | 34% | 27.4 |
| 8 | Ensemble (GBM-t + bootstraps) | 59 | **88** | 94 | 0.53 | 52 | 35% | 28.0 |
| 9 | EWMA vol, zero drift (t) | 61 | **85** | 90 | 0.48 | 51 | 34% | 28.5 |
| 10 | Bootstrap (IID) | 63 | **90** | 95 | 0.51 | 50 | 37% | 33.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 50 | **78** | 86 | 0.56 | 55 | 48% | 33.8 |
| 2 | GBM + Student-t | 51 | **77** | 85 | 0.56 | 54 | 47% | 33.8 |
| 3 | Block bootstrap | 57 | **84** | 92 | 0.54 | 53 | 51% | 34.8 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 52 | **80** | 88 | 0.57 | 54 | — | 35.8 |
| 5 | GARCH(1,1)-lite | 50 | **83** | 91 | 0.57 | 54 | 49% | 36.3 |
| 6 | Bootstrap (IID) | 60 | **87** | 94 | 0.54 | 53 | 55% | 38.1 |
| 7 | Ensemble (GBM-t + bootstraps) | 62 | **89** | 96 | 0.54 | 53 | 61% | 39.3 |
| 8 | EWMA vol, zero drift (t) | 62 | **79** | 85 | 0.47 | 52 | 51% | 40.0 |
| 9 | Mean-reversion (OU) | 50 | **72** | 80 | 0.49 | 52 | 45% | 40.9 |
| 10 | Momentum | 42 | **67** | 78 | 0.53 | 47 | 49% | 43.4 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 81% / 0.53 / 53% / 11.3 | 80% / 0.54 / 49% / 10.2 | 70% / 0.54 / 49% / 30 |
| ETH | 82% / 0.52 / 58% / 11.5 | 82% / 0.53 / 51% / 12.9 | 79% / 0.53 / 48% / 23.2 |
| SOL | 74% / 0.56 / 55% / 28 | 79% / 0.58 / 45% / 19.9 | 87% / 0.57 / 59% / 30.8 |
| BNB | 81% / 0.56 / 57% / 16.1 | 85% / 0.57 / 55% / 31.3 | 90% / 0.59 / 49% / 38.5 |
| XRP | 81% / 0.52 / 59% / 8.7 | 87% / 0.51 / 61% / 21.4 | 86% / 0.5 / 65% / 23.4 |
| SUI | 77% / 0.53 / 58% / 16.5 | 83% / 0.56 / 56% / 23 | 92% / 0.58 / 56% / 39.2 |
| AVAX | 86% / 0.51 / 55% / 15.9 | 87% / 0.52 / 55% / 23.4 | 79% / 0.5 / 57% / 25.2 |
| LINK | 81% / 0.53 / 61% / 14.4 | 85% / 0.55 / 52% / 27.3 | 89% / 0.56 / 48% / 30.7 |
| INJ | 72% / 0.62 / 41% / 39.3 | 72% / 0.66 / 42% / 53.1 | 63% / 0.72 / 41% / 83.4 |
| OP | 68% / 0.54 / 58% / 34.8 | 72% / 0.55 / 56% / 30.3 | 83% / 0.61 / 63% / 36.6 |
| ARB | 59% / 0.54 / 55% / 52.3 | 75% / 0.54 / 63% / 21.6 | 62% / 0.58 / 62% / 54.4 |
| DOGE | 77% / 0.51 / 57% / 7.5 | 79% / 0.5 / 56% / 14.7 | 70% / 0.52 / 60% / 18.4 |
| TIA | 78% / 0.56 / 50% / 21.9 | 83% / 0.6 / 44% / 28.5 | 92% / 0.65 / 41% / 48.1 |
| APT | 74% / 0.54 / 54% / 16 | 85% / 0.53 / 59% / 14.8 | 76% / 0.54 / 63% / 19.6 |

Coins: BTC (binance), ETH (binance), SOL (binance), BNB (binance), XRP (binance), SUI (binance), AVAX (binance), LINK (binance), INJ (binance), OP (binance), ARB (binance), DOGE (binance), TIA (binance), APT (binance)
