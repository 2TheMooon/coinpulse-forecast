# CoinPulse Strategy Tournament — 2026-10-20

_Generated 2026-10-20T14:12:20.373Z · 14 coins · 300 samples/window · 7.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_t` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 31.5 |
| 2 | Ensemble (GBM-t + bootstraps) | 33.4 |
| 3 | EWMA vol, zero drift (t) | 36.2 |
| 4 | Bootstrap (IID) | 36.2 |
| 5 | Block bootstrap | 37.6 |
| 6 | GBM (normal) | 38.2 |
| 7 | GBM + Student-t | 38.3 |
| 8 | GARCH(1,1)-lite | 39.8 |
| 9 | Momentum | 42.5 |
| 10 | Mean-reversion (OU) | 66.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 51 | **78** | 86 | 0.50 | 47 | 23% | 18.2 |
| 2 | GBM (normal) | 54 | **80** | 86 | 0.49 | 48 | 23% | 18.9 |
| 3 | EWMA vol, zero drift (t) | 52 | **79** | 86 | 0.50 | 53 | 23% | 19.0 |
| 4 | Ensemble (GBM-t + bootstraps) | 51 | **78** | 85 | 0.49 | 48 | 22% | 19.3 |
| 5 | Momentum | 50 | **75** | 85 | 0.49 | 52 | 24% | 19.3 |
| 6 | Bootstrap (IID) | 51 | **76** | 86 | 0.49 | 49 | 22% | 19.9 |
| 7 | Shipped engine (forecast.js) _(shipped)_ | 59 | **85** | 91 | 0.49 | 46 | — | 20.0 |
| 8 | GARCH(1,1)-lite | 51 | **77** | 85 | 0.49 | 45 | 22% | 21.0 |
| 9 | Block bootstrap | 48 | **75** | 85 | 0.48 | 45 | 22% | 21.0 |
| 10 | Mean-reversion (OU) | 47 | **68** | 77 | 0.47 | 46 | 20% | 38.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 62 | **82** | 87 | 0.52 | 43 | — | 29.2 |
| 2 | GBM + Student-t | 50 | **75** | 83 | 0.54 | 44 | 32% | 31.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 52 | **74** | 82 | 0.53 | 46 | 32% | 31.6 |
| 4 | EWMA vol, zero drift (t) | 52 | **75** | 83 | 0.54 | 53 | 32% | 32.4 |
| 5 | Block bootstrap | 50 | **73** | 83 | 0.52 | 47 | 32% | 32.5 |
| 6 | GARCH(1,1)-lite | 49 | **75** | 83 | 0.55 | 44 | 31% | 32.6 |
| 7 | Bootstrap (IID) | 50 | **73** | 83 | 0.52 | 42 | 32% | 32.8 |
| 8 | GBM (normal) | 53 | **75** | 83 | 0.54 | 47 | 33% | 32.9 |
| 9 | Momentum | 43 | **71** | 83 | 0.53 | 51 | 34% | 34.5 |
| 10 | Mean-reversion (OU) | 41 | **63** | 70 | 0.51 | 46 | 26% | 59.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 59 | **79** | 88 | 0.58 | 40 | — | 45.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 54 | **73** | 84 | 0.60 | 38 | 56% | 49.3 |
| 3 | Bootstrap (IID) | 47 | **69** | 78 | 0.60 | 38 | 47% | 55.8 |
| 4 | EWMA vol, zero drift (t) | 47 | **67** | 77 | 0.62 | 42 | 44% | 57.1 |
| 5 | Block bootstrap | 47 | **68** | 76 | 0.60 | 40 | 48% | 59.3 |
| 6 | GBM (normal) | 45 | **66** | 75 | 0.62 | 36 | 46% | 62.9 |
| 7 | GBM + Student-t | 44 | **65** | 74 | 0.62 | 36 | 45% | 65.1 |
| 8 | GARCH(1,1)-lite | 43 | **66** | 73 | 0.63 | 36 | 44% | 65.8 |
| 9 | Momentum | 36 | **62** | 73 | 0.62 | 54 | 47% | 73.6 |
| 10 | Mean-reversion (OU) | 32 | **50** | 56 | 0.58 | 46 | 31% | 102.5 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.49 / 47% / 22.1 | 80% / 0.52 / 39% / 26.5 | 68% / 0.6 / 41% / 60 |
| ETH | 86% / 0.49 / 45% / 26 | 76% / 0.54 / 44% / 27.2 | 68% / 0.63 / 27% / 47.7 |
| SOL | 80% / 0.51 / 45% / 10.9 | 80% / 0.54 / 35% / 19.5 | 78% / 0.64 / 32% / 42.5 |
| BNB | 88% / 0.52 / 53% / 28.2 | 86% / 0.53 / 44% / 29.9 | 71% / 0.59 / 37% / 42.9 |
| XRP | 89% / 0.46 / 42% / 29.4 | 80% / 0.48 / 42% / 30.2 | 70% / 0.57 / 44% / 53.2 |
| SUI | 85% / 0.49 / 43% / 15.3 | 80% / 0.53 / 41% / 22.4 | 89% / 0.61 / 27% / 50.8 |
| AVAX | 84% / 0.52 / 43% / 28.4 | 73% / 0.56 / 32% / 38.1 | 68% / 0.65 / 30% / 51.2 |
| LINK | 86% / 0.51 / 42% / 13.8 | 77% / 0.55 / 42% / 22.1 | 78% / 0.64 / 37% / 36.6 |
| INJ | 88% / 0.48 / 53% / 28.1 | 94% / 0.47 / 58% / 41.3 | 94% / 0.47 / 62% / 38.3 |
| OP | 86% / 0.49 / 45% / 15.8 | 89% / 0.51 / 38% / 35.4 | 100% / 0.55 / 37% / 57.3 |
| ARB | 78% / 0.5 / 45% / 11.5 | 70% / 0.54 / 42% / 23.9 | 70% / 0.61 / 29% / 55.3 |
| DOGE | 85% / 0.46 / 47% / 26.2 | 80% / 0.47 / 39% / 24 | 73% / 0.53 / 49% / 25.5 |
| TIA | 88% / 0.49 / 55% / 12.5 | 96% / 0.51 / 56% / 36.2 | 98% / 0.53 / 62% / 46.2 |
| APT | 82% / 0.5 / 46% / 11.8 | 85% / 0.52 / 51% / 31.6 | 81% / 0.57 / 43% / 26.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
