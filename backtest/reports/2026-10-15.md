# CoinPulse Strategy Tournament — 2026-10-15

_Generated 2026-10-15T14:03:04.732Z · 14 coins · 300 samples/window · 9.9s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`ewma_t_zero` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 31.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 35.5 |
| 3 | EWMA vol, zero drift (t) | 36.7 |
| 4 | Bootstrap (IID) | 37.2 |
| 5 | Block bootstrap | 38.9 |
| 6 | GBM (normal) | 39.1 |
| 7 | GBM + Student-t | 39.6 |
| 8 | GARCH(1,1)-lite | 42.4 |
| 9 | Momentum | 46.3 |
| 10 | Mean-reversion (OU) | 67.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 50 | **77** | 84 | 0.51 | 53 | 22% | 18.8 |
| 2 | GBM (normal) | 51 | **76** | 83 | 0.51 | 43 | 23% | 19.6 |
| 3 | GBM + Student-t | 49 | **76** | 84 | 0.51 | 40 | 22% | 20.4 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 60 | **83** | 88 | 0.50 | 42 | — | 20.7 |
| 5 | Ensemble (GBM-t + bootstraps) | 48 | **75** | 82 | 0.51 | 43 | 22% | 21.8 |
| 6 | GARCH(1,1)-lite | 47 | **75** | 83 | 0.51 | 42 | 21% | 22.6 |
| 7 | Bootstrap (IID) | 48 | **74** | 82 | 0.50 | 42 | 22% | 23.9 |
| 8 | Block bootstrap | 45 | **73** | 82 | 0.49 | 48 | 21% | 24.8 |
| 9 | Momentum | 45 | **72** | 82 | 0.50 | 51 | 23% | 27.7 |
| 10 | Mean-reversion (OU) | 44 | **69** | 78 | 0.49 | 47 | 20% | 39.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 62 | **82** | 88 | 0.52 | 43 | — | 29.7 |
| 2 | Bootstrap (IID) | 49 | **74** | 81 | 0.52 | 40 | 31% | 31.1 |
| 3 | EWMA vol, zero drift (t) | 51 | **73** | 82 | 0.54 | 51 | 31% | 32.5 |
| 4 | GBM + Student-t | 50 | **72** | 81 | 0.54 | 43 | 31% | 32.7 |
| 5 | Block bootstrap | 49 | **73** | 80 | 0.52 | 45 | 31% | 32.8 |
| 6 | Ensemble (GBM-t + bootstraps) | 49 | **74** | 80 | 0.53 | 45 | 31% | 32.9 |
| 7 | GBM (normal) | 54 | **74** | 81 | 0.54 | 44 | 33% | 33.6 |
| 8 | GARCH(1,1)-lite | 48 | **72** | 80 | 0.54 | 44 | 30% | 36.2 |
| 9 | Momentum | 44 | **69** | 79 | 0.53 | 52 | 33% | 37.7 |
| 10 | Mean-reversion (OU) | 39 | **62** | 72 | 0.50 | 46 | 25% | 57.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **77** | 87 | 0.57 | 39 | — | 43.1 |
| 2 | Ensemble (GBM-t + bootstraps) | 51 | **71** | 79 | 0.58 | 38 | 54% | 51.8 |
| 3 | Bootstrap (IID) | 43 | **66** | 75 | 0.58 | 40 | 46% | 56.6 |
| 4 | EWMA vol, zero drift (t) | 44 | **66** | 75 | 0.59 | 42 | 44% | 59.0 |
| 5 | Block bootstrap | 45 | **66** | 72 | 0.58 | 42 | 47% | 59.1 |
| 6 | GBM (normal) | 43 | **64** | 72 | 0.60 | 36 | 45% | 64.1 |
| 7 | GBM + Student-t | 42 | **64** | 72 | 0.60 | 33 | 44% | 65.5 |
| 8 | GARCH(1,1)-lite | 40 | **63** | 71 | 0.60 | 35 | 43% | 68.5 |
| 9 | Momentum | 35 | **59** | 73 | 0.60 | 55 | 46% | 73.5 |
| 10 | Mean-reversion (OU) | 28 | **48** | 55 | 0.55 | 48 | 31% | 106.1 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 85% / 0.5 / 39% / 20 | 79% / 0.51 / 34% / 24.2 | 63% / 0.58 / 33% / 61.8 |
| ETH | 81% / 0.52 / 41% / 17.1 | 76% / 0.54 / 37% / 31.3 | 63% / 0.62 / 29% / 44.7 |
| SOL | 80% / 0.52 / 39% / 22.2 | 80% / 0.55 / 39% / 26 | 78% / 0.63 / 40% / 44.5 |
| BNB | 84% / 0.53 / 36% / 26 | 83% / 0.56 / 45% / 30.2 | 71% / 0.59 / 35% / 38.5 |
| XRP | 85% / 0.47 / 45% / 23.1 | 80% / 0.48 / 41% / 26.3 | 68% / 0.56 / 49% / 46.9 |
| SUI | 86% / 0.5 / 42% / 15.6 | 83% / 0.52 / 38% / 22.4 | 87% / 0.58 / 32% / 37.7 |
| AVAX | 85% / 0.51 / 43% / 31.6 | 75% / 0.55 / 32% / 38.2 | 65% / 0.62 / 30% / 59.3 |
| LINK | 84% / 0.54 / 41% / 17.1 | 77% / 0.55 / 46% / 22.1 | 75% / 0.62 / 37% / 31.8 |
| INJ | 84% / 0.48 / 55% / 22.6 | 93% / 0.48 / 55% / 33.8 | 95% / 0.47 / 59% / 43.8 |
| OP | 84% / 0.49 / 31% / 25 | 90% / 0.5 / 35% / 38.4 | 97% / 0.53 / 29% / 45.8 |
| ARB | 73% / 0.49 / 35% / 16.7 | 75% / 0.53 / 46% / 21 | 67% / 0.59 / 27% / 52 |
| DOGE | 81% / 0.46 / 39% / 24.3 | 79% / 0.46 / 45% / 27.3 | 67% / 0.51 / 43% / 26.3 |
| TIA | 88% / 0.5 / 53% / 13.3 | 92% / 0.49 / 59% / 38.8 | 98% / 0.51 / 57% / 49.5 |
| APT | 82% / 0.51 / 50% / 15.5 | 86% / 0.52 / 45% / 35.8 | 79% / 0.55 / 44% / 20.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
