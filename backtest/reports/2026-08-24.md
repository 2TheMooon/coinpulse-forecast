# CoinPulse Strategy Tournament — 2026-08-24

_Generated 2026-08-24T09:52:59.229Z · 14 coins · 300 samples/window · 12.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`bootstrap_iid`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 22.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 23.8 |
| 3 | GARCH(1,1)-lite | 24.6 |
| 4 | GBM (normal) | 25.1 |
| 5 | Bootstrap (IID) | 25.7 |
| 6 | GBM + Student-t | 26.4 |
| 7 | Block bootstrap | 26.5 |
| 8 | EWMA vol, zero drift (t) | 27.1 |
| 9 | Momentum | 31.2 |
| 10 | Mean-reversion (OU) | 70.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 87 | 0.52 | 44 | — | 17.3 |
| 2 | GBM (normal) | 53 | **79** | 85 | 0.51 | 50 | 20% | 18.8 |
| 3 | GARCH(1,1)-lite | 52 | **77** | 85 | 0.51 | 52 | 19% | 19.0 |
| 4 | EWMA vol, zero drift (t) | 54 | **78** | 85 | 0.50 | 58 | 20% | 19.2 |
| 5 | Block bootstrap | 53 | **77** | 86 | 0.50 | 45 | 21% | 19.3 |
| 6 | Ensemble (GBM-t + bootstraps) | 55 | **80** | 87 | 0.51 | 50 | 21% | 19.4 |
| 7 | GBM + Student-t | 52 | **78** | 85 | 0.52 | 53 | 20% | 19.6 |
| 8 | Momentum | 50 | **75** | 84 | 0.51 | 50 | 20% | 20.5 |
| 9 | Bootstrap (IID) | 58 | **81** | 89 | 0.51 | 54 | 22% | 21.5 |
| 10 | Mean-reversion (OU) | 46 | **68** | 78 | 0.47 | 53 | 17% | 42.8 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **81** | 89 | 0.51 | 45 | — | 19.9 |
| 2 | Ensemble (GBM-t + bootstraps) | 57 | **81** | 88 | 0.51 | 46 | 29% | 21.6 |
| 3 | Momentum | 48 | **75** | 86 | 0.52 | 48 | 30% | 22.1 |
| 4 | GARCH(1,1)-lite | 54 | **79** | 89 | 0.52 | 50 | 28% | 22.2 |
| 5 | Block bootstrap | 56 | **79** | 87 | 0.49 | 48 | 29% | 22.5 |
| 6 | GBM (normal) | 56 | **79** | 88 | 0.52 | 46 | 30% | 22.9 |
| 7 | GBM + Student-t | 56 | **80** | 87 | 0.52 | 51 | 28% | 23.4 |
| 8 | EWMA vol, zero drift (t) | 57 | **82** | 88 | 0.50 | 58 | 28% | 25.7 |
| 9 | Bootstrap (IID) | 61 | **84** | 90 | 0.50 | 52 | 32% | 26.3 |
| 10 | Mean-reversion (OU) | 37 | **64** | 73 | 0.46 | 55 | 21% | 62.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 53 | **77** | 84 | 0.49 | 44 | 47% | 29.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 58 | **79** | 87 | 0.49 | 45 | 52% | 30.3 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 58 | **78** | 85 | 0.49 | 41 | — | 31.0 |
| 4 | GARCH(1,1)-lite | 49 | **72** | 82 | 0.51 | 45 | 42% | 32.7 |
| 5 | GBM (normal) | 50 | **72** | 80 | 0.51 | 47 | 43% | 33.7 |
| 6 | GBM + Student-t | 49 | **71** | 80 | 0.51 | 46 | 42% | 36.3 |
| 7 | EWMA vol, zero drift (t) | 52 | **74** | 81 | 0.48 | 54 | 43% | 36.6 |
| 8 | Block bootstrap | 49 | **71** | 80 | 0.49 | 44 | 42% | 37.8 |
| 9 | Momentum | 37 | **62** | 77 | 0.51 | 48 | 44% | 50.9 |
| 10 | Mean-reversion (OU) | 31 | **50** | 57 | 0.43 | 60 | 23% | 106.5 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 85% / 0.52 / 38% / 12.9 | 82% / 0.51 / 35% / 10.4 | 71% / 0.48 / 25% / 30.2 |
| ETH | 81% / 0.52 / 34% / 7.8 | 77% / 0.5 / 32% / 10.6 | 73% / 0.47 / 21% / 27.9 |
| SOL | 78% / 0.52 / 42% / 19.7 | 82% / 0.52 / 34% / 16.9 | 83% / 0.49 / 43% / 16.7 |
| BNB | 89% / 0.56 / 38% / 32.1 | 83% / 0.56 / 41% / 20.8 | 87% / 0.54 / 37% / 30.3 |
| XRP | 82% / 0.48 / 57% / 6.6 | 86% / 0.47 / 61% / 23.1 | 79% / 0.44 / 65% / 30.1 |
| SUI | 82% / 0.52 / 47% / 11.9 | 83% / 0.52 / 44% / 17.3 | 90% / 0.49 / 48% / 38.7 |
| AVAX | 85% / 0.5 / 41% / 19.9 | 85% / 0.47 / 44% / 34.6 | 78% / 0.43 / 52% / 51.1 |
| LINK | 76% / 0.54 / 35% / 20.2 | 80% / 0.53 / 34% / 10.5 | 79% / 0.52 / 22% / 7.3 |
| INJ | 78% / 0.57 / 54% / 19.4 | 76% / 0.57 / 46% / 21.6 | 70% / 0.58 / 38% / 41.8 |
| OP | 77% / 0.56 / 51% / 24.8 | 79% / 0.58 / 52% / 22.5 | 78% / 0.58 / 60% / 36.7 |
| ARB | 72% / 0.51 / 46% / 30.9 | 65% / 0.51 / 52% / 29.6 | 71% / 0.49 / 29% / 32.3 |
| DOGE | 80% / 0.5 / 42% / 18 | 76% / 0.46 / 51% / 21.6 | 70% / 0.43 / 44% / 34.1 |
| TIA | 77% / 0.5 / 35% / 8.6 | 85% / 0.51 / 41% / 15.5 | 90% / 0.5 / 22% / 23.7 |
| APT | 81% / 0.5 / 51% / 9.2 | 89% / 0.48 / 68% / 24.3 | 76% / 0.46 / 73% / 33 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
