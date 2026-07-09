# CoinPulse Strategy Tournament — 2026-07-09

_Generated 2026-07-09T16:40:56.402Z · 14 coins · 300 samples/window · 60.1s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Block bootstrap) does not beat the shipped engine by the required 3-point margin.

Overall best: **block_boot** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`block_boot`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Block bootstrap | 26.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 27.5 |
| 3 | GBM + Student-t | 27.6 |
| 4 | GBM (normal) | 28.5 |
| 5 | EWMA vol, zero drift (t) | 29.1 |
| 6 | GARCH(1,1)-lite | 29.3 |
| 7 | Momentum | 29.6 |
| 8 | Ensemble (GBM-t + bootstraps) | 30.0 |
| 9 | Mean-reversion (OU) | 32.2 |
| 10 | Bootstrap (IID) | 33.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **79** | 89 | 0.53 | 48 | 25% | 18.9 |
| 2 | Block bootstrap | 55 | **88** | 94 | 0.52 | 45 | 25% | 22.3 |
| 3 | EWMA vol, zero drift (t) | 58 | **85** | 92 | 0.50 | 48 | 24% | 22.4 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 52 | **78** | 87 | 0.55 | 50 | — | 23.2 |
| 5 | GARCH(1,1)-lite | 54 | **84** | 92 | 0.54 | 51 | 23% | 24.0 |
| 6 | Mean-reversion (OU) | 57 | **83** | 90 | 0.50 | 50 | 26% | 25.2 |
| 7 | GBM (normal) | 56 | **85** | 93 | 0.54 | 52 | 25% | 25.3 |
| 8 | GBM + Student-t | 54 | **84** | 92 | 0.55 | 52 | 24% | 25.5 |
| 9 | Ensemble (GBM-t + bootstraps) | 58 | **88** | 94 | 0.53 | 49 | 25% | 25.9 |
| 10 | Bootstrap (IID) | 59 | **90** | 95 | 0.52 | 52 | 26% | 30.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 47 | **76** | 84 | 0.53 | 46 | 35% | 22.3 |
| 2 | Block bootstrap | 55 | **85** | 93 | 0.52 | 45 | 35% | 22.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 50 | **80** | 88 | 0.55 | 54 | — | 23.0 |
| 4 | GBM + Student-t | 54 | **81** | 90 | 0.55 | 52 | 33% | 23.3 |
| 5 | GBM (normal) | 56 | **82** | 90 | 0.55 | 52 | 35% | 25.0 |
| 6 | EWMA vol, zero drift (t) | 58 | **84** | 90 | 0.49 | 49 | 34% | 26.0 |
| 7 | Ensemble (GBM-t + bootstraps) | 57 | **87** | 95 | 0.53 | 51 | 35% | 26.9 |
| 8 | GARCH(1,1)-lite | 54 | **82** | 91 | 0.56 | 52 | 34% | 26.9 |
| 9 | Mean-reversion (OU) | 53 | **80** | 86 | 0.50 | 51 | 35% | 27.6 |
| 10 | Bootstrap (IID) | 59 | **89** | 95 | 0.53 | 52 | 37% | 32.3 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 56 | **82** | 91 | 0.54 | 53 | 51% | 34.0 |
| 2 | GBM + Student-t | 50 | **76** | 83 | 0.56 | 55 | 47% | 34.1 |
| 3 | GBM (normal) | 50 | **76** | 85 | 0.57 | 55 | 48% | 35.2 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 52 | **80** | 86 | 0.57 | 55 | — | 36.2 |
| 5 | Bootstrap (IID) | 57 | **85** | 93 | 0.54 | 54 | 54% | 36.2 |
| 6 | GARCH(1,1)-lite | 50 | **81** | 90 | 0.57 | 55 | 48% | 37.0 |
| 7 | Ensemble (GBM-t + bootstraps) | 61 | **87** | 95 | 0.54 | 55 | 61% | 37.3 |
| 8 | EWMA vol, zero drift (t) | 61 | **77** | 84 | 0.48 | 54 | 51% | 38.8 |
| 9 | Mean-reversion (OU) | 50 | **70** | 78 | 0.49 | 53 | 57% | 43.9 |
| 10 | Momentum | 40 | **64** | 76 | 0.53 | 46 | 49% | 47.6 |

## Winner consistency — `block_boot` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 90% / 0.51 / 34% / 22.1 | 83% / 0.52 / 32% / 12.1 | 71% / 0.55 / 33% / 32.1 |
| ETH | 84% / 0.5 / 38% / 12.5 | 89% / 0.5 / 36% / 29.4 | 90% / 0.52 / 41% / 29.2 |
| SOL | 88% / 0.52 / 44% / 25.1 | 89% / 0.54 / 30% / 25.1 | 92% / 0.54 / 65% / 32.5 |
| BNB | 92% / 0.48 / 34% / 25.7 | 91% / 0.5 / 34% / 27.5 | 95% / 0.55 / 51% / 51.5 |
| XRP | 92% / 0.51 / 52% / 24.6 | 91% / 0.49 / 55% / 36.6 | 92% / 0.5 / 68% / 38.8 |
| SUI | 88% / 0.52 / 56% / 23.1 | 87% / 0.53 / 51% / 23.7 | 83% / 0.54 / 56% / 29 |
| AVAX | 92% / 0.5 / 52% / 28.4 | 85% / 0.5 / 47% / 22.7 | 78% / 0.49 / 59% / 24.4 |
| LINK | 96% / 0.51 / 40% / 26.6 | 89% / 0.53 / 49% / 25.9 | 89% / 0.55 / 46% / 31.9 |
| INJ | 82% / 0.6 / 44% / 27.2 | 72% / 0.62 / 36% / 45.6 | 63% / 0.68 / 35% / 71.5 |
| OP | 84% / 0.51 / 50% / 15.5 | 79% / 0.49 / 55% / 15.3 | 87% / 0.53 / 62% / 29.5 |
| ARB | 82% / 0.52 / 54% / 7.2 | 81% / 0.5 / 60% / 3.8 | 73% / 0.54 / 65% / 30.3 |
| DOGE | 90% / 0.51 / 50% / 22.9 | 85% / 0.5 / 57% / 12 | 83% / 0.53 / 52% / 16.8 |
| TIA | 84% / 0.55 / 38% / 20.9 | 77% / 0.58 / 34% / 29.1 | 86% / 0.6 / 43% / 38.1 |
| APT | 88% / 0.51 / 50% / 30.1 | 83% / 0.51 / 60% / 7.8 | 71% / 0.5 / 71% / 20.1 |

Coins: BTC (binance), ETH (binance), SOL (binance), BNB (binance), XRP (binance), SUI (binance), AVAX (binance), LINK (binance), INJ (binance), OP (binance), ARB (binance), DOGE (binance), TIA (binance), APT (binance)
