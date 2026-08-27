# CoinPulse Strategy Tournament — 2026-08-27

_Generated 2026-08-27T19:42:15.577Z · 14 coins · 300 samples/window · 11.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 23.0 |
| 2 | Ensemble (GBM-t + bootstraps) | 24.7 |
| 3 | Bootstrap (IID) | 25.2 |
| 4 | GARCH(1,1)-lite | 26.6 |
| 5 | GBM (normal) | 26.7 |
| 6 | Block bootstrap | 27.4 |
| 7 | GBM + Student-t | 28.2 |
| 8 | EWMA vol, zero drift (t) | 28.6 |
| 9 | Momentum | 34.1 |
| 10 | Mean-reversion (OU) | 68.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 88 | 0.51 | 48 | — | 15.6 |
| 2 | Block bootstrap | 55 | **79** | 87 | 0.51 | 52 | 21% | 18.9 |
| 3 | GBM (normal) | 56 | **78** | 86 | 0.52 | 47 | 21% | 20.3 |
| 4 | GARCH(1,1)-lite | 53 | **77** | 85 | 0.52 | 46 | 20% | 20.3 |
| 5 | Ensemble (GBM-t + bootstraps) | 56 | **79** | 87 | 0.52 | 55 | 21% | 20.6 |
| 6 | Bootstrap (IID) | 57 | **80** | 88 | 0.52 | 46 | 22% | 20.8 |
| 7 | EWMA vol, zero drift (t) | 52 | **77** | 85 | 0.52 | 46 | 20% | 21.2 |
| 8 | GBM + Student-t | 52 | **76** | 85 | 0.53 | 47 | 20% | 22.4 |
| 9 | Momentum | 52 | **75** | 83 | 0.52 | 51 | 21% | 22.7 |
| 10 | Mean-reversion (OU) | 45 | **68** | 78 | 0.48 | 50 | 18% | 41.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **80** | 87 | 0.52 | 44 | — | 22.5 |
| 2 | Block bootstrap | 55 | **78** | 87 | 0.50 | 45 | 29% | 22.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 56 | **80** | 88 | 0.51 | 49 | 30% | 22.9 |
| 4 | GBM + Student-t | 54 | **80** | 87 | 0.53 | 50 | 28% | 23.2 |
| 5 | GBM (normal) | 55 | **79** | 87 | 0.53 | 42 | 30% | 23.4 |
| 6 | GARCH(1,1)-lite | 52 | **79** | 88 | 0.53 | 47 | 28% | 23.7 |
| 7 | Bootstrap (IID) | 58 | **83** | 89 | 0.51 | 49 | 32% | 23.9 |
| 8 | EWMA vol, zero drift (t) | 56 | **80** | 88 | 0.51 | 58 | 28% | 25.6 |
| 9 | Momentum | 48 | **73** | 85 | 0.53 | 48 | 29% | 26.8 |
| 10 | Mean-reversion (OU) | 39 | **64** | 73 | 0.47 | 53 | 21% | 60.1 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 59 | **79** | 88 | 0.49 | 41 | 53% | 30.6 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 58 | **77** | 86 | 0.49 | 38 | — | 30.8 |
| 3 | Bootstrap (IID) | 55 | **76** | 85 | 0.49 | 46 | 47% | 30.8 |
| 4 | GARCH(1,1)-lite | 49 | **73** | 81 | 0.51 | 41 | 43% | 35.9 |
| 5 | GBM (normal) | 51 | **73** | 80 | 0.51 | 42 | 43% | 36.5 |
| 6 | GBM + Student-t | 50 | **71** | 79 | 0.51 | 41 | 43% | 38.9 |
| 7 | EWMA vol, zero drift (t) | 53 | **74** | 82 | 0.48 | 51 | 43% | 38.9 |
| 8 | Block bootstrap | 51 | **71** | 80 | 0.48 | 39 | 42% | 40.8 |
| 9 | Momentum | 37 | **63** | 75 | 0.52 | 47 | 43% | 52.9 |
| 10 | Mean-reversion (OU) | 32 | **52** | 58 | 0.43 | 60 | 24% | 102.1 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 81% / 0.51 / 46% / 7 | 82% / 0.52 / 41% / 19.7 | 70% / 0.49 / 27% / 30.6 |
| ETH | 82% / 0.5 / 45% / 14.5 | 73% / 0.51 / 37% / 19.7 | 67% / 0.48 / 16% / 30.1 |
| SOL | 77% / 0.52 / 50% / 17.3 | 79% / 0.54 / 34% / 22.9 | 83% / 0.5 / 35% / 13.9 |
| BNB | 82% / 0.55 / 43% / 15.5 | 80% / 0.57 / 30% / 24.1 | 84% / 0.53 / 19% / 20.9 |
| XRP | 81% / 0.48 / 57% / 7.9 | 83% / 0.48 / 56% / 16.4 | 75% / 0.44 / 60% / 42.3 |
| SUI | 80% / 0.5 / 46% / 13 | 82% / 0.52 / 42% / 11.2 | 87% / 0.48 / 37% / 32.7 |
| AVAX | 84% / 0.49 / 39% / 22.2 | 83% / 0.48 / 44% / 27.6 | 76% / 0.43 / 44% / 50.6 |
| LINK | 78% / 0.53 / 43% / 11.9 | 76% / 0.54 / 38% / 18.6 | 75% / 0.52 / 24% / 19.8 |
| INJ | 74% / 0.55 / 59% / 21.7 | 83% / 0.58 / 52% / 23.6 | 71% / 0.58 / 48% / 34.6 |
| OP | 80% / 0.55 / 53% / 15 | 82% / 0.58 / 49% / 22.2 | 78% / 0.57 / 62% / 36.8 |
| ARB | 65% / 0.51 / 53% / 34.4 | 62% / 0.51 / 48% / 39.1 | 73% / 0.48 / 29% / 18.4 |
| DOGE | 80% / 0.48 / 50% / 16.9 | 76% / 0.47 / 44% / 21.5 | 71% / 0.43 / 44% / 36.7 |
| TIA | 81% / 0.51 / 36% / 7.7 | 85% / 0.52 / 34% / 18.7 | 94% / 0.5 / 27% / 34.4 |
| APT | 77% / 0.49 / 51% / 13.7 | 90% / 0.48 / 61% / 29.9 | 79% / 0.45 / 67% / 29.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
