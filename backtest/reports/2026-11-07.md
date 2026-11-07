# CoinPulse Strategy Tournament — 2026-11-07

_Generated 2026-11-07T15:33:02.214Z · 14 coins · 300 samples/window · 14.9s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 10.5 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`garch` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 33.1 |
| 2 | Block bootstrap | 34.7 |
| 3 | Ensemble (GBM-t + bootstraps) | 35.0 |
| 4 | Bootstrap (IID) | 38.1 |
| 5 | Momentum | 39.6 |
| 6 | GBM + Student-t | 39.8 |
| 7 | GARCH(1,1)-lite | 40.1 |
| 8 | GBM (normal) | 41.0 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 43.6 |
| 10 | Mean-reversion (OU) | 61.4 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GARCH(1,1)-lite | 54 | **82** | 89 | 0.52 | 53 | 22% | 17.4 |
| 2 | Momentum | 52 | **80** | 87 | 0.50 | 53 | 24% | 17.5 |
| 3 | Block bootstrap | 51 | **80** | 90 | 0.51 | 51 | 23% | 17.7 |
| 4 | Ensemble (GBM-t + bootstraps) | 54 | **82** | 90 | 0.52 | 54 | 23% | 18.7 |
| 5 | GBM + Student-t | 54 | **83** | 90 | 0.53 | 50 | 23% | 19.6 |
| 6 | EWMA vol, zero drift (t) | 56 | **85** | 91 | 0.51 | 48 | 23% | 20.3 |
| 7 | Bootstrap (IID) | 53 | **80** | 88 | 0.51 | 50 | 22% | 21.0 |
| 8 | GBM (normal) | 60 | **84** | 91 | 0.52 | 54 | 24% | 24.6 |
| 9 | Mean-reversion (OU) | 54 | **76** | 83 | 0.52 | 55 | 20% | 28.8 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 65 | **89** | 93 | 0.53 | 47 | — | 33.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **74** | 86 | 0.55 | 49 | 36% | 27.8 |
| 2 | Block bootstrap | 54 | **82** | 89 | 0.56 | 49 | 34% | 29.1 |
| 3 | EWMA vol, zero drift (t) | 55 | **83** | 89 | 0.56 | 46 | 33% | 30.8 |
| 4 | Ensemble (GBM-t + bootstraps) | 54 | **82** | 89 | 0.57 | 48 | 33% | 31.7 |
| 5 | Bootstrap (IID) | 52 | **79** | 87 | 0.56 | 43 | 32% | 32.4 |
| 6 | GARCH(1,1)-lite | 51 | **80** | 87 | 0.58 | 47 | 31% | 33.7 |
| 7 | GBM (normal) | 55 | **82** | 88 | 0.59 | 47 | 34% | 34.4 |
| 8 | GBM + Student-t | 53 | **81** | 88 | 0.59 | 47 | 33% | 35.2 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 67 | **88** | 92 | 0.56 | 42 | — | 42.9 |
| 10 | Mean-reversion (OU) | 46 | **70** | 79 | 0.58 | 51 | 26% | 48.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 53 | **76** | 82 | 0.64 | 44 | 47% | 48.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 60 | **83** | 90 | 0.64 | 35 | — | 54.4 |
| 3 | Ensemble (GBM-t + bootstraps) | 51 | **78** | 85 | 0.64 | 37 | 57% | 54.6 |
| 4 | Block bootstrap | 49 | **74** | 82 | 0.64 | 38 | 51% | 57.2 |
| 5 | Bootstrap (IID) | 42 | **72** | 81 | 0.65 | 35 | 46% | 60.9 |
| 6 | GBM (normal) | 45 | **71** | 79 | 0.68 | 38 | 48% | 64.0 |
| 7 | GBM + Student-t | 44 | **71** | 80 | 0.68 | 37 | 47% | 64.5 |
| 8 | GARCH(1,1)-lite | 41 | **70** | 78 | 0.67 | 37 | 44% | 69.2 |
| 9 | Momentum | 35 | **61** | 72 | 0.60 | 46 | 53% | 73.4 |
| 10 | Mean-reversion (OU) | 31 | **55** | 63 | 0.67 | 44 | 34% | 106.5 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 90% / 0.52 / 44% / 32.3 | 81% / 0.58 / 47% / 27.3 | 76% / 0.67 / 43% / 58.1 |
| ETH | 88% / 0.53 / 48% / 28.9 | 83% / 0.58 / 43% / 22.8 | 71% / 0.67 / 35% / 60.2 |
| SOL | 82% / 0.53 / 44% / 9.8 | 68% / 0.6 / 47% / 45.5 | 68% / 0.67 / 37% / 67.7 |
| BNB | 88% / 0.54 / 46% / 19.1 | 87% / 0.6 / 43% / 35 | 76% / 0.66 / 51% / 52.5 |
| XRP | 92% / 0.45 / 52% / 29.1 | 89% / 0.49 / 55% / 19.6 | 76% / 0.57 / 57% / 41.9 |
| SUI | 84% / 0.51 / 48% / 19.5 | 85% / 0.54 / 49% / 24.2 | 78% / 0.63 / 43% / 45.9 |
| AVAX | 90% / 0.52 / 48% / 33.6 | 83% / 0.57 / 43% / 36.4 | 71% / 0.67 / 49% / 57 |
| LINK | 80% / 0.54 / 48% / 11.9 | 83% / 0.6 / 40% / 33 | 71% / 0.71 / 30% / 67.7 |
| INJ | 80% / 0.52 / 42% / 19.8 | 83% / 0.59 / 45% / 32.8 | 75% / 0.67 / 32% / 52.9 |
| OP | 86% / 0.49 / 48% / 11.2 | 89% / 0.54 / 38% / 36.3 | 84% / 0.59 / 49% / 28.1 |
| ARB | 80% / 0.53 / 46% / 16.2 | 72% / 0.6 / 49% / 47.4 | 73% / 0.69 / 33% / 60.5 |
| DOGE | 88% / 0.44 / 62% / 28.1 | 83% / 0.47 / 55% / 12.8 | 78% / 0.52 / 63% / 14.6 |
| TIA | 84% / 0.53 / 46% / 16.3 | 83% / 0.59 / 40% / 30.8 | 79% / 0.65 / 37% / 33.8 |
| APT | 82% / 0.48 / 54% / 8.6 | 89% / 0.51 / 55% / 27.9 | 81% / 0.57 / 57% / 32.5 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
