# CoinPulse Strategy Tournament — 2026-06-17

_Generated 2026-06-17T17:20:28.331Z · 14 coins · 300 samples/window · 41.0s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 23.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 27.5 |
| 3 | GARCH(1,1)-lite | 28.2 |
| 4 | GBM (normal) | 28.3 |
| 5 | Bootstrap (IID) | 29.4 |
| 6 | GBM + Student-t | 29.6 |
| 7 | Block bootstrap | 30.5 |
| 8 | Momentum | 36.7 |
| 9 | EWMA vol, zero drift (t) | 36.9 |
| 10 | Mean-reversion (OU) | 50.1 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 88 | 0.49 | 55 | — | 18.2 |
| 2 | GBM (normal) | 55 | **77** | 87 | 0.47 | 56 | 25% | 22.7 |
| 3 | GARCH(1,1)-lite | 53 | **77** | 89 | 0.47 | 55 | 24% | 23.0 |
| 4 | Ensemble (GBM-t + bootstraps) | 54 | **78** | 89 | 0.47 | 55 | 25% | 23.1 |
| 5 | GBM + Student-t | 54 | **77** | 86 | 0.48 | 57 | 24% | 23.5 |
| 6 | Momentum | 47 | **75** | 85 | 0.47 | 48 | 25% | 23.8 |
| 7 | Bootstrap (IID) | 57 | **81** | 90 | 0.46 | 56 | 27% | 26.4 |
| 8 | Block bootstrap | 53 | **77** | 86 | 0.46 | 56 | 24% | 27.3 |
| 9 | EWMA vol, zero drift (t) | 53 | **77** | 87 | 0.44 | 57 | 24% | 29.3 |
| 10 | Mean-reversion (OU) | 55 | **75** | 83 | 0.43 | 50 | 25% | 38.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 51 | **78** | 87 | 0.49 | 59 | — | 19.3 |
| 2 | GARCH(1,1)-lite | 47 | **75** | 84 | 0.48 | 61 | 34% | 29.0 |
| 3 | Ensemble (GBM-t + bootstraps) | 49 | **75** | 83 | 0.46 | 56 | 35% | 29.8 |
| 4 | GBM (normal) | 48 | **73** | 82 | 0.47 | 61 | 35% | 29.8 |
| 5 | Bootstrap (IID) | 53 | **78** | 85 | 0.45 | 59 | 38% | 31.0 |
| 6 | GBM + Student-t | 46 | **72** | 83 | 0.47 | 61 | 34% | 32.5 |
| 7 | Block bootstrap | 47 | **75** | 83 | 0.45 | 54 | 33% | 32.5 |
| 8 | Momentum | 45 | **70** | 83 | 0.45 | 54 | 35% | 35.5 |
| 9 | EWMA vol, zero drift (t) | 50 | **74** | 82 | 0.42 | 56 | 35% | 39.1 |
| 10 | Mean-reversion (OU) | 48 | **72** | 77 | 0.42 | 51 | 32% | 47.2 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 59 | **79** | 89 | 0.51 | 55 | 60% | 29.6 |
| 2 | Bootstrap (IID) | 55 | **76** | 84 | 0.50 | 54 | 54% | 30.7 |
| 3 | Block bootstrap | 49 | **73** | 81 | 0.51 | 53 | 47% | 31.5 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 57 | **82** | 90 | 0.55 | 57 | — | 32.1 |
| 5 | GBM (normal) | 48 | **72** | 80 | 0.53 | 56 | 50% | 32.4 |
| 6 | GARCH(1,1)-lite | 47 | **73** | 82 | 0.54 | 56 | 49% | 32.6 |
| 7 | GBM + Student-t | 48 | **72** | 80 | 0.53 | 56 | 49% | 32.9 |
| 8 | EWMA vol, zero drift (t) | 57 | **73** | 80 | 0.45 | 60 | 52% | 42.4 |
| 9 | Momentum | 38 | **64** | 76 | 0.50 | 47 | 51% | 50.8 |
| 10 | Mean-reversion (OU) | 47 | **63** | 69 | 0.43 | 49 | 43% | 65.0 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.48 / 50% / 10 | 77% / 0.46 / 52% / 20.5 | 73% / 0.51 / 43% / 19.5 |
| ETH | 78% / 0.47 / 57% / 21.6 | 79% / 0.44 / 62% / 23.3 | 79% / 0.49 / 48% / 14 |
| SOL | 77% / 0.47 / 55% / 25.2 | 77% / 0.46 / 55% / 22.8 | 81% / 0.5 / 68% / 19.3 |
| BNB | 84% / 0.5 / 50% / 14.4 | 80% / 0.5 / 54% / 5.9 | 83% / 0.53 / 52% / 30.4 |
| XRP | 85% / 0.48 / 59% / 24.1 | 85% / 0.47 / 65% / 24.1 | 94% / 0.51 / 70% / 39.5 |
| SUI | 80% / 0.48 / 54% / 6.4 | 77% / 0.49 / 56% / 8 | 89% / 0.54 / 56% / 30 |
| AVAX | 81% / 0.47 / 54% / 18 | 83% / 0.46 / 59% / 20.3 | 87% / 0.51 / 63% / 28.9 |
| LINK | 80% / 0.48 / 51% / 12.5 | 83% / 0.48 / 58% / 9 | 90% / 0.54 / 49% / 33.2 |
| INJ | 80% / 0.59 / 47% / 27.8 | 70% / 0.62 / 44% / 44.8 | 68% / 0.71 / 40% / 70.5 |
| OP | 76% / 0.48 / 59% / 19.5 | 72% / 0.47 / 68% / 20.2 | 78% / 0.53 / 67% / 16.7 |
| ARB | 69% / 0.47 / 62% / 31 | 72% / 0.46 / 69% / 25.7 | 63% / 0.54 / 68% / 36.7 |
| DOGE | 86% / 0.51 / 51% / 23.6 | 77% / 0.49 / 59% / 10.1 | 92% / 0.56 / 52% / 42.8 |
| TIA | 78% / 0.52 / 61% / 8.6 | 82% / 0.55 / 56% / 18.9 | 87% / 0.64 / 49% / 47.4 |
| APT | 78% / 0.48 / 54% / 12.4 | 80% / 0.48 / 66% / 16.7 | 79% / 0.54 / 71% / 20.3 |

Coins: BTC (binance), ETH (binance), SOL (binance), BNB (binance), XRP (binance), SUI (binance), AVAX (binance), LINK (binance), INJ (binance), OP (binance), ARB (binance), DOGE (binance), TIA (binance), APT (binance)
