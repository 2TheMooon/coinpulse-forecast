# CoinPulse Strategy Tournament — 2026-09-02

_Generated 2026-09-02T13:27:37.329Z · 14 coins · 300 samples/window · 9.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 23.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 25.7 |
| 3 | Bootstrap (IID) | 27.1 |
| 4 | GBM (normal) | 29.1 |
| 5 | GARCH(1,1)-lite | 29.3 |
| 6 | GBM + Student-t | 29.7 |
| 7 | Block bootstrap | 31.2 |
| 8 | EWMA vol, zero drift (t) | 31.8 |
| 9 | Momentum | 36.6 |
| 10 | Mean-reversion (OU) | 68.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 89 | 0.51 | 48 | — | 16.2 |
| 2 | GBM + Student-t | 52 | **76** | 85 | 0.52 | 52 | 20% | 19.6 |
| 3 | GBM (normal) | 55 | **78** | 86 | 0.51 | 54 | 21% | 20.3 |
| 4 | Ensemble (GBM-t + bootstraps) | 54 | **78** | 87 | 0.51 | 47 | 21% | 20.5 |
| 5 | Block bootstrap | 52 | **75** | 85 | 0.50 | 47 | 20% | 21.9 |
| 6 | GARCH(1,1)-lite | 54 | **76** | 84 | 0.51 | 50 | 20% | 22.3 |
| 7 | EWMA vol, zero drift (t) | 54 | **76** | 85 | 0.51 | 50 | 20% | 22.6 |
| 8 | Momentum | 52 | **74** | 83 | 0.51 | 51 | 21% | 23.0 |
| 9 | Bootstrap (IID) | 57 | **79** | 85 | 0.51 | 51 | 22% | 23.7 |
| 10 | Mean-reversion (OU) | 45 | **69** | 76 | 0.49 | 52 | 18% | 42.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **80** | 87 | 0.53 | 43 | — | 23.4 |
| 2 | Bootstrap (IID) | 57 | **80** | 87 | 0.52 | 48 | 32% | 23.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 52 | **78** | 86 | 0.52 | 46 | 30% | 24.2 |
| 4 | GBM (normal) | 52 | **76** | 84 | 0.54 | 42 | 29% | 26.7 |
| 5 | GARCH(1,1)-lite | 50 | **76** | 85 | 0.54 | 45 | 28% | 27.6 |
| 6 | Block bootstrap | 52 | **76** | 85 | 0.52 | 48 | 29% | 28.0 |
| 7 | GBM + Student-t | 50 | **76** | 84 | 0.54 | 46 | 28% | 28.7 |
| 8 | EWMA vol, zero drift (t) | 52 | **77** | 85 | 0.53 | 54 | 28% | 29.5 |
| 9 | Momentum | 45 | **71** | 83 | 0.54 | 48 | 29% | 32.5 |
| 10 | Mean-reversion (OU) | 38 | **64** | 72 | 0.50 | 53 | 21% | 60.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **77** | 86 | 0.50 | 39 | — | 31.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 58 | **76** | 87 | 0.49 | 46 | 52% | 32.2 |
| 3 | Bootstrap (IID) | 52 | **73** | 83 | 0.49 | 43 | 46% | 34.0 |
| 4 | GARCH(1,1)-lite | 48 | **71** | 79 | 0.51 | 43 | 42% | 37.8 |
| 5 | GBM (normal) | 51 | **71** | 78 | 0.51 | 43 | 43% | 40.2 |
| 6 | GBM + Student-t | 49 | **70** | 78 | 0.51 | 42 | 42% | 40.7 |
| 7 | EWMA vol, zero drift (t) | 51 | **72** | 80 | 0.49 | 52 | 42% | 43.2 |
| 8 | Block bootstrap | 50 | **69** | 76 | 0.48 | 42 | 42% | 43.7 |
| 9 | Momentum | 37 | **62** | 74 | 0.52 | 47 | 43% | 54.2 |
| 10 | Mean-reversion (OU) | 32 | **51** | 56 | 0.43 | 61 | 24% | 103.2 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.5 / 47% / 5 | 79% / 0.52 / 44% / 18.9 | 65% / 0.48 / 29% / 43.7 |
| ETH | 82% / 0.48 / 41% / 20.1 | 70% / 0.5 / 35% / 24.5 | 65% / 0.47 / 13% / 35.3 |
| SOL | 78% / 0.54 / 47% / 17.9 | 79% / 0.55 / 32% / 28.6 | 78% / 0.52 / 30% / 16.5 |
| BNB | 86% / 0.55 / 43% / 25.1 | 80% / 0.57 / 38% / 23.6 | 78% / 0.53 / 32% / 21.1 |
| XRP | 84% / 0.49 / 57% / 9.7 | 80% / 0.51 / 56% / 16.1 | 75% / 0.47 / 62% / 29.9 |
| SUI | 81% / 0.49 / 46% / 14 | 83% / 0.53 / 39% / 12.9 | 87% / 0.49 / 40% / 32.6 |
| AVAX | 85% / 0.48 / 41% / 26.7 | 80% / 0.49 / 39% / 19 | 79% / 0.44 / 52% / 40.7 |
| LINK | 80% / 0.52 / 41% / 7.7 | 79% / 0.55 / 41% / 15.2 | 71% / 0.53 / 25% / 26.9 |
| INJ | 81% / 0.54 / 57% / 16.9 | 85% / 0.58 / 56% / 25.1 | 75% / 0.56 / 51% / 33.1 |
| OP | 81% / 0.53 / 55% / 12.9 | 83% / 0.58 / 49% / 34.7 | 84% / 0.57 / 62% / 43.1 |
| ARB | 64% / 0.5 / 54% / 35.9 | 65% / 0.51 / 48% / 34 | 76% / 0.48 / 29% / 11.4 |
| DOGE | 80% / 0.49 / 54% / 11.9 | 73% / 0.51 / 44% / 18.4 | 68% / 0.47 / 44% / 29.6 |
| TIA | 81% / 0.51 / 36% / 6.2 | 86% / 0.54 / 32% / 21 | 94% / 0.49 / 24% / 39.7 |
| APT | 78% / 0.47 / 50% / 17 | 90% / 0.47 / 48% / 35.8 | 81% / 0.42 / 49% / 35.8 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
