# CoinPulse Strategy Tournament — 2026-11-28

_Generated 2026-11-28T17:26:19.351Z · 14 coins · 300 samples/window · 10.9s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 33.6 |
| 2 | EWMA vol, zero drift (t) | 33.8 |
| 3 | Ensemble (GBM-t + bootstraps) | 34.6 |
| 4 | Momentum | 34.9 |
| 5 | Block bootstrap | 39.5 |
| 6 | Bootstrap (IID) | 42.5 |
| 7 | GBM (normal) | 44.3 |
| 8 | GBM + Student-t | 44.5 |
| 9 | GARCH(1,1)-lite | 45.3 |
| 10 | Mean-reversion (OU) | 67.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 54 | **79** | 88 | 0.48 | 59 | 25% | 16.1 |
| 2 | GARCH(1,1)-lite | 52 | **79** | 87 | 0.49 | 50 | 23% | 16.4 |
| 3 | Ensemble (GBM-t + bootstraps) | 52 | **80** | 87 | 0.49 | 55 | 23% | 16.4 |
| 4 | GBM + Student-t | 55 | **80** | 86 | 0.51 | 56 | 24% | 16.6 |
| 5 | Block bootstrap | 51 | **79** | 86 | 0.48 | 59 | 23% | 17.8 |
| 6 | GBM (normal) | 58 | **80** | 87 | 0.50 | 58 | 24% | 19.3 |
| 7 | Bootstrap (IID) | 53 | **77** | 86 | 0.49 | 58 | 23% | 19.6 |
| 8 | EWMA vol, zero drift (t) | 56 | **81** | 87 | 0.48 | 55 | 24% | 21.0 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 63 | **85** | 90 | 0.52 | 46 | — | 25.8 |
| 10 | Mean-reversion (OU) | 50 | **73** | 81 | 0.50 | 55 | 20% | 30.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **82** | 88 | 0.53 | 45 | — | 26.8 |
| 2 | EWMA vol, zero drift (t) | 46 | **74** | 83 | 0.50 | 51 | 33% | 27.6 |
| 3 | Momentum | 45 | **71** | 83 | 0.48 | 55 | 36% | 28.5 |
| 4 | Block bootstrap | 45 | **71** | 80 | 0.52 | 55 | 34% | 30.4 |
| 5 | Ensemble (GBM-t + bootstraps) | 45 | **71** | 82 | 0.52 | 50 | 33% | 31.8 |
| 6 | Bootstrap (IID) | 44 | **71** | 81 | 0.51 | 48 | 32% | 33.4 |
| 7 | GBM (normal) | 44 | **72** | 81 | 0.54 | 50 | 34% | 35.4 |
| 8 | GBM + Student-t | 43 | **70** | 81 | 0.54 | 49 | 33% | 36.7 |
| 9 | GARCH(1,1)-lite | 42 | **70** | 82 | 0.54 | 55 | 32% | 37.1 |
| 10 | Mean-reversion (OU) | 41 | **63** | 73 | 0.55 | 57 | 24% | 54.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 44 | **75** | 84 | 0.59 | 35 | — | 48.1 |
| 2 | EWMA vol, zero drift (t) | 39 | **67** | 76 | 0.56 | 50 | 48% | 52.8 |
| 3 | Ensemble (GBM-t + bootstraps) | 38 | **68** | 79 | 0.58 | 38 | 58% | 55.5 |
| 4 | Momentum | 33 | **60** | 75 | 0.52 | 53 | 55% | 60.2 |
| 5 | Block bootstrap | 33 | **61** | 73 | 0.58 | 41 | 50% | 70.3 |
| 6 | Bootstrap (IID) | 31 | **59** | 73 | 0.58 | 39 | 47% | 74.5 |
| 7 | GBM (normal) | 33 | **60** | 72 | 0.61 | 39 | 48% | 78.1 |
| 8 | GBM + Student-t | 32 | **60** | 70 | 0.61 | 41 | 47% | 80.0 |
| 9 | GARCH(1,1)-lite | 29 | **58** | 71 | 0.60 | 42 | 45% | 82.4 |
| 10 | Mean-reversion (OU) | 25 | **44** | 56 | 0.61 | 56 | 28% | 116.8 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.52 / 34% / 21.6 | 77% / 0.53 / 31% / 22.2 | 65% / 0.6 / 11% / 58.7 |
| ETH | 82% / 0.51 / 42% / 17.8 | 76% / 0.51 / 37% / 14.5 | 60% / 0.55 / 25% / 58.9 |
| SOL | 82% / 0.49 / 38% / 14.5 | 77% / 0.48 / 41% / 15.7 | 63% / 0.54 / 37% / 51.4 |
| BNB | 84% / 0.53 / 35% / 17.4 | 77% / 0.54 / 35% / 21.1 | 65% / 0.58 / 21% / 59 |
| XRP | 86% / 0.49 / 53% / 33.2 | 83% / 0.48 / 54% / 28.3 | 68% / 0.54 / 43% / 38.4 |
| SUI | 89% / 0.55 / 59% / 31.8 | 80% / 0.57 / 59% / 24.2 | 76% / 0.65 / 49% / 52.1 |
| AVAX | 91% / 0.53 / 53% / 47.1 | 80% / 0.56 / 41% / 30.7 | 71% / 0.64 / 30% / 54.6 |
| LINK | 85% / 0.56 / 34% / 20.3 | 85% / 0.55 / 34% / 17 | 76% / 0.6 / 24% / 47.1 |
| INJ | 86% / 0.52 / 28% / 30.3 | 93% / 0.53 / 39% / 43.2 | 89% / 0.58 / 40% / 47.6 |
| OP | 86% / 0.51 / 51% / 26.1 | 90% / 0.53 / 55% / 37.8 | 87% / 0.59 / 44% / 37.1 |
| ARB | 77% / 0.53 / 35% / 25.4 | 69% / 0.57 / 32% / 39 | 75% / 0.62 / 22% / 47.2 |
| DOGE | 88% / 0.53 / 66% / 35 | 83% / 0.53 / 72% / 28.9 | 73% / 0.59 / 57% / 37.2 |
| TIA | 89% / 0.51 / 49% / 24.8 | 93% / 0.52 / 44% / 27.8 | 95% / 0.57 / 25% / 43.2 |
| APT | 84% / 0.53 / 59% / 15.4 | 87% / 0.55 / 59% / 24.7 | 79% / 0.62 / 57% / 41.7 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
