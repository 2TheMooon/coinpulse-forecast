# CoinPulse Strategy Tournament — 2026-11-22

_Generated 2026-11-22T16:59:12.938Z · 14 coins · 300 samples/window · 8.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`gbm_t` · 14d→`block_boot` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 31.3 |
| 2 | EWMA vol, zero drift (t) | 32.3 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 33.9 |
| 4 | Momentum | 33.9 |
| 5 | Block bootstrap | 35.3 |
| 6 | Bootstrap (IID) | 38.6 |
| 7 | GBM + Student-t | 40.7 |
| 8 | GARCH(1,1)-lite | 40.9 |
| 9 | GBM (normal) | 41.1 |
| 10 | Mean-reversion (OU) | 59.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 55 | **79** | 87 | 0.50 | 55 | 24% | 16.1 |
| 2 | Ensemble (GBM-t + bootstraps) | 51 | **79** | 87 | 0.48 | 55 | 24% | 16.3 |
| 3 | GARCH(1,1)-lite | 54 | **79** | 87 | 0.48 | 57 | 23% | 16.3 |
| 4 | Block bootstrap | 51 | **79** | 87 | 0.48 | 58 | 24% | 17.2 |
| 5 | Momentum | 53 | **80** | 88 | 0.46 | 57 | 25% | 18.0 |
| 6 | GBM (normal) | 57 | **81** | 88 | 0.49 | 56 | 25% | 18.5 |
| 7 | Bootstrap (IID) | 52 | **79** | 86 | 0.48 | 55 | 23% | 18.9 |
| 8 | EWMA vol, zero drift (t) | 56 | **80** | 87 | 0.47 | 52 | 24% | 19.8 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 63 | **85** | 91 | 0.52 | 45 | — | 24.9 |
| 10 | Mean-reversion (OU) | 51 | **75** | 83 | 0.49 | 56 | 21% | 26.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 50 | **75** | 84 | 0.53 | 54 | 35% | 25.7 |
| 2 | Momentum | 49 | **75** | 84 | 0.50 | 52 | 36% | 26.1 |
| 3 | EWMA vol, zero drift (t) | 51 | **78** | 86 | 0.53 | 48 | 34% | 26.2 |
| 4 | Ensemble (GBM-t + bootstraps) | 48 | **77** | 85 | 0.54 | 45 | 34% | 26.7 |
| 5 | Bootstrap (IID) | 47 | **75** | 84 | 0.53 | 44 | 33% | 28.7 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 60 | **84** | 89 | 0.54 | 43 | — | 29.8 |
| 7 | GARCH(1,1)-lite | 46 | **74** | 85 | 0.55 | 50 | 32% | 31.9 |
| 8 | GBM (normal) | 50 | **76** | 84 | 0.56 | 48 | 35% | 34.1 |
| 9 | GBM + Student-t | 47 | **74** | 84 | 0.55 | 47 | 33% | 34.8 |
| 10 | Mean-reversion (OU) | 44 | **68** | 76 | 0.56 | 56 | 26% | 45.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 50 | **78** | 86 | 0.60 | 34 | — | 47.0 |
| 2 | Ensemble (GBM-t + bootstraps) | 42 | **72** | 82 | 0.60 | 39 | 59% | 50.9 |
| 3 | EWMA vol, zero drift (t) | 43 | **69** | 77 | 0.59 | 48 | 49% | 51.0 |
| 4 | Momentum | 33 | **63** | 75 | 0.54 | 50 | 55% | 57.6 |
| 5 | Block bootstrap | 37 | **65** | 75 | 0.59 | 38 | 52% | 63.0 |
| 6 | Bootstrap (IID) | 35 | **64** | 75 | 0.59 | 36 | 48% | 68.2 |
| 7 | GBM (normal) | 37 | **64** | 75 | 0.63 | 38 | 49% | 70.6 |
| 8 | GBM + Student-t | 37 | **65** | 74 | 0.63 | 39 | 48% | 71.2 |
| 9 | GARCH(1,1)-lite | 34 | **64** | 74 | 0.62 | 40 | 46% | 74.4 |
| 10 | Mean-reversion (OU) | 28 | **49** | 61 | 0.63 | 50 | 31% | 107.9 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.5 / 56% / 16.2 | 72% / 0.57 / 43% / 28.9 | 70% / 0.65 / 27% / 68.3 |
| ETH | 82% / 0.5 / 48% / 16.7 | 72% / 0.55 / 36% / 45.2 | 57% / 0.61 / 21% / 81.1 |
| SOL | 76% / 0.47 / 54% / 17.8 | 64% / 0.51 / 28% / 38.6 | 62% / 0.57 / 33% / 59.1 |
| BNB | 82% / 0.49 / 36% / 8 | 79% / 0.55 / 30% / 26.4 | 71% / 0.59 / 27% / 38.1 |
| XRP | 80% / 0.45 / 64% / 14.5 | 79% / 0.49 / 62% / 10.8 | 68% / 0.57 / 46% / 44.6 |
| SUI | 84% / 0.5 / 58% / 6.4 | 83% / 0.53 / 45% / 11.1 | 79% / 0.61 / 40% / 39.6 |
| AVAX | 86% / 0.51 / 54% / 16.9 | 79% / 0.56 / 38% / 20.7 | 65% / 0.64 / 44% / 71.9 |
| LINK | 68% / 0.5 / 52% / 18.3 | 70% / 0.56 / 34% / 49.6 | 65% / 0.64 / 24% / 78 |
| INJ | 86% / 0.48 / 46% / 22.7 | 89% / 0.54 / 45% / 38.3 | 92% / 0.56 / 65% / 45.1 |
| OP | 82% / 0.47 / 60% / 13.2 | 81% / 0.53 / 51% / 19.1 | 83% / 0.59 / 48% / 25.6 |
| ARB | 70% / 0.52 / 52% / 25 | 68% / 0.6 / 47% / 46.8 | 71% / 0.64 / 25% / 59.3 |
| DOGE | 76% / 0.45 / 76% / 16.4 | 77% / 0.51 / 68% / 13.4 | 70% / 0.58 / 56% / 40.3 |
| TIA | 74% / 0.47 / 44% / 15 | 77% / 0.51 / 40% / 10.7 | 84% / 0.56 / 29% / 23.6 |
| APT | 76% / 0.48 / 66% / 20.5 | 83% / 0.54 / 64% / 14.6 | 71% / 0.6 / 56% / 38.3 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
