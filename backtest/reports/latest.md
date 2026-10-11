# CoinPulse Strategy Tournament — 2026-10-11

_Generated 2026-10-11T15:29:16.384Z · 14 coins · 300 samples/window · 12.0s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_normal` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 30.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 35.9 |
| 3 | EWMA vol, zero drift (t) | 37.9 |
| 4 | GBM (normal) | 39.1 |
| 5 | GBM + Student-t | 40.3 |
| 6 | Block bootstrap | 40.6 |
| 7 | Bootstrap (IID) | 40.7 |
| 8 | GARCH(1,1)-lite | 43.2 |
| 9 | Momentum | 45.1 |
| 10 | Mean-reversion (OU) | 66.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 52 | **78** | 86 | 0.49 | 45 | 23% | 20.8 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 60 | **82** | 88 | 0.50 | 43 | — | 21.2 |
| 3 | GBM + Student-t | 52 | **77** | 85 | 0.49 | 45 | 22% | 21.5 |
| 4 | EWMA vol, zero drift (t) | 53 | **77** | 85 | 0.49 | 54 | 22% | 22.2 |
| 5 | Ensemble (GBM-t + bootstraps) | 49 | **75** | 84 | 0.49 | 48 | 22% | 23.4 |
| 6 | GARCH(1,1)-lite | 50 | **75** | 83 | 0.49 | 48 | 21% | 24.4 |
| 7 | Block bootstrap | 47 | **72** | 84 | 0.48 | 47 | 21% | 25.2 |
| 8 | Momentum | 47 | **73** | 83 | 0.48 | 51 | 23% | 26.2 |
| 9 | Bootstrap (IID) | 50 | **72** | 83 | 0.49 | 50 | 21% | 26.8 |
| 10 | Mean-reversion (OU) | 47 | **69** | 78 | 0.47 | 46 | 20% | 36.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 61 | **82** | 88 | 0.52 | 45 | — | 29.2 |
| 2 | GBM (normal) | 52 | **74** | 82 | 0.54 | 43 | 32% | 31.9 |
| 3 | EWMA vol, zero drift (t) | 50 | **76** | 83 | 0.53 | 53 | 31% | 31.9 |
| 4 | GBM + Student-t | 49 | **73** | 82 | 0.54 | 44 | 31% | 32.7 |
| 5 | Ensemble (GBM-t + bootstraps) | 49 | **72** | 82 | 0.53 | 46 | 31% | 33.6 |
| 6 | Block bootstrap | 49 | **73** | 80 | 0.52 | 43 | 31% | 34.4 |
| 7 | Bootstrap (IID) | 49 | **73** | 81 | 0.53 | 40 | 31% | 34.4 |
| 8 | GARCH(1,1)-lite | 46 | **72** | 82 | 0.54 | 42 | 30% | 35.2 |
| 9 | Momentum | 44 | **69** | 82 | 0.53 | 51 | 33% | 35.4 |
| 10 | Mean-reversion (OU) | 40 | **63** | 72 | 0.51 | 45 | 25% | 57.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **76** | 85 | 0.56 | 39 | — | 41.9 |
| 2 | Ensemble (GBM-t + bootstraps) | 48 | **69** | 79 | 0.57 | 39 | 54% | 50.9 |
| 3 | EWMA vol, zero drift (t) | 43 | **65** | 73 | 0.57 | 45 | 44% | 59.7 |
| 4 | Bootstrap (IID) | 41 | **64** | 72 | 0.57 | 37 | 45% | 60.8 |
| 5 | Block bootstrap | 43 | **64** | 70 | 0.56 | 40 | 46% | 62.3 |
| 6 | GBM (normal) | 41 | **63** | 72 | 0.59 | 37 | 44% | 64.6 |
| 7 | GBM + Student-t | 40 | **62** | 71 | 0.59 | 35 | 44% | 66.7 |
| 8 | GARCH(1,1)-lite | 38 | **62** | 70 | 0.59 | 35 | 42% | 70.1 |
| 9 | Momentum | 33 | **58** | 72 | 0.58 | 53 | 45% | 73.6 |
| 10 | Mean-reversion (OU) | 29 | **48** | 54 | 0.54 | 49 | 31% | 105.3 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 85% / 0.5 / 39% / 19.6 | 80% / 0.52 / 34% / 21 | 59% / 0.57 / 30% / 61.5 |
| ETH | 81% / 0.52 / 41% / 18.6 | 76% / 0.54 / 37% / 31.4 | 62% / 0.6 / 25% / 50.4 |
| SOL | 80% / 0.53 / 47% / 26.2 | 80% / 0.56 / 48% / 21.8 | 75% / 0.63 / 46% / 45.2 |
| BNB | 85% / 0.54 / 39% / 32.4 | 86% / 0.57 / 48% / 36.9 | 75% / 0.59 / 35% / 35.6 |
| XRP | 85% / 0.47 / 45% / 23.7 | 80% / 0.48 / 46% / 23 | 67% / 0.55 / 49% / 46.8 |
| SUI | 86% / 0.5 / 45% / 16 | 83% / 0.53 / 41% / 22.2 | 86% / 0.57 / 35% / 33.9 |
| AVAX | 84% / 0.51 / 47% / 28.8 | 76% / 0.55 / 35% / 34 | 63% / 0.59 / 35% / 56 |
| LINK | 82% / 0.54 / 41% / 16.1 | 76% / 0.55 / 46% / 21.9 | 76% / 0.61 / 30% / 33.2 |
| INJ | 84% / 0.49 / 57% / 22.4 | 94% / 0.49 / 56% / 33.8 | 98% / 0.47 / 59% / 46 |
| OP | 81% / 0.48 / 39% / 24.3 | 89% / 0.49 / 37% / 36.1 | 95% / 0.51 / 33% / 38.8 |
| ARB | 70% / 0.48 / 35% / 21.7 | 73% / 0.52 / 46% / 24.3 | 65% / 0.58 / 24% / 49.4 |
| DOGE | 82% / 0.46 / 41% / 24.9 | 79% / 0.46 / 48% / 26.2 | 65% / 0.49 / 41% / 25.9 |
| TIA | 86% / 0.49 / 43% / 9.5 | 92% / 0.49 / 51% / 41.8 | 98% / 0.5 / 46% / 48.6 |
| APT | 81% / 0.52 / 50% / 12.5 | 86% / 0.54 / 56% / 34.6 | 79% / 0.56 / 59% / 15.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
