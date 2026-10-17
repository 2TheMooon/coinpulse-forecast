# CoinPulse Strategy Tournament — 2026-10-17

_Generated 2026-10-17T12:49:07.750Z · 14 coins · 300 samples/window · 7.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`block_boot` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 32.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 34.5 |
| 3 | EWMA vol, zero drift (t) | 36.6 |
| 4 | Block bootstrap | 38.0 |
| 5 | Bootstrap (IID) | 38.5 |
| 6 | GBM (normal) | 38.6 |
| 7 | GBM + Student-t | 39.5 |
| 8 | GARCH(1,1)-lite | 41.3 |
| 9 | Momentum | 42.8 |
| 10 | Mean-reversion (OU) | 66.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 48 | **77** | 86 | 0.48 | 49 | 22% | 19.9 |
| 2 | GBM (normal) | 55 | **80** | 86 | 0.49 | 44 | 23% | 20.0 |
| 3 | GBM + Student-t | 52 | **78** | 86 | 0.50 | 48 | 23% | 20.2 |
| 4 | EWMA vol, zero drift (t) | 53 | **79** | 86 | 0.50 | 56 | 23% | 20.2 |
| 5 | GARCH(1,1)-lite | 51 | **78** | 85 | 0.49 | 50 | 22% | 20.4 |
| 6 | Ensemble (GBM-t + bootstraps) | 50 | **77** | 87 | 0.49 | 50 | 22% | 20.5 |
| 7 | Momentum | 48 | **76** | 84 | 0.49 | 53 | 24% | 22.0 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 62 | **84** | 89 | 0.51 | 44 | — | 22.2 |
| 9 | Bootstrap (IID) | 50 | **76** | 85 | 0.49 | 43 | 22% | 22.7 |
| 10 | Mean-reversion (OU) | 49 | **69** | 78 | 0.48 | 48 | 20% | 36.2 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 63 | **83** | 88 | 0.53 | 44 | — | 30.1 |
| 2 | GBM (normal) | 53 | **77** | 83 | 0.55 | 45 | 33% | 31.2 |
| 3 | Ensemble (GBM-t + bootstraps) | 49 | **75** | 83 | 0.53 | 46 | 32% | 31.8 |
| 4 | GBM + Student-t | 51 | **75** | 83 | 0.55 | 45 | 32% | 31.8 |
| 5 | EWMA vol, zero drift (t) | 51 | **77** | 84 | 0.54 | 50 | 32% | 31.8 |
| 6 | Momentum | 44 | **71** | 83 | 0.53 | 51 | 34% | 32.8 |
| 7 | Bootstrap (IID) | 51 | **74** | 82 | 0.53 | 44 | 31% | 33.2 |
| 8 | Block bootstrap | 50 | **73** | 81 | 0.52 | 44 | 32% | 33.3 |
| 9 | GARCH(1,1)-lite | 50 | **74** | 81 | 0.55 | 44 | 31% | 35.2 |
| 10 | Mean-reversion (OU) | 41 | **64** | 72 | 0.52 | 47 | 26% | 57.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **79** | 88 | 0.58 | 40 | — | 44.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 51 | **71** | 81 | 0.60 | 37 | 55% | 51.2 |
| 3 | EWMA vol, zero drift (t) | 45 | **67** | 75 | 0.61 | 43 | 44% | 57.8 |
| 4 | Bootstrap (IID) | 44 | **67** | 75 | 0.60 | 39 | 46% | 59.6 |
| 5 | Block bootstrap | 44 | **66** | 75 | 0.59 | 42 | 48% | 60.9 |
| 6 | GBM (normal) | 42 | **66** | 74 | 0.62 | 38 | 45% | 64.7 |
| 7 | GBM + Student-t | 42 | **65** | 73 | 0.62 | 35 | 44% | 66.5 |
| 8 | GARCH(1,1)-lite | 41 | **64** | 73 | 0.62 | 36 | 43% | 68.3 |
| 9 | Momentum | 35 | **60** | 75 | 0.62 | 56 | 46% | 73.7 |
| 10 | Mean-reversion (OU) | 30 | **48** | 56 | 0.57 | 46 | 31% | 106.1 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.51 / 39% / 23.2 | 80% / 0.52 / 34% / 26.8 | 63% / 0.6 / 35% / 65.3 |
| ETH | 84% / 0.53 / 47% / 25 | 80% / 0.55 / 44% / 27.6 | 68% / 0.64 / 38% / 44.5 |
| SOL | 80% / 0.52 / 35% / 23.4 | 80% / 0.55 / 35% / 25.8 | 79% / 0.64 / 37% / 43.9 |
| BNB | 85% / 0.53 / 36% / 32 | 86% / 0.56 / 45% / 32.5 | 78% / 0.6 / 35% / 37.6 |
| XRP | 86% / 0.47 / 47% / 25.8 | 82% / 0.49 / 44% / 27.6 | 71% / 0.57 / 52% / 46.7 |
| SUI | 86% / 0.5 / 43% / 17.4 | 82% / 0.53 / 39% / 25.2 | 87% / 0.6 / 33% / 41.4 |
| AVAX | 85% / 0.52 / 49% / 34.8 | 76% / 0.56 / 38% / 40.5 | 63% / 0.64 / 37% / 65.7 |
| LINK | 84% / 0.54 / 41% / 14.9 | 79% / 0.56 / 46% / 18.9 | 81% / 0.64 / 35% / 30.6 |
| INJ | 84% / 0.49 / 55% / 20 | 94% / 0.48 / 56% / 33.9 | 95% / 0.48 / 59% / 40.2 |
| OP | 84% / 0.5 / 45% / 25.7 | 90% / 0.51 / 39% / 42.5 | 97% / 0.55 / 30% / 51.6 |
| ARB | 74% / 0.5 / 36% / 14.6 | 76% / 0.54 / 46% / 19.1 | 70% / 0.6 / 29% / 50.5 |
| DOGE | 82% / 0.46 / 43% / 24 | 80% / 0.47 / 48% / 23.7 | 70% / 0.52 / 43% / 25.7 |
| TIA | 86% / 0.51 / 54% / 13 | 92% / 0.51 / 61% / 39.1 | 97% / 0.52 / 59% / 52.6 |
| APT | 82% / 0.52 / 50% / 16.8 | 86% / 0.53 / 44% / 38.8 | 79% / 0.57 / 44% / 25.3 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
