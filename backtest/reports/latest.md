# CoinPulse Strategy Tournament — 2026-08-30

_Generated 2026-08-30T14:21:02.737Z · 14 coins · 300 samples/window · 13.0s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`live_engine` · 14d→`ensemble` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 23.9 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 25.2 |
| 3 | Bootstrap (IID) | 25.9 |
| 4 | GARCH(1,1)-lite | 27.4 |
| 5 | GBM (normal) | 27.5 |
| 6 | GBM + Student-t | 28.2 |
| 7 | Block bootstrap | 28.8 |
| 8 | EWMA vol, zero drift (t) | 30.1 |
| 9 | Momentum | 37.2 |
| 10 | Mean-reversion (OU) | 69.1 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 86 | 0.52 | 44 | — | 19.5 |
| 2 | Ensemble (GBM-t + bootstraps) | 55 | **79** | 87 | 0.51 | 52 | 21% | 19.7 |
| 3 | Block bootstrap | 55 | **77** | 86 | 0.50 | 52 | 21% | 19.7 |
| 4 | GBM (normal) | 56 | **77** | 86 | 0.52 | 50 | 21% | 20.1 |
| 5 | GBM + Student-t | 52 | **78** | 85 | 0.52 | 51 | 20% | 21.3 |
| 6 | Bootstrap (IID) | 57 | **80** | 87 | 0.52 | 47 | 22% | 21.5 |
| 7 | GARCH(1,1)-lite | 54 | **76** | 85 | 0.51 | 47 | 20% | 22.4 |
| 8 | EWMA vol, zero drift (t) | 53 | **77** | 85 | 0.52 | 49 | 20% | 23.0 |
| 9 | Momentum | 50 | **74** | 83 | 0.52 | 52 | 21% | 24.8 |
| 10 | Mean-reversion (OU) | 46 | **70** | 78 | 0.48 | 51 | 18% | 39.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 54 | **80** | 88 | 0.51 | 46 | 30% | 21.6 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **78** | 86 | 0.52 | 44 | — | 22.1 |
| 3 | Bootstrap (IID) | 57 | **82** | 89 | 0.51 | 45 | 32% | 23.8 |
| 4 | GARCH(1,1)-lite | 51 | **79** | 87 | 0.53 | 45 | 28% | 24.1 |
| 5 | GBM + Student-t | 53 | **78** | 86 | 0.53 | 48 | 28% | 24.2 |
| 6 | Block bootstrap | 54 | **78** | 85 | 0.50 | 44 | 30% | 24.4 |
| 7 | GBM (normal) | 54 | **78** | 86 | 0.53 | 42 | 29% | 24.7 |
| 8 | EWMA vol, zero drift (t) | 55 | **79** | 87 | 0.52 | 56 | 28% | 27.2 |
| 9 | Momentum | 46 | **73** | 85 | 0.54 | 49 | 29% | 28.6 |
| 10 | Mean-reversion (OU) | 38 | **65** | 73 | 0.47 | 53 | 22% | 60.2 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 57 | **78** | 86 | 0.48 | 42 | 54% | 30.3 |
| 2 | Bootstrap (IID) | 53 | **75** | 83 | 0.48 | 43 | 48% | 32.4 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 58 | **76** | 83 | 0.48 | 37 | — | 34.1 |
| 4 | GARCH(1,1)-lite | 49 | **72** | 80 | 0.50 | 40 | 43% | 35.8 |
| 5 | GBM (normal) | 50 | **72** | 79 | 0.50 | 41 | 44% | 37.5 |
| 6 | GBM + Student-t | 50 | **71** | 78 | 0.50 | 39 | 43% | 39.0 |
| 7 | EWMA vol, zero drift (t) | 49 | **73** | 80 | 0.49 | 53 | 43% | 39.9 |
| 8 | Block bootstrap | 50 | **70** | 78 | 0.47 | 42 | 43% | 42.3 |
| 9 | Momentum | 34 | **60** | 74 | 0.53 | 47 | 43% | 58.2 |
| 10 | Mean-reversion (OU) | 30 | **50** | 57 | 0.41 | 60 | 24% | 107.9 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.52 / 50% / 14.5 | 77% / 0.51 / 38% / 11.8 | 68% / 0.47 / 44% / 37.9 |
| ETH | 84% / 0.51 / 52% / 23.8 | 72% / 0.5 / 47% / 20.6 | 70% / 0.48 / 25% / 23.3 |
| SOL | 74% / 0.53 / 42% / 27.6 | 77% / 0.53 / 43% / 21.5 | 81% / 0.5 / 38% / 15.8 |
| BNB | 88% / 0.54 / 56% / 26.3 | 83% / 0.56 / 40% / 27.4 | 81% / 0.52 / 24% / 10.2 |
| XRP | 84% / 0.47 / 60% / 9.4 | 81% / 0.46 / 60% / 16.4 | 73% / 0.43 / 48% / 42.2 |
| SUI | 82% / 0.49 / 46% / 14 | 77% / 0.51 / 51% / 7.1 | 83% / 0.48 / 51% / 28.8 |
| AVAX | 86% / 0.5 / 48% / 26.3 | 81% / 0.48 / 36% / 23.1 | 78% / 0.44 / 46% / 43.3 |
| LINK | 70% / 0.54 / 46% / 27.3 | 79% / 0.54 / 34% / 12.8 | 78% / 0.53 / 43% / 18.2 |
| INJ | 74% / 0.55 / 54% / 21.2 | 77% / 0.58 / 38% / 25.7 | 71% / 0.58 / 43% / 34.1 |
| OP | 80% / 0.51 / 56% / 9.3 | 89% / 0.53 / 47% / 33.3 | 87% / 0.53 / 60% / 39.8 |
| ARB | 72% / 0.5 / 50% / 28.6 | 66% / 0.5 / 51% / 26.9 | 81% / 0.46 / 30% / 21.6 |
| DOGE | 78% / 0.48 / 60% / 13.8 | 81% / 0.46 / 49% / 21 | 68% / 0.43 / 44% / 39.2 |
| TIA | 70% / 0.51 / 50% / 18.2 | 87% / 0.54 / 43% / 21.5 | 89% / 0.51 / 32% / 26.2 |
| APT | 80% / 0.47 / 62% / 15.1 | 89% / 0.45 / 66% / 33.4 | 78% / 0.42 / 60% / 43.3 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
