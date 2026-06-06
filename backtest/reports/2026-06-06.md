# CoinPulse Strategy Tournament — 2026-06-06

_Generated 2026-06-06T19:39:15.802Z · 14 coins · 300 samples/window · 10.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`live_engine` · 14d→`gbm_normal` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 26.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 26.4 |
| 3 | GBM (normal) | 26.9 |
| 4 | GBM + Student-t | 27.4 |
| 5 | Block bootstrap | 27.4 |
| 6 | Bootstrap (IID) | 27.8 |
| 7 | GARCH(1,1)-lite | 28.3 |
| 8 | EWMA vol, zero drift (t) | 33.7 |
| 9 | Momentum | 35.9 |
| 10 | Mean-reversion (OU) | 51.4 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **82** | 90 | 0.49 | 59 | — | 19.5 |
| 2 | GBM + Student-t | 53 | **79** | 87 | 0.49 | 57 | 24% | 19.9 |
| 3 | GARCH(1,1)-lite | 53 | **78** | 88 | 0.49 | 55 | 23% | 20.5 |
| 4 | Block bootstrap | 55 | **82** | 90 | 0.47 | 55 | 24% | 20.6 |
| 5 | GBM (normal) | 56 | **81** | 88 | 0.49 | 57 | 25% | 20.8 |
| 6 | Ensemble (GBM-t + bootstraps) | 57 | **81** | 90 | 0.48 | 54 | 25% | 22.2 |
| 7 | Momentum | 51 | **77** | 87 | 0.46 | 52 | 25% | 23.8 |
| 8 | Bootstrap (IID) | 60 | **84** | 90 | 0.48 | 54 | 26% | 25.1 |
| 9 | EWMA vol, zero drift (t) | 55 | **80** | 87 | 0.45 | 57 | 24% | 26.1 |
| 10 | Mean-reversion (OU) | 55 | **75** | 82 | 0.45 | 47 | 24% | 36.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 51 | **77** | 86 | 0.50 | 58 | 35% | 21.9 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 52 | **79** | 87 | 0.50 | 58 | — | 22.1 |
| 3 | GBM + Student-t | 47 | **76** | 86 | 0.50 | 58 | 33% | 22.3 |
| 4 | Ensemble (GBM-t + bootstraps) | 50 | **79** | 88 | 0.49 | 54 | 35% | 23.1 |
| 5 | Block bootstrap | 51 | **78** | 88 | 0.48 | 52 | 34% | 23.6 |
| 6 | GARCH(1,1)-lite | 46 | **77** | 86 | 0.50 | 57 | 33% | 24.4 |
| 7 | Bootstrap (IID) | 54 | **83** | 88 | 0.48 | 55 | 37% | 24.7 |
| 8 | EWMA vol, zero drift (t) | 50 | **78** | 86 | 0.44 | 49 | 35% | 28.5 |
| 9 | Momentum | 44 | **69** | 82 | 0.46 | 46 | 35% | 35.7 |
| 10 | Mean-reversion (OU) | 47 | **71** | 78 | 0.43 | 52 | 31% | 43.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 58 | **78** | 85 | 0.49 | 54 | 60% | 32.9 |
| 2 | Bootstrap (IID) | 52 | **74** | 81 | 0.50 | 53 | 53% | 33.5 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 47 | **70** | 80 | 0.53 | 56 | — | 37.7 |
| 4 | Block bootstrap | 50 | **71** | 78 | 0.49 | 53 | 48% | 38.1 |
| 5 | GBM (normal) | 48 | **70** | 79 | 0.52 | 57 | 49% | 38.1 |
| 6 | GBM + Student-t | 47 | **69** | 77 | 0.53 | 56 | 48% | 39.9 |
| 7 | GARCH(1,1)-lite | 46 | **69** | 78 | 0.53 | 55 | 48% | 40.0 |
| 8 | EWMA vol, zero drift (t) | 57 | **71** | 77 | 0.44 | 59 | 52% | 46.4 |
| 9 | Momentum | 41 | **64** | 75 | 0.50 | 46 | 50% | 48.2 |
| 10 | Mean-reversion (OU) | 46 | **62** | 65 | 0.39 | 51 | 38% | 74.3 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.47 / 48% / 16.8 | 79% / 0.47 / 48% / 12 | 75% / 0.49 / 37% / 22.6 |
| ETH | 84% / 0.45 / 58% / 32.3 | 79% / 0.44 / 56% / 22.2 | 75% / 0.46 / 41% / 38.4 |
| SOL | 76% / 0.46 / 50% / 31 | 79% / 0.46 / 45% / 14.7 | 76% / 0.45 / 60% / 40.4 |
| BNB | 84% / 0.5 / 50% / 10.6 | 85% / 0.49 / 53% / 14.2 | 79% / 0.47 / 41% / 32.6 |
| XRP | 90% / 0.47 / 62% / 34.7 | 85% / 0.46 / 62% / 22.3 | 84% / 0.44 / 65% / 41 |
| SUI | 78% / 0.46 / 54% / 14.8 | 79% / 0.47 / 47% / 17.5 | 83% / 0.48 / 48% / 22.7 |
| AVAX | 86% / 0.46 / 56% / 28.2 | 85% / 0.47 / 49% / 23.2 | 86% / 0.47 / 59% / 36.7 |
| LINK | 80% / 0.47 / 52% / 26.3 | 83% / 0.47 / 54% / 22.5 | 79% / 0.49 / 44% / 15 |
| INJ | 82% / 0.58 / 48% / 23.9 | 71% / 0.61 / 46% / 47.3 | 65% / 0.62 / 49% / 53.5 |
| OP | 72% / 0.49 / 56% / 18.8 | 70% / 0.46 / 66% / 29.3 | 70% / 0.45 / 67% / 34.4 |
| ARB | 70% / 0.46 / 64% / 30.8 | 68% / 0.45 / 60% / 42 | 59% / 0.48 / 63% / 48.8 |
| DOGE | 90% / 0.48 / 52% / 19.4 | 85% / 0.49 / 57% / 17.2 | 90% / 0.51 / 59% / 30.5 |
| TIA | 78% / 0.52 / 56% / 10.3 | 74% / 0.55 / 49% / 21.6 | 89% / 0.58 / 52% / 33 |
| APT | 84% / 0.5 / 54% / 13 | 81% / 0.53 / 62% / 17.1 | 78% / 0.52 / 65% / 11.2 |

Coins: BTC (cryptocompare), ETH (cryptocompare), SOL (binance), BNB (binance), XRP (binance), SUI (binance), AVAX (binance), LINK (cryptocompare), INJ (cryptocompare), OP (binance), ARB (binance), DOGE (binance), TIA (binance), APT (binance)
