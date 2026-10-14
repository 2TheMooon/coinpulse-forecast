# CoinPulse Strategy Tournament — 2026-10-14

_Generated 2026-10-14T14:25:33.709Z · 14 coins · 300 samples/window · 11.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_normal` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 30.1 |
| 2 | Ensemble (GBM-t + bootstraps) | 34.8 |
| 3 | EWMA vol, zero drift (t) | 37.2 |
| 4 | Bootstrap (IID) | 37.8 |
| 5 | GBM (normal) | 38.0 |
| 6 | GBM + Student-t | 38.7 |
| 7 | Block bootstrap | 40.0 |
| 8 | GARCH(1,1)-lite | 40.3 |
| 9 | Momentum | 43.3 |
| 10 | Mean-reversion (OU) | 67.4 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 52 | **79** | 86 | 0.49 | 45 | 23% | 19.2 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 58 | **84** | 91 | 0.48 | 43 | — | 19.8 |
| 3 | GBM + Student-t | 52 | **79** | 86 | 0.49 | 45 | 22% | 19.9 |
| 4 | GARCH(1,1)-lite | 51 | **77** | 86 | 0.49 | 48 | 22% | 20.3 |
| 5 | Ensemble (GBM-t + bootstraps) | 48 | **76** | 86 | 0.48 | 44 | 22% | 20.5 |
| 6 | EWMA vol, zero drift (t) | 53 | **80** | 86 | 0.49 | 53 | 22% | 21.1 |
| 7 | Momentum | 46 | **76** | 85 | 0.48 | 51 | 23% | 21.7 |
| 8 | Bootstrap (IID) | 49 | **75** | 85 | 0.48 | 45 | 22% | 22.1 |
| 9 | Block bootstrap | 47 | **75** | 84 | 0.47 | 48 | 21% | 23.7 |
| 10 | Mean-reversion (OU) | 48 | **69** | 78 | 0.47 | 49 | 20% | 38.2 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 62 | **82** | 87 | 0.51 | 41 | — | 28.7 |
| 2 | GBM (normal) | 54 | **75** | 83 | 0.54 | 43 | 33% | 31.1 |
| 3 | EWMA vol, zero drift (t) | 51 | **76** | 83 | 0.53 | 50 | 31% | 31.2 |
| 4 | GBM + Student-t | 48 | **75** | 82 | 0.53 | 41 | 32% | 31.3 |
| 5 | Ensemble (GBM-t + bootstraps) | 49 | **74** | 81 | 0.52 | 46 | 31% | 32.1 |
| 6 | Bootstrap (IID) | 50 | **73** | 82 | 0.52 | 42 | 31% | 32.5 |
| 7 | Momentum | 44 | **70** | 82 | 0.53 | 51 | 33% | 33.0 |
| 8 | GARCH(1,1)-lite | 49 | **73** | 82 | 0.54 | 42 | 30% | 33.8 |
| 9 | Block bootstrap | 48 | **72** | 80 | 0.51 | 45 | 31% | 35.2 |
| 10 | Mean-reversion (OU) | 40 | **62** | 71 | 0.50 | 46 | 25% | 59.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **77** | 87 | 0.56 | 37 | — | 41.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 51 | **69** | 80 | 0.57 | 38 | 55% | 51.9 |
| 3 | Bootstrap (IID) | 45 | **65** | 74 | 0.57 | 40 | 46% | 58.8 |
| 4 | EWMA vol, zero drift (t) | 45 | **65** | 75 | 0.59 | 41 | 44% | 59.2 |
| 5 | Block bootstrap | 45 | **65** | 73 | 0.57 | 42 | 46% | 61.1 |
| 6 | GBM (normal) | 43 | **65** | 72 | 0.60 | 35 | 45% | 63.8 |
| 7 | GBM + Student-t | 42 | **63** | 72 | 0.59 | 33 | 44% | 65.0 |
| 8 | GARCH(1,1)-lite | 41 | **63** | 71 | 0.60 | 35 | 43% | 66.9 |
| 9 | Momentum | 34 | **59** | 71 | 0.59 | 52 | 46% | 75.2 |
| 10 | Mean-reversion (OU) | 30 | **48** | 54 | 0.54 | 51 | 31% | 104.6 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.47 / 42% / 23.5 | 79% / 0.51 / 37% / 21.9 | 63% / 0.57 / 37% / 58.5 |
| ETH | 84% / 0.48 / 41% / 24.6 | 77% / 0.53 / 39% / 21.5 | 65% / 0.6 / 21% / 47.3 |
| SOL | 80% / 0.51 / 45% / 9.3 | 82% / 0.55 / 35% / 23.2 | 75% / 0.62 / 30% / 39.6 |
| BNB | 88% / 0.53 / 50% / 27.1 | 86% / 0.55 / 46% / 33.1 | 70% / 0.59 / 38% / 40.5 |
| XRP | 89% / 0.45 / 42% / 29.1 | 82% / 0.48 / 42% / 33 | 68% / 0.55 / 44% / 49.8 |
| SUI | 84% / 0.49 / 42% / 15.2 | 82% / 0.52 / 39% / 19 | 89% / 0.57 / 27% / 41.7 |
| AVAX | 84% / 0.51 / 42% / 22.1 | 72% / 0.54 / 30% / 37.3 | 68% / 0.6 / 27% / 50.5 |
| LINK | 86% / 0.51 / 36% / 9.4 | 76% / 0.54 / 42% / 21.9 | 75% / 0.61 / 41% / 32.8 |
| INJ | 89% / 0.47 / 51% / 32.7 | 94% / 0.48 / 58% / 39.6 | 94% / 0.46 / 60% / 40.1 |
| OP | 86% / 0.47 / 32% / 17.8 | 89% / 0.49 / 27% / 32 | 98% / 0.52 / 24% / 48.2 |
| ARB | 74% / 0.47 / 38% / 16.2 | 69% / 0.52 / 38% / 24.5 | 65% / 0.59 / 25% / 48.3 |
| DOGE | 82% / 0.44 / 41% / 22.7 | 77% / 0.46 / 37% / 29.7 | 68% / 0.5 / 44% / 25.1 |
| TIA | 88% / 0.48 / 53% / 14.5 | 96% / 0.5 / 54% / 38.4 | 98% / 0.5 / 59% / 42.9 |
| APT | 82% / 0.5 / 47% / 12.9 | 83% / 0.52 / 48% / 26.8 | 79% / 0.56 / 43% / 19.8 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
