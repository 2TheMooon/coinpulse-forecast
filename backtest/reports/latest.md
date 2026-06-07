# CoinPulse Strategy Tournament — 2026-06-07

_Generated 2026-06-07T11:12:03.565Z · 4 coins · 300 samples/window · 4.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 25.1 |
| 2 | Ensemble (GBM-t + bootstraps) | 28.2 |
| 3 | Bootstrap (IID) | 28.7 |
| 4 | GBM (normal) | 29.8 |
| 5 | GBM + Student-t | 33.5 |
| 6 | GARCH(1,1)-lite | 35.3 |
| 7 | Block bootstrap | 35.7 |
| 8 | EWMA vol, zero drift (t) | 40.0 |
| 9 | Momentum | 45.0 |
| 10 | Mean-reversion (OU) | 57.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 88 | 0.47 | 60 | — | 19.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 52 | **76** | 85 | 0.47 | 56 | 24% | 19.4 |
| 3 | GBM (normal) | 53 | **77** | 84 | 0.48 | 59 | 24% | 20.0 |
| 4 | Bootstrap (IID) | 53 | **80** | 86 | 0.47 | 61 | 25% | 20.3 |
| 5 | GBM + Student-t | 50 | **74** | 84 | 0.48 | 59 | 23% | 23.0 |
| 6 | GARCH(1,1)-lite | 49 | **74** | 84 | 0.48 | 57 | 23% | 23.2 |
| 7 | Block bootstrap | 51 | **75** | 85 | 0.46 | 57 | 24% | 24.1 |
| 8 | EWMA vol, zero drift (t) | 50 | **75** | 84 | 0.45 | 53 | 24% | 26.1 |
| 9 | Momentum | 50 | **75** | 83 | 0.46 | 56 | 24% | 29.8 |
| 10 | Mean-reversion (OU) | 48 | **71** | 79 | 0.46 | 47 | 23% | 32.2 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 50 | **77** | 85 | 0.47 | 58 | — | 19.0 |
| 2 | GBM (normal) | 47 | **72** | 84 | 0.47 | 60 | 34% | 24.1 |
| 3 | Bootstrap (IID) | 49 | **77** | 83 | 0.45 | 55 | 35% | 25.8 |
| 4 | Ensemble (GBM-t + bootstraps) | 44 | **72** | 83 | 0.46 | 50 | 34% | 29.0 |
| 5 | GBM + Student-t | 41 | **73** | 82 | 0.47 | 56 | 33% | 29.8 |
| 6 | Block bootstrap | 44 | **72** | 83 | 0.45 | 47 | 33% | 33.1 |
| 7 | GARCH(1,1)-lite | 41 | **72** | 79 | 0.47 | 55 | 32% | 34.0 |
| 8 | EWMA vol, zero drift (t) | 43 | **73** | 83 | 0.42 | 50 | 34% | 38.9 |
| 9 | Momentum | 41 | **69** | 80 | 0.44 | 52 | 34% | 42.5 |
| 10 | Mean-reversion (OU) | 38 | **66** | 73 | 0.43 | 50 | 31% | 56.5 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 50 | **70** | 79 | 0.46 | 52 | 58% | 36.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 45 | **67** | 75 | 0.50 | 56 | — | 37.0 |
| 3 | Bootstrap (IID) | 44 | **68** | 74 | 0.47 | 54 | 50% | 40.1 |
| 4 | GBM (normal) | 43 | **63** | 72 | 0.49 | 57 | 48% | 45.4 |
| 5 | GBM + Student-t | 41 | **64** | 71 | 0.50 | 55 | 48% | 47.7 |
| 6 | GARCH(1,1)-lite | 38 | **66** | 70 | 0.50 | 56 | 46% | 48.9 |
| 7 | Block bootstrap | 42 | **64** | 71 | 0.46 | 51 | 47% | 50.0 |
| 8 | EWMA vol, zero drift (t) | 49 | **68** | 72 | 0.42 | 61 | 51% | 55.1 |
| 9 | Momentum | 35 | **58** | 71 | 0.47 | 52 | 49% | 62.6 |
| 10 | Mean-reversion (OU) | 34 | **56** | 62 | 0.42 | 54 | 39% | 83.3 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 83% / 0.47 / 55% / 16.3 | 82% / 0.48 / 49% / 13.6 | 73% / 0.5 / 46% / 20.5 |
| ETH | 84% / 0.45 / 59% / 27.8 | 82% / 0.45 / 51% / 19 | 75% / 0.47 / 46% / 23.5 |
| OP | 79% / 0.49 / 64% / 9.3 | 73% / 0.49 / 63% / 16.1 | 63% / 0.51 / 68% / 38.3 |
| ARB | 72% / 0.47 / 64% / 24.2 | 70% / 0.47 / 68% / 27.2 | 57% / 0.52 / 65% / 65.6 |

Coins: BTC (cryptocompare), ETH (cryptocompare), OP (cryptocompare), ARB (cryptocompare)

_Failed to fetch: SOL, BNB, XRP, SUI, AVAX, LINK, INJ, DOGE, TIA, APT_
