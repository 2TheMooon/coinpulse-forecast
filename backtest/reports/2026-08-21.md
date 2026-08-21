# CoinPulse Strategy Tournament — 2026-08-21

_Generated 2026-08-21T09:41:45.691Z · 14 coins · 300 samples/window · 9.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_normal` · 14d→`momentum` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 24.0 |
| 2 | GBM + Student-t | 25.4 |
| 3 | GBM (normal) | 25.8 |
| 4 | Ensemble (GBM-t + bootstraps) | 26.2 |
| 5 | Block bootstrap | 26.2 |
| 6 | GARCH(1,1)-lite | 26.4 |
| 7 | Momentum | 26.6 |
| 8 | EWMA vol, zero drift (t) | 29.2 |
| 9 | Bootstrap (IID) | 34.3 |
| 10 | Mean-reversion (OU) | 77.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 55 | **81** | 88 | 0.51 | 53 | 21% | 17.4 |
| 2 | GBM + Student-t | 54 | **80** | 88 | 0.51 | 59 | 20% | 17.5 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 53 | **78** | 87 | 0.50 | 54 | — | 17.7 |
| 4 | Momentum | 52 | **78** | 85 | 0.50 | 50 | 21% | 18.8 |
| 5 | Block bootstrap | 57 | **81** | 89 | 0.49 | 49 | 22% | 19.2 |
| 6 | EWMA vol, zero drift (t) | 54 | **81** | 88 | 0.49 | 64 | 20% | 20.0 |
| 7 | Ensemble (GBM-t + bootstraps) | 58 | **84** | 91 | 0.50 | 53 | 22% | 20.1 |
| 8 | GARCH(1,1)-lite | 57 | **81** | 88 | 0.51 | 53 | 21% | 20.5 |
| 9 | Bootstrap (IID) | 64 | **87** | 93 | 0.50 | 55 | 26% | 29.0 |
| 10 | Mean-reversion (OU) | 45 | **69** | 79 | 0.45 | 52 | 18% | 45.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **79** | 88 | 0.51 | 48 | 30% | 20.2 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 87 | 0.52 | 48 | — | 22.1 |
| 3 | GBM + Student-t | 57 | **83** | 89 | 0.52 | 52 | 29% | 23.0 |
| 4 | Block bootstrap | 59 | **83** | 92 | 0.49 | 49 | 31% | 24.5 |
| 5 | GBM (normal) | 58 | **83** | 90 | 0.52 | 52 | 30% | 26.2 |
| 6 | GARCH(1,1)-lite | 58 | **84** | 92 | 0.52 | 52 | 31% | 26.6 |
| 7 | Ensemble (GBM-t + bootstraps) | 60 | **85** | 93 | 0.50 | 49 | 32% | 27.1 |
| 8 | EWMA vol, zero drift (t) | 58 | **84** | 90 | 0.48 | 54 | 29% | 28.3 |
| 9 | Bootstrap (IID) | 68 | **90** | 95 | 0.49 | 50 | 37% | 37.7 |
| 10 | Mean-reversion (OU) | 37 | **61** | 72 | 0.43 | 54 | 21% | 72.1 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 61 | **85** | 93 | 0.50 | 46 | 56% | 31.4 |
| 2 | GARCH(1,1)-lite | 54 | **80** | 89 | 0.53 | 49 | 47% | 32.0 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 57 | **77** | 86 | 0.50 | 44 | — | 32.2 |
| 4 | GBM (normal) | 52 | **75** | 83 | 0.52 | 49 | 43% | 33.7 |
| 5 | Block bootstrap | 53 | **76** | 85 | 0.50 | 43 | 44% | 34.9 |
| 6 | GBM + Student-t | 51 | **75** | 82 | 0.52 | 49 | 43% | 35.7 |
| 7 | Bootstrap (IID) | 60 | **84** | 93 | 0.50 | 43 | 54% | 36.1 |
| 8 | EWMA vol, zero drift (t) | 56 | **77** | 84 | 0.47 | 51 | 44% | 39.2 |
| 9 | Momentum | 41 | **67** | 78 | 0.50 | 47 | 45% | 40.8 |
| 10 | Mean-reversion (OU) | 30 | **48** | 57 | 0.40 | 60 | 23% | 115.2 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.5 / 46% / 3.1 | 82% / 0.53 / 38% / 14.4 | 71% / 0.5 / 22% / 23.5 |
| ETH | 81% / 0.48 / 51% / 16.6 | 75% / 0.5 / 42% / 16.7 | 70% / 0.48 / 21% / 26.8 |
| SOL | 78% / 0.5 / 61% / 13.7 | 80% / 0.53 / 48% / 15.3 | 84% / 0.51 / 51% / 18 |
| BNB | 81% / 0.56 / 53% / 18.3 | 85% / 0.59 / 45% / 28.5 | 89% / 0.57 / 40% / 32.4 |
| XRP | 81% / 0.46 / 65% / 13.9 | 86% / 0.46 / 65% / 21.3 | 79% / 0.44 / 67% / 37.3 |
| SUI | 76% / 0.48 / 57% / 19.8 | 82% / 0.52 / 52% / 11.2 | 86% / 0.49 / 51% / 22.7 |
| AVAX | 88% / 0.46 / 55% / 28 | 87% / 0.47 / 54% / 33.6 | 78% / 0.43 / 62% / 51.9 |
| LINK | 76% / 0.51 / 46% / 11.2 | 76% / 0.54 / 28% / 18.9 | 75% / 0.53 / 17% / 18.9 |
| INJ | 74% / 0.54 / 50% / 19 | 73% / 0.58 / 42% / 27.7 | 65% / 0.61 / 32% / 55.5 |
| OP | 78% / 0.51 / 57% / 8 | 83% / 0.56 / 52% / 19.6 | 81% / 0.56 / 63% / 34.8 |
| ARB | 61% / 0.49 / 54% / 48.3 | 63% / 0.51 / 52% / 43.6 | 67% / 0.5 / 44% / 36.4 |
| DOGE | 80% / 0.47 / 58% / 14.1 | 79% / 0.46 / 49% / 22.8 | 70% / 0.43 / 52% / 35.6 |
| TIA | 77% / 0.49 / 41% / 13.5 | 85% / 0.51 / 30% / 10.9 | 92% / 0.52 / 14% / 30.5 |
| APT | 73% / 0.48 / 59% / 20 | 90% / 0.48 / 68% / 25.5 | 78% / 0.46 / 73% / 26.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
