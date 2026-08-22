# CoinPulse Strategy Tournament — 2026-08-22

_Generated 2026-08-22T09:31:09.536Z · 14 coins · 300 samples/window · 9.0s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`block_boot` · 14d→`momentum` · 30d→`garch`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 23.1 |
| 2 | Block bootstrap | 24.3 |
| 3 | GBM + Student-t | 24.7 |
| 4 | GBM (normal) | 25.2 |
| 5 | Momentum | 25.2 |
| 6 | GARCH(1,1)-lite | 25.4 |
| 7 | Ensemble (GBM-t + bootstraps) | 26.1 |
| 8 | EWMA vol, zero drift (t) | 27.4 |
| 9 | Bootstrap (IID) | 31.9 |
| 10 | Mean-reversion (OU) | 76.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 56 | **83** | 89 | 0.50 | 44 | 22% | 17.0 |
| 2 | Momentum | 52 | **79** | 86 | 0.51 | 46 | 22% | 18.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 87 | 0.52 | 46 | — | 19.3 |
| 4 | GBM + Student-t | 56 | **82** | 88 | 0.52 | 52 | 22% | 19.9 |
| 5 | EWMA vol, zero drift (t) | 56 | **82** | 88 | 0.50 | 59 | 22% | 20.0 |
| 6 | GBM (normal) | 58 | **83** | 88 | 0.52 | 48 | 22% | 21.1 |
| 7 | GARCH(1,1)-lite | 58 | **82** | 89 | 0.52 | 49 | 22% | 22.1 |
| 8 | Ensemble (GBM-t + bootstraps) | 61 | **84** | 90 | 0.51 | 51 | 23% | 22.8 |
| 9 | Bootstrap (IID) | 65 | **86** | 92 | 0.50 | 49 | 25% | 28.7 |
| 10 | Mean-reversion (OU) | 46 | **71** | 79 | 0.46 | 57 | 18% | 42.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **77** | 87 | 0.51 | 47 | 33% | 20.2 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 56 | **81** | 88 | 0.51 | 48 | — | 20.4 |
| 3 | Block bootstrap | 55 | **80** | 88 | 0.49 | 49 | 30% | 22.5 |
| 4 | GBM + Student-t | 56 | **83** | 90 | 0.52 | 50 | 31% | 23.0 |
| 5 | Ensemble (GBM-t + bootstraps) | 58 | **83** | 90 | 0.51 | 49 | 33% | 23.9 |
| 6 | GBM (normal) | 56 | **82** | 90 | 0.52 | 51 | 32% | 24.5 |
| 7 | GARCH(1,1)-lite | 57 | **83** | 91 | 0.52 | 50 | 32% | 24.8 |
| 8 | EWMA vol, zero drift (t) | 58 | **83** | 90 | 0.49 | 54 | 31% | 26.1 |
| 9 | Bootstrap (IID) | 62 | **87** | 94 | 0.50 | 49 | 37% | 32.7 |
| 10 | Mean-reversion (OU) | 38 | **62** | 72 | 0.45 | 57 | 21% | 69.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GARCH(1,1)-lite | 53 | **78** | 89 | 0.52 | 49 | 48% | 29.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 58 | **78** | 86 | 0.50 | 44 | — | 29.5 |
| 3 | GBM (normal) | 54 | **77** | 84 | 0.51 | 51 | 47% | 30.0 |
| 4 | GBM + Student-t | 53 | **76** | 83 | 0.51 | 49 | 47% | 31.3 |
| 5 | Ensemble (GBM-t + bootstraps) | 62 | **84** | 92 | 0.50 | 47 | 57% | 31.6 |
| 6 | Block bootstrap | 51 | **74** | 82 | 0.49 | 43 | 44% | 33.3 |
| 7 | Bootstrap (IID) | 60 | **83** | 92 | 0.49 | 44 | 54% | 34.4 |
| 8 | EWMA vol, zero drift (t) | 56 | **78** | 85 | 0.47 | 52 | 48% | 36.0 |
| 9 | Momentum | 40 | **69** | 81 | 0.51 | 47 | 48% | 36.8 |
| 10 | Mean-reversion (OU) | 28 | **47** | 55 | 0.41 | 61 | 23% | 118.7 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 88% / 0.52 / 39% / 14.7 | 86% / 0.51 / 37% / 15.3 | 75% / 0.48 / 19% / 28.4 |
| ETH | 78% / 0.51 / 38% / 11.9 | 80% / 0.5 / 37% / 9.6 | 68% / 0.48 / 24% / 28.1 |
| SOL | 81% / 0.52 / 46% / 20.5 | 82% / 0.52 / 41% / 16.3 | 84% / 0.5 / 51% / 15 |
| BNB | 86% / 0.57 / 45% / 32.6 | 83% / 0.57 / 48% / 21.4 | 86% / 0.55 / 44% / 31.1 |
| XRP | 85% / 0.47 / 61% / 19.4 | 86% / 0.45 / 65% / 30.1 | 83% / 0.43 / 68% / 41.8 |
| SUI | 85% / 0.51 / 51% / 12.6 | 85% / 0.51 / 51% / 15.1 | 86% / 0.49 / 57% / 31.9 |
| AVAX | 84% / 0.5 / 45% / 23 | 85% / 0.48 / 51% / 29.4 | 76% / 0.44 / 62% / 47.4 |
| LINK | 73% / 0.54 / 34% / 20.9 | 82% / 0.53 / 35% / 13.2 | 79% / 0.52 / 22% / 8.5 |
| INJ | 81% / 0.56 / 51% / 22.5 | 75% / 0.57 / 41% / 22 | 71% / 0.59 / 30% / 40.4 |
| OP | 80% / 0.56 / 53% / 19 | 77% / 0.58 / 54% / 23.1 | 81% / 0.59 / 60% / 33.9 |
| ARB | 69% / 0.5 / 47% / 32.2 | 65% / 0.5 / 54% / 37 | 71% / 0.49 / 35% / 29.6 |
| DOGE | 80% / 0.49 / 50% / 18.5 | 77% / 0.46 / 55% / 22.2 | 73% / 0.43 / 49% / 28.4 |
| TIA | 76% / 0.49 / 35% / 13.9 | 83% / 0.51 / 32% / 11.2 | 89% / 0.51 / 14% / 19.8 |
| APT | 78% / 0.5 / 54% / 9.2 | 89% / 0.49 / 70% / 20.3 | 75% / 0.47 / 76% / 29.1 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
