# CoinPulse Strategy Tournament — 2026-10-22

_Generated 2026-10-22T14:26:04.986Z · 14 coins · 300 samples/window · 10.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`gbm_t` · 14d→`ensemble` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 29.9 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 32.5 |
| 3 | Bootstrap (IID) | 32.9 |
| 4 | EWMA vol, zero drift (t) | 33.9 |
| 5 | Block bootstrap | 33.9 |
| 6 | GBM + Student-t | 34.2 |
| 7 | GBM (normal) | 34.6 |
| 8 | GARCH(1,1)-lite | 35.4 |
| 9 | Momentum | 37.8 |
| 10 | Mean-reversion (OU) | 63.1 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 52 | **79** | 87 | 0.51 | 48 | 23% | 14.9 |
| 2 | GARCH(1,1)-lite | 52 | **78** | 86 | 0.50 | 43 | 22% | 15.0 |
| 3 | Ensemble (GBM-t + bootstraps) | 51 | **79** | 86 | 0.49 | 47 | 23% | 15.1 |
| 4 | Bootstrap (IID) | 52 | **77** | 87 | 0.49 | 49 | 23% | 15.6 |
| 5 | GBM (normal) | 54 | **80** | 86 | 0.50 | 49 | 24% | 15.9 |
| 6 | Block bootstrap | 49 | **77** | 86 | 0.49 | 49 | 22% | 16.5 |
| 7 | Momentum | 48 | **77** | 86 | 0.50 | 52 | 24% | 17.2 |
| 8 | EWMA vol, zero drift (t) | 54 | **79** | 87 | 0.51 | 57 | 23% | 19.2 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 60 | **86** | 91 | 0.50 | 46 | — | 21.7 |
| 10 | Mean-reversion (OU) | 49 | **70** | 78 | 0.48 | 48 | 20% | 35.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 54 | **77** | 85 | 0.52 | 46 | 33% | 26.1 |
| 2 | Bootstrap (IID) | 53 | **78** | 84 | 0.51 | 46 | 32% | 26.3 |
| 3 | GBM + Student-t | 52 | **76** | 84 | 0.53 | 43 | 33% | 26.3 |
| 4 | GARCH(1,1)-lite | 51 | **76** | 83 | 0.53 | 45 | 31% | 26.5 |
| 5 | EWMA vol, zero drift (t) | 54 | **77** | 85 | 0.52 | 48 | 33% | 26.7 |
| 6 | GBM (normal) | 55 | **78** | 84 | 0.53 | 45 | 34% | 26.9 |
| 7 | Block bootstrap | 53 | **76** | 84 | 0.51 | 46 | 33% | 27.0 |
| 8 | Momentum | 44 | **74** | 85 | 0.51 | 52 | 35% | 27.2 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 64 | **83** | 88 | 0.52 | 43 | — | 30.8 |
| 10 | Mean-reversion (OU) | 42 | **64** | 74 | 0.50 | 46 | 26% | 51.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 60 | **81** | 89 | 0.59 | 40 | — | 45.1 |
| 2 | Ensemble (GBM-t + bootstraps) | 54 | **75** | 84 | 0.60 | 39 | 57% | 48.4 |
| 3 | EWMA vol, zero drift (t) | 48 | **69** | 77 | 0.62 | 42 | 45% | 55.7 |
| 4 | Bootstrap (IID) | 48 | **69** | 78 | 0.60 | 40 | 47% | 56.7 |
| 5 | Block bootstrap | 49 | **69** | 77 | 0.60 | 40 | 49% | 58.2 |
| 6 | GBM (normal) | 46 | **68** | 76 | 0.63 | 37 | 47% | 60.8 |
| 7 | GBM + Student-t | 46 | **67** | 76 | 0.63 | 36 | 46% | 61.5 |
| 8 | GARCH(1,1)-lite | 43 | **66** | 74 | 0.63 | 36 | 44% | 64.7 |
| 9 | Momentum | 37 | **64** | 75 | 0.62 | 52 | 48% | 69.0 |
| 10 | Mean-reversion (OU) | 32 | **51** | 57 | 0.58 | 46 | 32% | 101.7 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.49 / 38% / 8.8 | 79% / 0.52 / 32% / 22.2 | 68% / 0.63 / 41% / 62.5 |
| ETH | 78% / 0.51 / 44% / 14.6 | 77% / 0.55 / 40% / 26.3 | 63% / 0.67 / 25% / 64.5 |
| SOL | 78% / 0.51 / 42% / 15.1 | 70% / 0.54 / 43% / 28.8 | 71% / 0.66 / 40% / 50.1 |
| BNB | 84% / 0.51 / 48% / 12 | 79% / 0.53 / 47% / 18.1 | 67% / 0.6 / 40% / 41.4 |
| XRP | 78% / 0.45 / 56% / 15.8 | 79% / 0.46 / 55% / 23.6 | 67% / 0.58 / 43% / 59.7 |
| SUI | 82% / 0.48 / 46% / 7.6 | 79% / 0.52 / 57% / 15.1 | 79% / 0.62 / 27% / 40.6 |
| AVAX | 80% / 0.49 / 52% / 18.4 | 68% / 0.54 / 45% / 45 | 65% / 0.66 / 35% / 72.8 |
| LINK | 70% / 0.53 / 46% / 34.4 | 72% / 0.55 / 38% / 31.3 | 71% / 0.68 / 35% / 58.9 |
| INJ | 76% / 0.5 / 52% / 14.8 | 85% / 0.47 / 57% / 18.3 | 86% / 0.5 / 62% / 15 |
| OP | 82% / 0.49 / 46% / 5.5 | 87% / 0.52 / 49% / 32.1 | 92% / 0.57 / 38% / 54.4 |
| ARB | 70% / 0.5 / 58% / 22 | 66% / 0.53 / 45% / 31.2 | 68% / 0.64 / 22% / 52.4 |
| DOGE | 80% / 0.43 / 56% / 21 | 72% / 0.44 / 47% / 30.1 | 73% / 0.52 / 49% / 19.3 |
| TIA | 82% / 0.51 / 38% / 10.2 | 83% / 0.53 / 45% / 17.9 | 97% / 0.56 / 41% / 48.9 |
| APT | 82% / 0.48 / 42% / 11.1 | 83% / 0.51 / 49% / 26 | 75% / 0.57 / 44% / 37.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
