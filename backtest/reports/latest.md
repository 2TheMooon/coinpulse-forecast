# CoinPulse Strategy Tournament — 2026-10-24

_Generated 2026-10-24T13:11:57.244Z · 14 coins · 300 samples/window · 13.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`ensemble` · 14d→`ensemble` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 33.9 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 34.0 |
| 3 | EWMA vol, zero drift (t) | 35.8 |
| 4 | Bootstrap (IID) | 37.8 |
| 5 | Block bootstrap | 38.2 |
| 6 | GBM (normal) | 39.0 |
| 7 | GBM + Student-t | 39.6 |
| 8 | GARCH(1,1)-lite | 41.5 |
| 9 | Momentum | 45.2 |
| 10 | Mean-reversion (OU) | 67.5 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 50 | **75** | 82 | 0.52 | 45 | 23% | 20.1 |
| 2 | GBM (normal) | 53 | **77** | 83 | 0.52 | 48 | 24% | 20.6 |
| 3 | EWMA vol, zero drift (t) | 51 | **78** | 84 | 0.52 | 52 | 23% | 20.9 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 60 | **85** | 91 | 0.50 | 49 | — | 21.0 |
| 5 | GBM + Student-t | 50 | **77** | 83 | 0.53 | 49 | 23% | 22.3 |
| 6 | Block bootstrap | 47 | **73** | 82 | 0.51 | 47 | 22% | 23.3 |
| 7 | Bootstrap (IID) | 50 | **74** | 83 | 0.52 | 42 | 22% | 24.7 |
| 8 | GARCH(1,1)-lite | 49 | **74** | 82 | 0.52 | 40 | 22% | 24.9 |
| 9 | Momentum | 46 | **73** | 83 | 0.52 | 51 | 24% | 25.5 |
| 10 | Mean-reversion (OU) | 44 | **68** | 75 | 0.51 | 45 | 20% | 41.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 51 | **77** | 82 | 0.54 | 46 | 32% | 29.8 |
| 2 | Bootstrap (IID) | 52 | **77** | 83 | 0.54 | 48 | 32% | 31.1 |
| 3 | Block bootstrap | 53 | **76** | 82 | 0.54 | 51 | 33% | 31.7 |
| 4 | EWMA vol, zero drift (t) | 52 | **75** | 83 | 0.55 | 50 | 32% | 32.1 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 64 | **84** | 88 | 0.53 | 44 | — | 32.3 |
| 6 | GBM + Student-t | 54 | **74** | 82 | 0.56 | 45 | 32% | 33.5 |
| 7 | GBM (normal) | 56 | **75** | 83 | 0.56 | 50 | 33% | 33.6 |
| 8 | GARCH(1,1)-lite | 51 | **74** | 82 | 0.56 | 49 | 31% | 33.7 |
| 9 | Momentum | 44 | **70** | 82 | 0.54 | 53 | 34% | 37.8 |
| 10 | Mean-reversion (OU) | 42 | **64** | 72 | 0.54 | 48 | 26% | 56.5 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 61 | **80** | 88 | 0.60 | 41 | — | 48.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 54 | **75** | 83 | 0.61 | 39 | 56% | 51.8 |
| 3 | EWMA vol, zero drift (t) | 49 | **69** | 77 | 0.62 | 42 | 45% | 54.5 |
| 4 | Bootstrap (IID) | 47 | **70** | 78 | 0.62 | 40 | 46% | 57.6 |
| 5 | Block bootstrap | 49 | **70** | 78 | 0.61 | 43 | 48% | 59.7 |
| 6 | GBM (normal) | 46 | **69** | 77 | 0.64 | 38 | 46% | 62.7 |
| 7 | GBM + Student-t | 46 | **67** | 76 | 0.64 | 36 | 45% | 63.1 |
| 8 | GARCH(1,1)-lite | 43 | **68** | 74 | 0.64 | 37 | 44% | 65.8 |
| 9 | Momentum | 36 | **62** | 74 | 0.62 | 51 | 48% | 72.2 |
| 10 | Mean-reversion (OU) | 33 | **50** | 57 | 0.60 | 43 | 32% | 104.7 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.54 / 30% / 17 | 79% / 0.55 / 43% / 21.7 | 70% / 0.65 / 38% / 68.2 |
| ETH | 68% / 0.54 / 46% / 27.8 | 72% / 0.57 / 32% / 34.3 | 63% / 0.68 / 27% / 78.5 |
| SOL | 76% / 0.54 / 34% / 25.9 | 70% / 0.57 / 38% / 37.5 | 73% / 0.67 / 35% / 53.1 |
| BNB | 82% / 0.55 / 50% / 25.3 | 81% / 0.54 / 43% / 19.1 | 70% / 0.6 / 46% / 42.6 |
| XRP | 80% / 0.48 / 54% / 13.4 | 79% / 0.49 / 66% / 11.4 | 68% / 0.59 / 48% / 61.3 |
| SUI | 72% / 0.52 / 52% / 19.2 | 81% / 0.54 / 53% / 21.8 | 81% / 0.64 / 35% / 39.7 |
| AVAX | 80% / 0.5 / 52% / 14.9 | 66% / 0.55 / 47% / 49.7 | 65% / 0.67 / 33% / 74.7 |
| LINK | 64% / 0.54 / 38% / 41.7 | 70% / 0.57 / 40% / 47.5 | 68% / 0.68 / 33% / 61.2 |
| INJ | 76% / 0.51 / 52% / 11.3 | 89% / 0.5 / 60% / 14.7 | 89% / 0.5 / 62% / 18.5 |
| OP | 78% / 0.49 / 40% / 9.2 | 83% / 0.55 / 43% / 21 | 94% / 0.58 / 40% / 56.3 |
| ARB | 74% / 0.53 / 52% / 27.8 | 62% / 0.58 / 55% / 58 | 68% / 0.66 / 27% / 59.4 |
| DOGE | 72% / 0.46 / 46% / 22.1 | 70% / 0.46 / 49% / 29.8 | 71% / 0.53 / 48% / 25.3 |
| TIA | 78% / 0.52 / 40% / 11.1 | 87% / 0.56 / 36% / 21.5 | 97% / 0.57 / 33% / 49.6 |
| APT | 74% / 0.5 / 40% / 14.1 | 83% / 0.53 / 43% / 29.3 | 76% / 0.58 / 46% / 36.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
