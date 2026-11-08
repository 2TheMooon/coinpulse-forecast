# CoinPulse Strategy Tournament — 2026-11-08

_Generated 2026-11-08T15:52:33.262Z · 14 coins · 300 samples/window · 12.5s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 11.5 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`ensemble` · 14d→`ewma_t_zero` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 31.6 |
| 2 | Ensemble (GBM-t + bootstraps) | 34.8 |
| 3 | Block bootstrap | 34.9 |
| 4 | Bootstrap (IID) | 37.9 |
| 5 | Momentum | 39.5 |
| 6 | GBM + Student-t | 39.8 |
| 7 | GBM (normal) | 40.8 |
| 8 | GARCH(1,1)-lite | 41.0 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 43.2 |
| 10 | Mean-reversion (OU) | 59.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 52 | **80** | 88 | 0.54 | 47 | 23% | 18.8 |
| 2 | Momentum | 51 | **78** | 86 | 0.54 | 53 | 24% | 19.0 |
| 3 | Block bootstrap | 52 | **80** | 89 | 0.53 | 49 | 23% | 19.2 |
| 4 | EWMA vol, zero drift (t) | 54 | **83** | 89 | 0.54 | 42 | 23% | 19.3 |
| 5 | Bootstrap (IID) | 52 | **80** | 87 | 0.54 | 47 | 22% | 21.0 |
| 6 | GARCH(1,1)-lite | 52 | **80** | 88 | 0.55 | 47 | 22% | 21.3 |
| 7 | GBM + Student-t | 54 | **82** | 89 | 0.56 | 44 | 23% | 22.6 |
| 8 | GBM (normal) | 56 | **83** | 88 | 0.55 | 50 | 24% | 23.6 |
| 9 | Mean-reversion (OU) | 50 | **75** | 82 | 0.54 | 53 | 20% | 29.8 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 66 | **88** | 92 | 0.54 | 44 | — | 33.8 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 55 | **82** | 88 | 0.57 | 49 | 33% | 29.8 |
| 2 | Momentum | 51 | **75** | 85 | 0.56 | 52 | 35% | 30.0 |
| 3 | Block bootstrap | 56 | **82** | 89 | 0.56 | 51 | 34% | 30.1 |
| 4 | Bootstrap (IID) | 54 | **80** | 88 | 0.57 | 49 | 31% | 32.3 |
| 5 | Ensemble (GBM-t + bootstraps) | 56 | **82** | 89 | 0.58 | 49 | 33% | 33.3 |
| 6 | GBM + Student-t | 55 | **80** | 86 | 0.59 | 47 | 33% | 34.3 |
| 7 | GARCH(1,1)-lite | 52 | **80** | 87 | 0.59 | 47 | 31% | 34.3 |
| 8 | GBM (normal) | 57 | **81** | 87 | 0.59 | 49 | 34% | 36.7 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 68 | **89** | 92 | 0.56 | 45 | — | 43.0 |
| 10 | Mean-reversion (OU) | 46 | **72** | 79 | 0.59 | 51 | 26% | 46.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 50 | **76** | 82 | 0.63 | 45 | 47% | 45.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 52 | **80** | 86 | 0.64 | 38 | 57% | 52.5 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 60 | **83** | 90 | 0.64 | 36 | — | 52.7 |
| 4 | Block bootstrap | 47 | **74** | 82 | 0.63 | 40 | 50% | 55.3 |
| 5 | Bootstrap (IID) | 41 | **72** | 81 | 0.64 | 38 | 46% | 60.5 |
| 6 | GBM (normal) | 44 | **72** | 80 | 0.67 | 39 | 48% | 62.0 |
| 7 | GBM + Student-t | 44 | **72** | 79 | 0.67 | 39 | 47% | 62.4 |
| 8 | GARCH(1,1)-lite | 40 | **71** | 79 | 0.67 | 37 | 44% | 67.3 |
| 9 | Momentum | 35 | **61** | 74 | 0.60 | 49 | 53% | 69.4 |
| 10 | Mean-reversion (OU) | 30 | **55** | 65 | 0.66 | 46 | 32% | 102.9 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 88% / 0.55 / 38% / 19.5 | 85% / 0.57 / 55% / 30.2 | 78% / 0.67 / 43% / 49.2 |
| ETH | 88% / 0.56 / 38% / 29.4 | 83% / 0.58 / 51% / 26.7 | 70% / 0.67 / 32% / 58.4 |
| SOL | 78% / 0.56 / 40% / 21.2 | 74% / 0.58 / 45% / 28.5 | 70% / 0.66 / 40% / 61.8 |
| BNB | 88% / 0.56 / 42% / 26 | 87% / 0.6 / 57% / 35.3 | 73% / 0.65 / 51% / 52.5 |
| XRP | 90% / 0.49 / 44% / 22.1 | 87% / 0.49 / 62% / 18.5 | 78% / 0.57 / 51% / 36.5 |
| SUI | 82% / 0.53 / 38% / 15.4 | 81% / 0.54 / 55% / 19 | 78% / 0.62 / 52% / 33.8 |
| AVAX | 88% / 0.53 / 48% / 22.1 | 79% / 0.57 / 55% / 37.8 | 71% / 0.66 / 52% / 55.6 |
| LINK | 78% / 0.58 / 42% / 20.1 | 79% / 0.61 / 47% / 28.9 | 76% / 0.71 / 33% / 72.6 |
| INJ | 84% / 0.57 / 40% / 22 | 85% / 0.62 / 34% / 36.2 | 71% / 0.67 / 37% / 62.2 |
| OP | 80% / 0.53 / 44% / 14 | 85% / 0.55 / 38% / 28.8 | 83% / 0.58 / 49% / 22.9 |
| ARB | 78% / 0.57 / 50% / 23.5 | 70% / 0.6 / 49% / 45.1 | 75% / 0.68 / 32% / 55.4 |
| DOGE | 80% / 0.47 / 48% / 13.9 | 81% / 0.47 / 60% / 16.4 | 78% / 0.52 / 60% / 17.3 |
| TIA | 82% / 0.55 / 40% / 11.5 | 85% / 0.61 / 38% / 35.1 | 84% / 0.65 / 35% / 34.7 |
| APT | 76% / 0.51 / 42% / 10.1 | 89% / 0.52 / 40% / 31.5 | 81% / 0.56 / 59% / 27.5 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
