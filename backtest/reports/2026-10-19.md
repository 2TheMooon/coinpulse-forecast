# CoinPulse Strategy Tournament — 2026-10-19

_Generated 2026-10-19T16:20:24.734Z · 14 coins · 300 samples/window · 11.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_t` · 14d→`block_boot` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 31.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 31.8 |
| 3 | Bootstrap (IID) | 34.3 |
| 4 | Block bootstrap | 34.4 |
| 5 | EWMA vol, zero drift (t) | 34.8 |
| 6 | GBM (normal) | 36.4 |
| 7 | GBM + Student-t | 36.5 |
| 8 | GARCH(1,1)-lite | 37.7 |
| 9 | Momentum | 39.4 |
| 10 | Mean-reversion (OU) | 64.1 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 52 | **79** | 86 | 0.51 | 48 | 23% | 17.0 |
| 2 | Block bootstrap | 49 | **77** | 86 | 0.48 | 49 | 22% | 17.0 |
| 3 | Ensemble (GBM-t + bootstraps) | 51 | **78** | 86 | 0.50 | 46 | 22% | 17.5 |
| 4 | Bootstrap (IID) | 50 | **78** | 86 | 0.49 | 47 | 22% | 17.5 |
| 5 | GBM (normal) | 55 | **79** | 86 | 0.50 | 49 | 24% | 17.8 |
| 6 | Momentum | 47 | **77** | 86 | 0.50 | 49 | 24% | 18.1 |
| 7 | EWMA vol, zero drift (t) | 53 | **79** | 86 | 0.51 | 55 | 23% | 18.8 |
| 8 | GARCH(1,1)-lite | 50 | **76** | 84 | 0.50 | 42 | 22% | 18.9 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 61 | **83** | 88 | 0.50 | 43 | — | 20.7 |
| 10 | Mean-reversion (OU) | 47 | **70** | 77 | 0.48 | 48 | 20% | 37.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 52 | **75** | 84 | 0.50 | 46 | 32% | 26.5 |
| 2 | Bootstrap (IID) | 53 | **77** | 83 | 0.51 | 43 | 32% | 26.9 |
| 3 | GARCH(1,1)-lite | 52 | **77** | 83 | 0.53 | 45 | 31% | 27.3 |
| 4 | Ensemble (GBM-t + bootstraps) | 53 | **77** | 84 | 0.51 | 46 | 32% | 27.7 |
| 5 | GBM + Student-t | 52 | **76** | 83 | 0.53 | 46 | 32% | 27.9 |
| 6 | Momentum | 45 | **75** | 83 | 0.51 | 53 | 34% | 28.1 |
| 7 | EWMA vol, zero drift (t) | 54 | **77** | 84 | 0.52 | 52 | 32% | 28.2 |
| 8 | GBM (normal) | 57 | **78** | 83 | 0.53 | 44 | 33% | 28.7 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 63 | **82** | 88 | 0.52 | 43 | — | 29.1 |
| 10 | Mean-reversion (OU) | 43 | **65** | 73 | 0.49 | 46 | 26% | 51.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 59 | **77** | 88 | 0.58 | 40 | — | 45.5 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **73** | 82 | 0.60 | 39 | 56% | 50.1 |
| 3 | EWMA vol, zero drift (t) | 45 | **67** | 75 | 0.61 | 43 | 44% | 57.6 |
| 4 | Bootstrap (IID) | 45 | **68** | 76 | 0.60 | 40 | 46% | 58.3 |
| 5 | Block bootstrap | 45 | **68** | 74 | 0.59 | 41 | 48% | 59.7 |
| 6 | GBM (normal) | 45 | **66** | 74 | 0.62 | 37 | 45% | 62.6 |
| 7 | GBM + Student-t | 43 | **65** | 73 | 0.62 | 36 | 45% | 64.6 |
| 8 | GARCH(1,1)-lite | 42 | **65** | 72 | 0.62 | 36 | 43% | 66.9 |
| 9 | Momentum | 36 | **62** | 75 | 0.63 | 56 | 46% | 72.0 |
| 10 | Mean-reversion (OU) | 31 | **49** | 57 | 0.57 | 46 | 31% | 103.0 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.5 / 39% / 22.6 | 80% / 0.52 / 34% / 27.6 | 67% / 0.6 / 37% / 62.3 |
| ETH | 81% / 0.52 / 41% / 17.8 | 77% / 0.54 / 37% / 27.7 | 67% / 0.63 / 30% / 44.3 |
| SOL | 80% / 0.52 / 32% / 21.2 | 80% / 0.54 / 32% / 23.4 | 76% / 0.64 / 33% / 47 |
| BNB | 84% / 0.52 / 45% / 24.1 | 85% / 0.54 / 46% / 29.1 | 71% / 0.59 / 41% / 40.5 |
| XRP | 86% / 0.47 / 45% / 25.3 | 82% / 0.48 / 41% / 26 | 68% / 0.57 / 51% / 52.5 |
| SUI | 86% / 0.5 / 41% / 14.3 | 80% / 0.53 / 38% / 22 | 87% / 0.61 / 32% / 44 |
| AVAX | 85% / 0.51 / 42% / 31.9 | 76% / 0.55 / 32% / 39.4 | 67% / 0.64 / 30% / 58 |
| LINK | 84% / 0.54 / 42% / 17.3 | 77% / 0.55 / 48% / 18.3 | 76% / 0.64 / 37% / 35.4 |
| INJ | 84% / 0.49 / 55% / 20.7 | 93% / 0.47 / 56% / 35.8 | 94% / 0.47 / 59% / 38.4 |
| OP | 84% / 0.49 / 43% / 23.7 | 90% / 0.51 / 41% / 40.8 | 97% / 0.55 / 33% / 53.5 |
| ARB | 74% / 0.5 / 36% / 16.1 | 75% / 0.54 / 46% / 18.9 | 70% / 0.6 / 29% / 53.7 |
| DOGE | 82% / 0.46 / 43% / 24.1 | 80% / 0.47 / 46% / 24 | 70% / 0.52 / 46% / 27.9 |
| TIA | 86% / 0.51 / 54% / 13.7 | 92% / 0.51 / 61% / 34.9 | 97% / 0.52 / 60% / 51.1 |
| APT | 82% / 0.51 / 46% / 17.4 | 86% / 0.52 / 46% / 39.6 | 78% / 0.57 / 44% / 27.7 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
