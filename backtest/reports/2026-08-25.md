# CoinPulse Strategy Tournament — 2026-08-25

_Generated 2026-08-25T09:40:16.805Z · 14 coins · 300 samples/window · 13.0s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`ensemble` · 14d→`ensemble` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 22.6 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 23.6 |
| 3 | GARCH(1,1)-lite | 24.7 |
| 4 | Bootstrap (IID) | 24.9 |
| 5 | GBM (normal) | 26.0 |
| 6 | GBM + Student-t | 26.0 |
| 7 | Block bootstrap | 27.1 |
| 8 | EWMA vol, zero drift (t) | 27.3 |
| 9 | Momentum | 34.6 |
| 10 | Mean-reversion (OU) | 67.5 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 52 | **80** | 87 | 0.52 | 44 | 21% | 16.2 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 88 | 0.51 | 48 | — | 16.2 |
| 3 | Block bootstrap | 53 | **79** | 86 | 0.51 | 46 | 21% | 17.4 |
| 4 | GBM (normal) | 52 | **79** | 86 | 0.52 | 45 | 20% | 18.9 |
| 5 | GARCH(1,1)-lite | 51 | **77** | 85 | 0.52 | 45 | 19% | 19.0 |
| 6 | GBM + Student-t | 51 | **78** | 86 | 0.53 | 47 | 20% | 19.0 |
| 7 | EWMA vol, zero drift (t) | 51 | **79** | 85 | 0.52 | 52 | 20% | 20.0 |
| 8 | Bootstrap (IID) | 56 | **82** | 87 | 0.53 | 51 | 22% | 20.8 |
| 9 | Momentum | 46 | **74** | 82 | 0.53 | 46 | 20% | 26.4 |
| 10 | Mean-reversion (OU) | 45 | **70** | 78 | 0.48 | 57 | 17% | 38.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 53 | **78** | 87 | 0.51 | 47 | 30% | 21.1 |
| 2 | GARCH(1,1)-lite | 50 | **77** | 88 | 0.53 | 47 | 28% | 21.4 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 56 | **80** | 87 | 0.52 | 43 | — | 22.3 |
| 4 | Bootstrap (IID) | 55 | **82** | 89 | 0.51 | 46 | 32% | 22.4 |
| 5 | GBM + Student-t | 52 | **76** | 86 | 0.53 | 50 | 28% | 23.3 |
| 6 | Block bootstrap | 52 | **76** | 86 | 0.50 | 49 | 29% | 23.5 |
| 7 | GBM (normal) | 54 | **77** | 86 | 0.53 | 45 | 29% | 23.7 |
| 8 | EWMA vol, zero drift (t) | 53 | **79** | 87 | 0.51 | 57 | 28% | 24.2 |
| 9 | Momentum | 47 | **71** | 83 | 0.53 | 46 | 29% | 28.0 |
| 10 | Mean-reversion (OU) | 39 | **64** | 71 | 0.48 | 56 | 21% | 61.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 58 | **79** | 88 | 0.49 | 42 | 52% | 30.4 |
| 2 | Bootstrap (IID) | 55 | **76** | 85 | 0.49 | 43 | 47% | 31.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 59 | **78** | 86 | 0.49 | 38 | — | 32.3 |
| 4 | GARCH(1,1)-lite | 50 | **73** | 82 | 0.51 | 43 | 42% | 33.8 |
| 5 | GBM (normal) | 51 | **72** | 81 | 0.51 | 44 | 43% | 35.3 |
| 6 | GBM + Student-t | 50 | **73** | 80 | 0.51 | 42 | 42% | 35.7 |
| 7 | EWMA vol, zero drift (t) | 53 | **75** | 83 | 0.48 | 52 | 43% | 37.8 |
| 8 | Block bootstrap | 51 | **72** | 80 | 0.49 | 41 | 42% | 40.3 |
| 9 | Momentum | 37 | **63** | 77 | 0.52 | 47 | 43% | 49.5 |
| 10 | Mean-reversion (OU) | 31 | **51** | 59 | 0.43 | 60 | 23% | 102.2 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 80% / 0.52 / 40% / 6.4 | 79% / 0.51 / 40% / 6.9 | 71% / 0.49 / 27% / 25.4 |
| ETH | 82% / 0.52 / 40% / 11 | 77% / 0.51 / 32% / 13 | 68% / 0.49 / 25% / 22.6 |
| SOL | 76% / 0.53 / 34% / 27.5 | 79% / 0.52 / 43% / 15.3 | 84% / 0.5 / 35% / 20.2 |
| BNB | 88% / 0.55 / 40% / 26.6 | 81% / 0.54 / 38% / 22.1 | 87% / 0.53 / 33% / 32 |
| XRP | 82% / 0.48 / 54% / 11.3 | 83% / 0.45 / 57% / 22.2 | 75% / 0.43 / 59% / 45.7 |
| SUI | 80% / 0.52 / 48% / 13.5 | 81% / 0.5 / 53% / 11.8 | 83% / 0.49 / 46% / 18.9 |
| AVAX | 84% / 0.49 / 40% / 7.6 | 81% / 0.46 / 43% / 22.4 | 76% / 0.42 / 48% / 47.8 |
| LINK | 76% / 0.54 / 28% / 20.4 | 77% / 0.54 / 45% / 17 | 78% / 0.53 / 25% / 13.4 |
| INJ | 80% / 0.59 / 48% / 18.4 | 72% / 0.6 / 53% / 40.5 | 65% / 0.61 / 33% / 48.1 |
| OP | 80% / 0.54 / 52% / 13.2 | 83% / 0.56 / 51% / 19 | 89% / 0.54 / 62% / 43.9 |
| ARB | 64% / 0.52 / 50% / 34 | 60% / 0.5 / 57% / 44.2 | 75% / 0.48 / 38% / 15.3 |
| DOGE | 82% / 0.49 / 44% / 19.6 | 77% / 0.45 / 53% / 20.7 | 75% / 0.43 / 44% / 26.9 |
| TIA | 78% / 0.51 / 44% / 12.1 | 77% / 0.53 / 30% / 11.4 | 94% / 0.53 / 37% / 33.8 |
| APT | 82% / 0.49 / 52% / 5.5 | 89% / 0.47 / 62% / 28.7 | 79% / 0.44 / 68% / 31.3 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
