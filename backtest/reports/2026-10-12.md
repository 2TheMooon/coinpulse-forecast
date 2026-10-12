# CoinPulse Strategy Tournament — 2026-10-12

_Generated 2026-10-12T18:48:38.561Z · 14 coins · 300 samples/window · 11.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 30.5 |
| 2 | Ensemble (GBM-t + bootstraps) | 36.6 |
| 3 | EWMA vol, zero drift (t) | 37.9 |
| 4 | GBM (normal) | 40.0 |
| 5 | Bootstrap (IID) | 40.7 |
| 6 | GBM + Student-t | 40.9 |
| 7 | Block bootstrap | 42.4 |
| 8 | GARCH(1,1)-lite | 42.8 |
| 9 | Momentum | 49.9 |
| 10 | Mean-reversion (OU) | 67.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **84** | 90 | 0.48 | 44 | — | 20.1 |
| 2 | GBM (normal) | 49 | **75** | 83 | 0.50 | 41 | 23% | 20.5 |
| 3 | EWMA vol, zero drift (t) | 48 | **76** | 83 | 0.51 | 49 | 22% | 21.7 |
| 4 | GBM + Student-t | 48 | **75** | 83 | 0.51 | 40 | 22% | 22.6 |
| 5 | GARCH(1,1)-lite | 48 | **73** | 82 | 0.50 | 45 | 21% | 23.4 |
| 6 | Ensemble (GBM-t + bootstraps) | 47 | **72** | 82 | 0.50 | 42 | 22% | 25.2 |
| 7 | Bootstrap (IID) | 48 | **73** | 80 | 0.50 | 45 | 22% | 26.9 |
| 8 | Block bootstrap | 44 | **71** | 80 | 0.49 | 44 | 21% | 29.4 |
| 9 | Momentum | 43 | **71** | 81 | 0.50 | 50 | 23% | 30.0 |
| 10 | Mean-reversion (OU) | 45 | **69** | 77 | 0.48 | 48 | 20% | 37.8 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 61 | **81** | 87 | 0.51 | 42 | — | 29.2 |
| 2 | EWMA vol, zero drift (t) | 49 | **74** | 82 | 0.53 | 54 | 31% | 31.9 |
| 3 | Ensemble (GBM-t + bootstraps) | 50 | **72** | 80 | 0.52 | 48 | 31% | 33.1 |
| 4 | GBM + Student-t | 50 | **71** | 80 | 0.53 | 44 | 31% | 34.0 |
| 5 | Bootstrap (IID) | 48 | **72** | 80 | 0.52 | 44 | 31% | 34.1 |
| 6 | GBM (normal) | 52 | **73** | 80 | 0.54 | 44 | 32% | 34.1 |
| 7 | GARCH(1,1)-lite | 47 | **71** | 80 | 0.54 | 44 | 30% | 35.8 |
| 8 | Block bootstrap | 47 | **71** | 78 | 0.51 | 43 | 31% | 36.3 |
| 9 | Momentum | 42 | **67** | 79 | 0.53 | 52 | 33% | 41.5 |
| 10 | Mean-reversion (OU) | 38 | **62** | 71 | 0.50 | 46 | 25% | 60.3 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **76** | 86 | 0.56 | 37 | — | 42.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 50 | **69** | 79 | 0.56 | 40 | 54% | 51.5 |
| 3 | EWMA vol, zero drift (t) | 44 | **64** | 73 | 0.58 | 44 | 43% | 60.3 |
| 4 | Bootstrap (IID) | 43 | **64** | 73 | 0.57 | 40 | 45% | 61.0 |
| 5 | Block bootstrap | 43 | **64** | 71 | 0.56 | 39 | 46% | 61.6 |
| 6 | GBM (normal) | 42 | **63** | 71 | 0.59 | 36 | 45% | 65.5 |
| 7 | GBM + Student-t | 41 | **62** | 71 | 0.59 | 33 | 44% | 66.2 |
| 8 | GARCH(1,1)-lite | 39 | **62** | 70 | 0.59 | 34 | 42% | 69.3 |
| 9 | Momentum | 32 | **57** | 70 | 0.58 | 51 | 45% | 78.0 |
| 10 | Mean-reversion (OU) | 29 | **47** | 54 | 0.54 | 51 | 31% | 105.1 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.47 / 43% / 22.5 | 77% / 0.51 / 38% / 21.4 | 62% / 0.57 / 33% / 58.7 |
| ETH | 84% / 0.48 / 41% / 23.4 | 76% / 0.53 / 39% / 22.8 | 63% / 0.6 / 21% / 47.9 |
| SOL | 80% / 0.51 / 51% / 10.1 | 79% / 0.55 / 42% / 25.9 | 73% / 0.62 / 37% / 42.3 |
| BNB | 88% / 0.53 / 47% / 27.7 | 86% / 0.55 / 44% / 32.9 | 68% / 0.59 / 33% / 40.3 |
| XRP | 88% / 0.45 / 42% / 28.1 | 80% / 0.48 / 42% / 30.8 | 67% / 0.55 / 44% / 48.4 |
| SUI | 85% / 0.49 / 43% / 16 | 82% / 0.52 / 41% / 19.9 | 86% / 0.57 / 25% / 36.2 |
| AVAX | 82% / 0.51 / 42% / 23.5 | 72% / 0.54 / 30% / 35.9 | 67% / 0.59 / 27% / 51.5 |
| LINK | 85% / 0.51 / 39% / 9.5 | 75% / 0.54 / 39% / 23.7 | 71% / 0.61 / 37% / 35.3 |
| INJ | 89% / 0.47 / 53% / 31.3 | 96% / 0.49 / 59% / 40.6 | 97% / 0.47 / 60% / 44.1 |
| OP | 85% / 0.46 / 32% / 18.1 | 89% / 0.48 / 25% / 32.6 | 97% / 0.51 / 25% / 43.5 |
| ARB | 73% / 0.47 / 39% / 22.2 | 66% / 0.52 / 39% / 29.7 | 63% / 0.58 / 25% / 51.8 |
| DOGE | 82% / 0.44 / 39% / 23 | 77% / 0.46 / 38% / 30 | 67% / 0.49 / 40% / 27.7 |
| TIA | 88% / 0.48 / 47% / 16.5 | 96% / 0.5 / 49% / 36.5 | 97% / 0.5 / 52% / 44.4 |
| APT | 80% / 0.5 / 53% / 9.3 | 82% / 0.53 / 55% / 26.3 | 81% / 0.56 / 56% / 18.3 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
