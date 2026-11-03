# CoinPulse Strategy Tournament — 2026-11-03

_Generated 2026-11-03T16:54:37.404Z · 14 coins · 300 samples/window · 14.9s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 10.9 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`block_boot` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 32.9 |
| 2 | Ensemble (GBM-t + bootstraps) | 33.1 |
| 3 | Block bootstrap | 33.2 |
| 4 | Bootstrap (IID) | 35.8 |
| 5 | GBM + Student-t | 37.8 |
| 6 | GARCH(1,1)-lite | 38.3 |
| 7 | GBM (normal) | 38.7 |
| 8 | Momentum | 38.7 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 43.8 |
| 10 | Mean-reversion (OU) | 62.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 52 | **81** | 90 | 0.50 | 49 | 22% | 14.6 |
| 2 | Momentum | 52 | **80** | 88 | 0.51 | 52 | 24% | 15.2 |
| 3 | Bootstrap (IID) | 53 | **80** | 88 | 0.51 | 49 | 22% | 15.9 |
| 4 | Ensemble (GBM-t + bootstraps) | 51 | **82** | 89 | 0.52 | 51 | 23% | 16.5 |
| 5 | GARCH(1,1)-lite | 54 | **81** | 88 | 0.52 | 50 | 22% | 18.5 |
| 6 | EWMA vol, zero drift (t) | 57 | **82** | 89 | 0.51 | 51 | 23% | 19.4 |
| 7 | GBM + Student-t | 56 | **82** | 89 | 0.53 | 50 | 23% | 19.4 |
| 8 | GBM (normal) | 57 | **82** | 89 | 0.52 | 52 | 24% | 20.9 |
| 9 | Mean-reversion (OU) | 53 | **74** | 80 | 0.52 | 55 | 20% | 32.2 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 65 | **88** | 93 | 0.52 | 47 | — | 32.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **78** | 87 | 0.54 | 51 | 36% | 25.9 |
| 2 | Block bootstrap | 57 | **83** | 90 | 0.54 | 50 | 33% | 27.8 |
| 3 | GARCH(1,1)-lite | 55 | **82** | 88 | 0.57 | 49 | 31% | 28.9 |
| 4 | Ensemble (GBM-t + bootstraps) | 56 | **84** | 90 | 0.56 | 49 | 32% | 29.0 |
| 5 | Bootstrap (IID) | 56 | **81** | 89 | 0.55 | 47 | 31% | 29.5 |
| 6 | EWMA vol, zero drift (t) | 60 | **84** | 89 | 0.55 | 51 | 33% | 30.9 |
| 7 | GBM + Student-t | 58 | **83** | 88 | 0.57 | 47 | 33% | 31.5 |
| 8 | GBM (normal) | 60 | **83** | 89 | 0.57 | 49 | 34% | 33.6 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 68 | **88** | 93 | 0.57 | 43 | — | 44.3 |
| 10 | Mean-reversion (OU) | 48 | **71** | 79 | 0.56 | 51 | 26% | 45.5 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 53 | **75** | 82 | 0.64 | 43 | 47% | 48.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **78** | 86 | 0.65 | 37 | 56% | 53.7 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 61 | **83** | 91 | 0.64 | 37 | — | 54.4 |
| 4 | Block bootstrap | 48 | **74** | 81 | 0.64 | 38 | 49% | 57.3 |
| 5 | GBM (normal) | 47 | **72** | 81 | 0.68 | 39 | 47% | 61.7 |
| 6 | Bootstrap (IID) | 44 | **71** | 81 | 0.65 | 37 | 45% | 62.1 |
| 7 | GBM + Student-t | 46 | **72** | 79 | 0.68 | 38 | 47% | 62.6 |
| 8 | GARCH(1,1)-lite | 42 | **70** | 78 | 0.68 | 38 | 43% | 67.5 |
| 9 | Momentum | 34 | **60** | 73 | 0.61 | 46 | 52% | 75.2 |
| 10 | Mean-reversion (OU) | 31 | **54** | 62 | 0.67 | 45 | 33% | 108.9 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.51 / 46% / 13.7 | 85% / 0.56 / 57% / 35.8 | 76% / 0.68 / 41% / 57.5 |
| ETH | 82% / 0.53 / 46% / 19.2 | 87% / 0.56 / 51% / 35.3 | 73% / 0.68 / 33% / 56.2 |
| SOL | 80% / 0.53 / 50% / 17.1 | 83% / 0.58 / 45% / 30.5 | 68% / 0.69 / 35% / 68.6 |
| BNB | 88% / 0.55 / 46% / 19.6 | 83% / 0.59 / 49% / 30.3 | 73% / 0.66 / 52% / 56.1 |
| XRP | 84% / 0.46 / 62% / 27.7 | 89% / 0.47 / 60% / 23 | 76% / 0.58 / 51% / 46.2 |
| SUI | 84% / 0.5 / 50% / 12.4 | 85% / 0.53 / 53% / 25.6 | 78% / 0.64 / 40% / 48.9 |
| AVAX | 86% / 0.5 / 48% / 26.9 | 79% / 0.55 / 51% / 32.6 | 68% / 0.67 / 46% / 58.2 |
| LINK | 74% / 0.57 / 50% / 27.3 | 81% / 0.58 / 49% / 28.7 | 73% / 0.72 / 30% / 66.2 |
| INJ | 82% / 0.54 / 64% / 23.2 | 83% / 0.58 / 38% / 30.6 | 78% / 0.66 / 40% / 48.9 |
| OP | 82% / 0.51 / 54% / 10.9 | 89% / 0.53 / 49% / 32.3 | 83% / 0.59 / 48% / 28.3 |
| ARB | 74% / 0.52 / 54% / 25.8 | 72% / 0.57 / 53% / 36.4 | 73% / 0.68 / 35% / 60.7 |
| DOGE | 86% / 0.46 / 48% / 26.1 | 85% / 0.45 / 60% / 29.1 | 76% / 0.52 / 63% / 16.7 |
| TIA | 80% / 0.54 / 46% / 10.1 | 85% / 0.61 / 40% / 30.8 | 76% / 0.66 / 32% / 39.5 |
| APT | 80% / 0.47 / 50% / 11.4 | 87% / 0.5 / 53% / 32 | 79% / 0.56 / 59% / 26.3 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
