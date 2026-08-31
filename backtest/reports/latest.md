# CoinPulse Strategy Tournament — 2026-08-31

_Generated 2026-08-31T16:55:40.308Z · 14 coins · 300 samples/window · 13.4s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`live_engine` · 14d→`bootstrap_iid` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 24.6 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 25.0 |
| 3 | Bootstrap (IID) | 25.6 |
| 4 | GARCH(1,1)-lite | 27.4 |
| 5 | GBM (normal) | 27.9 |
| 6 | EWMA vol, zero drift (t) | 28.7 |
| 7 | GBM + Student-t | 28.8 |
| 8 | Block bootstrap | 29.8 |
| 9 | Momentum | 38.7 |
| 10 | Mean-reversion (OU) | 67.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 87 | 0.51 | 47 | — | 17.0 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **80** | 87 | 0.51 | 52 | 21% | 17.2 |
| 3 | Block bootstrap | 52 | **78** | 86 | 0.50 | 44 | 21% | 18.0 |
| 4 | GBM (normal) | 53 | **80** | 86 | 0.52 | 45 | 21% | 18.6 |
| 5 | EWMA vol, zero drift (t) | 51 | **79** | 86 | 0.51 | 51 | 20% | 18.7 |
| 6 | GARCH(1,1)-lite | 52 | **77** | 85 | 0.52 | 46 | 20% | 19.6 |
| 7 | GBM + Student-t | 51 | **77** | 86 | 0.52 | 47 | 20% | 19.8 |
| 8 | Bootstrap (IID) | 56 | **82** | 88 | 0.51 | 47 | 22% | 20.9 |
| 9 | Momentum | 44 | **74** | 83 | 0.52 | 45 | 21% | 26.5 |
| 10 | Mean-reversion (OU) | 47 | **71** | 79 | 0.49 | 57 | 18% | 35.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 54 | **81** | 87 | 0.52 | 46 | 32% | 22.0 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **78** | 86 | 0.53 | 42 | — | 24.5 |
| 3 | Ensemble (GBM-t + bootstraps) | 51 | **75** | 85 | 0.52 | 45 | 30% | 25.0 |
| 4 | GARCH(1,1)-lite | 49 | **75** | 85 | 0.53 | 44 | 28% | 26.5 |
| 5 | GBM (normal) | 51 | **76** | 83 | 0.54 | 43 | 29% | 26.5 |
| 6 | GBM + Student-t | 49 | **75** | 84 | 0.53 | 47 | 28% | 27.1 |
| 7 | EWMA vol, zero drift (t) | 50 | **76** | 85 | 0.52 | 56 | 28% | 27.5 |
| 8 | Block bootstrap | 49 | **73** | 83 | 0.51 | 43 | 29% | 29.1 |
| 9 | Momentum | 44 | **70** | 81 | 0.54 | 47 | 29% | 36.0 |
| 10 | Mean-reversion (OU) | 40 | **62** | 70 | 0.49 | 56 | 22% | 64.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 59 | **78** | 87 | 0.49 | 44 | 53% | 31.6 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 58 | **76** | 85 | 0.49 | 37 | — | 33.4 |
| 3 | Bootstrap (IID) | 54 | **76** | 83 | 0.49 | 43 | 48% | 33.8 |
| 4 | GARCH(1,1)-lite | 51 | **73** | 81 | 0.51 | 43 | 43% | 36.2 |
| 5 | GBM (normal) | 51 | **72** | 81 | 0.51 | 42 | 43% | 38.8 |
| 6 | GBM + Student-t | 50 | **72** | 80 | 0.51 | 42 | 43% | 39.4 |
| 7 | EWMA vol, zero drift (t) | 52 | **73** | 82 | 0.49 | 51 | 43% | 39.9 |
| 8 | Block bootstrap | 51 | **71** | 78 | 0.48 | 41 | 43% | 42.4 |
| 9 | Momentum | 36 | **62** | 75 | 0.52 | 48 | 44% | 53.6 |
| 10 | Mean-reversion (OU) | 32 | **52** | 58 | 0.43 | 60 | 24% | 101.6 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.52 / 52% / 13.4 | 74% / 0.52 / 40% / 17.1 | 67% / 0.49 / 40% / 34.8 |
| ETH | 82% / 0.51 / 52% / 11.3 | 68% / 0.51 / 43% / 23.8 | 65% / 0.49 / 30% / 26.6 |
| SOL | 76% / 0.54 / 36% / 28.3 | 72% / 0.54 / 36% / 25.5 | 79% / 0.51 / 38% / 15 |
| BNB | 88% / 0.55 / 56% / 26.8 | 77% / 0.56 / 32% / 25.5 | 81% / 0.53 / 25% / 18.5 |
| XRP | 82% / 0.47 / 60% / 13.7 | 77% / 0.47 / 55% / 25.8 | 73% / 0.44 / 51% / 46.3 |
| SUI | 82% / 0.5 / 50% / 12.5 | 77% / 0.51 / 47% / 11.8 | 86% / 0.48 / 43% / 26.6 |
| AVAX | 84% / 0.48 / 60% / 8 | 77% / 0.48 / 45% / 21.5 | 79% / 0.44 / 54% / 42.1 |
| LINK | 78% / 0.54 / 44% / 15.1 | 70% / 0.55 / 38% / 31.9 | 73% / 0.54 / 38% / 21.8 |
| INJ | 84% / 0.59 / 54% / 29.2 | 70% / 0.6 / 51% / 44.6 | 70% / 0.58 / 43% / 38.2 |
| OP | 78% / 0.51 / 50% / 9.9 | 83% / 0.55 / 51% / 23.3 | 94% / 0.53 / 62% / 56.1 |
| ARB | 68% / 0.5 / 54% / 38.2 | 62% / 0.49 / 53% / 42.7 | 76% / 0.47 / 38% / 11.7 |
| DOGE | 80% / 0.48 / 56% / 16.2 | 77% / 0.47 / 40% / 16 | 73% / 0.44 / 49% / 29 |
| TIA | 78% / 0.51 / 46% / 9.9 | 81% / 0.54 / 40% / 11.4 | 92% / 0.51 / 37% / 36.6 |
| APT | 80% / 0.48 / 54% / 8.7 | 89% / 0.47 / 62% / 29.1 | 79% / 0.42 / 62% / 39.4 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
