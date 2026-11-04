# CoinPulse Strategy Tournament — 2026-11-04

_Generated 2026-11-04T16:57:40.967Z · 14 coins · 300 samples/window · 9.7s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 9.9 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`momentum` · 14d→`block_boot` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 33.0 |
| 2 | Ensemble (GBM-t + bootstraps) | 33.5 |
| 3 | Block bootstrap | 34.5 |
| 4 | Bootstrap (IID) | 36.3 |
| 5 | GBM + Student-t | 37.6 |
| 6 | GARCH(1,1)-lite | 38.5 |
| 7 | GBM (normal) | 39.1 |
| 8 | Momentum | 41.2 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 42.9 |
| 10 | Mean-reversion (OU) | 62.1 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **78** | 86 | 0.50 | 54 | 24% | 17.0 |
| 2 | GBM + Student-t | 54 | **81** | 89 | 0.51 | 51 | 23% | 18.4 |
| 3 | Ensemble (GBM-t + bootstraps) | 50 | **79** | 89 | 0.51 | 49 | 23% | 18.4 |
| 4 | GARCH(1,1)-lite | 55 | **80** | 89 | 0.51 | 50 | 22% | 18.5 |
| 5 | Block bootstrap | 50 | **79** | 88 | 0.49 | 50 | 23% | 18.7 |
| 6 | EWMA vol, zero drift (t) | 56 | **82** | 89 | 0.50 | 52 | 23% | 19.0 |
| 7 | GBM (normal) | 58 | **83** | 89 | 0.51 | 54 | 24% | 20.7 |
| 8 | Bootstrap (IID) | 51 | **78** | 88 | 0.50 | 53 | 22% | 21.4 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 65 | **88** | 92 | 0.53 | 43 | — | 32.2 |
| 10 | Mean-reversion (OU) | 52 | **73** | 80 | 0.51 | 54 | 20% | 32.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 54 | **81** | 88 | 0.55 | 48 | 34% | 30.2 |
| 2 | Bootstrap (IID) | 53 | **80** | 87 | 0.56 | 44 | 31% | 30.4 |
| 3 | EWMA vol, zero drift (t) | 57 | **83** | 89 | 0.56 | 54 | 33% | 31.1 |
| 4 | Momentum | 49 | **73** | 85 | 0.56 | 48 | 35% | 31.2 |
| 5 | Ensemble (GBM-t + bootstraps) | 54 | **81** | 88 | 0.57 | 47 | 33% | 31.3 |
| 6 | GARCH(1,1)-lite | 52 | **81** | 88 | 0.58 | 47 | 31% | 33.4 |
| 7 | GBM + Student-t | 55 | **81** | 88 | 0.58 | 47 | 33% | 33.8 |
| 8 | GBM (normal) | 58 | **82** | 89 | 0.58 | 47 | 34% | 36.4 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 68 | **89** | 92 | 0.56 | 44 | — | 43.3 |
| 10 | Mean-reversion (OU) | 44 | **69** | 78 | 0.57 | 52 | 26% | 50.3 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 52 | **76** | 82 | 0.64 | 43 | 47% | 48.9 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **78** | 85 | 0.64 | 36 | 56% | 50.8 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 63 | **84** | 90 | 0.63 | 37 | — | 53.1 |
| 4 | Block bootstrap | 48 | **74** | 82 | 0.63 | 39 | 50% | 54.5 |
| 5 | Bootstrap (IID) | 43 | **73** | 81 | 0.64 | 38 | 46% | 57.1 |
| 6 | GBM (normal) | 47 | **74** | 80 | 0.67 | 39 | 48% | 60.3 |
| 7 | GBM + Student-t | 46 | **73** | 80 | 0.67 | 38 | 47% | 60.5 |
| 8 | GARCH(1,1)-lite | 42 | **72** | 79 | 0.67 | 38 | 44% | 63.6 |
| 9 | Momentum | 34 | **60** | 73 | 0.62 | 48 | 52% | 75.5 |
| 10 | Mean-reversion (OU) | 29 | **55** | 64 | 0.65 | 46 | 37% | 103.3 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 90% / 0.52 / 52% / 33.7 | 81% / 0.59 / 57% / 33.5 | 78% / 0.68 / 43% / 59.6 |
| ETH | 86% / 0.53 / 50% / 19.3 | 83% / 0.58 / 55% / 25.5 | 73% / 0.68 / 30% / 59.8 |
| SOL | 76% / 0.52 / 52% / 12.8 | 72% / 0.6 / 49% / 40.5 | 70% / 0.69 / 38% / 73.1 |
| BNB | 84% / 0.53 / 46% / 16.3 | 87% / 0.6 / 55% / 38.3 | 71% / 0.66 / 48% / 57.1 |
| XRP | 86% / 0.46 / 54% / 20.9 | 89% / 0.5 / 64% / 22.9 | 78% / 0.58 / 48% / 46.5 |
| SUI | 84% / 0.49 / 54% / 17.1 | 83% / 0.54 / 55% / 22.2 | 79% / 0.63 / 48% / 38.1 |
| AVAX | 88% / 0.51 / 48% / 27.9 | 81% / 0.56 / 49% / 32.5 | 71% / 0.67 / 48% / 56.8 |
| LINK | 82% / 0.54 / 50% / 15.7 | 83% / 0.6 / 45% / 31.3 | 75% / 0.72 / 29% / 69.8 |
| INJ | 76% / 0.5 / 56% / 22.3 | 83% / 0.58 / 47% / 26.4 | 71% / 0.66 / 40% / 55.1 |
| OP | 82% / 0.49 / 50% / 12.9 | 89% / 0.53 / 51% / 33.7 | 81% / 0.59 / 46% / 26.3 |
| ARB | 74% / 0.51 / 58% / 18.4 | 70% / 0.61 / 47% / 45.5 | 75% / 0.67 / 33% / 57.7 |
| DOGE | 82% / 0.44 / 60% / 19.6 | 83% / 0.47 / 64% / 18.9 | 78% / 0.52 / 57% / 21.1 |
| TIA | 82% / 0.52 / 46% / 10.5 | 85% / 0.6 / 49% / 34.5 | 81% / 0.66 / 32% / 33.8 |
| APT | 74% / 0.47 / 50% / 18.9 | 89% / 0.51 / 62% / 29.9 | 81% / 0.56 / 60% / 29.4 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
