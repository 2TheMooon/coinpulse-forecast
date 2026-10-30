# CoinPulse Strategy Tournament — 2026-10-30

_Generated 2026-10-30T15:44:03.416Z · 14 coins · 300 samples/window · 10.8s_

## 🏆 Recommendation: **SWITCH → `ensemble`**

> Ensemble (GBM-t + bootstraps) beats the shipped engine by 4.5 score points (lower=better).

Overall best: **ensemble** · by horizon: 7d→`block_boot` · 14d→`ensemble` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 34.1 |
| 2 | EWMA vol, zero drift (t) | 34.1 |
| 3 | Block bootstrap | 35.7 |
| 4 | Bootstrap (IID) | 37.6 |
| 5 | GBM (normal) | 37.9 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 38.6 |
| 7 | GBM + Student-t | 39.4 |
| 8 | GARCH(1,1)-lite | 40.1 |
| 9 | Momentum | 44.0 |
| 10 | Mean-reversion (OU) | 67.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 50 | **77** | 85 | 0.51 | 49 | 23% | 17.0 |
| 2 | Ensemble (GBM-t + bootstraps) | 51 | **78** | 85 | 0.52 | 48 | 23% | 17.4 |
| 3 | GBM (normal) | 53 | **78** | 85 | 0.53 | 43 | 24% | 19.3 |
| 4 | EWMA vol, zero drift (t) | 51 | **78** | 85 | 0.52 | 54 | 23% | 19.8 |
| 5 | GARCH(1,1)-lite | 50 | **77** | 83 | 0.52 | 48 | 22% | 20.6 |
| 6 | Bootstrap (IID) | 51 | **76** | 84 | 0.52 | 50 | 22% | 20.8 |
| 7 | GBM + Student-t | 50 | **77** | 84 | 0.53 | 46 | 23% | 22.5 |
| 8 | Momentum | 46 | **73** | 83 | 0.52 | 50 | 24% | 24.2 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 62 | **86** | 91 | 0.51 | 48 | — | 24.9 |
| 10 | Mean-reversion (OU) | 46 | **69** | 76 | 0.52 | 51 | 20% | 40.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 53 | **81** | 87 | 0.56 | 48 | 33% | 31.6 |
| 2 | EWMA vol, zero drift (t) | 56 | **79** | 86 | 0.56 | 50 | 33% | 31.9 |
| 3 | Bootstrap (IID) | 53 | **78** | 87 | 0.56 | 47 | 31% | 32.1 |
| 4 | Block bootstrap | 57 | **81** | 87 | 0.55 | 51 | 33% | 32.5 |
| 5 | Momentum | 47 | **73** | 83 | 0.56 | 53 | 35% | 34.0 |
| 6 | GARCH(1,1)-lite | 53 | **77** | 86 | 0.57 | 49 | 31% | 34.1 |
| 7 | GBM + Student-t | 55 | **78** | 85 | 0.57 | 47 | 33% | 34.3 |
| 8 | GBM (normal) | 58 | **80** | 86 | 0.58 | 51 | 34% | 35.2 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 67 | **87** | 92 | 0.55 | 45 | — | 38.6 |
| 10 | Mean-reversion (OU) | 43 | **66** | 73 | 0.56 | 49 | 26% | 56.3 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 52 | **73** | 80 | 0.64 | 40 | 47% | 50.6 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 63 | **82** | 90 | 0.62 | 41 | — | 52.3 |
| 3 | Ensemble (GBM-t + bootstraps) | 55 | **78** | 84 | 0.63 | 38 | 57% | 53.2 |
| 4 | Block bootstrap | 49 | **74** | 81 | 0.63 | 40 | 50% | 57.6 |
| 5 | GBM (normal) | 48 | **72** | 79 | 0.66 | 40 | 48% | 59.2 |
| 6 | Bootstrap (IID) | 47 | **72** | 80 | 0.64 | 40 | 46% | 59.9 |
| 7 | GBM + Student-t | 47 | **71** | 77 | 0.66 | 37 | 47% | 61.5 |
| 8 | GARCH(1,1)-lite | 44 | **70** | 77 | 0.66 | 38 | 44% | 65.6 |
| 9 | Momentum | 34 | **60** | 74 | 0.61 | 47 | 51% | 73.7 |
| 10 | Mean-reversion (OU) | 31 | **52** | 60 | 0.64 | 44 | 33% | 106.4 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.55 / 48% / 19.6 | 83% / 0.59 / 47% / 29.3 | 73% / 0.68 / 33% / 67.4 |
| ETH | 76% / 0.55 / 34% / 20.5 | 74% / 0.6 / 32% / 36.4 | 65% / 0.7 / 14% / 82.5 |
| SOL | 76% / 0.55 / 40% / 29.5 | 72% / 0.59 / 38% / 35.5 | 73% / 0.67 / 35% / 55.9 |
| BNB | 84% / 0.54 / 42% / 21.2 | 83% / 0.57 / 47% / 32.4 | 73% / 0.62 / 41% / 47.6 |
| XRP | 82% / 0.5 / 54% / 8.9 | 83% / 0.52 / 66% / 14.7 | 73% / 0.6 / 44% / 56.3 |
| SUI | 80% / 0.52 / 54% / 9 | 87% / 0.56 / 49% / 25.5 | 84% / 0.65 / 35% / 48.8 |
| AVAX | 80% / 0.51 / 58% / 14.4 | 72% / 0.57 / 49% / 39.7 | 68% / 0.69 / 35% / 75.1 |
| LINK | 70% / 0.55 / 46% / 35.1 | 74% / 0.59 / 47% / 38.8 | 71% / 0.69 / 35% / 60.8 |
| INJ | 80% / 0.48 / 50% / 7.7 | 91% / 0.52 / 64% / 26.1 | 89% / 0.52 / 65% / 34.8 |
| OP | 80% / 0.5 / 48% / 6.1 | 89% / 0.55 / 47% / 28.1 | 89% / 0.58 / 38% / 49.3 |
| ARB | 76% / 0.54 / 54% / 23.8 | 66% / 0.6 / 51% / 47.3 | 75% / 0.67 / 22% / 56.4 |
| DOGE | 76% / 0.47 / 52% / 22.1 | 74% / 0.48 / 55% / 19 | 78% / 0.54 / 49% / 16.1 |
| TIA | 76% / 0.52 / 38% / 11.7 | 96% / 0.59 / 34% / 41.8 | 95% / 0.59 / 35% / 55 |
| APT | 76% / 0.5 / 48% / 14.3 | 83% / 0.55 / 45% / 27.2 | 79% / 0.6 / 49% / 39.1 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
