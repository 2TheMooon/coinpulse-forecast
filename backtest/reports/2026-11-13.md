# CoinPulse Strategy Tournament — 2026-11-13

_Generated 2026-11-13T17:01:55.588Z · 14 coins · 300 samples/window · 13.0s_

## 🏆 Recommendation: **SWITCH → `ensemble`**

> Ensemble (GBM-t + bootstraps) beats the shipped engine by 9.2 score points (lower=better).

Overall best: **ensemble** · by horizon: 7d→`ensemble` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 30.3 |
| 2 | EWMA vol, zero drift (t) | 30.5 |
| 3 | Block bootstrap | 31.4 |
| 4 | Momentum | 33.1 |
| 5 | Bootstrap (IID) | 33.2 |
| 6 | GARCH(1,1)-lite | 36.4 |
| 7 | GBM + Student-t | 36.5 |
| 8 | GBM (normal) | 36.8 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 39.5 |
| 10 | Mean-reversion (OU) | 54.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 55 | **83** | 90 | 0.49 | 55 | 23% | 15.3 |
| 2 | GARCH(1,1)-lite | 55 | **81** | 89 | 0.49 | 54 | 22% | 16.5 |
| 3 | Bootstrap (IID) | 55 | **81** | 89 | 0.49 | 56 | 23% | 17.3 |
| 4 | Block bootstrap | 54 | **83** | 89 | 0.48 | 58 | 23% | 17.6 |
| 5 | GBM + Student-t | 57 | **82** | 89 | 0.50 | 54 | 23% | 17.6 |
| 6 | Momentum | 55 | **80** | 89 | 0.48 | 57 | 24% | 18.0 |
| 7 | GBM (normal) | 59 | **83** | 89 | 0.50 | 52 | 24% | 18.8 |
| 8 | EWMA vol, zero drift (t) | 57 | **83** | 90 | 0.49 | 54 | 23% | 19.1 |
| 9 | Mean-reversion (OU) | 53 | **76** | 84 | 0.50 | 55 | 21% | 24.0 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 66 | **89** | 93 | 0.51 | 49 | — | 32.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 53 | **76** | 86 | 0.53 | 50 | 36% | 23.0 |
| 2 | Block bootstrap | 53 | **80** | 89 | 0.55 | 52 | 34% | 25.1 |
| 3 | Bootstrap (IID) | 52 | **80** | 88 | 0.54 | 47 | 33% | 26.6 |
| 4 | EWMA vol, zero drift (t) | 54 | **82** | 88 | 0.54 | 52 | 33% | 27.3 |
| 5 | Ensemble (GBM-t + bootstraps) | 52 | **82** | 88 | 0.55 | 49 | 33% | 27.3 |
| 6 | GARCH(1,1)-lite | 49 | **80** | 87 | 0.56 | 45 | 32% | 29.0 |
| 7 | GBM + Student-t | 51 | **80** | 88 | 0.57 | 49 | 33% | 30.9 |
| 8 | GBM (normal) | 55 | **81** | 88 | 0.57 | 48 | 34% | 32.1 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 66 | **87** | 92 | 0.55 | 43 | — | 37.2 |
| 10 | Mean-reversion (OU) | 46 | **71** | 81 | 0.56 | 53 | 27% | 41.1 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 50 | **74** | 82 | 0.62 | 44 | 48% | 45.1 |
| 2 | Ensemble (GBM-t + bootstraps) | 50 | **79** | 86 | 0.62 | 36 | 58% | 48.3 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 59 | **83** | 90 | 0.62 | 35 | — | 49.2 |
| 4 | Block bootstrap | 47 | **74** | 83 | 0.61 | 40 | 51% | 51.6 |
| 5 | Bootstrap (IID) | 42 | **71** | 81 | 0.62 | 37 | 47% | 55.7 |
| 6 | Momentum | 38 | **64** | 76 | 0.57 | 47 | 54% | 58.4 |
| 7 | GBM (normal) | 44 | **70** | 81 | 0.65 | 38 | 48% | 59.4 |
| 8 | GBM + Student-t | 43 | **71** | 78 | 0.65 | 41 | 47% | 61.1 |
| 9 | GARCH(1,1)-lite | 41 | **69** | 78 | 0.65 | 39 | 45% | 63.6 |
| 10 | Mean-reversion (OU) | 31 | **56** | 66 | 0.65 | 47 | 33% | 97.8 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.5 / 60% / 21 | 83% / 0.57 / 40% / 25.5 | 75% / 0.67 / 24% / 53.8 |
| ETH | 84% / 0.52 / 42% / 22.5 | 81% / 0.58 / 49% / 34.6 | 68% / 0.66 / 16% / 72.3 |
| SOL | 78% / 0.49 / 46% / 10.3 | 68% / 0.55 / 40% / 40.5 | 70% / 0.6 / 37% / 40.3 |
| BNB | 84% / 0.5 / 52% / 8.5 | 85% / 0.56 / 40% / 19.4 | 75% / 0.62 / 27% / 38.3 |
| XRP | 82% / 0.45 / 64% / 14.6 | 85% / 0.5 / 62% / 9.1 | 75% / 0.59 / 48% / 42.3 |
| SUI | 88% / 0.5 / 60% / 14.5 | 87% / 0.54 / 49% / 17.6 | 84% / 0.63 / 33% / 35.4 |
| AVAX | 90% / 0.52 / 48% / 25.3 | 83% / 0.58 / 36% / 29.3 | 71% / 0.67 / 37% / 67.5 |
| LINK | 78% / 0.51 / 52% / 9.3 | 74% / 0.56 / 43% / 39.3 | 75% / 0.66 / 29% / 56.8 |
| INJ | 84% / 0.47 / 44% / 17.7 | 91% / 0.52 / 53% / 32 | 94% / 0.57 / 68% / 55.8 |
| OP | 86% / 0.48 / 60% / 16.6 | 89% / 0.52 / 49% / 31.5 | 90% / 0.58 / 44% / 42.8 |
| ARB | 78% / 0.53 / 56% / 14.4 | 66% / 0.61 / 55% / 55.5 | 73% / 0.69 / 17% / 72.4 |
| DOGE | 80% / 0.45 / 74% / 22.6 | 81% / 0.49 / 70% / 5.7 | 78% / 0.57 / 56% / 18.8 |
| TIA | 86% / 0.5 / 48% / 12.2 | 83% / 0.53 / 43% / 14.4 | 90% / 0.58 / 22% / 43.7 |
| APT | 80% / 0.49 / 64% / 4.2 | 85% / 0.54 / 62% / 28.1 | 81% / 0.62 / 51% / 36.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
