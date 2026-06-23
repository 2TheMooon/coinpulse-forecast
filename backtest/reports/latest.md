# CoinPulse Strategy Tournament — 2026-06-23

_Generated 2026-06-23T12:11:00.103Z · 14 coins · 300 samples/window · 13.4s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (GBM + Student-t) does not beat the shipped engine by the required 3-point margin.

Overall best: **gbm_t** · by horizon: 7d→`momentum` · 14d→`gbm_t` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | GBM + Student-t | 22.8 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 22.8 |
| 3 | Momentum | 23.2 |
| 4 | GBM (normal) | 23.5 |
| 5 | GARCH(1,1)-lite | 24.3 |
| 6 | EWMA vol, zero drift (t) | 27.9 |
| 7 | Ensemble (GBM-t + bootstraps) | 28.8 |
| 8 | Bootstrap (IID) | 32.8 |
| 9 | Block bootstrap | 33.7 |
| 10 | Mean-reversion (OU) | 59.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 45 | **79** | 88 | 0.49 | 47 | 27% | 13.0 |
| 2 | GBM + Student-t | 53 | **81** | 90 | 0.48 | 55 | 27% | 15.4 |
| 3 | GARCH(1,1)-lite | 55 | **81** | 90 | 0.48 | 55 | 26% | 17.0 |
| 4 | EWMA vol, zero drift (t) | 53 | **81** | 90 | 0.46 | 55 | 27% | 17.1 |
| 5 | GBM (normal) | 55 | **81** | 88 | 0.47 | 53 | 28% | 17.4 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 56 | **82** | 90 | 0.47 | 52 | — | 17.7 |
| 7 | Ensemble (GBM-t + bootstraps) | 56 | **84** | 93 | 0.47 | 51 | 28% | 23.6 |
| 8 | Block bootstrap | 57 | **83** | 91 | 0.46 | 51 | 28% | 26.0 |
| 9 | Bootstrap (IID) | 59 | **84** | 92 | 0.46 | 50 | 29% | 27.1 |
| 10 | Mean-reversion (OU) | 53 | **77** | 85 | 0.42 | 50 | 27% | 31.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 49 | **80** | 90 | 0.45 | 58 | 38% | 18.9 |
| 2 | GBM (normal) | 52 | **83** | 90 | 0.46 | 59 | 39% | 19.5 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 55 | **82** | 89 | 0.46 | 57 | — | 19.7 |
| 4 | Momentum | 42 | **77** | 88 | 0.48 | 50 | 38% | 21.6 |
| 5 | GARCH(1,1)-lite | 48 | **83** | 91 | 0.45 | 60 | 38% | 22.7 |
| 6 | EWMA vol, zero drift (t) | 52 | **81** | 90 | 0.42 | 53 | 38% | 25.0 |
| 7 | Ensemble (GBM-t + bootstraps) | 52 | **85** | 91 | 0.43 | 59 | 39% | 26.4 |
| 8 | Block bootstrap | 48 | **82** | 90 | 0.43 | 49 | 38% | 29.4 |
| 9 | Bootstrap (IID) | 54 | **85** | 93 | 0.43 | 53 | 42% | 31.4 |
| 10 | Mean-reversion (OU) | 43 | **70** | 79 | 0.39 | 45 | 37% | 51.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 60 | **83** | 91 | 0.45 | 62 | — | 31.1 |
| 2 | GARCH(1,1)-lite | 51 | **75** | 86 | 0.42 | 64 | 55% | 33.2 |
| 3 | GBM (normal) | 53 | **74** | 83 | 0.43 | 64 | 56% | 33.4 |
| 4 | GBM + Student-t | 52 | **74** | 83 | 0.42 | 63 | 55% | 34.2 |
| 5 | Momentum | 44 | **69** | 80 | 0.47 | 57 | 53% | 35.0 |
| 6 | Ensemble (GBM-t + bootstraps) | 59 | **83** | 92 | 0.41 | 58 | 68% | 36.3 |
| 7 | Bootstrap (IID) | 53 | **77** | 88 | 0.39 | 54 | 60% | 40.1 |
| 8 | EWMA vol, zero drift (t) | 55 | **75** | 83 | 0.38 | 68 | 57% | 41.7 |
| 9 | Block bootstrap | 49 | **74** | 84 | 0.38 | 53 | 55% | 45.8 |
| 10 | Mean-reversion (OU) | 38 | **54** | 64 | 0.34 | 42 | 47% | 96.7 |

## Winner consistency — `gbm_t` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 78% / 0.49 / 46% / 14.7 | 78% / 0.46 / 57% / 15.3 | 72% / 0.42 / 59% / 36.5 |
| ETH | 82% / 0.45 / 52% / 20.5 | 80% / 0.4 / 47% / 23.7 | 76% / 0.35 / 35% / 43.3 |
| SOL | 80% / 0.47 / 54% / 17.8 | 84% / 0.43 / 51% / 26.5 | 74% / 0.38 / 67% / 43.8 |
| BNB | 73% / 0.52 / 63% / 16.1 | 77% / 0.53 / 57% / 12.8 | 81% / 0.54 / 53% / 21.7 |
| XRP | 84% / 0.47 / 54% / 16.4 | 86% / 0.44 / 53% / 34.3 | 76% / 0.38 / 63% / 41.5 |
| SUI | 80% / 0.49 / 54% / 3.2 | 80% / 0.46 / 61% / 8.8 | 72% / 0.43 / 63% / 25.1 |
| AVAX | 86% / 0.47 / 62% / 19.3 | 80% / 0.42 / 63% / 17 | 78% / 0.41 / 67% / 36.2 |
| LINK | 86% / 0.46 / 48% / 26.9 | 84% / 0.42 / 49% / 23.7 | 76% / 0.39 / 59% / 38.2 |
| INJ | 82% / 0.52 / 54% / 10.5 | 82% / 0.5 / 57% / 9.4 | 70% / 0.49 / 63% / 26.7 |
| OP | 82% / 0.47 / 52% / 11.7 | 80% / 0.45 / 63% / 17.7 | 67% / 0.41 / 67% / 43.9 |
| ARB | 78% / 0.45 / 56% / 13 | 73% / 0.42 / 61% / 28.7 | 67% / 0.39 / 67% / 54.9 |
| DOGE | 84% / 0.49 / 54% / 16.1 | 80% / 0.45 / 53% / 17.9 | 78% / 0.42 / 65% / 19.2 |
| TIA | 78% / 0.51 / 56% / 13.1 | 80% / 0.49 / 65% / 8.9 | 80% / 0.48 / 72% / 12.6 |
| APT | 84% / 0.46 / 62% / 15.8 | 84% / 0.44 / 73% / 19.9 | 70% / 0.41 / 80% / 38.4 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
