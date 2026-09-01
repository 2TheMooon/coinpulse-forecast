# CoinPulse Strategy Tournament — 2026-09-01

_Generated 2026-09-01T14:02:41.899Z · 14 coins · 300 samples/window · 13.0s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`ensemble` · 14d→`live_engine` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 24.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 24.4 |
| 3 | Bootstrap (IID) | 24.9 |
| 4 | GARCH(1,1)-lite | 29.2 |
| 5 | EWMA vol, zero drift (t) | 29.3 |
| 6 | Block bootstrap | 29.5 |
| 7 | GBM (normal) | 29.7 |
| 8 | GBM + Student-t | 30.1 |
| 9 | Momentum | 38.7 |
| 10 | Mean-reversion (OU) | 71.5 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 51 | **81** | 90 | 0.53 | 50 | 21% | 17.8 |
| 2 | Block bootstrap | 50 | **79** | 87 | 0.52 | 45 | 21% | 18.4 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 52 | **79** | 86 | 0.53 | 44 | — | 19.6 |
| 4 | Bootstrap (IID) | 54 | **82** | 89 | 0.53 | 45 | 22% | 20.1 |
| 5 | EWMA vol, zero drift (t) | 51 | **78** | 87 | 0.53 | 47 | 20% | 21.4 |
| 6 | GARCH(1,1)-lite | 50 | **78** | 87 | 0.54 | 45 | 20% | 22.1 |
| 7 | GBM (normal) | 53 | **79** | 87 | 0.54 | 44 | 21% | 22.3 |
| 8 | GBM + Student-t | 49 | **76** | 87 | 0.54 | 46 | 20% | 22.9 |
| 9 | Momentum | 47 | **73** | 85 | 0.53 | 45 | 21% | 23.3 |
| 10 | Mean-reversion (OU) | 49 | **71** | 78 | 0.51 | 54 | 18% | 36.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 52 | **76** | 85 | 0.54 | 44 | — | 23.0 |
| 2 | Bootstrap (IID) | 53 | **79** | 88 | 0.53 | 46 | 31% | 23.4 |
| 3 | Ensemble (GBM-t + bootstraps) | 50 | **77** | 86 | 0.53 | 46 | 30% | 24.7 |
| 4 | EWMA vol, zero drift (t) | 50 | **77** | 86 | 0.52 | 56 | 28% | 26.2 |
| 5 | GBM + Student-t | 48 | **75** | 84 | 0.55 | 47 | 28% | 27.5 |
| 6 | GBM (normal) | 51 | **75** | 83 | 0.55 | 43 | 29% | 28.7 |
| 7 | Block bootstrap | 50 | **75** | 84 | 0.52 | 45 | 29% | 29.2 |
| 8 | GARCH(1,1)-lite | 48 | **75** | 84 | 0.55 | 45 | 28% | 29.8 |
| 9 | Momentum | 42 | **72** | 82 | 0.55 | 48 | 29% | 35.0 |
| 10 | Mean-reversion (OU) | 35 | **60** | 68 | 0.49 | 55 | 21% | 70.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 55 | **77** | 86 | 0.50 | 46 | 53% | 29.8 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **77** | 84 | 0.51 | 41 | — | 30.6 |
| 3 | Bootstrap (IID) | 51 | **74** | 81 | 0.50 | 44 | 46% | 31.1 |
| 4 | GARCH(1,1)-lite | 48 | **72** | 80 | 0.52 | 47 | 42% | 35.7 |
| 5 | GBM (normal) | 49 | **71** | 79 | 0.52 | 46 | 43% | 38.2 |
| 6 | GBM + Student-t | 48 | **70** | 78 | 0.52 | 46 | 42% | 40.0 |
| 7 | EWMA vol, zero drift (t) | 50 | **73** | 80 | 0.49 | 54 | 43% | 40.4 |
| 8 | Block bootstrap | 48 | **70** | 77 | 0.49 | 42 | 43% | 41.0 |
| 9 | Momentum | 35 | **61** | 73 | 0.53 | 47 | 43% | 57.8 |
| 10 | Mean-reversion (OU) | 31 | **48** | 56 | 0.43 | 61 | 24% | 107.2 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.53 / 42% / 15.7 | 74% / 0.53 / 47% / 21 | 65% / 0.5 / 35% / 30.4 |
| ETH | 84% / 0.53 / 48% / 12.3 | 77% / 0.53 / 40% / 19.4 | 70% / 0.5 / 25% / 20.5 |
| SOL | 80% / 0.55 / 44% / 18.9 | 77% / 0.55 / 36% / 22 | 83% / 0.54 / 44% / 16.5 |
| BNB | 86% / 0.57 / 42% / 25.3 | 79% / 0.57 / 40% / 18.6 | 86% / 0.54 / 25% / 19.7 |
| XRP | 80% / 0.5 / 56% / 4.8 | 79% / 0.49 / 57% / 15 | 75% / 0.47 / 67% / 28.1 |
| SUI | 82% / 0.52 / 50% / 9.3 | 79% / 0.53 / 51% / 11 | 84% / 0.5 / 52% / 21.9 |
| AVAX | 86% / 0.5 / 54% / 20.5 | 81% / 0.5 / 49% / 22.1 | 78% / 0.46 / 60% / 38.4 |
| LINK | 80% / 0.55 / 42% / 16.7 | 74% / 0.57 / 32% / 35.2 | 76% / 0.56 / 30% / 28.1 |
| INJ | 78% / 0.59 / 56% / 23.3 | 68% / 0.58 / 40% / 45.3 | 67% / 0.58 / 38% / 41.8 |
| OP | 82% / 0.54 / 50% / 15.7 | 85% / 0.55 / 51% / 25.2 | 92% / 0.54 / 60% / 49.5 |
| ARB | 62% / 0.51 / 52% / 34.5 | 64% / 0.5 / 49% / 35.6 | 79% / 0.47 / 38% / 17.1 |
| DOGE | 80% / 0.52 / 46% / 11.2 | 68% / 0.51 / 55% / 24.7 | 65% / 0.47 / 57% / 37.1 |
| TIA | 88% / 0.54 / 54% / 20.4 | 81% / 0.56 / 32% / 19.9 | 87% / 0.52 / 33% / 30 |
| APT | 82% / 0.49 / 60% / 20 | 87% / 0.48 / 64% / 30.6 | 78% / 0.42 / 70% / 38.4 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
