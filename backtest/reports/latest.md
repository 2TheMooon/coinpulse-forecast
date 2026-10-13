# CoinPulse Strategy Tournament — 2026-10-13

_Generated 2026-10-13T16:49:05.338Z · 14 coins · 300 samples/window · 9.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_t` · 14d→`ensemble` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 30.9 |
| 2 | Ensemble (GBM-t + bootstraps) | 32.6 |
| 3 | EWMA vol, zero drift (t) | 35.4 |
| 4 | Bootstrap (IID) | 36.5 |
| 5 | GBM (normal) | 37.1 |
| 6 | GBM + Student-t | 37.6 |
| 7 | GARCH(1,1)-lite | 38.9 |
| 8 | Block bootstrap | 39.1 |
| 9 | Momentum | 40.9 |
| 10 | Mean-reversion (OU) | 66.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 50 | **76** | 87 | 0.49 | 43 | 22% | 17.6 |
| 2 | GBM (normal) | 51 | **78** | 86 | 0.49 | 44 | 23% | 18.7 |
| 3 | EWMA vol, zero drift (t) | 51 | **78** | 87 | 0.49 | 53 | 22% | 19.2 |
| 4 | GARCH(1,1)-lite | 50 | **75** | 84 | 0.48 | 46 | 22% | 19.7 |
| 5 | Ensemble (GBM-t + bootstraps) | 48 | **75** | 85 | 0.48 | 42 | 22% | 20.0 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 60 | **82** | 88 | 0.50 | 41 | — | 20.4 |
| 7 | Bootstrap (IID) | 48 | **75** | 85 | 0.48 | 47 | 22% | 21.6 |
| 8 | Momentum | 45 | **74** | 85 | 0.48 | 47 | 24% | 23.1 |
| 9 | Block bootstrap | 46 | **73** | 84 | 0.47 | 47 | 21% | 25.0 |
| 10 | Mean-reversion (OU) | 47 | **70** | 77 | 0.47 | 50 | 20% | 38.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 51 | **75** | 83 | 0.51 | 46 | 31% | 26.0 |
| 2 | Momentum | 44 | **73** | 84 | 0.51 | 53 | 34% | 26.8 |
| 3 | EWMA vol, zero drift (t) | 53 | **76** | 84 | 0.52 | 51 | 31% | 27.9 |
| 4 | GBM + Student-t | 51 | **75** | 83 | 0.52 | 44 | 32% | 28.4 |
| 5 | GARCH(1,1)-lite | 50 | **75** | 82 | 0.52 | 42 | 30% | 28.8 |
| 6 | GBM (normal) | 56 | **76** | 83 | 0.52 | 44 | 33% | 29.3 |
| 7 | Bootstrap (IID) | 52 | **75** | 82 | 0.51 | 41 | 31% | 29.9 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 62 | **82** | 87 | 0.51 | 42 | — | 30.1 |
| 9 | Block bootstrap | 52 | **75** | 82 | 0.50 | 43 | 31% | 30.2 |
| 10 | Mean-reversion (OU) | 40 | **64** | 74 | 0.48 | 46 | 25% | 54.3 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **76** | 85 | 0.56 | 38 | — | 42.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 49 | **69** | 78 | 0.57 | 39 | 54% | 51.6 |
| 3 | Bootstrap (IID) | 43 | **65** | 73 | 0.57 | 37 | 46% | 58.0 |
| 4 | EWMA vol, zero drift (t) | 43 | **66** | 73 | 0.58 | 44 | 43% | 59.2 |
| 5 | Block bootstrap | 43 | **65** | 71 | 0.56 | 41 | 46% | 61.9 |
| 6 | GBM (normal) | 42 | **63** | 72 | 0.59 | 36 | 45% | 63.4 |
| 7 | GBM + Student-t | 41 | **63** | 71 | 0.59 | 34 | 44% | 66.6 |
| 8 | GARCH(1,1)-lite | 39 | **62** | 70 | 0.59 | 35 | 42% | 68.1 |
| 9 | Momentum | 35 | **59** | 72 | 0.59 | 55 | 45% | 72.9 |
| 10 | Mean-reversion (OU) | 29 | **48** | 54 | 0.54 | 50 | 31% | 105.7 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.49 / 38% / 19.7 | 77% / 0.51 / 32% / 24.8 | 62% / 0.57 / 33% / 61 |
| ETH | 78% / 0.51 / 36% / 16.6 | 77% / 0.53 / 32% / 32 | 60% / 0.6 / 24% / 50.3 |
| SOL | 80% / 0.52 / 38% / 23.2 | 79% / 0.55 / 38% / 26.5 | 76% / 0.62 / 37% / 44.1 |
| BNB | 84% / 0.53 / 36% / 27.5 | 85% / 0.56 / 45% / 33.7 | 73% / 0.59 / 33% / 34.5 |
| XRP | 85% / 0.47 / 46% / 21.9 | 80% / 0.48 / 42% / 26.3 | 67% / 0.55 / 51% / 47.2 |
| SUI | 86% / 0.5 / 42% / 14.7 | 83% / 0.52 / 38% / 21.9 | 86% / 0.57 / 32% / 33.2 |
| AVAX | 84% / 0.51 / 43% / 29.6 | 76% / 0.55 / 32% / 34.8 | 65% / 0.6 / 30% / 56.1 |
| LINK | 81% / 0.53 / 41% / 14.6 | 76% / 0.54 / 44% / 21.1 | 73% / 0.61 / 38% / 32.1 |
| INJ | 84% / 0.48 / 55% / 22.8 | 94% / 0.48 / 56% / 34.5 | 95% / 0.46 / 59% / 44.7 |
| OP | 82% / 0.47 / 28% / 26.1 | 90% / 0.49 / 32% / 37.8 | 97% / 0.51 / 27% / 42 |
| ARB | 72% / 0.48 / 34% / 19.4 | 73% / 0.52 / 45% / 24.1 | 65% / 0.58 / 24% / 51.4 |
| DOGE | 81% / 0.45 / 38% / 24.4 | 79% / 0.46 / 45% / 27.5 | 65% / 0.5 / 41% / 26.4 |
| TIA | 86% / 0.49 / 51% / 13.7 | 92% / 0.49 / 59% / 41 | 97% / 0.5 / 56% / 49.2 |
| APT | 81% / 0.51 / 50% / 10.9 | 86% / 0.52 / 44% / 34.9 | 76% / 0.55 / 44% / 19.5 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
