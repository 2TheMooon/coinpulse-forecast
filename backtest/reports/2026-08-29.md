# CoinPulse Strategy Tournament — 2026-08-29

_Generated 2026-08-29T14:16:57.045Z · 14 coins · 300 samples/window · 12.9s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`block_boot` · 14d→`bootstrap_iid` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 24.3 |
| 2 | Bootstrap (IID) | 25.1 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 25.2 |
| 4 | GARCH(1,1)-lite | 27.8 |
| 5 | GBM (normal) | 28.0 |
| 6 | Block bootstrap | 28.2 |
| 7 | GBM + Student-t | 29.0 |
| 8 | EWMA vol, zero drift (t) | 29.2 |
| 9 | Momentum | 37.9 |
| 10 | Mean-reversion (OU) | 69.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 52 | **80** | 89 | 0.51 | 48 | 21% | 14.9 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 87 | 0.50 | 47 | — | 16.8 |
| 3 | Bootstrap (IID) | 55 | **82** | 90 | 0.52 | 49 | 22% | 17.9 |
| 4 | Ensemble (GBM-t + bootstraps) | 54 | **80** | 89 | 0.52 | 50 | 21% | 18.0 |
| 5 | GBM (normal) | 52 | **79** | 87 | 0.53 | 47 | 21% | 19.5 |
| 6 | GARCH(1,1)-lite | 51 | **78** | 86 | 0.53 | 46 | 20% | 20.1 |
| 7 | EWMA vol, zero drift (t) | 49 | **78** | 86 | 0.53 | 43 | 20% | 21.3 |
| 8 | GBM + Student-t | 49 | **77** | 86 | 0.53 | 46 | 20% | 22.5 |
| 9 | Momentum | 48 | **73** | 85 | 0.54 | 48 | 21% | 24.6 |
| 10 | Mean-reversion (OU) | 48 | **71** | 79 | 0.48 | 54 | 18% | 37.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 56 | **81** | 88 | 0.51 | 48 | 32% | 23.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 52 | **78** | 86 | 0.51 | 47 | 30% | 23.7 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 56 | **79** | 86 | 0.51 | 45 | — | 23.8 |
| 4 | GBM (normal) | 52 | **76** | 85 | 0.53 | 42 | 29% | 24.8 |
| 5 | GBM + Student-t | 50 | **76** | 85 | 0.53 | 50 | 28% | 25.0 |
| 6 | EWMA vol, zero drift (t) | 49 | **77** | 86 | 0.52 | 56 | 28% | 25.1 |
| 7 | GARCH(1,1)-lite | 48 | **76** | 86 | 0.52 | 47 | 28% | 26.0 |
| 8 | Block bootstrap | 51 | **76** | 84 | 0.50 | 48 | 29% | 26.2 |
| 9 | Momentum | 42 | **72** | 83 | 0.55 | 46 | 29% | 33.7 |
| 10 | Mean-reversion (OU) | 36 | **60** | 71 | 0.47 | 53 | 22% | 68.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 59 | **79** | 88 | 0.48 | 40 | 54% | 31.4 |
| 2 | Bootstrap (IID) | 55 | **75** | 84 | 0.47 | 43 | 48% | 34.1 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 59 | **76** | 85 | 0.47 | 40 | — | 35.1 |
| 4 | GARCH(1,1)-lite | 51 | **73** | 81 | 0.50 | 39 | 43% | 37.3 |
| 5 | GBM + Student-t | 51 | **71** | 79 | 0.49 | 40 | 43% | 39.6 |
| 6 | GBM (normal) | 53 | **72** | 79 | 0.49 | 41 | 43% | 39.6 |
| 7 | EWMA vol, zero drift (t) | 52 | **73** | 81 | 0.49 | 50 | 43% | 41.3 |
| 8 | Block bootstrap | 52 | **72** | 79 | 0.46 | 44 | 43% | 43.5 |
| 9 | Momentum | 36 | **62** | 73 | 0.52 | 47 | 43% | 55.6 |
| 10 | Mean-reversion (OU) | 31 | **52** | 58 | 0.42 | 61 | 24% | 103.2 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.52 / 58% / 10.9 | 81% / 0.52 / 43% / 12.7 | 68% / 0.48 / 32% / 34.1 |
| ETH | 76% / 0.53 / 48% / 17.3 | 81% / 0.51 / 49% / 8.9 | 68% / 0.47 / 22% / 22.1 |
| SOL | 82% / 0.53 / 52% / 20 | 81% / 0.52 / 53% / 24.1 | 83% / 0.5 / 32% / 13.9 |
| BNB | 86% / 0.55 / 54% / 17.5 | 83% / 0.54 / 28% / 12.9 | 84% / 0.52 / 29% / 21.7 |
| XRP | 80% / 0.48 / 54% / 13.7 | 81% / 0.46 / 49% / 14.6 | 75% / 0.43 / 49% / 42.7 |
| SUI | 84% / 0.5 / 46% / 8 | 79% / 0.51 / 47% / 15 | 86% / 0.47 / 48% / 35.4 |
| AVAX | 86% / 0.49 / 40% / 24.8 | 83% / 0.47 / 49% / 32 | 79% / 0.42 / 44% / 47.2 |
| LINK | 84% / 0.54 / 56% / 18.4 | 79% / 0.54 / 40% / 19.3 | 75% / 0.52 / 30% / 17.8 |
| INJ | 80% / 0.58 / 60% / 21.4 | 66% / 0.58 / 53% / 55 | 68% / 0.58 / 51% / 38.1 |
| OP | 82% / 0.53 / 44% / 16.7 | 83% / 0.53 / 51% / 18.7 | 94% / 0.53 / 60% / 50.4 |
| ARB | 62% / 0.49 / 48% / 35.3 | 64% / 0.49 / 55% / 43.6 | 76% / 0.46 / 29% / 15.5 |
| DOGE | 78% / 0.5 / 52% / 16.2 | 72% / 0.47 / 49% / 21.5 | 73% / 0.43 / 51% / 29.4 |
| TIA | 82% / 0.52 / 40% / 8 | 77% / 0.54 / 34% / 20.2 | 92% / 0.51 / 32% / 34.2 |
| APT | 80% / 0.47 / 52% / 23.2 | 89% / 0.46 / 55% / 32.8 | 81% / 0.42 / 57% / 36.7 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
