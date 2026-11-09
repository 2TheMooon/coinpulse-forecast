# CoinPulse Strategy Tournament — 2026-11-09

_Generated 2026-11-09T19:39:16.479Z · 14 coins · 300 samples/window · 12.4s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 10.2 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`block_boot` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 32.2 |
| 2 | Block bootstrap | 32.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 33.4 |
| 4 | Bootstrap (IID) | 36.0 |
| 5 | Momentum | 36.5 |
| 6 | GARCH(1,1)-lite | 37.7 |
| 7 | GBM + Student-t | 37.8 |
| 8 | GBM (normal) | 39.9 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 42.4 |
| 10 | Mean-reversion (OU) | 57.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 53 | **83** | 91 | 0.51 | 52 | 23% | 15.6 |
| 2 | Bootstrap (IID) | 56 | **82** | 89 | 0.51 | 53 | 23% | 17.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 55 | **83** | 90 | 0.52 | 51 | 23% | 18.4 |
| 4 | GARCH(1,1)-lite | 55 | **82** | 89 | 0.52 | 49 | 22% | 19.0 |
| 5 | Momentum | 55 | **81** | 89 | 0.51 | 53 | 24% | 19.3 |
| 6 | GBM + Student-t | 58 | **82** | 90 | 0.53 | 50 | 23% | 20.9 |
| 7 | EWMA vol, zero drift (t) | 58 | **83** | 89 | 0.52 | 47 | 23% | 21.8 |
| 8 | GBM (normal) | 60 | **85** | 90 | 0.53 | 53 | 24% | 23.5 |
| 9 | Mean-reversion (OU) | 54 | **78** | 83 | 0.52 | 55 | 21% | 26.8 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 65 | **89** | 93 | 0.52 | 48 | — | 32.9 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 52 | **81** | 88 | 0.53 | 53 | 36% | 22.7 |
| 2 | Block bootstrap | 57 | **84** | 91 | 0.54 | 51 | 34% | 26.4 |
| 3 | GARCH(1,1)-lite | 54 | **82** | 89 | 0.56 | 48 | 31% | 27.2 |
| 4 | Ensemble (GBM-t + bootstraps) | 58 | **85** | 90 | 0.55 | 49 | 33% | 28.7 |
| 5 | EWMA vol, zero drift (t) | 59 | **84** | 90 | 0.54 | 49 | 33% | 28.7 |
| 6 | Bootstrap (IID) | 58 | **82** | 89 | 0.54 | 48 | 32% | 29.3 |
| 7 | GBM + Student-t | 56 | **83** | 88 | 0.56 | 47 | 33% | 29.4 |
| 8 | GBM (normal) | 60 | **84** | 88 | 0.56 | 48 | 34% | 32.6 |
| 9 | Mean-reversion (OU) | 50 | **73** | 81 | 0.56 | 51 | 26% | 40.5 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 68 | **88** | 92 | 0.56 | 43 | — | 42.1 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 52 | **76** | 82 | 0.63 | 43 | 47% | 46.0 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 59 | **83** | 90 | 0.63 | 35 | — | 52.3 |
| 3 | Ensemble (GBM-t + bootstraps) | 53 | **79** | 86 | 0.64 | 38 | 57% | 53.2 |
| 4 | Block bootstrap | 47 | **72** | 82 | 0.63 | 40 | 51% | 55.9 |
| 5 | Bootstrap (IID) | 42 | **71** | 81 | 0.64 | 35 | 46% | 61.1 |
| 6 | GBM + Student-t | 45 | **72** | 79 | 0.67 | 39 | 47% | 63.0 |
| 7 | GBM (normal) | 45 | **71** | 79 | 0.67 | 38 | 48% | 63.6 |
| 8 | GARCH(1,1)-lite | 41 | **70** | 78 | 0.67 | 38 | 44% | 66.8 |
| 9 | Momentum | 35 | **61** | 74 | 0.59 | 46 | 53% | 67.4 |
| 10 | Mean-reversion (OU) | 30 | **55** | 64 | 0.66 | 46 | 32% | 104.7 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 90% / 0.51 / 40% / 21.8 | 85% / 0.54 / 60% / 30.4 | 78% / 0.67 / 41% / 53.1 |
| ETH | 88% / 0.52 / 42% / 32.6 | 87% / 0.55 / 38% / 26.7 | 67% / 0.66 / 32% / 62.8 |
| SOL | 82% / 0.52 / 44% / 11.9 | 81% / 0.55 / 47% / 17.7 | 70% / 0.65 / 38% / 61.4 |
| BNB | 88% / 0.55 / 44% / 21.3 | 83% / 0.58 / 51% / 26.7 | 73% / 0.66 / 46% / 51.6 |
| XRP | 84% / 0.45 / 52% / 26.1 | 87% / 0.46 / 55% / 23.9 | 75% / 0.56 / 52% / 45.2 |
| SUI | 84% / 0.5 / 46% / 10.1 | 85% / 0.52 / 57% / 22.1 | 81% / 0.62 / 44% / 40.2 |
| AVAX | 86% / 0.52 / 46% / 29.6 | 81% / 0.56 / 49% / 35.8 | 71% / 0.66 / 48% / 51 |
| LINK | 78% / 0.56 / 40% / 20.2 | 83% / 0.57 / 43% / 22.3 | 73% / 0.7 / 30% / 69.5 |
| INJ | 78% / 0.56 / 42% / 34.1 | 83% / 0.58 / 40% / 32.8 | 76% / 0.67 / 32% / 54.8 |
| OP | 84% / 0.51 / 54% / 14.5 | 89% / 0.52 / 45% / 29.1 | 83% / 0.58 / 49% / 24.8 |
| ARB | 72% / 0.54 / 54% / 29.5 | 72% / 0.57 / 51% / 35.6 | 75% / 0.68 / 33% / 58.5 |
| DOGE | 86% / 0.45 / 60% / 28.2 | 85% / 0.44 / 62% / 30.6 | 81% / 0.51 / 59% / 10.4 |
| TIA | 78% / 0.54 / 46% / 14.3 | 87% / 0.58 / 34% / 36.4 | 78% / 0.64 / 35% / 33.6 |
| APT | 82% / 0.48 / 54% / 11.7 | 89% / 0.5 / 47% / 31.9 | 79% / 0.56 / 57% / 27.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
