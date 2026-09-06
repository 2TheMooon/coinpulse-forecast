# CoinPulse Strategy Tournament — 2026-09-06

_Generated 2026-09-06T12:44:57.792Z · 14 coins · 300 samples/window · 11.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`bootstrap_iid` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 26.4 |
| 2 | Bootstrap (IID) | 27.7 |
| 3 | Ensemble (GBM-t + bootstraps) | 27.9 |
| 4 | GARCH(1,1)-lite | 29.3 |
| 5 | GBM + Student-t | 30.2 |
| 6 | GBM (normal) | 30.7 |
| 7 | EWMA vol, zero drift (t) | 31.4 |
| 8 | Block bootstrap | 32.9 |
| 9 | Momentum | 38.0 |
| 10 | Mean-reversion (OU) | 67.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **81** | 88 | 0.49 | 46 | — | 17.7 |
| 2 | GARCH(1,1)-lite | 50 | **77** | 85 | 0.51 | 46 | 20% | 19.8 |
| 3 | GBM (normal) | 52 | **78** | 85 | 0.51 | 47 | 21% | 19.9 |
| 4 | Ensemble (GBM-t + bootstraps) | 53 | **79** | 85 | 0.51 | 47 | 21% | 20.0 |
| 5 | Block bootstrap | 50 | **78** | 85 | 0.50 | 50 | 20% | 20.2 |
| 6 | GBM + Student-t | 51 | **78** | 85 | 0.52 | 46 | 20% | 20.8 |
| 7 | EWMA vol, zero drift (t) | 52 | **78** | 85 | 0.52 | 50 | 20% | 21.0 |
| 8 | Bootstrap (IID) | 55 | **80** | 86 | 0.51 | 50 | 22% | 21.3 |
| 9 | Momentum | 45 | **73** | 83 | 0.51 | 47 | 21% | 25.6 |
| 10 | Mean-reversion (OU) | 46 | **72** | 78 | 0.50 | 56 | 18% | 35.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 53 | **78** | 86 | 0.51 | 50 | 31% | 23.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 58 | **80** | 87 | 0.51 | 44 | — | 24.5 |
| 3 | GBM + Student-t | 50 | **74** | 84 | 0.52 | 45 | 28% | 26.2 |
| 4 | GARCH(1,1)-lite | 50 | **74** | 83 | 0.52 | 43 | 28% | 26.6 |
| 5 | Ensemble (GBM-t + bootstraps) | 50 | **75** | 85 | 0.51 | 45 | 29% | 26.7 |
| 6 | EWMA vol, zero drift (t) | 51 | **76** | 85 | 0.52 | 55 | 28% | 27.8 |
| 7 | GBM (normal) | 52 | **74** | 82 | 0.52 | 44 | 29% | 28.5 |
| 8 | Block bootstrap | 49 | **74** | 81 | 0.50 | 45 | 28% | 30.5 |
| 9 | Momentum | 45 | **69** | 81 | 0.53 | 49 | 29% | 32.4 |
| 10 | Mean-reversion (OU) | 39 | **62** | 71 | 0.48 | 54 | 22% | 64.0 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 59 | **76** | 84 | 0.48 | 37 | — | 36.9 |
| 2 | Ensemble (GBM-t + bootstraps) | 56 | **74** | 84 | 0.49 | 42 | 52% | 37.1 |
| 3 | Bootstrap (IID) | 52 | **71** | 81 | 0.48 | 38 | 47% | 38.3 |
| 4 | GARCH(1,1)-lite | 49 | **70** | 78 | 0.50 | 41 | 42% | 41.5 |
| 5 | GBM + Student-t | 48 | **69** | 77 | 0.50 | 39 | 42% | 43.6 |
| 6 | GBM (normal) | 50 | **69** | 77 | 0.50 | 39 | 43% | 43.7 |
| 7 | EWMA vol, zero drift (t) | 50 | **71** | 78 | 0.50 | 51 | 42% | 45.3 |
| 8 | Block bootstrap | 47 | **67** | 74 | 0.48 | 39 | 42% | 48.1 |
| 9 | Momentum | 37 | **62** | 73 | 0.53 | 48 | 43% | 56.0 |
| 10 | Mean-reversion (OU) | 31 | **49** | 57 | 0.43 | 59 | 25% | 104.1 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.49 / 50% / 12.7 | 79% / 0.5 / 46% / 19.2 | 62% / 0.48 / 29% / 51.5 |
| ETH | 81% / 0.47 / 38% / 21.7 | 70% / 0.49 / 32% / 28.4 | 62% / 0.48 / 11% / 45 |
| SOL | 78% / 0.52 / 49% / 14.5 | 77% / 0.54 / 42% / 30.9 | 75% / 0.52 / 27% / 19.4 |
| BNB | 86% / 0.55 / 46% / 27 | 80% / 0.57 / 42% / 24 | 76% / 0.54 / 32% / 23.9 |
| XRP | 86% / 0.47 / 46% / 17.8 | 80% / 0.48 / 46% / 23.1 | 71% / 0.47 / 51% / 41.1 |
| SUI | 80% / 0.48 / 41% / 16.6 | 83% / 0.51 / 45% / 12.9 | 87% / 0.49 / 49% / 30.5 |
| AVAX | 85% / 0.48 / 43% / 28.2 | 80% / 0.48 / 41% / 22.5 | 78% / 0.44 / 41% / 41.2 |
| LINK | 80% / 0.51 / 41% / 7.9 | 75% / 0.53 / 39% / 18.5 | 68% / 0.54 / 27% / 32.7 |
| INJ | 82% / 0.53 / 53% / 14.8 | 86% / 0.56 / 52% / 22.5 | 78% / 0.55 / 48% / 31.2 |
| OP | 78% / 0.49 / 50% / 10.9 | 89% / 0.51 / 46% / 24.5 | 90% / 0.5 / 56% / 42.3 |
| ARB | 62% / 0.49 / 46% / 41.2 | 62% / 0.49 / 45% / 30.6 | 76% / 0.44 / 22% / 21.8 |
| DOGE | 80% / 0.48 / 50% / 13.7 | 73% / 0.49 / 44% / 21.3 | 65% / 0.46 / 41% / 37.7 |
| TIA | 84% / 0.5 / 41% / 6.3 | 89% / 0.51 / 35% / 21.9 | 94% / 0.48 / 38% / 49.7 |
| APT | 80% / 0.47 / 54% / 14.5 | 90% / 0.45 / 55% / 42.9 | 78% / 0.41 / 52% / 48.5 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
