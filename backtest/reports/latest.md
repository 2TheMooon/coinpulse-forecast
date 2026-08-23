# CoinPulse Strategy Tournament — 2026-08-23

_Generated 2026-08-23T09:32:26.350Z · 14 coins · 300 samples/window · 10.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (GARCH(1,1)-lite) does not beat the shipped engine by the required 3-point margin.

Overall best: **garch** · by horizon: 7d→`block_boot` · 14d→`momentum` · 30d→`bootstrap_iid`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | GARCH(1,1)-lite | 25.0 |
| 2 | Block bootstrap | 25.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 25.8 |
| 4 | Momentum | 26.5 |
| 5 | GBM (normal) | 26.7 |
| 6 | GBM + Student-t | 27.3 |
| 7 | EWMA vol, zero drift (t) | 27.6 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 27.8 |
| 9 | Bootstrap (IID) | 28.3 |
| 10 | Mean-reversion (OU) | 76.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 54 | **82** | 90 | 0.50 | 42 | 22% | 15.8 |
| 2 | GARCH(1,1)-lite | 55 | **81** | 89 | 0.51 | 48 | 21% | 18.2 |
| 3 | Ensemble (GBM-t + bootstraps) | 56 | **83** | 91 | 0.51 | 44 | 22% | 18.5 |
| 4 | Momentum | 51 | **76** | 87 | 0.52 | 46 | 21% | 19.9 |
| 5 | GBM (normal) | 56 | **81** | 89 | 0.51 | 46 | 22% | 19.9 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 53 | **78** | 87 | 0.48 | 46 | — | 20.1 |
| 7 | GBM + Student-t | 52 | **80** | 88 | 0.51 | 49 | 21% | 21.0 |
| 8 | EWMA vol, zero drift (t) | 53 | **82** | 88 | 0.51 | 55 | 21% | 21.7 |
| 9 | Bootstrap (IID) | 58 | **85** | 91 | 0.51 | 47 | 24% | 23.5 |
| 10 | Mean-reversion (OU) | 46 | **69** | 79 | 0.46 | 55 | 18% | 42.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 47 | **77** | 87 | 0.52 | 48 | 31% | 19.6 |
| 2 | GARCH(1,1)-lite | 56 | **81** | 90 | 0.50 | 51 | 30% | 21.8 |
| 3 | GBM + Student-t | 55 | **82** | 89 | 0.49 | 50 | 30% | 22.4 |
| 4 | Block bootstrap | 55 | **81** | 89 | 0.47 | 49 | 31% | 23.0 |
| 5 | GBM (normal) | 57 | **81** | 89 | 0.50 | 46 | 31% | 23.4 |
| 6 | EWMA vol, zero drift (t) | 54 | **83** | 89 | 0.49 | 55 | 30% | 24.3 |
| 7 | Shipped engine (forecast.js) _(shipped)_ | 57 | **81** | 87 | 0.48 | 47 | — | 24.6 |
| 8 | Ensemble (GBM-t + bootstraps) | 59 | **83** | 90 | 0.49 | 48 | 32% | 25.2 |
| 9 | Bootstrap (IID) | 61 | **84** | 91 | 0.49 | 50 | 34% | 27.9 |
| 10 | Mean-reversion (OU) | 35 | **60** | 71 | 0.43 | 53 | 21% | 72.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 58 | **79** | 87 | 0.46 | 44 | 50% | 33.5 |
| 2 | Ensemble (GBM-t + bootstraps) | 62 | **82** | 91 | 0.47 | 44 | 56% | 33.8 |
| 3 | GARCH(1,1)-lite | 55 | **75** | 84 | 0.48 | 41 | 46% | 35.2 |
| 4 | EWMA vol, zero drift (t) | 56 | **76** | 84 | 0.48 | 51 | 45% | 36.7 |
| 5 | GBM (normal) | 57 | **75** | 83 | 0.48 | 40 | 46% | 36.9 |
| 6 | Block bootstrap | 55 | **76** | 83 | 0.46 | 46 | 45% | 38.0 |
| 7 | GBM + Student-t | 56 | **74** | 82 | 0.48 | 42 | 46% | 38.4 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 61 | **78** | 85 | 0.45 | 45 | — | 38.6 |
| 9 | Momentum | 40 | **66** | 80 | 0.51 | 46 | 46% | 40.2 |
| 10 | Mean-reversion (OU) | 28 | **50** | 57 | 0.40 | 60 | 23% | 113.5 |

## Winner consistency — `garch` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.5 / 46% / 6.7 | 83% / 0.49 / 45% / 14 | 73% / 0.47 / 37% / 33.2 |
| ETH | 80% / 0.5 / 48% / 8.7 | 85% / 0.49 / 38% / 14.9 | 67% / 0.47 / 22% / 39.8 |
| SOL | 80% / 0.5 / 42% / 14.4 | 83% / 0.5 / 47% / 13.7 | 76% / 0.48 / 22% / 16.8 |
| BNB | 90% / 0.54 / 50% / 17.7 | 85% / 0.53 / 40% / 15.5 | 84% / 0.51 / 32% / 18.6 |
| XRP | 86% / 0.45 / 48% / 31.9 | 87% / 0.41 / 53% / 36 | 75% / 0.38 / 51% / 54.4 |
| SUI | 86% / 0.49 / 50% / 11.1 | 87% / 0.49 / 51% / 17.2 | 84% / 0.47 / 44% / 24.8 |
| AVAX | 88% / 0.47 / 48% / 35.4 | 87% / 0.46 / 55% / 38.4 | 76% / 0.42 / 46% / 51.9 |
| LINK | 74% / 0.53 / 50% / 13.5 | 83% / 0.52 / 38% / 9.3 | 73% / 0.51 / 32% / 19.2 |
| INJ | 80% / 0.57 / 54% / 20.4 | 72% / 0.57 / 57% / 29.2 | 62% / 0.61 / 37% / 60.1 |
| OP | 80% / 0.55 / 48% / 16.5 | 81% / 0.55 / 53% / 19.1 | 83% / 0.56 / 62% / 21.8 |
| ARB | 68% / 0.5 / 48% / 37 | 62% / 0.48 / 51% / 42.5 | 62% / 0.48 / 33% / 57.2 |
| DOGE | 80% / 0.49 / 48% / 20.9 | 79% / 0.45 / 57% / 20.3 | 73% / 0.41 / 51% / 44.8 |
| TIA | 80% / 0.51 / 38% / 6.2 | 79% / 0.52 / 53% / 15.2 | 89% / 0.53 / 38% / 22 |
| APT | 78% / 0.49 / 54% / 14.5 | 83% / 0.47 / 68% / 19.3 | 78% / 0.45 / 67% / 27.8 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
