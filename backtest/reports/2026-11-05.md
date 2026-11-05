# CoinPulse Strategy Tournament — 2026-11-05

_Generated 2026-11-05T17:13:05.633Z · 14 coins · 300 samples/window · 9.5s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 9.9 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`block_boot` · 14d→`block_boot` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 33.6 |
| 2 | Block bootstrap | 34.8 |
| 3 | Ensemble (GBM-t + bootstraps) | 35.3 |
| 4 | Bootstrap (IID) | 38.3 |
| 5 | GBM + Student-t | 40.8 |
| 6 | GARCH(1,1)-lite | 41.4 |
| 7 | GBM (normal) | 41.5 |
| 8 | Momentum | 42.9 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 43.5 |
| 10 | Mean-reversion (OU) | 63.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 51 | **79** | 88 | 0.53 | 46 | 23% | 16.0 |
| 2 | EWMA vol, zero drift (t) | 52 | **81** | 88 | 0.54 | 47 | 23% | 18.9 |
| 3 | Ensemble (GBM-t + bootstraps) | 51 | **79** | 88 | 0.54 | 46 | 23% | 19.3 |
| 4 | Momentum | 50 | **78** | 86 | 0.54 | 52 | 24% | 20.2 |
| 5 | GARCH(1,1)-lite | 53 | **80** | 86 | 0.55 | 49 | 22% | 21.4 |
| 6 | GBM + Student-t | 53 | **80** | 87 | 0.55 | 44 | 23% | 21.7 |
| 7 | Bootstrap (IID) | 52 | **78** | 87 | 0.54 | 47 | 22% | 21.9 |
| 8 | GBM (normal) | 57 | **83** | 88 | 0.55 | 49 | 24% | 22.8 |
| 9 | Mean-reversion (OU) | 49 | **73** | 81 | 0.55 | 53 | 20% | 31.8 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 65 | **89** | 94 | 0.52 | 47 | — | 33.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 57 | **82** | 88 | 0.56 | 50 | 34% | 31.1 |
| 2 | Bootstrap (IID) | 52 | **79** | 87 | 0.57 | 48 | 31% | 31.8 |
| 3 | Momentum | 49 | **74** | 85 | 0.57 | 51 | 35% | 31.8 |
| 4 | EWMA vol, zero drift (t) | 57 | **81** | 88 | 0.57 | 53 | 33% | 32.4 |
| 5 | Ensemble (GBM-t + bootstraps) | 55 | **82** | 88 | 0.58 | 49 | 32% | 33.6 |
| 6 | GARCH(1,1)-lite | 53 | **80** | 87 | 0.59 | 48 | 31% | 34.5 |
| 7 | GBM + Student-t | 56 | **80** | 86 | 0.59 | 48 | 33% | 36.5 |
| 8 | GBM (normal) | 59 | **80** | 87 | 0.59 | 49 | 34% | 37.9 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 68 | **88** | 93 | 0.57 | 43 | — | 43.1 |
| 10 | Mean-reversion (OU) | 46 | **70** | 77 | 0.59 | 51 | 26% | 51.5 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 53 | **75** | 82 | 0.64 | 42 | 47% | 49.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **79** | 86 | 0.65 | 36 | 56% | 52.9 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 60 | **83** | 90 | 0.64 | 36 | — | 53.7 |
| 4 | Block bootstrap | 48 | **72** | 82 | 0.64 | 38 | 50% | 57.3 |
| 5 | Bootstrap (IID) | 43 | **72** | 81 | 0.65 | 36 | 45% | 61.2 |
| 6 | GBM (normal) | 45 | **72** | 80 | 0.68 | 38 | 47% | 63.8 |
| 7 | GBM + Student-t | 46 | **71** | 79 | 0.68 | 36 | 47% | 64.2 |
| 8 | GARCH(1,1)-lite | 42 | **70** | 78 | 0.68 | 37 | 44% | 68.2 |
| 9 | Momentum | 33 | **59** | 73 | 0.61 | 45 | 52% | 76.8 |
| 10 | Mean-reversion (OU) | 30 | **55** | 63 | 0.67 | 44 | 34% | 107.3 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.55 / 50% / 21.8 | 85% / 0.58 / 60% / 32.8 | 76% / 0.68 / 41% / 60.3 |
| ETH | 84% / 0.55 / 46% / 21.7 | 83% / 0.58 / 47% / 35.7 | 70% / 0.67 / 30% / 58 |
| SOL | 78% / 0.56 / 44% / 22.2 | 74% / 0.59 / 45% / 25.7 | 68% / 0.68 / 37% / 71.2 |
| BNB | 88% / 0.56 / 40% / 34.6 | 87% / 0.6 / 53% / 38 | 73% / 0.67 / 46% / 56.5 |
| XRP | 90% / 0.5 / 56% / 13 | 87% / 0.5 / 66% / 20.3 | 76% / 0.58 / 49% / 46.5 |
| SUI | 82% / 0.52 / 46% / 16.3 | 81% / 0.54 / 57% / 24.1 | 79% / 0.63 / 41% / 43.5 |
| AVAX | 86% / 0.53 / 48% / 11.1 | 74% / 0.56 / 57% / 40.3 | 71% / 0.67 / 46% / 55.3 |
| LINK | 74% / 0.58 / 42% / 27.8 | 77% / 0.61 / 53% / 37.8 | 71% / 0.71 / 27% / 70.2 |
| INJ | 82% / 0.56 / 52% / 17.2 | 85% / 0.62 / 38% / 37.2 | 75% / 0.66 / 35% / 52.8 |
| OP | 78% / 0.53 / 44% / 11.3 | 83% / 0.56 / 53% / 30 | 83% / 0.59 / 48% / 30 |
| ARB | 78% / 0.55 / 50% / 22.3 | 68% / 0.6 / 49% / 45.2 | 73% / 0.68 / 33% / 59.7 |
| DOGE | 80% / 0.47 / 46% / 14.1 | 79% / 0.47 / 68% / 18.7 | 75% / 0.52 / 62% / 18.5 |
| TIA | 80% / 0.54 / 40% / 12.9 | 85% / 0.61 / 40% / 34.5 | 73% / 0.66 / 33% / 39.7 |
| APT | 72% / 0.5 / 52% / 18.1 | 89% / 0.52 / 51% / 33.2 | 79% / 0.57 / 57% / 30 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
