# CoinPulse Strategy Tournament — 2026-09-18

_Generated 2026-09-18T13:30:43.227Z · 14 coins · 300 samples/window · 9.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 28.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 30.9 |
| 3 | Bootstrap (IID) | 33.2 |
| 4 | GBM + Student-t | 33.3 |
| 5 | GBM (normal) | 33.9 |
| 6 | EWMA vol, zero drift (t) | 34.9 |
| 7 | GARCH(1,1)-lite | 36.9 |
| 8 | Block bootstrap | 37.6 |
| 9 | Momentum | 43.6 |
| 10 | Mean-reversion (OU) | 62.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 89 | 0.49 | 46 | — | 18.0 |
| 2 | Ensemble (GBM-t + bootstraps) | 50 | **76** | 86 | 0.49 | 47 | 21% | 18.9 |
| 3 | GBM + Student-t | 51 | **76** | 84 | 0.51 | 49 | 21% | 19.8 |
| 4 | GBM (normal) | 51 | **79** | 85 | 0.50 | 43 | 21% | 20.2 |
| 5 | Bootstrap (IID) | 51 | **77** | 85 | 0.49 | 46 | 21% | 20.7 |
| 6 | Block bootstrap | 48 | **76** | 84 | 0.48 | 46 | 21% | 21.4 |
| 7 | EWMA vol, zero drift (t) | 50 | **77** | 84 | 0.50 | 55 | 21% | 21.6 |
| 8 | GARCH(1,1)-lite | 47 | **74** | 83 | 0.49 | 45 | 20% | 24.8 |
| 9 | Momentum | 44 | **74** | 83 | 0.49 | 46 | 22% | 25.1 |
| 10 | Mean-reversion (OU) | 45 | **71** | 78 | 0.49 | 53 | 18% | 35.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **81** | 87 | 0.51 | 44 | — | 24.4 |
| 2 | GBM + Student-t | 51 | **75** | 83 | 0.51 | 45 | 29% | 25.9 |
| 3 | GBM (normal) | 54 | **76** | 83 | 0.51 | 47 | 30% | 27.0 |
| 4 | Bootstrap (IID) | 53 | **78** | 84 | 0.49 | 48 | 30% | 27.1 |
| 5 | EWMA vol, zero drift (t) | 52 | **76** | 84 | 0.50 | 48 | 29% | 28.7 |
| 6 | Ensemble (GBM-t + bootstraps) | 53 | **76** | 83 | 0.50 | 49 | 29% | 28.9 |
| 7 | GARCH(1,1)-lite | 52 | **74** | 82 | 0.51 | 48 | 28% | 29.0 |
| 8 | Block bootstrap | 51 | **75** | 82 | 0.49 | 47 | 29% | 31.2 |
| 9 | Momentum | 44 | **68** | 81 | 0.50 | 51 | 30% | 35.1 |
| 10 | Mean-reversion (OU) | 42 | **64** | 73 | 0.48 | 52 | 23% | 54.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 52 | **72** | 81 | 0.51 | 34 | — | 42.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 52 | **71** | 81 | 0.50 | 39 | 52% | 44.8 |
| 3 | Bootstrap (IID) | 46 | **67** | 77 | 0.50 | 40 | 45% | 51.7 |
| 4 | GBM + Student-t | 45 | **65** | 73 | 0.52 | 39 | 42% | 54.3 |
| 5 | EWMA vol, zero drift (t) | 48 | **67** | 75 | 0.51 | 54 | 42% | 54.5 |
| 6 | GBM (normal) | 46 | **65** | 74 | 0.52 | 40 | 42% | 54.5 |
| 7 | GARCH(1,1)-lite | 44 | **65** | 73 | 0.52 | 40 | 41% | 57.0 |
| 8 | Block bootstrap | 47 | **66** | 72 | 0.49 | 37 | 43% | 60.3 |
| 9 | Momentum | 33 | **58** | 68 | 0.54 | 47 | 42% | 70.6 |
| 10 | Mean-reversion (OU) | 32 | **51** | 58 | 0.45 | 62 | 27% | 97.6 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.47 / 45% / 16.5 | 80% / 0.49 / 38% / 21.8 | 54% / 0.51 / 21% / 63.7 |
| ETH | 82% / 0.47 / 38% / 26.3 | 73% / 0.49 / 35% / 24.4 | 54% / 0.53 / 5% / 69.1 |
| SOL | 77% / 0.52 / 51% / 15.9 | 77% / 0.55 / 35% / 25.5 | 67% / 0.57 / 33% / 48.5 |
| BNB | 85% / 0.56 / 45% / 22.8 | 80% / 0.59 / 35% / 26.5 | 67% / 0.58 / 19% / 42.5 |
| XRP | 88% / 0.45 / 50% / 26.1 | 79% / 0.45 / 48% / 29.1 | 59% / 0.49 / 38% / 48.8 |
| SUI | 78% / 0.47 / 46% / 17.3 | 85% / 0.51 / 51% / 12.8 | 86% / 0.49 / 40% / 25.3 |
| AVAX | 84% / 0.49 / 41% / 17.1 | 80% / 0.51 / 39% / 20.5 | 73% / 0.49 / 40% / 25.6 |
| LINK | 78% / 0.51 / 41% / 6.2 | 79% / 0.54 / 41% / 14 | 63% / 0.57 / 21% / 46.2 |
| INJ | 78% / 0.52 / 59% / 8.7 | 87% / 0.55 / 63% / 20.2 | 81% / 0.52 / 60% / 10.7 |
| OP | 77% / 0.47 / 45% / 13.8 | 89% / 0.49 / 39% / 25.2 | 94% / 0.47 / 44% / 47.2 |
| ARB | 64% / 0.47 / 47% / 39.4 | 61% / 0.5 / 39% / 37.5 | 68% / 0.48 / 14% / 34.1 |
| DOGE | 84% / 0.45 / 51% / 21 | 75% / 0.45 / 49% / 28.5 | 60% / 0.44 / 46% / 53.5 |
| TIA | 82% / 0.48 / 38% / 7.9 | 92% / 0.5 / 39% / 25.2 | 97% / 0.48 / 29% / 53.2 |
| APT | 76% / 0.49 / 53% / 13.5 | 90% / 0.49 / 59% / 29.8 | 79% / 0.46 / 68% / 24.1 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
