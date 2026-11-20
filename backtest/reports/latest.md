# CoinPulse Strategy Tournament — 2026-11-20

_Generated 2026-11-20T17:39:46.769Z · 14 coins · 300 samples/window · 12.4s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (EWMA vol, zero drift (t)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ewma_t_zero** · by horizon: 7d→`gbm_normal` · 14d→`momentum` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 32.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 32.4 |
| 3 | Momentum | 33.5 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 34.4 |
| 5 | Block bootstrap | 36.3 |
| 6 | Bootstrap (IID) | 38.5 |
| 7 | GBM (normal) | 40.5 |
| 8 | GBM + Student-t | 42.7 |
| 9 | GARCH(1,1)-lite | 42.7 |
| 10 | Mean-reversion (OU) | 59.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 49 | **77** | 85 | 0.51 | 49 | 24% | 16.0 |
| 2 | Momentum | 48 | **77** | 85 | 0.49 | 55 | 24% | 17.1 |
| 3 | Ensemble (GBM-t + bootstraps) | 49 | **76** | 85 | 0.51 | 52 | 24% | 17.4 |
| 4 | EWMA vol, zero drift (t) | 49 | **77** | 83 | 0.50 | 55 | 23% | 18.8 |
| 5 | Bootstrap (IID) | 49 | **76** | 84 | 0.50 | 50 | 23% | 18.8 |
| 6 | Block bootstrap | 48 | **75** | 85 | 0.50 | 52 | 24% | 19.3 |
| 7 | GARCH(1,1)-lite | 48 | **74** | 84 | 0.51 | 48 | 23% | 19.8 |
| 8 | GBM + Student-t | 48 | **76** | 83 | 0.52 | 51 | 23% | 21.5 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 62 | **85** | 91 | 0.52 | 45 | — | 23.9 |
| 10 | Mean-reversion (OU) | 48 | **72** | 81 | 0.51 | 53 | 21% | 26.2 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **75** | 84 | 0.54 | 55 | 35% | 27.8 |
| 2 | Block bootstrap | 53 | **79** | 85 | 0.55 | 51 | 35% | 29.1 |
| 3 | EWMA vol, zero drift (t) | 55 | **78** | 86 | 0.55 | 51 | 33% | 29.3 |
| 4 | Ensemble (GBM-t + bootstraps) | 51 | **78** | 86 | 0.56 | 46 | 34% | 30.8 |
| 5 | Bootstrap (IID) | 51 | **76** | 85 | 0.55 | 47 | 33% | 30.8 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 62 | **84** | 89 | 0.54 | 43 | — | 31.6 |
| 7 | GBM + Student-t | 53 | **76** | 84 | 0.57 | 48 | 33% | 35.3 |
| 8 | GBM (normal) | 54 | **78** | 84 | 0.58 | 47 | 34% | 35.3 |
| 9 | GARCH(1,1)-lite | 49 | **75** | 85 | 0.57 | 50 | 32% | 35.7 |
| 10 | Mean-reversion (OU) | 47 | **70** | 79 | 0.58 | 53 | 27% | 44.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 51 | **80** | 86 | 0.60 | 33 | — | 47.6 |
| 2 | EWMA vol, zero drift (t) | 44 | **71** | 78 | 0.59 | 46 | 48% | 48.9 |
| 3 | Ensemble (GBM-t + bootstraps) | 44 | **74** | 83 | 0.60 | 37 | 59% | 49.0 |
| 4 | Momentum | 35 | **63** | 76 | 0.54 | 50 | 55% | 55.6 |
| 5 | Block bootstrap | 38 | **67** | 77 | 0.60 | 39 | 53% | 60.6 |
| 6 | Bootstrap (IID) | 35 | **66** | 77 | 0.60 | 37 | 48% | 65.9 |
| 7 | GBM (normal) | 37 | **66** | 75 | 0.63 | 38 | 49% | 70.3 |
| 8 | GBM + Student-t | 36 | **66** | 74 | 0.63 | 39 | 48% | 71.2 |
| 9 | GARCH(1,1)-lite | 35 | **65** | 75 | 0.63 | 40 | 45% | 72.5 |
| 10 | Mean-reversion (OU) | 26 | **51** | 61 | 0.64 | 50 | 32% | 108.7 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 78% / 0.5 / 54% / 10.2 | 77% / 0.55 / 47% / 23.5 | 70% / 0.62 / 40% / 57.1 |
| ETH | 76% / 0.5 / 60% / 14 | 77% / 0.55 / 45% / 21.2 | 57% / 0.61 / 35% / 77.6 |
| SOL | 70% / 0.5 / 54% / 24 | 62% / 0.53 / 51% / 36 | 59% / 0.59 / 49% / 69.3 |
| BNB | 82% / 0.52 / 58% / 14.2 | 83% / 0.58 / 53% / 29.8 | 68% / 0.62 / 43% / 66.3 |
| XRP | 82% / 0.45 / 56% / 16.4 | 81% / 0.47 / 64% / 23 | 67% / 0.53 / 48% / 40.9 |
| SUI | 76% / 0.49 / 48% / 16.4 | 77% / 0.54 / 62% / 22.9 | 76% / 0.58 / 54% / 33.8 |
| AVAX | 82% / 0.5 / 54% / 10.6 | 74% / 0.56 / 51% / 37.7 | 68% / 0.62 / 52% / 62.4 |
| LINK | 72% / 0.54 / 56% / 27.5 | 74% / 0.6 / 51% / 33 | 70% / 0.66 / 32% / 82.2 |
| INJ | 78% / 0.55 / 52% / 19.4 | 83% / 0.63 / 34% / 42.3 | 75% / 0.66 / 33% / 54.1 |
| OP | 82% / 0.49 / 58% / 11.9 | 83% / 0.53 / 55% / 26.9 | 83% / 0.55 / 54% / 18.4 |
| ARB | 76% / 0.52 / 56% / 22.5 | 64% / 0.61 / 53% / 50.3 | 73% / 0.63 / 41% / 48.5 |
| DOGE | 72% / 0.43 / 62% / 30.1 | 81% / 0.46 / 60% / 18.7 | 73% / 0.5 / 57% / 28.5 |
| TIA | 82% / 0.5 / 46% / 20.3 | 85% / 0.56 / 40% / 24.5 | 86% / 0.6 / 44% / 27.7 |
| APT | 76% / 0.47 / 56% / 25.6 | 85% / 0.5 / 47% / 20.2 | 75% / 0.52 / 62% / 17.7 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
