# CoinPulse Strategy Tournament — 2026-06-29

_Generated 2026-06-29T13:11:10.822Z · 14 coins · 300 samples/window · 13.6s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (GBM + Student-t) does not beat the shipped engine by the required 3-point margin.

Overall best: **gbm_t** · by horizon: 7d→`gbm_t` · 14d→`momentum` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | GBM + Student-t | 21.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 21.4 |
| 3 | GBM (normal) | 21.9 |
| 4 | GARCH(1,1)-lite | 23.1 |
| 5 | Momentum | 23.5 |
| 6 | Ensemble (GBM-t + bootstraps) | 26.5 |
| 7 | EWMA vol, zero drift (t) | 29.8 |
| 8 | Block bootstrap | 29.9 |
| 9 | Bootstrap (IID) | 31.1 |
| 10 | Mean-reversion (OU) | 53.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 53 | **79** | 89 | 0.49 | 54 | 26% | 13.2 |
| 2 | GBM (normal) | 54 | **81** | 91 | 0.49 | 55 | 27% | 13.5 |
| 3 | Momentum | 46 | **76** | 88 | 0.49 | 48 | 27% | 14.3 |
| 4 | GARCH(1,1)-lite | 54 | **80** | 90 | 0.48 | 54 | 26% | 15.4 |
| 5 | EWMA vol, zero drift (t) | 53 | **80** | 90 | 0.47 | 45 | 27% | 16.7 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 57 | **78** | 87 | 0.49 | 58 | — | 18.5 |
| 7 | Ensemble (GBM-t + bootstraps) | 56 | **83** | 92 | 0.48 | 57 | 27% | 20.5 |
| 8 | Block bootstrap | 55 | **83** | 91 | 0.47 | 54 | 26% | 20.5 |
| 9 | Mean-reversion (OU) | 53 | **79** | 87 | 0.43 | 48 | 28% | 26.1 |
| 10 | Bootstrap (IID) | 59 | **86** | 93 | 0.47 | 58 | 28% | 26.9 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 44 | **78** | 89 | 0.48 | 53 | 38% | 16.2 |
| 2 | GBM + Student-t | 49 | **80** | 90 | 0.47 | 61 | 37% | 16.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 54 | **81** | 87 | 0.47 | 62 | — | 17.5 |
| 4 | GBM (normal) | 52 | **84** | 91 | 0.47 | 63 | 39% | 19.2 |
| 5 | GARCH(1,1)-lite | 49 | **83** | 91 | 0.47 | 60 | 37% | 20.9 |
| 6 | Ensemble (GBM-t + bootstraps) | 51 | **83** | 92 | 0.45 | 59 | 38% | 24.7 |
| 7 | EWMA vol, zero drift (t) | 52 | **81** | 89 | 0.42 | 57 | 38% | 26.1 |
| 8 | Block bootstrap | 49 | **82** | 91 | 0.44 | 58 | 37% | 28.1 |
| 9 | Bootstrap (IID) | 55 | **86** | 94 | 0.44 | 58 | 41% | 30.1 |
| 10 | Mean-reversion (OU) | 44 | **73** | 82 | 0.40 | 47 | 37% | 43.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **81** | 88 | 0.46 | 66 | — | 28.3 |
| 2 | GARCH(1,1)-lite | 51 | **76** | 87 | 0.43 | 67 | 53% | 33.0 |
| 3 | GBM (normal) | 50 | **73** | 83 | 0.44 | 68 | 54% | 33.0 |
| 4 | GBM + Student-t | 52 | **73** | 81 | 0.43 | 67 | 53% | 34.1 |
| 5 | Ensemble (GBM-t + bootstraps) | 57 | **83** | 92 | 0.42 | 64 | 66% | 34.4 |
| 6 | Bootstrap (IID) | 53 | **81** | 90 | 0.40 | 61 | 60% | 36.2 |
| 7 | Momentum | 41 | **68** | 79 | 0.46 | 57 | 52% | 40.0 |
| 8 | Block bootstrap | 49 | **73** | 85 | 0.40 | 62 | 52% | 41.1 |
| 9 | EWMA vol, zero drift (t) | 54 | **74** | 81 | 0.37 | 67 | 56% | 46.7 |
| 10 | Mean-reversion (OU) | 39 | **56** | 66 | 0.34 | 46 | 47% | 91.2 |

## Winner consistency — `gbm_t` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 76% / 0.5 / 44% / 16 | 76% / 0.48 / 55% / 18.6 | 70% / 0.42 / 65% / 42.8 |
| ETH | 84% / 0.46 / 54% / 22.1 | 80% / 0.42 / 59% / 19.7 | 72% / 0.36 / 50% / 52.1 |
| SOL | 80% / 0.49 / 46% / 14.8 | 82% / 0.44 / 59% / 20.8 | 72% / 0.37 / 70% / 47.4 |
| BNB | 74% / 0.52 / 64% / 13.6 | 77% / 0.52 / 58% / 10.4 | 78% / 0.52 / 54% / 24 |
| XRP | 82% / 0.49 / 54% / 10.5 | 84% / 0.46 / 59% / 26.3 | 74% / 0.41 / 70% / 36.4 |
| SUI | 78% / 0.52 / 58% / 12.2 | 78% / 0.49 / 63% / 7.4 | 80% / 0.46 / 70% / 12.5 |
| AVAX | 80% / 0.5 / 52% / 2.8 | 80% / 0.44 / 65% / 13.9 | 74% / 0.41 / 63% / 38.4 |
| LINK | 86% / 0.47 / 48% / 18.7 | 84% / 0.44 / 59% / 21.4 | 76% / 0.39 / 63% / 41.8 |
| INJ | 78% / 0.54 / 58% / 15.8 | 82% / 0.52 / 57% / 15.8 | 72% / 0.51 / 67% / 22 |
| OP | 76% / 0.5 / 54% / 6.5 | 80% / 0.47 / 63% / 16.1 | 67% / 0.43 / 72% / 39.8 |
| ARB | 78% / 0.46 / 56% / 13.3 | 76% / 0.43 / 63% / 25.8 | 65% / 0.4 / 78% / 56.8 |
| DOGE | 76% / 0.49 / 46% / 11.1 | 80% / 0.45 / 59% / 11.8 | 76% / 0.42 / 63% / 23.2 |
| TIA | 76% / 0.52 / 56% / 18.6 | 82% / 0.51 / 63% / 8.5 | 80% / 0.49 / 72% / 8.8 |
| APT | 84% / 0.47 / 64% / 9 | 78% / 0.45 / 71% / 16.2 | 70% / 0.41 / 83% / 35 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
