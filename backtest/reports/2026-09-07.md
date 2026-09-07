# CoinPulse Strategy Tournament — 2026-09-07

_Generated 2026-09-07T14:57:34.401Z · 14 coins · 300 samples/window · 11.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`ensemble` · 14d→`bootstrap_iid` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 25.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 26.5 |
| 3 | Bootstrap (IID) | 28.3 |
| 4 | GBM (normal) | 29.1 |
| 5 | GBM + Student-t | 29.4 |
| 6 | GARCH(1,1)-lite | 29.7 |
| 7 | EWMA vol, zero drift (t) | 30.1 |
| 8 | Block bootstrap | 32.2 |
| 9 | Momentum | 37.2 |
| 10 | Mean-reversion (OU) | 68.4 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 50 | **78** | 87 | 0.52 | 44 | 21% | 17.8 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 86 | 0.52 | 42 | — | 18.1 |
| 3 | GBM (normal) | 52 | **78** | 87 | 0.52 | 47 | 21% | 18.7 |
| 4 | EWMA vol, zero drift (t) | 52 | **78** | 87 | 0.53 | 50 | 20% | 19.0 |
| 5 | GBM + Student-t | 51 | **77** | 87 | 0.53 | 48 | 20% | 19.1 |
| 6 | Block bootstrap | 51 | **77** | 86 | 0.52 | 48 | 20% | 19.3 |
| 7 | GARCH(1,1)-lite | 50 | **78** | 87 | 0.52 | 49 | 20% | 19.4 |
| 8 | Bootstrap (IID) | 53 | **81** | 89 | 0.53 | 45 | 22% | 20.7 |
| 9 | Momentum | 47 | **74** | 86 | 0.52 | 49 | 21% | 22.8 |
| 10 | Mean-reversion (OU) | 47 | **70** | 78 | 0.50 | 52 | 18% | 37.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 55 | **79** | 86 | 0.52 | 46 | 31% | 24.0 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 56 | **79** | 87 | 0.52 | 42 | — | 24.0 |
| 3 | GBM + Student-t | 50 | **75** | 85 | 0.53 | 46 | 28% | 24.8 |
| 4 | GBM (normal) | 51 | **76** | 84 | 0.53 | 44 | 29% | 24.9 |
| 5 | EWMA vol, zero drift (t) | 50 | **77** | 85 | 0.52 | 53 | 28% | 26.3 |
| 6 | Ensemble (GBM-t + bootstraps) | 51 | **76** | 85 | 0.52 | 43 | 29% | 26.6 |
| 7 | GARCH(1,1)-lite | 49 | **76** | 84 | 0.53 | 42 | 28% | 26.7 |
| 8 | Block bootstrap | 50 | **75** | 84 | 0.51 | 45 | 29% | 29.1 |
| 9 | Momentum | 45 | **72** | 83 | 0.53 | 49 | 29% | 29.1 |
| 10 | Mean-reversion (OU) | 39 | **62** | 72 | 0.49 | 50 | 22% | 62.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **74** | 82 | 0.49 | 34 | — | 35.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 55 | **74** | 82 | 0.49 | 40 | 52% | 35.2 |
| 3 | Bootstrap (IID) | 49 | **70** | 78 | 0.49 | 37 | 47% | 40.3 |
| 4 | GARCH(1,1)-lite | 47 | **69** | 77 | 0.51 | 43 | 42% | 42.9 |
| 5 | GBM (normal) | 48 | **69** | 76 | 0.51 | 42 | 43% | 43.7 |
| 6 | GBM + Student-t | 47 | **68** | 76 | 0.51 | 40 | 42% | 44.4 |
| 7 | EWMA vol, zero drift (t) | 48 | **70** | 77 | 0.49 | 52 | 42% | 45.0 |
| 8 | Block bootstrap | 46 | **67** | 75 | 0.48 | 39 | 42% | 48.1 |
| 9 | Momentum | 36 | **59** | 72 | 0.53 | 48 | 43% | 59.6 |
| 10 | Mean-reversion (OU) | 30 | **49** | 56 | 0.43 | 59 | 26% | 105.6 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.51 / 45% / 11.4 | 77% / 0.51 / 41% / 17.7 | 62% / 0.48 / 24% / 51.9 |
| ETH | 80% / 0.5 / 32% / 12.3 | 73% / 0.49 / 28% / 26.7 | 62% / 0.48 / 10% / 47.1 |
| SOL | 76% / 0.54 / 35% / 32.8 | 76% / 0.55 / 35% / 29.6 | 75% / 0.53 / 32% / 25 |
| BNB | 86% / 0.57 / 30% / 27.3 | 80% / 0.59 / 37% / 22.4 | 76% / 0.55 / 27% / 18.2 |
| XRP | 82% / 0.49 / 45% / 5.6 | 80% / 0.48 / 51% / 19.6 | 70% / 0.47 / 54% / 36.2 |
| SUI | 84% / 0.51 / 45% / 13.6 | 82% / 0.52 / 39% / 16.5 | 87% / 0.5 / 44% / 30 |
| AVAX | 85% / 0.5 / 49% / 26.5 | 80% / 0.5 / 45% / 20.2 | 76% / 0.46 / 44% / 37.8 |
| LINK | 76% / 0.55 / 41% / 23 | 75% / 0.56 / 42% / 21.6 | 68% / 0.56 / 19% / 44.1 |
| INJ | 82% / 0.56 / 53% / 21.1 | 83% / 0.57 / 48% / 23.7 | 76% / 0.55 / 41% / 27 |
| OP | 78% / 0.5 / 47% / 15 | 83% / 0.5 / 41% / 22.9 | 84% / 0.48 / 51% / 30.2 |
| ARB | 70% / 0.49 / 38% / 34.1 | 65% / 0.48 / 46% / 37.6 | 75% / 0.43 / 19% / 26.9 |
| DOGE | 80% / 0.5 / 43% / 10.9 | 72% / 0.5 / 45% / 19.4 | 60% / 0.46 / 40% / 41.4 |
| TIA | 76% / 0.5 / 28% / 12 | 87% / 0.52 / 41% / 23.2 | 90% / 0.48 / 27% / 37.4 |
| APT | 81% / 0.49 / 54% / 7.9 | 89% / 0.46 / 51% / 35.6 | 79% / 0.41 / 48% / 39.8 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
