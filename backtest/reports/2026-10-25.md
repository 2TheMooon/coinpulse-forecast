# CoinPulse Strategy Tournament — 2026-10-25

_Generated 2026-10-25T13:37:54.894Z · 14 coins · 300 samples/window · 10.8s_

## 🏆 Recommendation: **SWITCH → `ensemble`**

> Ensemble (GBM-t + bootstraps) beats the shipped engine by 4.9 score points (lower=better).

Overall best: **ensemble** · by horizon: 7d→`ensemble` · 14d→`momentum` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 30.5 |
| 2 | EWMA vol, zero drift (t) | 33.2 |
| 3 | Bootstrap (IID) | 34.4 |
| 4 | Block bootstrap | 34.4 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 35.4 |
| 6 | GBM + Student-t | 35.6 |
| 7 | GBM (normal) | 36.4 |
| 8 | GARCH(1,1)-lite | 36.4 |
| 9 | Momentum | 38.4 |
| 10 | Mean-reversion (OU) | 63.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 51 | **78** | 86 | 0.50 | 54 | 23% | 15.3 |
| 2 | GBM + Student-t | 54 | **79** | 86 | 0.51 | 52 | 23% | 16.5 |
| 3 | GARCH(1,1)-lite | 52 | **77** | 85 | 0.50 | 48 | 22% | 16.5 |
| 4 | Bootstrap (IID) | 51 | **77** | 86 | 0.50 | 49 | 22% | 17.1 |
| 5 | GBM (normal) | 55 | **79** | 87 | 0.51 | 47 | 24% | 17.3 |
| 6 | Block bootstrap | 49 | **77** | 86 | 0.49 | 48 | 22% | 17.3 |
| 7 | Momentum | 50 | **77** | 85 | 0.50 | 51 | 24% | 17.9 |
| 8 | EWMA vol, zero drift (t) | 55 | **80** | 87 | 0.51 | 57 | 23% | 18.9 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 61 | **83** | 88 | 0.51 | 45 | — | 22.1 |
| 10 | Mean-reversion (OU) | 49 | **71** | 77 | 0.49 | 49 | 20% | 36.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 48 | **76** | 85 | 0.52 | 53 | 35% | 24.6 |
| 2 | Ensemble (GBM-t + bootstraps) | 54 | **80** | 86 | 0.53 | 49 | 33% | 25.9 |
| 3 | EWMA vol, zero drift (t) | 55 | **79** | 86 | 0.53 | 49 | 32% | 26.3 |
| 4 | GBM + Student-t | 55 | **78** | 85 | 0.54 | 45 | 32% | 26.3 |
| 5 | Block bootstrap | 54 | **78** | 85 | 0.52 | 49 | 33% | 26.5 |
| 6 | GARCH(1,1)-lite | 54 | **78** | 85 | 0.54 | 49 | 31% | 27.0 |
| 7 | Bootstrap (IID) | 55 | **78** | 86 | 0.53 | 48 | 32% | 27.7 |
| 8 | GBM (normal) | 58 | **79** | 86 | 0.55 | 50 | 34% | 29.1 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 65 | **85** | 89 | 0.54 | 45 | — | 33.3 |
| 10 | Mean-reversion (OU) | 43 | **67** | 74 | 0.52 | 48 | 26% | 50.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 53 | **76** | 82 | 0.62 | 40 | 56% | 50.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 61 | **79** | 88 | 0.60 | 42 | — | 50.6 |
| 3 | EWMA vol, zero drift (t) | 50 | **71** | 77 | 0.63 | 42 | 45% | 54.5 |
| 4 | Bootstrap (IID) | 47 | **71** | 78 | 0.62 | 41 | 47% | 58.3 |
| 5 | Block bootstrap | 48 | **71** | 77 | 0.62 | 42 | 49% | 59.4 |
| 6 | GBM (normal) | 45 | **69** | 76 | 0.64 | 38 | 46% | 62.7 |
| 7 | GBM + Student-t | 44 | **68** | 75 | 0.64 | 37 | 45% | 64.0 |
| 8 | GARCH(1,1)-lite | 42 | **68** | 75 | 0.64 | 38 | 44% | 65.8 |
| 9 | Momentum | 35 | **63** | 75 | 0.63 | 52 | 49% | 72.6 |
| 10 | Mean-reversion (OU) | 32 | **51** | 59 | 0.61 | 43 | 32% | 104.2 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.5 / 50% / 6 | 83% / 0.54 / 40% / 27 | 70% / 0.66 / 32% / 68.9 |
| ETH | 80% / 0.52 / 54% / 22.2 | 77% / 0.56 / 45% / 21.3 | 65% / 0.68 / 30% / 73.3 |
| SOL | 78% / 0.52 / 42% / 17.7 | 74% / 0.55 / 45% / 26.2 | 73% / 0.67 / 46% / 50.8 |
| BNB | 82% / 0.53 / 54% / 12 | 81% / 0.53 / 36% / 13 | 73% / 0.61 / 49% / 46.1 |
| XRP | 78% / 0.46 / 62% / 14.2 | 83% / 0.47 / 57% / 17 | 70% / 0.59 / 44% / 58.6 |
| SUI | 86% / 0.49 / 58% / 9.6 | 83% / 0.53 / 51% / 22 | 81% / 0.64 / 38% / 34.6 |
| AVAX | 76% / 0.49 / 60% / 21.2 | 72% / 0.55 / 53% / 38.8 | 62% / 0.68 / 41% / 85 |
| LINK | 72% / 0.53 / 68% / 32.7 | 72% / 0.55 / 40% / 32.3 | 71% / 0.69 / 38% / 63.4 |
| INJ | 76% / 0.49 / 50% / 11.5 | 83% / 0.47 / 57% / 14.8 | 87% / 0.51 / 57% / 13.5 |
| OP | 80% / 0.5 / 50% / 2.1 | 87% / 0.52 / 51% / 25.8 | 92% / 0.58 / 33% / 49.5 |
| ARB | 68% / 0.51 / 56% / 27.3 | 68% / 0.55 / 51% / 41 | 71% / 0.66 / 25% / 53.2 |
| DOGE | 76% / 0.45 / 58% / 20.3 | 79% / 0.44 / 60% / 22.7 | 73% / 0.53 / 43% / 22.5 |
| TIA | 80% / 0.52 / 40% / 7.3 | 89% / 0.55 / 40% / 35 | 92% / 0.57 / 40% / 44 |
| APT | 82% / 0.48 / 50% / 9.7 | 83% / 0.52 / 53% / 25.5 | 76% / 0.58 / 46% / 40.4 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
