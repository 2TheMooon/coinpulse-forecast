# CoinPulse Strategy Tournament — 2026-11-27

_Generated 2026-11-27T18:46:13.162Z · 14 coins · 300 samples/window · 7.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`block_boot` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 32.1 |
| 2 | EWMA vol, zero drift (t) | 32.2 |
| 3 | Momentum | 32.2 |
| 4 | Ensemble (GBM-t + bootstraps) | 32.3 |
| 5 | Block bootstrap | 35.9 |
| 6 | Bootstrap (IID) | 41.3 |
| 7 | GARCH(1,1)-lite | 42.3 |
| 8 | GBM (normal) | 42.4 |
| 9 | GBM + Student-t | 43.2 |
| 10 | Mean-reversion (OU) | 66.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 53 | **80** | 89 | 0.50 | 55 | 25% | 14.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **80** | 88 | 0.51 | 54 | 23% | 14.8 |
| 3 | Block bootstrap | 52 | **79** | 87 | 0.50 | 56 | 23% | 14.9 |
| 4 | GARCH(1,1)-lite | 52 | **79** | 86 | 0.52 | 47 | 23% | 15.6 |
| 5 | Bootstrap (IID) | 52 | **79** | 87 | 0.51 | 51 | 23% | 17.0 |
| 6 | GBM (normal) | 57 | **82** | 87 | 0.52 | 54 | 25% | 19.0 |
| 7 | EWMA vol, zero drift (t) | 57 | **82** | 88 | 0.50 | 52 | 24% | 19.2 |
| 8 | GBM + Student-t | 55 | **81** | 86 | 0.53 | 53 | 24% | 19.4 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 61 | **85** | 90 | 0.51 | 51 | — | 21.4 |
| 10 | Mean-reversion (OU) | 51 | **75** | 82 | 0.52 | 56 | 20% | 28.8 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 49 | **75** | 84 | 0.52 | 53 | 33% | 23.5 |
| 2 | Momentum | 50 | **78** | 85 | 0.49 | 56 | 36% | 23.7 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 57 | **82** | 89 | 0.54 | 45 | — | 25.8 |
| 4 | EWMA vol, zero drift (t) | 53 | **77** | 85 | 0.50 | 51 | 33% | 25.9 |
| 5 | Ensemble (GBM-t + bootstraps) | 49 | **76** | 84 | 0.52 | 51 | 33% | 26.1 |
| 6 | Bootstrap (IID) | 50 | **75** | 83 | 0.52 | 50 | 32% | 27.7 |
| 7 | GBM (normal) | 51 | **76** | 83 | 0.54 | 50 | 34% | 28.5 |
| 8 | GARCH(1,1)-lite | 48 | **75** | 84 | 0.54 | 54 | 32% | 28.9 |
| 9 | GBM + Student-t | 51 | **75** | 83 | 0.54 | 50 | 33% | 29.9 |
| 10 | Mean-reversion (OU) | 42 | **66** | 74 | 0.55 | 58 | 24% | 50.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 47 | **75** | 85 | 0.60 | 34 | — | 49.1 |
| 2 | EWMA vol, zero drift (t) | 42 | **66** | 76 | 0.57 | 51 | 48% | 51.5 |
| 3 | Ensemble (GBM-t + bootstraps) | 40 | **68** | 79 | 0.59 | 39 | 57% | 56.1 |
| 4 | Momentum | 33 | **61** | 74 | 0.52 | 51 | 55% | 58.7 |
| 5 | Block bootstrap | 35 | **62** | 73 | 0.59 | 40 | 50% | 69.3 |
| 6 | Bootstrap (IID) | 31 | **59** | 71 | 0.59 | 39 | 47% | 79.3 |
| 7 | GBM (normal) | 35 | **59** | 72 | 0.62 | 38 | 48% | 79.7 |
| 8 | GBM + Student-t | 33 | **60** | 71 | 0.62 | 40 | 47% | 80.4 |
| 9 | GARCH(1,1)-lite | 32 | **58** | 71 | 0.61 | 42 | 44% | 82.3 |
| 10 | Mean-reversion (OU) | 26 | **44** | 55 | 0.62 | 55 | 28% | 118.7 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.51 / 51% / 24.4 | 76% / 0.54 / 34% / 23.8 | 62% / 0.61 / 11% / 62.5 |
| ETH | 84% / 0.49 / 46% / 24 | 73% / 0.51 / 39% / 18.8 | 62% / 0.56 / 19% / 58.1 |
| SOL | 80% / 0.47 / 51% / 12.7 | 79% / 0.49 / 42% / 9.4 | 65% / 0.55 / 32% / 47.3 |
| BNB | 85% / 0.52 / 45% / 15.8 | 79% / 0.54 / 31% / 14.4 | 65% / 0.59 / 19% / 50.4 |
| XRP | 84% / 0.46 / 55% / 30.4 | 80% / 0.49 / 55% / 17.5 | 70% / 0.55 / 44% / 38.5 |
| SUI | 84% / 0.53 / 59% / 18.7 | 79% / 0.58 / 61% / 27.1 | 79% / 0.67 / 46% / 50.8 |
| AVAX | 86% / 0.53 / 53% / 29.9 | 82% / 0.57 / 39% / 31.3 | 70% / 0.65 / 25% / 59.6 |
| LINK | 85% / 0.53 / 35% / 19.4 | 80% / 0.55 / 30% / 12.7 | 73% / 0.61 / 24% / 50.8 |
| INJ | 85% / 0.48 / 39% / 21.1 | 94% / 0.53 / 45% / 42.3 | 94% / 0.56 / 49% / 54.7 |
| OP | 89% / 0.5 / 62% / 26.8 | 92% / 0.54 / 61% / 42.2 | 90% / 0.6 / 51% / 41.3 |
| ARB | 78% / 0.52 / 43% / 23.5 | 70% / 0.58 / 27% / 41.4 | 73% / 0.64 / 19% / 57 |
| DOGE | 85% / 0.5 / 70% / 22.6 | 86% / 0.53 / 65% / 24.2 | 75% / 0.59 / 60% / 32.5 |
| TIA | 92% / 0.5 / 45% / 22.8 | 93% / 0.53 / 46% / 35.1 | 95% / 0.58 / 25% / 41.4 |
| APT | 81% / 0.51 / 59% / 7.3 | 83% / 0.56 / 58% / 21 | 78% / 0.63 / 56% / 42.8 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
