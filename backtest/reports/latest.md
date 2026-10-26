# CoinPulse Strategy Tournament — 2026-10-26

_Generated 2026-10-26T15:59:32.813Z · 14 coins · 300 samples/window · 13.1s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`gbm_t` · 14d→`block_boot` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 34.1 |
| 2 | EWMA vol, zero drift (t) | 35.1 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 35.9 |
| 4 | Block bootstrap | 36.3 |
| 5 | Bootstrap (IID) | 38.0 |
| 6 | GBM (normal) | 38.2 |
| 7 | GBM + Student-t | 38.3 |
| 8 | GARCH(1,1)-lite | 39.6 |
| 9 | Momentum | 42.1 |
| 10 | Mean-reversion (OU) | 66.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 53 | **78** | 86 | 0.50 | 51 | 23% | 16.7 |
| 2 | GBM (normal) | 53 | **80** | 86 | 0.50 | 47 | 24% | 17.7 |
| 3 | GARCH(1,1)-lite | 51 | **77** | 85 | 0.49 | 52 | 22% | 19.0 |
| 4 | EWMA vol, zero drift (t) | 54 | **80** | 87 | 0.49 | 56 | 23% | 19.0 |
| 5 | Ensemble (GBM-t + bootstraps) | 52 | **78** | 87 | 0.49 | 52 | 23% | 19.1 |
| 6 | Block bootstrap | 48 | **74** | 85 | 0.48 | 50 | 22% | 20.2 |
| 7 | Bootstrap (IID) | 51 | **76** | 85 | 0.49 | 49 | 22% | 21.5 |
| 8 | Momentum | 48 | **75** | 83 | 0.48 | 52 | 24% | 21.7 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 61 | **85** | 91 | 0.50 | 49 | — | 22.6 |
| 10 | Mean-reversion (OU) | 50 | **69** | 77 | 0.49 | 50 | 20% | 39.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 53 | **77** | 85 | 0.54 | 49 | 33% | 31.6 |
| 2 | EWMA vol, zero drift (t) | 52 | **78** | 85 | 0.55 | 50 | 32% | 31.7 |
| 3 | Ensemble (GBM-t + bootstraps) | 53 | **78** | 85 | 0.55 | 45 | 32% | 31.8 |
| 4 | Momentum | 46 | **71** | 84 | 0.54 | 49 | 34% | 32.1 |
| 5 | GBM + Student-t | 52 | **77** | 84 | 0.56 | 45 | 32% | 32.3 |
| 6 | GARCH(1,1)-lite | 50 | **77** | 84 | 0.57 | 48 | 31% | 33.4 |
| 7 | Bootstrap (IID) | 55 | **76** | 85 | 0.55 | 45 | 32% | 33.5 |
| 8 | GBM (normal) | 55 | **78** | 85 | 0.57 | 49 | 33% | 34.2 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 66 | **85** | 90 | 0.54 | 46 | — | 35.1 |
| 10 | Mean-reversion (OU) | 42 | **65** | 74 | 0.54 | 49 | 26% | 55.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 61 | **81** | 89 | 0.61 | 41 | — | 50.0 |
| 2 | Ensemble (GBM-t + bootstraps) | 55 | **76** | 84 | 0.62 | 38 | 56% | 51.5 |
| 3 | EWMA vol, zero drift (t) | 50 | **70** | 78 | 0.63 | 41 | 46% | 54.6 |
| 4 | Block bootstrap | 50 | **71** | 80 | 0.62 | 42 | 49% | 57.3 |
| 5 | Bootstrap (IID) | 47 | **72** | 79 | 0.62 | 42 | 47% | 58.9 |
| 6 | GBM (normal) | 45 | **70** | 77 | 0.65 | 38 | 46% | 62.6 |
| 7 | GBM + Student-t | 45 | **68** | 76 | 0.65 | 37 | 45% | 65.8 |
| 8 | GARCH(1,1)-lite | 43 | **68** | 76 | 0.65 | 37 | 44% | 66.4 |
| 9 | Momentum | 36 | **61** | 74 | 0.62 | 49 | 49% | 72.4 |
| 10 | Mean-reversion (OU) | 32 | **51** | 59 | 0.62 | 43 | 33% | 104.7 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.5 / 52% / 22.8 | 83% / 0.58 / 32% / 37.4 | 71% / 0.66 / 33% / 65.3 |
| ETH | 78% / 0.52 / 50% / 21.1 | 74% / 0.59 / 43% / 38 | 67% / 0.69 / 24% / 74.5 |
| SOL | 70% / 0.52 / 52% / 25.5 | 66% / 0.59 / 36% / 54.4 | 73% / 0.67 / 37% / 54.7 |
| BNB | 84% / 0.52 / 54% / 11.8 | 83% / 0.56 / 43% / 20.7 | 73% / 0.61 / 40% / 41.8 |
| XRP | 82% / 0.45 / 60% / 16.1 | 79% / 0.5 / 60% / 7.8 | 70% / 0.59 / 49% / 60.8 |
| SUI | 78% / 0.49 / 62% / 9.2 | 83% / 0.55 / 47% / 23.7 | 81% / 0.65 / 33% / 42.5 |
| AVAX | 84% / 0.51 / 48% / 21.8 | 72% / 0.57 / 38% / 45 | 68% / 0.68 / 38% / 70.1 |
| LINK | 72% / 0.51 / 48% / 15.4 | 68% / 0.58 / 53% / 47.3 | 68% / 0.69 / 33% / 62.7 |
| INJ | 76% / 0.45 / 42% / 23.7 | 85% / 0.49 / 49% / 13.5 | 84% / 0.51 / 63% / 21 |
| OP | 80% / 0.48 / 58% / 16.3 | 89% / 0.53 / 38% / 31.7 | 95% / 0.58 / 38% / 59.1 |
| ARB | 72% / 0.51 / 52% / 29.9 | 64% / 0.61 / 45% / 54 | 70% / 0.67 / 22% / 62.4 |
| DOGE | 74% / 0.43 / 60% / 27.4 | 77% / 0.47 / 53% / 18 | 75% / 0.53 / 46% / 19.8 |
| TIA | 82% / 0.5 / 32% / 10.1 | 85% / 0.55 / 45% / 24.6 | 95% / 0.58 / 35% / 50.9 |
| APT | 78% / 0.48 / 60% / 16.5 | 83% / 0.53 / 55% / 29.2 | 78% / 0.58 / 44% / 35.3 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
