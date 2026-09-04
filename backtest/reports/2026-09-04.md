# CoinPulse Strategy Tournament — 2026-09-04

_Generated 2026-09-04T13:20:38.990Z · 14 coins · 300 samples/window · 12.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`block_boot` · 14d→`bootstrap_iid` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 24.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 25.2 |
| 3 | Bootstrap (IID) | 26.2 |
| 4 | GARCH(1,1)-lite | 28.7 |
| 5 | Block bootstrap | 29.7 |
| 6 | GBM + Student-t | 30.3 |
| 7 | GBM (normal) | 30.4 |
| 8 | EWMA vol, zero drift (t) | 31.0 |
| 9 | Momentum | 37.2 |
| 10 | Mean-reversion (OU) | 69.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 51 | **78** | 87 | 0.51 | 46 | 21% | 16.6 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **81** | 89 | 0.50 | 48 | — | 16.7 |
| 3 | Ensemble (GBM-t + bootstraps) | 53 | **80** | 88 | 0.53 | 46 | 21% | 17.2 |
| 4 | GBM (normal) | 53 | **80** | 87 | 0.53 | 48 | 21% | 19.8 |
| 5 | GARCH(1,1)-lite | 49 | **77** | 87 | 0.53 | 47 | 20% | 20.0 |
| 6 | Bootstrap (IID) | 54 | **82** | 88 | 0.52 | 50 | 22% | 20.3 |
| 7 | Momentum | 48 | **75** | 85 | 0.52 | 46 | 21% | 21.2 |
| 8 | GBM + Student-t | 51 | **77** | 88 | 0.54 | 49 | 20% | 21.5 |
| 9 | EWMA vol, zero drift (t) | 52 | **77** | 88 | 0.53 | 49 | 20% | 21.5 |
| 10 | Mean-reversion (OU) | 48 | **72** | 78 | 0.50 | 54 | 18% | 35.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 54 | **79** | 87 | 0.53 | 47 | 32% | 22.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 57 | **80** | 87 | 0.52 | 43 | — | 23.1 |
| 3 | Ensemble (GBM-t + bootstraps) | 50 | **76** | 85 | 0.52 | 46 | 30% | 25.1 |
| 4 | Block bootstrap | 49 | **77** | 85 | 0.52 | 44 | 29% | 26.5 |
| 5 | EWMA vol, zero drift (t) | 49 | **76** | 85 | 0.53 | 54 | 28% | 26.9 |
| 6 | GBM + Student-t | 48 | **74** | 84 | 0.54 | 46 | 28% | 27.1 |
| 7 | GARCH(1,1)-lite | 47 | **75** | 84 | 0.54 | 44 | 28% | 27.2 |
| 8 | GBM (normal) | 50 | **74** | 83 | 0.54 | 41 | 29% | 29.0 |
| 9 | Momentum | 43 | **72** | 81 | 0.55 | 49 | 29% | 34.9 |
| 10 | Mean-reversion (OU) | 35 | **59** | 69 | 0.49 | 53 | 21% | 69.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 59 | **77** | 85 | 0.50 | 37 | — | 33.1 |
| 2 | Ensemble (GBM-t + bootstraps) | 57 | **76** | 87 | 0.49 | 45 | 53% | 33.1 |
| 3 | Bootstrap (IID) | 53 | **74** | 82 | 0.49 | 44 | 47% | 36.1 |
| 4 | GARCH(1,1)-lite | 48 | **71** | 79 | 0.51 | 43 | 42% | 39.1 |
| 5 | GBM + Student-t | 49 | **69** | 78 | 0.51 | 41 | 42% | 42.3 |
| 6 | GBM (normal) | 49 | **69** | 79 | 0.51 | 42 | 43% | 42.5 |
| 7 | EWMA vol, zero drift (t) | 50 | **72** | 80 | 0.49 | 50 | 42% | 44.5 |
| 8 | Block bootstrap | 49 | **69** | 76 | 0.49 | 40 | 42% | 45.9 |
| 9 | Momentum | 36 | **62** | 74 | 0.52 | 48 | 43% | 55.6 |
| 10 | Mean-reversion (OU) | 32 | **49** | 56 | 0.43 | 61 | 25% | 104.4 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.49 / 49% / 8.6 | 79% / 0.51 / 45% / 18 | 63% / 0.48 / 29% / 46.4 |
| ETH | 82% / 0.48 / 39% / 21.2 | 73% / 0.5 / 34% / 22 | 65% / 0.48 / 11% / 36.6 |
| SOL | 78% / 0.53 / 43% / 16.6 | 79% / 0.55 / 35% / 28.2 | 76% / 0.52 / 30% / 18.6 |
| BNB | 86% / 0.55 / 39% / 26 | 80% / 0.57 / 32% / 24.1 | 78% / 0.54 / 25% / 23 |
| XRP | 84% / 0.49 / 57% / 11.2 | 80% / 0.5 / 58% / 16.8 | 73% / 0.48 / 62% / 32 |
| SUI | 81% / 0.49 / 47% / 14.6 | 83% / 0.52 / 42% / 13.1 | 87% / 0.49 / 38% / 29 |
| AVAX | 85% / 0.48 / 41% / 25.7 | 80% / 0.49 / 41% / 19.2 | 78% / 0.44 / 48% / 40.7 |
| LINK | 80% / 0.52 / 43% / 7.8 | 79% / 0.54 / 39% / 14.9 | 70% / 0.54 / 21% / 30.3 |
| INJ | 82% / 0.53 / 57% / 15.1 | 86% / 0.57 / 56% / 21.3 | 76% / 0.54 / 51% / 25.8 |
| OP | 82% / 0.52 / 55% / 13.3 | 87% / 0.56 / 51% / 39.4 | 94% / 0.56 / 62% / 51.3 |
| ARB | 64% / 0.5 / 54% / 38.3 | 65% / 0.51 / 48% / 32.3 | 76% / 0.47 / 29% / 11.7 |
| DOGE | 80% / 0.48 / 54% / 12.9 | 73% / 0.5 / 44% / 17.7 | 67% / 0.46 / 43% / 33.5 |
| TIA | 82% / 0.51 / 39% / 7.5 | 86% / 0.53 / 34% / 19.5 | 94% / 0.49 / 22% / 42 |
| APT | 80% / 0.48 / 51% / 15.1 | 90% / 0.47 / 48% / 36.8 | 79% / 0.42 / 46% / 42.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
