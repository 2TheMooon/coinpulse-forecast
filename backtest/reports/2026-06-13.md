# CoinPulse Strategy Tournament — 2026-06-13

_Generated 2026-06-13T11:19:58.221Z · 14 coins · 300 samples/window · 13.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (GBM + Student-t) does not beat the shipped engine by the required 3-point margin.

Overall best: **gbm_t** · by horizon: 7d→`momentum` · 14d→`gbm_t` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | GBM + Student-t | 28.3 |
| 2 | Momentum | 28.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 28.7 |
| 4 | GBM (normal) | 28.8 |
| 5 | GARCH(1,1)-lite | 29.5 |
| 6 | Ensemble (GBM-t + bootstraps) | 31.3 |
| 7 | EWMA vol, zero drift (t) | 31.8 |
| 8 | Block bootstrap | 35.4 |
| 9 | Bootstrap (IID) | 35.8 |
| 10 | Mean-reversion (OU) | 58.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **78** | 86 | 0.47 | 47 | 27% | 18.4 |
| 2 | GBM + Student-t | 55 | **78** | 85 | 0.46 | 57 | 27% | 23.8 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 63 | **83** | 89 | 0.48 | 58 | — | 23.8 |
| 4 | GBM (normal) | 56 | **78** | 86 | 0.45 | 57 | 27% | 24.1 |
| 5 | Ensemble (GBM-t + bootstraps) | 57 | **81** | 90 | 0.45 | 52 | 28% | 25.6 |
| 6 | EWMA vol, zero drift (t) | 55 | **77** | 85 | 0.45 | 58 | 27% | 25.9 |
| 7 | GARCH(1,1)-lite | 57 | **78** | 86 | 0.45 | 56 | 26% | 26.7 |
| 8 | Block bootstrap | 57 | **83** | 90 | 0.43 | 53 | 27% | 31.4 |
| 9 | Bootstrap (IID) | 59 | **84** | 91 | 0.43 | 52 | 29% | 33.0 |
| 10 | Mean-reversion (OU) | 54 | **77** | 85 | 0.41 | 50 | 28% | 36.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 55 | **80** | 87 | 0.44 | 59 | 37% | 24.7 |
| 2 | GARCH(1,1)-lite | 53 | **82** | 87 | 0.45 | 58 | 37% | 25.4 |
| 3 | Momentum | 45 | **74** | 85 | 0.46 | 49 | 38% | 25.4 |
| 4 | GBM (normal) | 56 | **81** | 87 | 0.45 | 60 | 39% | 25.7 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 61 | **85** | 91 | 0.46 | 59 | — | 27.6 |
| 6 | EWMA vol, zero drift (t) | 55 | **81** | 88 | 0.42 | 55 | 38% | 27.6 |
| 7 | Ensemble (GBM-t + bootstraps) | 55 | **82** | 88 | 0.42 | 56 | 39% | 30.3 |
| 8 | Block bootstrap | 55 | **82** | 87 | 0.41 | 59 | 38% | 34.0 |
| 9 | Bootstrap (IID) | 57 | **84** | 91 | 0.42 | 53 | 41% | 34.0 |
| 10 | Mean-reversion (OU) | 46 | **72** | 80 | 0.39 | 47 | 37% | 49.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 65 | **86** | 93 | 0.47 | 62 | — | 34.8 |
| 2 | GBM + Student-t | 54 | **73** | 81 | 0.43 | 59 | 55% | 36.4 |
| 3 | GBM (normal) | 55 | **75** | 82 | 0.43 | 60 | 56% | 36.6 |
| 4 | GARCH(1,1)-lite | 52 | **72** | 85 | 0.43 | 60 | 55% | 36.6 |
| 5 | Ensemble (GBM-t + bootstraps) | 61 | **81** | 90 | 0.41 | 56 | 69% | 38.0 |
| 6 | Bootstrap (IID) | 54 | **77** | 87 | 0.40 | 53 | 61% | 40.3 |
| 7 | Block bootstrap | 51 | **74** | 84 | 0.40 | 53 | 56% | 40.7 |
| 8 | EWMA vol, zero drift (t) | 58 | **75** | 82 | 0.40 | 66 | 56% | 41.8 |
| 9 | Momentum | 42 | **67** | 77 | 0.47 | 51 | 54% | 41.9 |
| 10 | Mean-reversion (OU) | 40 | **57** | 64 | 0.36 | 43 | 48% | 88.2 |

## Winner consistency — `gbm_t` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 70% / 0.46 / 50% / 23.7 | 78% / 0.45 / 55% / 24.3 | 65% / 0.42 / 48% / 40.2 |
| ETH | 78% / 0.43 / 50% / 23.5 | 80% / 0.39 / 57% / 29.8 | 72% / 0.36 / 33% / 48.6 |
| SOL | 74% / 0.46 / 56% / 30.1 | 80% / 0.44 / 51% / 13.5 | 72% / 0.41 / 67% / 45.3 |
| BNB | 72% / 0.53 / 63% / 23.2 | 78% / 0.53 / 56% / 16.5 | 80% / 0.55 / 50% / 25.1 |
| XRP | 82% / 0.43 / 58% / 21.7 | 82% / 0.4 / 63% / 38.6 | 78% / 0.37 / 63% / 46.2 |
| SUI | 82% / 0.46 / 58% / 12.5 | 82% / 0.44 / 61% / 23.1 | 70% / 0.44 / 54% / 41.4 |
| AVAX | 82% / 0.44 / 54% / 31.1 | 80% / 0.42 / 59% / 33.1 | 76% / 0.43 / 67% / 27.5 |
| LINK | 78% / 0.45 / 52% / 27.8 | 86% / 0.41 / 53% / 36 | 78% / 0.39 / 61% / 45.1 |
| INJ | 80% / 0.5 / 56% / 6.3 | 76% / 0.5 / 55% / 16.3 | 67% / 0.49 / 57% / 39.4 |
| OP | 78% / 0.47 / 60% / 22.4 | 78% / 0.45 / 61% / 18.4 | 67% / 0.43 / 61% / 38.2 |
| ARB | 76% / 0.44 / 66% / 26.4 | 78% / 0.42 / 59% / 34.4 | 70% / 0.4 / 63% / 48.6 |
| DOGE | 82% / 0.45 / 60% / 34.5 | 78% / 0.43 / 63% / 22.1 | 76% / 0.43 / 65% / 19.3 |
| TIA | 82% / 0.47 / 58% / 18.2 | 80% / 0.46 / 61% / 18.3 | 80% / 0.47 / 65% / 10.3 |
| APT | 72% / 0.47 / 56% / 31.3 | 82% / 0.46 / 65% / 22.3 | 70% / 0.43 / 76% / 36.3 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
