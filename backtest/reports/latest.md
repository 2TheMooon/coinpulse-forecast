# CoinPulse Strategy Tournament — 2026-10-21

_Generated 2026-10-21T14:24:43.960Z · 14 coins · 300 samples/window · 11.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`ensemble` · 14d→`block_boot` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 32.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 33.9 |
| 3 | Block bootstrap | 35.8 |
| 4 | EWMA vol, zero drift (t) | 36.9 |
| 5 | Bootstrap (IID) | 37.0 |
| 6 | GBM (normal) | 38.8 |
| 7 | GBM + Student-t | 39.9 |
| 8 | GARCH(1,1)-lite | 41.1 |
| 9 | Momentum | 44.9 |
| 10 | Mean-reversion (OU) | 66.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 50 | **75** | 83 | 0.51 | 46 | 22% | 19.0 |
| 2 | Block bootstrap | 47 | **74** | 84 | 0.51 | 47 | 22% | 20.5 |
| 3 | GBM (normal) | 52 | **78** | 83 | 0.52 | 46 | 23% | 20.7 |
| 4 | Bootstrap (IID) | 52 | **76** | 83 | 0.51 | 48 | 23% | 21.1 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 61 | **83** | 88 | 0.50 | 44 | — | 21.2 |
| 6 | EWMA vol, zero drift (t) | 48 | **77** | 84 | 0.52 | 55 | 23% | 21.4 |
| 7 | GBM + Student-t | 48 | **76** | 84 | 0.53 | 44 | 23% | 22.0 |
| 8 | GARCH(1,1)-lite | 49 | **75** | 82 | 0.52 | 43 | 22% | 22.4 |
| 9 | Momentum | 46 | **72** | 82 | 0.52 | 53 | 24% | 27.0 |
| 10 | Mean-reversion (OU) | 45 | **69** | 76 | 0.50 | 47 | 20% | 38.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 50 | **75** | 82 | 0.52 | 44 | 33% | 28.7 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 63 | **83** | 88 | 0.52 | 44 | — | 30.0 |
| 3 | Bootstrap (IID) | 52 | **74** | 82 | 0.53 | 48 | 32% | 31.8 |
| 4 | Ensemble (GBM-t + bootstraps) | 50 | **74** | 82 | 0.53 | 48 | 32% | 31.9 |
| 5 | EWMA vol, zero drift (t) | 51 | **75** | 82 | 0.54 | 50 | 32% | 32.8 |
| 6 | GBM + Student-t | 51 | **72** | 81 | 0.55 | 42 | 32% | 33.0 |
| 7 | GARCH(1,1)-lite | 49 | **73** | 82 | 0.55 | 45 | 31% | 33.4 |
| 8 | GBM (normal) | 53 | **74** | 82 | 0.55 | 45 | 33% | 33.6 |
| 9 | Momentum | 43 | **70** | 81 | 0.53 | 52 | 34% | 36.7 |
| 10 | Mean-reversion (OU) | 40 | **63** | 71 | 0.52 | 45 | 26% | 58.2 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 59 | **78** | 88 | 0.59 | 41 | — | 47.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **74** | 81 | 0.60 | 39 | 56% | 50.8 |
| 3 | EWMA vol, zero drift (t) | 47 | **68** | 76 | 0.62 | 42 | 45% | 56.5 |
| 4 | Bootstrap (IID) | 44 | **69** | 77 | 0.61 | 40 | 47% | 58.0 |
| 5 | Block bootstrap | 46 | **70** | 76 | 0.60 | 41 | 48% | 58.3 |
| 6 | GBM (normal) | 46 | **67** | 75 | 0.63 | 38 | 46% | 62.1 |
| 7 | GBM + Student-t | 44 | **65** | 74 | 0.63 | 35 | 45% | 64.7 |
| 8 | GARCH(1,1)-lite | 42 | **66** | 73 | 0.63 | 36 | 44% | 67.4 |
| 9 | Momentum | 36 | **63** | 75 | 0.63 | 55 | 47% | 71.1 |
| 10 | Mean-reversion (OU) | 31 | **49** | 58 | 0.59 | 46 | 31% | 103.5 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.51 / 38% / 24 | 82% / 0.54 / 35% / 33.2 | 67% / 0.62 / 37% / 67.2 |
| ETH | 81% / 0.52 / 45% / 17.2 | 77% / 0.55 / 41% / 29 | 68% / 0.64 / 35% / 48 |
| SOL | 80% / 0.52 / 36% / 21.8 | 80% / 0.55 / 37% / 22.6 | 79% / 0.64 / 38% / 47.1 |
| BNB | 84% / 0.52 / 39% / 24.7 | 85% / 0.54 / 42% / 29.1 | 70% / 0.6 / 35% / 45.8 |
| XRP | 86% / 0.47 / 45% / 24.7 | 82% / 0.48 / 41% / 26.5 | 70% / 0.57 / 51% / 53.7 |
| SUI | 86% / 0.5 / 41% / 14.2 | 80% / 0.53 / 38% / 23.9 | 87% / 0.61 / 32% / 46.5 |
| AVAX | 85% / 0.52 / 45% / 32.3 | 76% / 0.56 / 37% / 40.1 | 67% / 0.65 / 35% / 60.4 |
| LINK | 84% / 0.54 / 41% / 19.1 | 79% / 0.55 / 46% / 17.9 | 78% / 0.64 / 35% / 35.6 |
| INJ | 84% / 0.49 / 55% / 20.6 | 93% / 0.47 / 56% / 37.6 | 94% / 0.47 / 59% / 37.8 |
| OP | 84% / 0.49 / 43% / 24.2 | 90% / 0.51 / 41% / 43.1 | 97% / 0.56 / 33% / 54.7 |
| ARB | 74% / 0.51 / 36% / 18.4 | 75% / 0.55 / 48% / 20.6 | 71% / 0.61 / 29% / 52.4 |
| DOGE | 82% / 0.47 / 46% / 23.4 | 80% / 0.47 / 49% / 23.3 | 70% / 0.53 / 44% / 30.9 |
| TIA | 86% / 0.5 / 54% / 14.4 | 92% / 0.51 / 61% / 34.4 | 97% / 0.53 / 62% / 51.9 |
| APT | 82% / 0.51 / 46% / 17.5 | 86% / 0.52 / 46% / 39.1 | 79% / 0.57 / 44% / 29.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
