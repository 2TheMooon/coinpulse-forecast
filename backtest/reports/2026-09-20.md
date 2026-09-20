# CoinPulse Strategy Tournament — 2026-09-20

_Generated 2026-09-20T13:31:04.182Z · 14 coins · 300 samples/window · 7.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 27.5 |
| 2 | Ensemble (GBM-t + bootstraps) | 33.7 |
| 3 | Bootstrap (IID) | 35.8 |
| 4 | GBM (normal) | 35.8 |
| 5 | GBM + Student-t | 36.5 |
| 6 | EWMA vol, zero drift (t) | 36.7 |
| 7 | Block bootstrap | 36.8 |
| 8 | GARCH(1,1)-lite | 37.7 |
| 9 | Momentum | 41.8 |
| 10 | Mean-reversion (OU) | 62.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **81** | 89 | 0.50 | 48 | — | 16.6 |
| 2 | GBM (normal) | 54 | **76** | 85 | 0.51 | 45 | 21% | 22.1 |
| 3 | GBM + Student-t | 51 | **75** | 84 | 0.52 | 53 | 21% | 22.6 |
| 4 | EWMA vol, zero drift (t) | 52 | **75** | 84 | 0.51 | 56 | 21% | 23.4 |
| 5 | Block bootstrap | 52 | **74** | 84 | 0.51 | 45 | 21% | 23.4 |
| 6 | Ensemble (GBM-t + bootstraps) | 53 | **76** | 84 | 0.51 | 51 | 21% | 23.6 |
| 7 | Bootstrap (IID) | 53 | **75** | 84 | 0.51 | 48 | 21% | 24.3 |
| 8 | GARCH(1,1)-lite | 51 | **75** | 82 | 0.51 | 49 | 20% | 24.5 |
| 9 | Momentum | 51 | **73** | 82 | 0.50 | 51 | 22% | 25.2 |
| 10 | Mean-reversion (OU) | 47 | **69** | 77 | 0.50 | 48 | 18% | 37.2 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **81** | 87 | 0.52 | 44 | — | 25.6 |
| 2 | Bootstrap (IID) | 53 | **76** | 85 | 0.52 | 45 | 30% | 27.6 |
| 3 | GBM (normal) | 53 | **77** | 84 | 0.54 | 46 | 30% | 29.0 |
| 4 | GARCH(1,1)-lite | 51 | **77** | 84 | 0.54 | 46 | 28% | 29.0 |
| 5 | Momentum | 47 | **72** | 83 | 0.52 | 53 | 30% | 29.7 |
| 6 | Block bootstrap | 53 | **75** | 83 | 0.52 | 49 | 30% | 29.8 |
| 7 | GBM + Student-t | 53 | **75** | 84 | 0.54 | 41 | 29% | 30.2 |
| 8 | Ensemble (GBM-t + bootstraps) | 54 | **76** | 83 | 0.52 | 46 | 29% | 30.4 |
| 9 | EWMA vol, zero drift (t) | 53 | **76** | 85 | 0.52 | 43 | 29% | 31.0 |
| 10 | Mean-reversion (OU) | 42 | **64** | 73 | 0.51 | 49 | 23% | 55.0 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **73** | 82 | 0.52 | 36 | — | 40.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 52 | **70** | 80 | 0.51 | 39 | 51% | 47.2 |
| 3 | Bootstrap (IID) | 47 | **66** | 75 | 0.51 | 38 | 44% | 55.6 |
| 4 | EWMA vol, zero drift (t) | 48 | **67** | 75 | 0.51 | 52 | 41% | 55.7 |
| 5 | GBM (normal) | 44 | **65** | 74 | 0.53 | 41 | 42% | 56.4 |
| 6 | GBM + Student-t | 43 | **64** | 73 | 0.53 | 40 | 41% | 56.8 |
| 7 | Block bootstrap | 47 | **65** | 74 | 0.50 | 41 | 44% | 57.2 |
| 8 | GARCH(1,1)-lite | 43 | **64** | 72 | 0.53 | 41 | 40% | 59.4 |
| 9 | Momentum | 33 | **57** | 69 | 0.54 | 47 | 42% | 70.5 |
| 10 | Mean-reversion (OU) | 33 | **51** | 57 | 0.46 | 60 | 27% | 96.4 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.48 / 43% / 17.7 | 80% / 0.5 / 38% / 20.6 | 54% / 0.52 / 19% / 63.1 |
| ETH | 84% / 0.48 / 43% / 26.3 | 73% / 0.51 / 41% / 24 | 57% / 0.54 / 11% / 62.1 |
| SOL | 78% / 0.53 / 53% / 17.9 | 79% / 0.56 / 39% / 25.8 | 68% / 0.58 / 38% / 44.4 |
| BNB | 85% / 0.57 / 47% / 28.8 | 80% / 0.6 / 37% / 29.7 | 68% / 0.59 / 24% / 45 |
| XRP | 88% / 0.46 / 46% / 23.4 | 82% / 0.47 / 49% / 32.2 | 63% / 0.5 / 51% / 39.9 |
| SUI | 82% / 0.49 / 47% / 13.3 | 85% / 0.52 / 44% / 18.4 | 89% / 0.5 / 35% / 29.5 |
| AVAX | 84% / 0.5 / 43% / 20.3 | 80% / 0.52 / 39% / 22 | 78% / 0.5 / 46% / 17 |
| LINK | 80% / 0.52 / 41% / 6 | 79% / 0.55 / 39% / 14.6 | 70% / 0.58 / 24% / 39.1 |
| INJ | 81% / 0.52 / 59% / 7.7 | 87% / 0.55 / 63% / 22 | 83% / 0.52 / 60% / 16.8 |
| OP | 81% / 0.48 / 45% / 9.8 | 90% / 0.5 / 39% / 25.2 | 94% / 0.48 / 44% / 47.8 |
| ARB | 69% / 0.48 / 49% / 28 | 62% / 0.51 / 41% / 34.5 | 67% / 0.49 / 14% / 32.9 |
| DOGE | 81% / 0.46 / 57% / 14.1 | 73% / 0.46 / 52% / 29.6 | 59% / 0.45 / 46% / 45.5 |
| TIA | 84% / 0.49 / 42% / 7.7 | 93% / 0.51 / 39% / 30.7 | 98% / 0.49 / 24% / 54.3 |
| APT | 77% / 0.49 / 51% / 11.2 | 89% / 0.49 / 58% / 29.3 | 79% / 0.46 / 67% / 25.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
