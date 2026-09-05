# CoinPulse Strategy Tournament — 2026-09-05

_Generated 2026-09-05T12:30:20.763Z · 14 coins · 300 samples/window · 11.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`bootstrap_iid` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 25.2 |
| 2 | Bootstrap (IID) | 26.2 |
| 3 | Ensemble (GBM-t + bootstraps) | 26.5 |
| 4 | GBM (normal) | 28.5 |
| 5 | GARCH(1,1)-lite | 29.2 |
| 6 | GBM + Student-t | 30.0 |
| 7 | EWMA vol, zero drift (t) | 31.3 |
| 8 | Block bootstrap | 32.0 |
| 9 | Momentum | 35.1 |
| 10 | Mean-reversion (OU) | 68.1 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **81** | 87 | 0.51 | 43 | — | 17.0 |
| 2 | GBM (normal) | 55 | **78** | 86 | 0.51 | 50 | 21% | 17.9 |
| 3 | GBM + Student-t | 51 | **76** | 86 | 0.52 | 48 | 20% | 20.3 |
| 4 | GARCH(1,1)-lite | 52 | **76** | 85 | 0.51 | 48 | 20% | 20.6 |
| 5 | Ensemble (GBM-t + bootstraps) | 55 | **78** | 86 | 0.51 | 50 | 21% | 21.3 |
| 6 | Momentum | 50 | **75** | 83 | 0.50 | 50 | 21% | 21.4 |
| 7 | Bootstrap (IID) | 57 | **79** | 86 | 0.51 | 51 | 22% | 21.8 |
| 8 | EWMA vol, zero drift (t) | 52 | **76** | 86 | 0.51 | 49 | 20% | 22.2 |
| 9 | Block bootstrap | 53 | **76** | 85 | 0.49 | 51 | 21% | 22.5 |
| 10 | Mean-reversion (OU) | 47 | **69** | 76 | 0.49 | 53 | 18% | 38.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 54 | **79** | 87 | 0.52 | 43 | 32% | 20.6 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **77** | 86 | 0.52 | 47 | 30% | 24.3 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 56 | **79** | 87 | 0.52 | 44 | — | 24.5 |
| 4 | GBM (normal) | 54 | **77** | 85 | 0.53 | 42 | 29% | 25.1 |
| 5 | GBM + Student-t | 51 | **78** | 85 | 0.53 | 46 | 28% | 26.0 |
| 6 | GARCH(1,1)-lite | 50 | **76** | 86 | 0.53 | 43 | 28% | 26.7 |
| 7 | EWMA vol, zero drift (t) | 52 | **79** | 86 | 0.53 | 56 | 28% | 27.3 |
| 8 | Block bootstrap | 52 | **75** | 85 | 0.51 | 49 | 29% | 28.0 |
| 9 | Momentum | 47 | **73** | 83 | 0.54 | 52 | 29% | 28.2 |
| 10 | Mean-reversion (OU) | 39 | **64** | 71 | 0.49 | 53 | 22% | 60.0 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 55 | **74** | 84 | 0.49 | 43 | 53% | 33.9 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 57 | **77** | 84 | 0.48 | 37 | — | 34.1 |
| 3 | Bootstrap (IID) | 51 | **73** | 80 | 0.48 | 42 | 47% | 36.3 |
| 4 | GARCH(1,1)-lite | 48 | **70** | 78 | 0.50 | 42 | 42% | 40.2 |
| 5 | GBM (normal) | 49 | **69** | 78 | 0.50 | 42 | 43% | 42.5 |
| 6 | GBM + Student-t | 49 | **69** | 77 | 0.50 | 41 | 43% | 43.8 |
| 7 | EWMA vol, zero drift (t) | 49 | **71** | 79 | 0.49 | 53 | 43% | 44.4 |
| 8 | Block bootstrap | 47 | **68** | 76 | 0.48 | 41 | 42% | 45.5 |
| 9 | Momentum | 36 | **61** | 74 | 0.53 | 48 | 43% | 55.7 |
| 10 | Mean-reversion (OU) | 31 | **49** | 56 | 0.42 | 60 | 25% | 106.0 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.51 / 43% / 8.2 | 76% / 0.51 / 39% / 17.4 | 63% / 0.47 / 27% / 52.4 |
| ETH | 80% / 0.5 / 32% / 11.4 | 73% / 0.5 / 28% / 24.6 | 63% / 0.48 / 11% / 43.5 |
| SOL | 77% / 0.53 / 35% / 31.7 | 75% / 0.54 / 35% / 32.2 | 75% / 0.51 / 21% / 21.3 |
| BNB | 88% / 0.55 / 34% / 27 | 82% / 0.57 / 41% / 24.1 | 76% / 0.53 / 27% / 20.3 |
| XRP | 81% / 0.49 / 43% / 5.7 | 80% / 0.49 / 48% / 18.6 | 71% / 0.47 / 51% / 36 |
| SUI | 84% / 0.51 / 42% / 12.7 | 83% / 0.52 / 42% / 16 | 90% / 0.48 / 54% / 33.9 |
| AVAX | 85% / 0.49 / 46% / 27.8 | 80% / 0.49 / 45% / 22.4 | 78% / 0.44 / 41% / 41.2 |
| LINK | 77% / 0.54 / 45% / 18.3 | 75% / 0.55 / 46% / 19.6 | 71% / 0.54 / 27% / 27.8 |
| INJ | 81% / 0.54 / 59% / 15.7 | 89% / 0.56 / 56% / 29.4 | 78% / 0.53 / 52% / 18.9 |
| OP | 82% / 0.52 / 51% / 18.4 | 86% / 0.54 / 51% / 34 | 92% / 0.53 / 59% / 48.9 |
| ARB | 72% / 0.5 / 43% / 31 | 65% / 0.5 / 49% / 27.6 | 79% / 0.45 / 24% / 11.6 |
| DOGE | 80% / 0.5 / 43% / 12.3 | 72% / 0.49 / 48% / 20.1 | 62% / 0.46 / 43% / 41.2 |
| TIA | 77% / 0.5 / 27% / 8.5 | 86% / 0.52 / 37% / 20.3 | 92% / 0.48 / 30% / 39.9 |
| APT | 81% / 0.48 / 54% / 9.2 | 89% / 0.46 / 51% / 37.4 | 79% / 0.41 / 48% / 40.5 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
