# CoinPulse Strategy Tournament — 2026-10-23

_Generated 2026-10-23T14:08:32.036Z · 14 coins · 300 samples/window · 8.9s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`ensemble` · 14d→`ewma_t_zero` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 34.3 |
| 2 | EWMA vol, zero drift (t) | 35.1 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 35.2 |
| 4 | Block bootstrap | 38.0 |
| 5 | Bootstrap (IID) | 38.3 |
| 6 | GBM (normal) | 38.4 |
| 7 | GBM + Student-t | 39.2 |
| 8 | GARCH(1,1)-lite | 41.4 |
| 9 | Momentum | 41.8 |
| 10 | Mean-reversion (OU) | 67.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 51 | **78** | 87 | 0.49 | 51 | 23% | 17.3 |
| 2 | GBM (normal) | 54 | **80** | 87 | 0.50 | 54 | 24% | 17.6 |
| 3 | GARCH(1,1)-lite | 51 | **76** | 86 | 0.50 | 48 | 22% | 18.0 |
| 4 | GBM + Student-t | 54 | **79** | 87 | 0.51 | 53 | 23% | 18.0 |
| 5 | Block bootstrap | 48 | **76** | 85 | 0.49 | 49 | 22% | 18.5 |
| 6 | EWMA vol, zero drift (t) | 54 | **79** | 87 | 0.50 | 54 | 23% | 19.7 |
| 7 | Momentum | 48 | **76** | 83 | 0.49 | 53 | 24% | 20.5 |
| 8 | Bootstrap (IID) | 52 | **75** | 84 | 0.49 | 54 | 22% | 21.4 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 61 | **84** | 89 | 0.51 | 45 | — | 22.3 |
| 10 | Mean-reversion (OU) | 49 | **68** | 77 | 0.49 | 46 | 20% | 38.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 52 | **76** | 84 | 0.54 | 49 | 32% | 31.6 |
| 2 | Ensemble (GBM-t + bootstraps) | 50 | **76** | 83 | 0.55 | 45 | 32% | 32.5 |
| 3 | GBM (normal) | 54 | **77** | 84 | 0.56 | 48 | 33% | 33.6 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 65 | **84** | 89 | 0.54 | 47 | — | 33.8 |
| 5 | Block bootstrap | 51 | **75** | 82 | 0.54 | 45 | 33% | 34.0 |
| 6 | Bootstrap (IID) | 51 | **75** | 83 | 0.55 | 48 | 31% | 34.3 |
| 7 | GBM + Student-t | 51 | **74** | 83 | 0.56 | 46 | 32% | 34.3 |
| 8 | Momentum | 45 | **70** | 83 | 0.53 | 50 | 34% | 34.3 |
| 9 | GARCH(1,1)-lite | 49 | **75** | 82 | 0.56 | 48 | 31% | 36.5 |
| 10 | Mean-reversion (OU) | 42 | **63** | 72 | 0.54 | 45 | 26% | 58.3 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 60 | **80** | 88 | 0.61 | 42 | — | 49.5 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **74** | 81 | 0.62 | 40 | 55% | 53.0 |
| 3 | EWMA vol, zero drift (t) | 48 | **70** | 77 | 0.62 | 42 | 45% | 54.0 |
| 4 | Bootstrap (IID) | 45 | **70** | 78 | 0.62 | 40 | 46% | 59.1 |
| 5 | Block bootstrap | 47 | **69** | 77 | 0.62 | 42 | 48% | 61.3 |
| 6 | GBM (normal) | 45 | **68** | 76 | 0.65 | 38 | 46% | 63.9 |
| 7 | GBM + Student-t | 44 | **67** | 75 | 0.65 | 36 | 45% | 65.4 |
| 8 | GARCH(1,1)-lite | 42 | **66** | 74 | 0.65 | 37 | 43% | 69.8 |
| 9 | Momentum | 37 | **64** | 75 | 0.63 | 54 | 48% | 70.6 |
| 10 | Mean-reversion (OU) | 31 | **50** | 58 | 0.61 | 43 | 32% | 106.7 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.5 / 46% / 16.8 | 74% / 0.57 / 34% / 37.7 | 68% / 0.65 / 33% / 72 |
| ETH | 80% / 0.52 / 48% / 11.7 | 72% / 0.59 / 38% / 47.8 | 63% / 0.69 / 25% / 76.3 |
| SOL | 72% / 0.52 / 54% / 26.6 | 64% / 0.58 / 36% / 57.5 | 71% / 0.67 / 41% / 61.2 |
| BNB | 86% / 0.52 / 48% / 12.2 | 81% / 0.56 / 40% / 21.3 | 68% / 0.61 / 46% / 50.5 |
| XRP | 78% / 0.45 / 58% / 15.6 | 77% / 0.5 / 60% / 16.7 | 70% / 0.59 / 46% / 63.7 |
| SUI | 78% / 0.49 / 60% / 5.4 | 83% / 0.55 / 47% / 16.8 | 81% / 0.64 / 41% / 37.9 |
| AVAX | 84% / 0.5 / 52% / 16.1 | 70% / 0.57 / 40% / 40.7 | 57% / 0.67 / 43% / 87.7 |
| LINK | 70% / 0.51 / 44% / 24.7 | 72% / 0.58 / 47% / 44.7 | 73% / 0.69 / 44% / 65.1 |
| INJ | 72% / 0.46 / 44% / 26.6 | 85% / 0.49 / 51% / 16.5 | 84% / 0.5 / 59% / 14.3 |
| OP | 82% / 0.47 / 66% / 19.2 | 85% / 0.54 / 47% / 31.9 | 90% / 0.59 / 37% / 47 |
| ARB | 68% / 0.5 / 52% / 22.6 | 64% / 0.59 / 43% / 54.1 | 70% / 0.65 / 21% / 56.5 |
| DOGE | 76% / 0.43 / 62% / 19 | 72% / 0.47 / 57% / 23.4 | 70% / 0.53 / 44% / 29.5 |
| TIA | 80% / 0.5 / 38% / 8.8 | 83% / 0.55 / 28% / 20 | 92% / 0.57 / 33% / 40.9 |
| APT | 76% / 0.48 / 46% / 16.5 | 81% / 0.53 / 57% / 25.4 | 73% / 0.58 / 46% / 39.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
