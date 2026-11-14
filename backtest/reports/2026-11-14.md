# CoinPulse Strategy Tournament — 2026-11-14

_Generated 2026-11-14T15:40:20.652Z · 14 coins · 300 samples/window · 14.4s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 7.4 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`ensemble` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 30.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 31.2 |
| 3 | Block bootstrap | 31.3 |
| 4 | Momentum | 34.2 |
| 5 | Bootstrap (IID) | 34.5 |
| 6 | GBM (normal) | 37.4 |
| 7 | GBM + Student-t | 37.5 |
| 8 | GARCH(1,1)-lite | 37.7 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 37.7 |
| 10 | Mean-reversion (OU) | 54.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 51 | **79** | 86 | 0.51 | 50 | 23% | 15.6 |
| 2 | Block bootstrap | 51 | **78** | 87 | 0.51 | 52 | 23% | 15.7 |
| 3 | EWMA vol, zero drift (t) | 51 | **80** | 87 | 0.51 | 53 | 23% | 17.1 |
| 4 | GARCH(1,1)-lite | 50 | **79** | 86 | 0.52 | 48 | 22% | 17.1 |
| 5 | Momentum | 49 | **77** | 86 | 0.50 | 54 | 24% | 17.3 |
| 6 | GBM (normal) | 53 | **80** | 86 | 0.52 | 48 | 24% | 17.5 |
| 7 | GBM + Student-t | 51 | **80** | 86 | 0.52 | 51 | 23% | 17.8 |
| 8 | Bootstrap (IID) | 51 | **78** | 86 | 0.51 | 49 | 23% | 18.0 |
| 9 | Mean-reversion (OU) | 49 | **74** | 82 | 0.52 | 54 | 21% | 25.1 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 65 | **87** | 92 | 0.52 | 45 | — | 29.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **76** | 86 | 0.55 | 53 | 35% | 27.0 |
| 2 | Block bootstrap | 55 | **82** | 88 | 0.56 | 51 | 35% | 27.5 |
| 3 | EWMA vol, zero drift (t) | 54 | **81** | 88 | 0.56 | 52 | 33% | 27.9 |
| 4 | Bootstrap (IID) | 54 | **80** | 88 | 0.55 | 46 | 33% | 29.0 |
| 5 | GBM + Student-t | 55 | **80** | 87 | 0.57 | 50 | 33% | 31.1 |
| 6 | Ensemble (GBM-t + bootstraps) | 56 | **82** | 88 | 0.56 | 48 | 33% | 31.2 |
| 7 | GARCH(1,1)-lite | 52 | **78** | 87 | 0.57 | 46 | 31% | 31.6 |
| 8 | GBM (normal) | 56 | **80** | 87 | 0.58 | 48 | 34% | 34.5 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 65 | **88** | 91 | 0.55 | 44 | — | 36.1 |
| 10 | Mean-reversion (OU) | 48 | **73** | 81 | 0.57 | 51 | 27% | 39.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 47 | **75** | 81 | 0.61 | 44 | 48% | 45.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 50 | **77** | 85 | 0.61 | 36 | 59% | 46.7 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 57 | **82** | 89 | 0.61 | 36 | — | 47.6 |
| 4 | Block bootstrap | 45 | **71** | 80 | 0.61 | 42 | 52% | 50.8 |
| 5 | Bootstrap (IID) | 41 | **70** | 81 | 0.61 | 35 | 47% | 56.4 |
| 6 | Momentum | 36 | **64** | 76 | 0.57 | 49 | 54% | 58.3 |
| 7 | GBM (normal) | 42 | **71** | 79 | 0.64 | 38 | 48% | 60.3 |
| 8 | GBM + Student-t | 41 | **70** | 77 | 0.65 | 40 | 47% | 63.5 |
| 9 | GARCH(1,1)-lite | 39 | **69** | 78 | 0.64 | 39 | 45% | 64.2 |
| 10 | Mean-reversion (OU) | 29 | **56** | 66 | 0.64 | 48 | 33% | 97.4 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.51 / 62% / 10.8 | 85% / 0.55 / 57% / 21.8 | 75% / 0.64 / 38% / 50.5 |
| ETH | 78% / 0.52 / 54% / 13.6 | 81% / 0.56 / 49% / 16.2 | 67% / 0.64 / 32% / 66.7 |
| SOL | 74% / 0.52 / 44% / 22.1 | 70% / 0.55 / 47% / 29.9 | 63% / 0.62 / 43% / 72.4 |
| BNB | 84% / 0.54 / 46% / 15.3 | 85% / 0.59 / 57% / 32.2 | 71% / 0.64 / 41% / 57.2 |
| XRP | 82% / 0.46 / 60% / 20.7 | 83% / 0.48 / 62% / 15.2 | 73% / 0.55 / 51% / 38.8 |
| SUI | 82% / 0.5 / 54% / 6.7 | 81% / 0.54 / 60% / 23.3 | 78% / 0.6 / 49% / 29.7 |
| AVAX | 88% / 0.51 / 54% / 19 | 79% / 0.57 / 62% / 40.9 | 71% / 0.65 / 51% / 57 |
| LINK | 76% / 0.55 / 44% / 22.2 | 79% / 0.6 / 43% / 31.5 | 73% / 0.69 / 35% / 76.5 |
| INJ | 84% / 0.56 / 52% / 24.5 | 87% / 0.63 / 34% / 39.9 | 75% / 0.67 / 35% / 54.7 |
| OP | 84% / 0.5 / 50% / 8.1 | 85% / 0.54 / 51% / 27.7 | 81% / 0.56 / 52% / 17.8 |
| ARB | 74% / 0.54 / 60% / 21.1 | 66% / 0.61 / 49% / 47.6 | 75% / 0.66 / 35% / 55.1 |
| DOGE | 78% / 0.44 / 54% / 20.3 | 83% / 0.46 / 62% / 13.8 | 78% / 0.51 / 57% / 20.6 |
| TIA | 86% / 0.52 / 54% / 21.3 | 83% / 0.58 / 43% / 23.7 | 83% / 0.62 / 40% / 28.5 |
| APT | 74% / 0.48 / 56% / 13.7 | 89% / 0.51 / 47% / 26.2 | 81% / 0.54 / 52% / 16.4 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
