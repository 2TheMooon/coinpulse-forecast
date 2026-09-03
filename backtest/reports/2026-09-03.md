# CoinPulse Strategy Tournament — 2026-09-03

_Generated 2026-09-03T13:25:59.848Z · 14 coins · 300 samples/window · 12.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 24.2 |
| 2 | Bootstrap (IID) | 25.3 |
| 3 | Ensemble (GBM-t + bootstraps) | 25.4 |
| 4 | GARCH(1,1)-lite | 29.3 |
| 5 | GBM (normal) | 30.7 |
| 6 | Block bootstrap | 30.8 |
| 7 | GBM + Student-t | 30.9 |
| 8 | EWMA vol, zero drift (t) | 31.0 |
| 9 | Momentum | 41.7 |
| 10 | Mean-reversion (OU) | 69.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 87 | 0.52 | 44 | — | 18.2 |
| 2 | GBM (normal) | 52 | **78** | 87 | 0.52 | 46 | 21% | 18.5 |
| 3 | Block bootstrap | 50 | **78** | 85 | 0.50 | 43 | 21% | 18.5 |
| 4 | GARCH(1,1)-lite | 51 | **77** | 86 | 0.52 | 47 | 20% | 18.6 |
| 5 | Ensemble (GBM-t + bootstraps) | 53 | **78** | 86 | 0.51 | 48 | 21% | 18.8 |
| 6 | Bootstrap (IID) | 55 | **80** | 87 | 0.51 | 46 | 22% | 19.2 |
| 7 | EWMA vol, zero drift (t) | 52 | **78** | 86 | 0.52 | 53 | 20% | 19.6 |
| 8 | GBM + Student-t | 51 | **77** | 86 | 0.53 | 49 | 20% | 19.7 |
| 9 | Momentum | 43 | **73** | 83 | 0.51 | 44 | 21% | 26.7 |
| 10 | Mean-reversion (OU) | 46 | **71** | 79 | 0.49 | 58 | 18% | 34.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **78** | 86 | 0.53 | 43 | — | 22.5 |
| 2 | Bootstrap (IID) | 52 | **78** | 86 | 0.52 | 47 | 31% | 23.8 |
| 3 | Ensemble (GBM-t + bootstraps) | 49 | **75** | 84 | 0.52 | 48 | 29% | 26.8 |
| 4 | Block bootstrap | 49 | **73** | 83 | 0.52 | 45 | 29% | 28.9 |
| 5 | GARCH(1,1)-lite | 48 | **72** | 83 | 0.54 | 45 | 28% | 30.5 |
| 6 | EWMA vol, zero drift (t) | 48 | **74** | 84 | 0.53 | 55 | 28% | 30.8 |
| 7 | GBM + Student-t | 48 | **72** | 82 | 0.54 | 47 | 28% | 31.7 |
| 8 | GBM (normal) | 50 | **72** | 81 | 0.54 | 42 | 29% | 32.1 |
| 9 | Momentum | 42 | **68** | 78 | 0.54 | 49 | 29% | 40.6 |
| 10 | Mean-reversion (OU) | 39 | **60** | 70 | 0.50 | 56 | 21% | 66.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 55 | **75** | 85 | 0.50 | 44 | 53% | 30.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 57 | **76** | 84 | 0.50 | 38 | — | 31.7 |
| 3 | Bootstrap (IID) | 51 | **73** | 82 | 0.49 | 44 | 47% | 33.0 |
| 4 | GARCH(1,1)-lite | 47 | **70** | 79 | 0.52 | 44 | 42% | 38.7 |
| 5 | GBM + Student-t | 47 | **70** | 77 | 0.51 | 43 | 42% | 41.4 |
| 6 | GBM (normal) | 48 | **70** | 77 | 0.52 | 44 | 43% | 41.5 |
| 7 | EWMA vol, zero drift (t) | 50 | **71** | 79 | 0.49 | 52 | 42% | 42.5 |
| 8 | Block bootstrap | 48 | **69** | 75 | 0.49 | 40 | 42% | 45.0 |
| 9 | Momentum | 34 | **61** | 74 | 0.53 | 48 | 43% | 57.9 |
| 10 | Mean-reversion (OU) | 31 | **48** | 56 | 0.43 | 61 | 24% | 106.5 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.52 / 41% / 10.8 | 77% / 0.52 / 37% / 17.6 | 65% / 0.49 / 22% / 42 |
| ETH | 80% / 0.51 / 32% / 11.6 | 73% / 0.51 / 28% / 21.4 | 65% / 0.48 / 13% / 38.4 |
| SOL | 76% / 0.55 / 41% / 32.1 | 77% / 0.55 / 37% / 28.2 | 78% / 0.53 / 37% / 20.9 |
| BNB | 88% / 0.56 / 27% / 30.4 | 82% / 0.59 / 34% / 24 | 79% / 0.55 / 27% / 14.3 |
| XRP | 82% / 0.5 / 58% / 4.6 | 77% / 0.51 / 59% / 18.7 | 73% / 0.48 / 67% / 25.4 |
| SUI | 82% / 0.52 / 46% / 12.6 | 80% / 0.54 / 39% / 16.8 | 90% / 0.5 / 43% / 35.7 |
| AVAX | 86% / 0.5 / 45% / 28.1 | 80% / 0.5 / 45% / 18.3 | 78% / 0.45 / 52% / 42.5 |
| LINK | 77% / 0.55 / 38% / 21.4 | 75% / 0.56 / 39% / 20.6 | 71% / 0.55 / 19% / 32.3 |
| INJ | 80% / 0.56 / 57% / 17.6 | 82% / 0.58 / 54% / 26.7 | 73% / 0.55 / 48% / 33.5 |
| OP | 80% / 0.55 / 53% / 18.2 | 80% / 0.57 / 51% / 25.6 | 86% / 0.57 / 60% / 43.9 |
| ARB | 70% / 0.51 / 45% / 34.1 | 62% / 0.51 / 51% / 31.8 | 78% / 0.47 / 25% / 14.8 |
| DOGE | 80% / 0.5 / 46% / 12.4 | 72% / 0.5 / 48% / 17.8 | 63% / 0.46 / 44% / 32.2 |
| TIA | 78% / 0.51 / 28% / 9 | 83% / 0.53 / 37% / 18 | 89% / 0.49 / 21% / 30.3 |
| APT | 82% / 0.49 / 55% / 12.5 | 87% / 0.48 / 49% / 29.8 | 79% / 0.42 / 48% / 37.5 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
