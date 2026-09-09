# CoinPulse Strategy Tournament — 2026-09-09

_Generated 2026-09-09T13:36:56.619Z · 14 coins · 300 samples/window · 11.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`bootstrap_iid` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 27.6 |
| 2 | Bootstrap (IID) | 28.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 29.1 |
| 4 | GBM (normal) | 31.6 |
| 5 | GARCH(1,1)-lite | 31.7 |
| 6 | GBM + Student-t | 32.0 |
| 7 | EWMA vol, zero drift (t) | 32.1 |
| 8 | Block bootstrap | 34.3 |
| 9 | Momentum | 39.3 |
| 10 | Mean-reversion (OU) | 69.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **80** | 86 | 0.51 | 43 | — | 19.1 |
| 2 | Ensemble (GBM-t + bootstraps) | 50 | **78** | 85 | 0.52 | 47 | 21% | 19.4 |
| 3 | GBM (normal) | 52 | **78** | 86 | 0.52 | 48 | 21% | 19.5 |
| 4 | Bootstrap (IID) | 53 | **79** | 86 | 0.52 | 44 | 22% | 20.9 |
| 5 | GARCH(1,1)-lite | 48 | **76** | 85 | 0.52 | 45 | 20% | 21.4 |
| 6 | Block bootstrap | 49 | **76** | 84 | 0.51 | 47 | 20% | 21.8 |
| 7 | EWMA vol, zero drift (t) | 50 | **77** | 84 | 0.52 | 48 | 20% | 21.9 |
| 8 | GBM + Student-t | 50 | **76** | 83 | 0.52 | 41 | 20% | 22.3 |
| 9 | Momentum | 45 | **72** | 84 | 0.51 | 49 | 21% | 25.5 |
| 10 | Mean-reversion (OU) | 45 | **70** | 77 | 0.51 | 54 | 18% | 38.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 52 | **77** | 85 | 0.50 | 41 | 31% | 24.8 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 57 | **80** | 87 | 0.51 | 44 | — | 25.1 |
| 3 | GBM + Student-t | 50 | **73** | 84 | 0.52 | 42 | 28% | 27.1 |
| 4 | GARCH(1,1)-lite | 49 | **74** | 83 | 0.52 | 43 | 28% | 27.5 |
| 5 | Ensemble (GBM-t + bootstraps) | 52 | **76** | 84 | 0.51 | 46 | 30% | 28.4 |
| 6 | EWMA vol, zero drift (t) | 50 | **76** | 85 | 0.52 | 47 | 28% | 28.6 |
| 7 | GBM (normal) | 54 | **74** | 83 | 0.52 | 41 | 30% | 28.8 |
| 8 | Block bootstrap | 51 | **74** | 82 | 0.49 | 46 | 28% | 29.4 |
| 9 | Momentum | 45 | **69** | 80 | 0.52 | 51 | 30% | 33.1 |
| 10 | Mean-reversion (OU) | 39 | **63** | 71 | 0.48 | 54 | 22% | 64.2 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **74** | 81 | 0.48 | 35 | — | 38.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 54 | **73** | 81 | 0.49 | 38 | 53% | 39.6 |
| 3 | Bootstrap (IID) | 49 | **70** | 79 | 0.48 | 41 | 47% | 40.2 |
| 4 | EWMA vol, zero drift (t) | 48 | **70** | 77 | 0.50 | 52 | 42% | 45.8 |
| 5 | GARCH(1,1)-lite | 47 | **68** | 76 | 0.50 | 41 | 42% | 46.1 |
| 6 | GBM (normal) | 47 | **68** | 76 | 0.50 | 37 | 43% | 46.4 |
| 7 | GBM + Student-t | 47 | **67** | 76 | 0.50 | 38 | 42% | 46.8 |
| 8 | Block bootstrap | 46 | **66** | 74 | 0.47 | 38 | 42% | 51.9 |
| 9 | Momentum | 35 | **60** | 73 | 0.53 | 48 | 43% | 59.3 |
| 10 | Mean-reversion (OU) | 31 | **49** | 56 | 0.42 | 60 | 26% | 106.6 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.51 / 45% / 16.6 | 77% / 0.5 / 41% / 17.4 | 60% / 0.48 / 22% / 55.2 |
| ETH | 81% / 0.5 / 32% / 17.5 | 73% / 0.49 / 28% / 26.2 | 60% / 0.49 / 8% / 50.8 |
| SOL | 77% / 0.53 / 41% / 31.3 | 76% / 0.54 / 41% / 29.2 | 71% / 0.53 / 24% / 29.1 |
| BNB | 85% / 0.56 / 34% / 28.2 | 82% / 0.58 / 41% / 26.4 | 73% / 0.55 / 27% / 26.7 |
| XRP | 82% / 0.48 / 45% / 9.9 | 80% / 0.47 / 48% / 23.5 | 67% / 0.47 / 46% / 45.3 |
| SUI | 85% / 0.51 / 45% / 13.8 | 83% / 0.51 / 45% / 17.6 | 87% / 0.49 / 51% / 28.3 |
| AVAX | 84% / 0.5 / 43% / 25.6 | 80% / 0.49 / 42% / 21.5 | 75% / 0.45 / 38% / 38.7 |
| LINK | 76% / 0.54 / 45% / 22 | 76% / 0.55 / 46% / 18.2 | 67% / 0.55 / 22% / 39.7 |
| INJ | 78% / 0.56 / 54% / 20.3 | 83% / 0.57 / 49% / 21.7 | 76% / 0.56 / 43% / 29.6 |
| OP | 78% / 0.5 / 41% / 18 | 83% / 0.49 / 42% / 24 | 87% / 0.47 / 46% / 33 |
| ARB | 70% / 0.49 / 39% / 33.5 | 68% / 0.48 / 46% / 38.5 | 75% / 0.43 / 17% / 27.9 |
| DOGE | 80% / 0.49 / 46% / 12.7 | 75% / 0.48 / 51% / 22.1 | 63% / 0.45 / 46% / 45.7 |
| TIA | 77% / 0.49 / 35% / 10.4 | 89% / 0.5 / 44% / 24.6 | 92% / 0.47 / 41% / 45.2 |
| APT | 80% / 0.49 / 57% / 7.7 | 89% / 0.45 / 54% / 40.2 | 78% / 0.4 / 51% / 46.7 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
