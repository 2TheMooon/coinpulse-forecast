# CoinPulse Strategy Tournament — 2026-08-26

_Generated 2026-08-26T09:48:46.238Z · 14 coins · 300 samples/window · 12.9s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`block_boot` · 14d→`live_engine` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 22.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 23.3 |
| 3 | Bootstrap (IID) | 24.4 |
| 4 | GARCH(1,1)-lite | 25.7 |
| 5 | GBM (normal) | 26.3 |
| 6 | GBM + Student-t | 26.8 |
| 7 | Block bootstrap | 26.9 |
| 8 | EWMA vol, zero drift (t) | 27.3 |
| 9 | Momentum | 35.6 |
| 10 | Mean-reversion (OU) | 69.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 51 | **81** | 89 | 0.52 | 49 | 21% | 16.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 51 | **80** | 89 | 0.52 | 48 | 21% | 16.8 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 53 | **79** | 86 | 0.53 | 42 | — | 18.7 |
| 4 | Bootstrap (IID) | 55 | **82** | 90 | 0.52 | 46 | 23% | 18.7 |
| 5 | GBM (normal) | 52 | **80** | 88 | 0.53 | 45 | 20% | 19.2 |
| 6 | GBM + Student-t | 49 | **78** | 87 | 0.54 | 45 | 20% | 20.3 |
| 7 | EWMA vol, zero drift (t) | 50 | **78** | 87 | 0.53 | 46 | 20% | 20.4 |
| 8 | GARCH(1,1)-lite | 49 | **77** | 87 | 0.53 | 46 | 20% | 20.5 |
| 9 | Momentum | 47 | **74** | 85 | 0.54 | 46 | 20% | 24.2 |
| 10 | Mean-reversion (OU) | 47 | **71** | 79 | 0.49 | 56 | 18% | 37.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 88 | 0.52 | 44 | — | 20.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 52 | **80** | 87 | 0.51 | 46 | 30% | 20.5 |
| 3 | GBM + Student-t | 50 | **77** | 86 | 0.53 | 51 | 28% | 23.0 |
| 4 | GBM (normal) | 52 | **78** | 86 | 0.53 | 44 | 29% | 23.3 |
| 5 | Block bootstrap | 51 | **76** | 86 | 0.50 | 44 | 29% | 23.6 |
| 6 | EWMA vol, zero drift (t) | 50 | **79** | 87 | 0.51 | 61 | 28% | 23.6 |
| 7 | GARCH(1,1)-lite | 50 | **77** | 87 | 0.53 | 48 | 28% | 24.1 |
| 8 | Bootstrap (IID) | 57 | **81** | 88 | 0.51 | 48 | 32% | 24.4 |
| 9 | Momentum | 45 | **72** | 83 | 0.53 | 47 | 29% | 28.3 |
| 10 | Mean-reversion (OU) | 36 | **62** | 71 | 0.47 | 54 | 21% | 66.2 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 58 | **78** | 86 | 0.49 | 42 | 52% | 29.1 |
| 2 | Bootstrap (IID) | 53 | **75** | 83 | 0.49 | 40 | 47% | 30.0 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 58 | **78** | 85 | 0.49 | 38 | — | 30.7 |
| 4 | GARCH(1,1)-lite | 48 | **73** | 81 | 0.51 | 43 | 42% | 32.6 |
| 5 | GBM (normal) | 50 | **72** | 80 | 0.51 | 44 | 43% | 36.5 |
| 6 | GBM + Student-t | 49 | **71** | 79 | 0.51 | 44 | 42% | 36.9 |
| 7 | EWMA vol, zero drift (t) | 51 | **74** | 81 | 0.48 | 53 | 43% | 38.0 |
| 8 | Block bootstrap | 48 | **70** | 78 | 0.48 | 39 | 42% | 40.5 |
| 9 | Momentum | 35 | **62** | 76 | 0.52 | 47 | 43% | 54.5 |
| 10 | Mean-reversion (OU) | 31 | **50** | 58 | 0.43 | 59 | 24% | 104.3 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 80% / 0.53 / 48% / 15.2 | 85% / 0.52 / 38% / 16.5 | 68% / 0.49 / 24% / 24.6 |
| ETH | 78% / 0.53 / 48% / 14.5 | 81% / 0.52 / 47% / 8.1 | 73% / 0.49 / 24% / 13.6 |
| SOL | 80% / 0.52 / 42% / 14.7 | 85% / 0.52 / 40% / 19.8 | 86% / 0.51 / 43% / 17.2 |
| BNB | 86% / 0.55 / 44% / 28.3 | 81% / 0.54 / 36% / 12.3 | 86% / 0.53 / 29% / 25.5 |
| XRP | 82% / 0.49 / 48% / 5.7 | 81% / 0.46 / 51% / 13.6 | 78% / 0.44 / 59% / 36 |
| SUI | 84% / 0.51 / 48% / 10 | 81% / 0.5 / 47% / 9.9 | 83% / 0.48 / 51% / 26.9 |
| AVAX | 86% / 0.49 / 48% / 18.6 | 85% / 0.47 / 53% / 28.2 | 78% / 0.43 / 51% / 47.6 |
| LINK | 80% / 0.55 / 52% / 13.6 | 79% / 0.54 / 36% / 17.1 | 79% / 0.53 / 32% / 12 |
| INJ | 74% / 0.58 / 56% / 28.7 | 70% / 0.57 / 45% / 40.4 | 65% / 0.6 / 33% / 50.2 |
| OP | 80% / 0.55 / 46% / 12.1 | 83% / 0.54 / 51% / 25.8 | 84% / 0.53 / 60% / 32.7 |
| ARB | 62% / 0.51 / 46% / 35 | 64% / 0.5 / 49% / 34.9 | 73% / 0.47 / 30% / 23.8 |
| DOGE | 80% / 0.51 / 50% / 11.3 | 74% / 0.47 / 43% / 22.1 | 71% / 0.43 / 44% / 27.7 |
| TIA | 82% / 0.53 / 38% / 11.5 | 79% / 0.53 / 40% / 10.5 | 90% / 0.52 / 30% / 28.6 |
| APT | 82% / 0.49 / 54% / 16.2 | 89% / 0.47 / 66% / 28.1 | 76% / 0.44 / 71% / 40.3 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
