# CoinPulse Strategy Tournament — 2026-11-23

_Generated 2026-11-23T21:01:32.292Z · 14 coins · 300 samples/window · 15.6s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (EWMA vol, zero drift (t)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ewma_t_zero** · by horizon: 7d→`momentum` · 14d→`ewma_t_zero` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 31.6 |
| 2 | Momentum | 33.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 34.0 |
| 4 | Ensemble (GBM-t + bootstraps) | 34.9 |
| 5 | Block bootstrap | 40.5 |
| 6 | Bootstrap (IID) | 42.3 |
| 7 | GBM (normal) | 44.1 |
| 8 | GARCH(1,1)-lite | 45.8 |
| 9 | GBM + Student-t | 46.3 |
| 10 | Mean-reversion (OU) | 64.1 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **77** | 85 | 0.49 | 56 | 24% | 17.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 48 | **75** | 84 | 0.51 | 52 | 23% | 18.6 |
| 3 | EWMA vol, zero drift (t) | 49 | **76** | 84 | 0.50 | 44 | 23% | 19.3 |
| 4 | Bootstrap (IID) | 48 | **75** | 83 | 0.51 | 50 | 23% | 19.7 |
| 5 | GARCH(1,1)-lite | 48 | **76** | 83 | 0.52 | 51 | 22% | 19.9 |
| 6 | GBM (normal) | 51 | **77** | 84 | 0.52 | 50 | 24% | 20.2 |
| 7 | Block bootstrap | 47 | **74** | 84 | 0.51 | 55 | 23% | 20.8 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 62 | **85** | 91 | 0.51 | 50 | — | 22.8 |
| 9 | GBM + Student-t | 50 | **74** | 84 | 0.53 | 49 | 23% | 23.3 |
| 10 | Mean-reversion (OU) | 46 | **72** | 80 | 0.52 | 53 | 20% | 29.2 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 51 | **76** | 85 | 0.54 | 49 | 33% | 27.5 |
| 2 | Momentum | 47 | **73** | 83 | 0.53 | 55 | 35% | 27.8 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 59 | **83** | 89 | 0.55 | 44 | — | 29.5 |
| 4 | Ensemble (GBM-t + bootstraps) | 49 | **75** | 84 | 0.56 | 49 | 33% | 32.2 |
| 5 | Bootstrap (IID) | 48 | **75** | 83 | 0.55 | 48 | 32% | 32.5 |
| 6 | Block bootstrap | 51 | **74** | 82 | 0.55 | 51 | 34% | 33.0 |
| 7 | GBM (normal) | 51 | **75** | 82 | 0.58 | 48 | 34% | 35.4 |
| 8 | GARCH(1,1)-lite | 47 | **73** | 82 | 0.57 | 51 | 31% | 36.8 |
| 9 | GBM + Student-t | 49 | **73** | 82 | 0.57 | 46 | 33% | 37.5 |
| 10 | Mean-reversion (OU) | 43 | **68** | 76 | 0.57 | 56 | 25% | 50.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 46 | **69** | 78 | 0.58 | 49 | 48% | 48.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 48 | **77** | 86 | 0.61 | 34 | — | 49.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 43 | **70** | 82 | 0.61 | 38 | 58% | 54.0 |
| 4 | Momentum | 36 | **63** | 75 | 0.54 | 50 | 55% | 55.3 |
| 5 | Block bootstrap | 37 | **64** | 74 | 0.60 | 40 | 50% | 67.7 |
| 6 | Bootstrap (IID) | 35 | **63** | 73 | 0.61 | 36 | 46% | 74.7 |
| 7 | GBM (normal) | 36 | **62** | 74 | 0.64 | 38 | 48% | 76.8 |
| 8 | GBM + Student-t | 36 | **63** | 72 | 0.64 | 40 | 47% | 78.0 |
| 9 | GARCH(1,1)-lite | 32 | **61** | 73 | 0.63 | 40 | 44% | 80.8 |
| 10 | Mean-reversion (OU) | 29 | **48** | 58 | 0.64 | 52 | 29% | 112.2 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 80% / 0.5 / 42% / 11 | 77% / 0.54 / 43% / 21.9 | 67% / 0.61 / 44% / 59 |
| ETH | 78% / 0.51 / 48% / 17.5 | 74% / 0.54 / 49% / 27.4 | 54% / 0.58 / 40% / 73.3 |
| SOL | 72% / 0.5 / 40% / 22.1 | 60% / 0.51 / 53% / 40.8 | 57% / 0.57 / 51% / 73.7 |
| BNB | 80% / 0.52 / 50% / 10.2 | 79% / 0.57 / 49% / 24.2 | 65% / 0.61 / 46% / 68.1 |
| XRP | 78% / 0.46 / 48% / 16.8 | 77% / 0.46 / 55% / 25.1 | 63% / 0.52 / 54% / 46.2 |
| SUI | 74% / 0.49 / 42% / 17.3 | 79% / 0.52 / 57% / 20.2 | 76% / 0.58 / 52% / 26.9 |
| AVAX | 82% / 0.5 / 46% / 8.8 | 77% / 0.54 / 53% / 30.7 | 65% / 0.62 / 56% / 56.9 |
| LINK | 70% / 0.55 / 42% / 30.4 | 72% / 0.59 / 49% / 30.8 | 67% / 0.64 / 37% / 77.4 |
| INJ | 82% / 0.55 / 42% / 18.2 | 85% / 0.62 / 28% / 32.3 | 76% / 0.66 / 33% / 47.3 |
| OP | 76% / 0.48 / 44% / 15.3 | 81% / 0.52 / 55% / 13.4 | 84% / 0.54 / 56% / 25.2 |
| ARB | 72% / 0.53 / 48% / 27.4 | 66% / 0.6 / 45% / 52.7 | 73% / 0.64 / 46% / 49.1 |
| DOGE | 76% / 0.44 / 50% / 26.6 | 79% / 0.46 / 60% / 17.7 | 70% / 0.5 / 63% / 21.7 |
| TIA | 80% / 0.5 / 40% / 12.6 | 85% / 0.55 / 43% / 30.7 | 78% / 0.59 / 46% / 29.1 |
| APT | 68% / 0.47 / 40% / 36 | 81% / 0.49 / 49% / 17 | 73% / 0.52 / 60% / 19 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
