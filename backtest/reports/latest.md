# CoinPulse Strategy Tournament — 2026-11-11

_Generated 2026-11-11T16:59:03.327Z · 14 coins · 300 samples/window · 10.8s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 11.2 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`block_boot` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 30.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 33.6 |
| 3 | Block bootstrap | 35.3 |
| 4 | Momentum | 36.7 |
| 5 | Bootstrap (IID) | 37.2 |
| 6 | GBM + Student-t | 39.0 |
| 7 | GARCH(1,1)-lite | 39.5 |
| 8 | GBM (normal) | 39.9 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 41.6 |
| 10 | Mean-reversion (OU) | 58.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 52 | **81** | 89 | 0.53 | 52 | 23% | 16.9 |
| 2 | EWMA vol, zero drift (t) | 52 | **81** | 88 | 0.53 | 42 | 23% | 17.4 |
| 3 | Ensemble (GBM-t + bootstraps) | 52 | **81** | 88 | 0.53 | 51 | 23% | 17.8 |
| 4 | Momentum | 50 | **77** | 86 | 0.52 | 52 | 24% | 19.2 |
| 5 | GBM + Student-t | 53 | **79** | 88 | 0.54 | 45 | 23% | 19.5 |
| 6 | Bootstrap (IID) | 51 | **80** | 87 | 0.53 | 49 | 23% | 19.9 |
| 7 | GBM (normal) | 56 | **81** | 88 | 0.54 | 47 | 24% | 20.3 |
| 8 | GARCH(1,1)-lite | 51 | **78** | 87 | 0.54 | 45 | 22% | 20.6 |
| 9 | Mean-reversion (OU) | 48 | **75** | 83 | 0.54 | 54 | 21% | 28.1 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 65 | **88** | 93 | 0.52 | 49 | — | 32.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **76** | 85 | 0.55 | 53 | 35% | 28.4 |
| 2 | EWMA vol, zero drift (t) | 55 | **82** | 88 | 0.56 | 48 | 33% | 28.6 |
| 3 | Bootstrap (IID) | 52 | **79** | 87 | 0.56 | 45 | 32% | 30.7 |
| 4 | GARCH(1,1)-lite | 51 | **78** | 87 | 0.58 | 47 | 31% | 31.6 |
| 5 | Block bootstrap | 56 | **82** | 89 | 0.56 | 50 | 34% | 32.0 |
| 6 | Ensemble (GBM-t + bootstraps) | 56 | **83** | 88 | 0.57 | 49 | 33% | 32.1 |
| 7 | GBM + Student-t | 54 | **79** | 86 | 0.59 | 48 | 33% | 34.3 |
| 8 | GBM (normal) | 57 | **81** | 87 | 0.59 | 46 | 34% | 36.4 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 67 | **88** | 92 | 0.56 | 43 | — | 40.4 |
| 10 | Mean-reversion (OU) | 47 | **72** | 80 | 0.58 | 51 | 27% | 43.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 52 | **75** | 82 | 0.63 | 43 | 48% | 45.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 52 | **78** | 86 | 0.64 | 37 | 58% | 50.9 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 58 | **82** | 90 | 0.63 | 34 | — | 52.4 |
| 4 | Block bootstrap | 47 | **73** | 82 | 0.63 | 40 | 51% | 57.1 |
| 5 | Bootstrap (IID) | 42 | **71** | 80 | 0.63 | 37 | 46% | 61.0 |
| 6 | Momentum | 36 | **63** | 76 | 0.58 | 47 | 53% | 62.4 |
| 7 | GBM (normal) | 44 | **71** | 80 | 0.67 | 37 | 48% | 63.0 |
| 8 | GBM + Student-t | 44 | **70** | 79 | 0.67 | 38 | 47% | 63.3 |
| 9 | GARCH(1,1)-lite | 40 | **70** | 79 | 0.66 | 37 | 44% | 66.4 |
| 10 | Mean-reversion (OU) | 30 | **55** | 64 | 0.66 | 47 | 32% | 104.2 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.53 / 40% / 14.1 | 85% / 0.56 / 55% / 24 | 76% / 0.66 / 41% / 51.6 |
| ETH | 84% / 0.54 / 32% / 21.4 | 83% / 0.57 / 45% / 22.4 | 68% / 0.65 / 30% / 56.4 |
| SOL | 74% / 0.54 / 34% / 19.2 | 70% / 0.56 / 49% / 28.6 | 70% / 0.64 / 38% / 60.3 |
| BNB | 84% / 0.55 / 36% / 19.9 | 87% / 0.6 / 49% / 32.3 | 76% / 0.65 / 48% / 49.2 |
| XRP | 84% / 0.47 / 46% / 13.9 | 85% / 0.49 / 57% / 20.2 | 75% / 0.56 / 51% / 37.4 |
| SUI | 82% / 0.51 / 44% / 7.3 | 81% / 0.55 / 55% / 24.3 | 78% / 0.62 / 43% / 39.6 |
| AVAX | 88% / 0.53 / 44% / 17.2 | 79% / 0.57 / 47% / 36.1 | 67% / 0.66 / 44% / 58.1 |
| LINK | 76% / 0.57 / 38% / 21.7 | 77% / 0.6 / 43% / 34.5 | 70% / 0.69 / 32% / 68.4 |
| INJ | 86% / 0.57 / 42% / 23.6 | 85% / 0.62 / 36% / 36.6 | 75% / 0.68 / 30% / 52.7 |
| OP | 80% / 0.52 / 46% / 14.3 | 85% / 0.55 / 45% / 25.7 | 84% / 0.58 / 52% / 25.6 |
| ARB | 76% / 0.56 / 50% / 27.8 | 68% / 0.6 / 45% / 43.1 | 75% / 0.69 / 33% / 61.8 |
| DOGE | 76% / 0.45 / 42% / 17.6 | 85% / 0.46 / 55% / 20.2 | 78% / 0.51 / 60% / 16.6 |
| TIA | 82% / 0.54 / 44% / 15.1 | 83% / 0.59 / 43% / 26.1 | 78% / 0.64 / 40% / 33.7 |
| APT | 76% / 0.5 / 44% / 10.4 | 89% / 0.52 / 43% / 25.6 | 81% / 0.56 / 52% / 23.7 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
