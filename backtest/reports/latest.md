# CoinPulse Strategy Tournament — 2026-06-24

_Generated 2026-06-24T11:48:51.438Z · 14 coins · 300 samples/window · 10.6s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`gbm_normal` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 22.2 |
| 2 | GBM (normal) | 22.7 |
| 3 | GBM + Student-t | 23.3 |
| 4 | GARCH(1,1)-lite | 24.2 |
| 5 | Momentum | 25.6 |
| 6 | Ensemble (GBM-t + bootstraps) | 27.9 |
| 7 | EWMA vol, zero drift (t) | 29.9 |
| 8 | Block bootstrap | 31.7 |
| 9 | Bootstrap (IID) | 33.0 |
| 10 | Mean-reversion (OU) | 55.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **77** | 88 | 0.48 | 54 | 27% | 14.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 51 | **79** | 89 | 0.47 | 59 | — | 16.0 |
| 3 | GBM + Student-t | 50 | **79** | 89 | 0.47 | 58 | 26% | 16.6 |
| 4 | GBM (normal) | 52 | **80** | 90 | 0.47 | 57 | 27% | 17.3 |
| 5 | GARCH(1,1)-lite | 51 | **80** | 90 | 0.46 | 60 | 26% | 18.2 |
| 6 | EWMA vol, zero drift (t) | 51 | **79** | 89 | 0.45 | 55 | 27% | 19.9 |
| 7 | Ensemble (GBM-t + bootstraps) | 53 | **83** | 93 | 0.45 | 54 | 27% | 22.5 |
| 8 | Block bootstrap | 54 | **82** | 92 | 0.44 | 52 | 27% | 24.2 |
| 9 | Bootstrap (IID) | 57 | **85** | 93 | 0.45 | 52 | 29% | 27.8 |
| 10 | Mean-reversion (OU) | 52 | **80** | 87 | 0.42 | 51 | 27% | 28.8 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 53 | **81** | 89 | 0.46 | 59 | 39% | 18.1 |
| 2 | GBM + Student-t | 50 | **80** | 87 | 0.46 | 59 | 37% | 18.7 |
| 3 | GARCH(1,1)-lite | 52 | **81** | 90 | 0.46 | 59 | 37% | 19.4 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 55 | **81** | 88 | 0.47 | 59 | — | 19.9 |
| 5 | Momentum | 43 | **74** | 87 | 0.48 | 52 | 38% | 22.6 |
| 6 | EWMA vol, zero drift (t) | 52 | **81** | 88 | 0.42 | 53 | 38% | 25.0 |
| 7 | Ensemble (GBM-t + bootstraps) | 54 | **81** | 92 | 0.44 | 59 | 39% | 25.8 |
| 8 | Block bootstrap | 50 | **80** | 89 | 0.42 | 51 | 37% | 29.3 |
| 9 | Bootstrap (IID) | 57 | **85** | 94 | 0.43 | 61 | 41% | 32.7 |
| 10 | Mean-reversion (OU) | 46 | **71** | 80 | 0.39 | 46 | 37% | 48.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 59 | **82** | 90 | 0.45 | 66 | — | 30.8 |
| 2 | GBM (normal) | 53 | **75** | 84 | 0.43 | 66 | 54% | 32.7 |
| 3 | GBM + Student-t | 52 | **74** | 83 | 0.43 | 65 | 54% | 34.4 |
| 4 | GARCH(1,1)-lite | 53 | **77** | 86 | 0.43 | 65 | 54% | 34.9 |
| 5 | Ensemble (GBM-t + bootstraps) | 59 | **82** | 91 | 0.41 | 61 | 67% | 35.4 |
| 6 | Bootstrap (IID) | 56 | **79** | 88 | 0.40 | 59 | 59% | 38.6 |
| 7 | Momentum | 41 | **68** | 79 | 0.47 | 54 | 52% | 39.5 |
| 8 | Block bootstrap | 52 | **75** | 84 | 0.39 | 57 | 54% | 41.4 |
| 9 | EWMA vol, zero drift (t) | 55 | **74** | 83 | 0.38 | 69 | 56% | 44.8 |
| 10 | Mean-reversion (OU) | 39 | **58** | 65 | 0.34 | 45 | 47% | 89.5 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 77% / 0.47 / 56% / 16.4 | 79% / 0.48 / 52% / 17.2 | 77% / 0.44 / 64% / 20.9 |
| ETH | 80% / 0.42 / 53% / 20.4 | 82% / 0.41 / 51% / 26.1 | 78% / 0.38 / 54% / 38.2 |
| SOL | 76% / 0.45 / 63% / 18.9 | 84% / 0.44 / 58% / 22.2 | 84% / 0.41 / 67% / 35.5 |
| BNB | 80% / 0.54 / 54% / 18.6 | 79% / 0.53 / 59% / 13.9 | 84% / 0.54 / 48% / 20.5 |
| XRP | 83% / 0.45 / 64% / 14.1 | 85% / 0.44 / 59% / 34.3 | 88% / 0.42 / 62% / 48.5 |
| SUI | 77% / 0.46 / 59% / 13.4 | 78% / 0.48 / 62% / 12.8 | 87% / 0.47 / 72% / 20.8 |
| AVAX | 80% / 0.44 / 67% / 14.5 | 78% / 0.44 / 66% / 22.2 | 83% / 0.43 / 68% / 34.9 |
| LINK | 84% / 0.44 / 64% / 26 | 86% / 0.44 / 53% / 28.5 | 87% / 0.41 / 61% / 39.4 |
| INJ | 81% / 0.52 / 48% / 10 | 77% / 0.52 / 56% / 14 | 75% / 0.53 / 68% / 29.2 |
| OP | 76% / 0.47 / 55% / 17.5 | 78% / 0.46 / 62% / 18.9 | 78% / 0.45 / 75% / 25 |
| ARB | 76% / 0.45 / 53% / 17.7 | 78% / 0.44 / 63% / 23.2 | 72% / 0.43 / 72% / 36.9 |
| DOGE | 81% / 0.46 / 60% / 13.6 | 82% / 0.46 / 59% / 20.6 | 90% / 0.45 / 67% / 37.4 |
| TIA | 79% / 0.5 / 61% / 4 | 82% / 0.51 / 60% / 9.4 | 87% / 0.52 / 71% / 26.8 |
| APT | 75% / 0.47 / 65% / 18.9 | 81% / 0.47 / 64% / 14.1 | 80% / 0.45 / 77% / 20 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
