# CoinPulse Strategy Tournament — 2026-10-18

_Generated 2026-10-18T13:06:31.719Z · 14 coins · 300 samples/window · 11.1s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`block_boot` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 31.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 33.4 |
| 3 | EWMA vol, zero drift (t) | 36.6 |
| 4 | Block bootstrap | 37.1 |
| 5 | Bootstrap (IID) | 37.6 |
| 6 | GBM (normal) | 38.7 |
| 7 | GBM + Student-t | 39.7 |
| 8 | GARCH(1,1)-lite | 40.8 |
| 9 | Momentum | 45.4 |
| 10 | Mean-reversion (OU) | 66.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 59 | **85** | 91 | 0.49 | 45 | — | 20.1 |
| 2 | GBM (normal) | 50 | **77** | 83 | 0.51 | 44 | 23% | 20.5 |
| 3 | Ensemble (GBM-t + bootstraps) | 49 | **75** | 83 | 0.51 | 43 | 22% | 20.7 |
| 4 | EWMA vol, zero drift (t) | 48 | **76** | 84 | 0.52 | 54 | 22% | 20.8 |
| 5 | Block bootstrap | 47 | **74** | 83 | 0.49 | 48 | 22% | 22.0 |
| 6 | GBM + Student-t | 47 | **75** | 83 | 0.52 | 46 | 22% | 22.2 |
| 7 | Bootstrap (IID) | 50 | **75** | 82 | 0.51 | 42 | 22% | 23.1 |
| 8 | GARCH(1,1)-lite | 47 | **74** | 82 | 0.51 | 45 | 22% | 23.7 |
| 9 | Momentum | 45 | **73** | 82 | 0.51 | 52 | 23% | 26.9 |
| 10 | Mean-reversion (OU) | 44 | **69** | 77 | 0.49 | 49 | 20% | 38.9 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 51 | **75** | 82 | 0.52 | 44 | 32% | 28.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 50 | **75** | 81 | 0.53 | 44 | 32% | 29.5 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 63 | **82** | 87 | 0.52 | 42 | — | 29.6 |
| 4 | Bootstrap (IID) | 51 | **75** | 82 | 0.53 | 46 | 32% | 30.1 |
| 5 | EWMA vol, zero drift (t) | 50 | **75** | 82 | 0.54 | 50 | 31% | 31.5 |
| 6 | GBM + Student-t | 52 | **73** | 82 | 0.54 | 45 | 32% | 31.5 |
| 7 | GARCH(1,1)-lite | 50 | **73** | 81 | 0.55 | 44 | 30% | 33.1 |
| 8 | GBM (normal) | 55 | **75** | 81 | 0.55 | 45 | 33% | 33.6 |
| 9 | Momentum | 44 | **71** | 81 | 0.54 | 52 | 33% | 36.9 |
| 10 | Mean-reversion (OU) | 40 | **63** | 71 | 0.51 | 46 | 26% | 56.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **79** | 88 | 0.58 | 39 | — | 43.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **72** | 82 | 0.59 | 40 | 55% | 50.0 |
| 3 | EWMA vol, zero drift (t) | 47 | **66** | 76 | 0.61 | 42 | 44% | 57.6 |
| 4 | Bootstrap (IID) | 46 | **67** | 75 | 0.60 | 40 | 46% | 59.7 |
| 5 | Block bootstrap | 46 | **67** | 75 | 0.59 | 40 | 48% | 60.5 |
| 6 | GBM (normal) | 45 | **66** | 74 | 0.61 | 36 | 45% | 62.1 |
| 7 | GBM + Student-t | 44 | **64** | 73 | 0.61 | 35 | 45% | 65.3 |
| 8 | GARCH(1,1)-lite | 43 | **64** | 73 | 0.61 | 34 | 43% | 65.7 |
| 9 | Momentum | 36 | **61** | 73 | 0.61 | 53 | 46% | 72.5 |
| 10 | Mean-reversion (OU) | 30 | **49** | 55 | 0.57 | 48 | 31% | 105.3 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.48 / 46% / 21.5 | 80% / 0.52 / 39% / 24.2 | 67% / 0.59 / 40% / 58 |
| ETH | 86% / 0.49 / 45% / 26.3 | 76% / 0.54 / 44% / 27.3 | 68% / 0.63 / 27% / 46.7 |
| SOL | 80% / 0.51 / 43% / 10.2 | 82% / 0.54 / 34% / 23.4 | 78% / 0.63 / 30% / 40.5 |
| BNB | 86% / 0.52 / 53% / 26.2 | 85% / 0.54 / 44% / 29.3 | 70% / 0.58 / 38% / 41.1 |
| XRP | 89% / 0.45 / 42% / 28.4 | 80% / 0.48 / 42% / 31.4 | 70% / 0.57 / 44% / 52.3 |
| SUI | 84% / 0.49 / 43% / 14.3 | 80% / 0.53 / 41% / 20.3 | 90% / 0.6 / 25% / 48.6 |
| AVAX | 84% / 0.52 / 42% / 29.2 | 72% / 0.55 / 30% / 41.8 | 71% / 0.64 / 27% / 48.9 |
| LINK | 86% / 0.51 / 42% / 13.8 | 77% / 0.55 / 42% / 23.4 | 76% / 0.63 / 37% / 35.4 |
| INJ | 88% / 0.47 / 53% / 29.8 | 94% / 0.47 / 58% / 39.3 | 94% / 0.47 / 62% / 38.9 |
| OP | 86% / 0.49 / 36% / 16.5 | 89% / 0.5 / 28% / 35.2 | 100% / 0.54 / 29% / 54.9 |
| ARB | 77% / 0.49 / 43% / 13.2 | 70% / 0.53 / 42% / 24.1 | 68% / 0.6 / 29% / 53.5 |
| DOGE | 85% / 0.45 / 43% / 26.2 | 80% / 0.46 / 37% / 25.1 | 71% / 0.52 / 48% / 24.8 |
| TIA | 88% / 0.49 / 55% / 12.8 | 96% / 0.51 / 56% / 36.5 | 98% / 0.52 / 62% / 46.3 |
| APT | 82% / 0.5 / 47% / 12.7 | 85% / 0.52 / 49% / 33.5 | 81% / 0.57 / 43% / 23.5 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
