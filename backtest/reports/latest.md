# CoinPulse Strategy Tournament — 2026-10-16

_Generated 2026-10-16T13:51:13.249Z · 14 coins · 300 samples/window · 8.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_normal` · 14d→`ensemble` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 31.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 31.9 |
| 3 | EWMA vol, zero drift (t) | 34.4 |
| 4 | Bootstrap (IID) | 35.8 |
| 5 | Block bootstrap | 36.5 |
| 6 | GBM (normal) | 37.4 |
| 7 | GBM + Student-t | 38.3 |
| 8 | GARCH(1,1)-lite | 39.7 |
| 9 | Momentum | 41.5 |
| 10 | Mean-reversion (OU) | 65.5 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 53 | **78** | 85 | 0.50 | 44 | 23% | 16.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 49 | **77** | 86 | 0.50 | 50 | 22% | 17.6 |
| 3 | EWMA vol, zero drift (t) | 52 | **79** | 86 | 0.50 | 59 | 23% | 17.8 |
| 4 | GBM + Student-t | 50 | **77** | 86 | 0.51 | 46 | 23% | 18.7 |
| 5 | Block bootstrap | 49 | **76** | 85 | 0.48 | 53 | 22% | 19.0 |
| 6 | GARCH(1,1)-lite | 49 | **76** | 85 | 0.49 | 47 | 22% | 19.7 |
| 7 | Bootstrap (IID) | 51 | **77** | 85 | 0.49 | 47 | 22% | 19.8 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 59 | **85** | 91 | 0.49 | 47 | — | 20.6 |
| 9 | Momentum | 44 | **77** | 85 | 0.49 | 50 | 24% | 21.5 |
| 10 | Mean-reversion (OU) | 48 | **71** | 77 | 0.48 | 50 | 20% | 36.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 53 | **77** | 84 | 0.52 | 45 | 32% | 27.0 |
| 2 | Momentum | 46 | **73** | 83 | 0.51 | 53 | 34% | 27.0 |
| 3 | EWMA vol, zero drift (t) | 53 | **77** | 84 | 0.52 | 51 | 32% | 27.3 |
| 4 | Bootstrap (IID) | 53 | **76** | 84 | 0.51 | 46 | 31% | 27.6 |
| 5 | GBM + Student-t | 52 | **76** | 84 | 0.53 | 47 | 32% | 28.7 |
| 6 | GBM (normal) | 55 | **77** | 83 | 0.53 | 44 | 33% | 29.1 |
| 7 | Block bootstrap | 51 | **76** | 83 | 0.51 | 44 | 31% | 29.2 |
| 8 | GARCH(1,1)-lite | 50 | **76** | 83 | 0.53 | 43 | 31% | 29.7 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 62 | **82** | 87 | 0.52 | 43 | — | 29.8 |
| 10 | Mean-reversion (OU) | 41 | **64** | 73 | 0.50 | 44 | 26% | 53.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **78** | 88 | 0.58 | 39 | — | 43.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 51 | **71** | 82 | 0.59 | 37 | 55% | 51.1 |
| 3 | EWMA vol, zero drift (t) | 46 | **66** | 75 | 0.60 | 41 | 44% | 58.1 |
| 4 | Bootstrap (IID) | 45 | **66** | 75 | 0.59 | 40 | 46% | 60.0 |
| 5 | Block bootstrap | 46 | **65** | 75 | 0.59 | 40 | 47% | 61.2 |
| 6 | GBM (normal) | 43 | **65** | 73 | 0.61 | 37 | 45% | 66.3 |
| 7 | GBM + Student-t | 43 | **64** | 72 | 0.61 | 34 | 44% | 67.5 |
| 8 | GARCH(1,1)-lite | 41 | **63** | 71 | 0.61 | 34 | 43% | 69.6 |
| 9 | Momentum | 35 | **59** | 72 | 0.61 | 53 | 46% | 76.1 |
| 10 | Mean-reversion (OU) | 30 | **48** | 55 | 0.57 | 47 | 31% | 106.9 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.48 / 46% / 23.9 | 79% / 0.52 / 39% / 25.7 | 65% / 0.59 / 38% / 59.5 |
| ETH | 86% / 0.49 / 45% / 24.6 | 77% / 0.54 / 44% / 28.2 | 67% / 0.63 / 27% / 46.9 |
| SOL | 80% / 0.51 / 51% / 11.8 | 80% / 0.55 / 42% / 22.8 | 75% / 0.64 / 40% / 42.6 |
| BNB | 88% / 0.53 / 50% / 30.1 | 86% / 0.55 / 44% / 31.4 | 71% / 0.6 / 35% / 41.5 |
| XRP | 89% / 0.46 / 46% / 29.5 | 82% / 0.48 / 44% / 32.1 | 70% / 0.57 / 46% / 50.5 |
| SUI | 85% / 0.49 / 43% / 16.3 | 82% / 0.53 / 41% / 22.3 | 87% / 0.59 / 25% / 43 |
| AVAX | 84% / 0.52 / 43% / 29.4 | 73% / 0.55 / 31% / 38 | 65% / 0.63 / 29% / 55.1 |
| LINK | 86% / 0.51 / 42% / 14.1 | 77% / 0.55 / 42% / 24 | 78% / 0.63 / 37% / 32.1 |
| INJ | 89% / 0.48 / 53% / 30.6 | 94% / 0.48 / 58% / 38.4 | 94% / 0.47 / 62% / 37.7 |
| OP | 86% / 0.49 / 45% / 15.9 | 89% / 0.5 / 37% / 34.5 | 100% / 0.54 / 33% / 53.9 |
| ARB | 77% / 0.49 / 43% / 12.2 | 70% / 0.53 / 44% / 25.4 | 68% / 0.6 / 29% / 51.8 |
| DOGE | 84% / 0.45 / 45% / 23.8 | 79% / 0.47 / 39% / 26.8 | 70% / 0.52 / 44% / 24.7 |
| TIA | 88% / 0.49 / 54% / 13.9 | 94% / 0.51 / 55% / 35 | 98% / 0.52 / 60% / 44.6 |
| APT | 82% / 0.5 / 47% / 12.9 | 83% / 0.53 / 48% / 32.8 | 79% / 0.57 / 43% / 23 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
