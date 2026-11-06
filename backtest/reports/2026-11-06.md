# CoinPulse Strategy Tournament — 2026-11-06

_Generated 2026-11-06T16:39:44.429Z · 14 coins · 300 samples/window · 12.5s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 10.6 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 32.9 |
| 2 | Ensemble (GBM-t + bootstraps) | 33.5 |
| 3 | Block bootstrap | 34.0 |
| 4 | Bootstrap (IID) | 36.5 |
| 5 | Momentum | 37.9 |
| 6 | GBM + Student-t | 38.5 |
| 7 | GARCH(1,1)-lite | 38.8 |
| 8 | GBM (normal) | 39.9 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 43.6 |
| 10 | Mean-reversion (OU) | 59.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 53 | **80** | 89 | 0.52 | 53 | 24% | 15.7 |
| 2 | Block bootstrap | 52 | **82** | 91 | 0.51 | 51 | 23% | 16.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 54 | **83** | 90 | 0.53 | 52 | 23% | 18.7 |
| 4 | GARCH(1,1)-lite | 54 | **82** | 88 | 0.53 | 49 | 22% | 19.0 |
| 5 | Bootstrap (IID) | 54 | **81** | 89 | 0.52 | 50 | 22% | 19.0 |
| 6 | GBM + Student-t | 56 | **83** | 90 | 0.54 | 47 | 23% | 19.9 |
| 7 | EWMA vol, zero drift (t) | 57 | **84** | 90 | 0.52 | 47 | 24% | 21.4 |
| 8 | GBM (normal) | 60 | **84** | 90 | 0.53 | 53 | 24% | 23.0 |
| 9 | Mean-reversion (OU) | 54 | **77** | 82 | 0.53 | 55 | 20% | 28.1 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 65 | **88** | 92 | 0.54 | 43 | — | 33.9 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **79** | 87 | 0.54 | 51 | 36% | 23.9 |
| 2 | Block bootstrap | 57 | **83** | 91 | 0.54 | 52 | 34% | 28.2 |
| 3 | Ensemble (GBM-t + bootstraps) | 55 | **83** | 90 | 0.56 | 46 | 33% | 28.9 |
| 4 | Bootstrap (IID) | 56 | **81** | 89 | 0.55 | 45 | 31% | 29.1 |
| 5 | GARCH(1,1)-lite | 55 | **82** | 89 | 0.57 | 48 | 31% | 29.5 |
| 6 | EWMA vol, zero drift (t) | 60 | **84** | 89 | 0.55 | 51 | 33% | 30.5 |
| 7 | GBM + Student-t | 59 | **82** | 88 | 0.57 | 48 | 33% | 32.3 |
| 8 | GBM (normal) | 60 | **83** | 88 | 0.57 | 47 | 34% | 33.3 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 68 | **89** | 92 | 0.56 | 43 | — | 43.2 |
| 10 | Mean-reversion (OU) | 49 | **71** | 79 | 0.56 | 51 | 27% | 46.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 51 | **76** | 82 | 0.64 | 43 | 47% | 46.9 |
| 2 | Ensemble (GBM-t + bootstraps) | 52 | **79** | 86 | 0.65 | 36 | 57% | 52.9 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 60 | **83** | 90 | 0.64 | 36 | — | 53.6 |
| 4 | Block bootstrap | 46 | **74** | 82 | 0.64 | 38 | 50% | 57.2 |
| 5 | Bootstrap (IID) | 42 | **72** | 82 | 0.65 | 40 | 45% | 61.2 |
| 6 | GBM + Student-t | 44 | **73** | 79 | 0.68 | 37 | 47% | 63.3 |
| 7 | GBM (normal) | 44 | **73** | 79 | 0.68 | 38 | 48% | 63.4 |
| 8 | GARCH(1,1)-lite | 41 | **70** | 79 | 0.68 | 37 | 44% | 68.1 |
| 9 | Momentum | 35 | **60** | 73 | 0.61 | 47 | 53% | 74.1 |
| 10 | Mean-reversion (OU) | 29 | **54** | 65 | 0.67 | 46 | 38% | 105.2 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 88% / 0.51 / 46% / 20.5 | 87% / 0.55 / 55% / 34.8 | 78% / 0.68 / 43% / 55.1 |
| ETH | 88% / 0.53 / 46% / 26.6 | 87% / 0.56 / 47% / 34.9 | 70% / 0.68 / 30% / 60.4 |
| SOL | 84% / 0.53 / 38% / 16.6 | 81% / 0.57 / 49% / 25.3 | 68% / 0.67 / 40% / 67 |
| BNB | 86% / 0.55 / 42% / 24.4 | 83% / 0.59 / 49% / 28.2 | 75% / 0.66 / 48% / 50.4 |
| XRP | 88% / 0.46 / 52% / 25.5 | 89% / 0.47 / 62% / 29.9 | 78% / 0.57 / 49% / 40.9 |
| SUI | 86% / 0.5 / 46% / 8.9 | 85% / 0.53 / 57% / 22.6 | 79% / 0.63 / 48% / 35.7 |
| AVAX | 88% / 0.51 / 48% / 32.2 | 81% / 0.56 / 45% / 31 | 70% / 0.67 / 54% / 58.2 |
| LINK | 78% / 0.56 / 38% / 22.9 | 81% / 0.58 / 49% / 22 | 75% / 0.72 / 29% / 72.8 |
| INJ | 78% / 0.55 / 54% / 23.7 | 83% / 0.58 / 43% / 32.5 | 71% / 0.67 / 38% / 57.9 |
| OP | 84% / 0.52 / 50% / 19.6 | 89% / 0.52 / 53% / 38 | 81% / 0.59 / 48% / 20.2 |
| ARB | 76% / 0.53 / 50% / 26.7 | 72% / 0.57 / 51% / 34.2 | 75% / 0.68 / 32% / 58.5 |
| DOGE | 84% / 0.46 / 56% / 25.9 | 83% / 0.45 / 62% / 30.8 | 78% / 0.52 / 59% / 14 |
| TIA | 82% / 0.54 / 42% / 12.9 | 83% / 0.59 / 43% / 28.1 | 84% / 0.65 / 35% / 37.8 |
| APT | 82% / 0.48 / 48% / 13.4 | 89% / 0.51 / 51% / 34.4 | 81% / 0.56 / 56% / 28 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
