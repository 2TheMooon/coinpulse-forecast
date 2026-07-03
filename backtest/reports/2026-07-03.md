# CoinPulse Strategy Tournament — 2026-07-03

_Generated 2026-07-03T11:36:35.394Z · 14 coins · 300 samples/window · 10.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_t` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 20.6 |
| 2 | GARCH(1,1)-lite | 22.6 |
| 3 | GBM (normal) | 24.2 |
| 4 | Ensemble (GBM-t + bootstraps) | 24.3 |
| 5 | GBM + Student-t | 24.6 |
| 6 | Bootstrap (IID) | 28.9 |
| 7 | Block bootstrap | 29.0 |
| 8 | Momentum | 32.9 |
| 9 | EWMA vol, zero drift (t) | 33.1 |
| 10 | Mean-reversion (OU) | 55.5 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 55 | **80** | 88 | 0.49 | 58 | 26% | 14.6 |
| 2 | Momentum | 49 | **75** | 86 | 0.48 | 50 | 26% | 17.0 |
| 3 | GARCH(1,1)-lite | 56 | **81** | 88 | 0.48 | 58 | 25% | 17.5 |
| 4 | GBM (normal) | 57 | **80** | 88 | 0.48 | 57 | 27% | 17.8 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 55 | **76** | 85 | 0.49 | 58 | — | 18.7 |
| 6 | EWMA vol, zero drift (t) | 56 | **81** | 88 | 0.46 | 55 | 26% | 19.9 |
| 7 | Block bootstrap | 55 | **83** | 90 | 0.46 | 54 | 26% | 20.0 |
| 8 | Ensemble (GBM-t + bootstraps) | 58 | **84** | 91 | 0.47 | 55 | 27% | 20.8 |
| 9 | Bootstrap (IID) | 57 | **83** | 92 | 0.46 | 50 | 28% | 25.0 |
| 10 | Mean-reversion (OU) | 53 | **77** | 85 | 0.44 | 45 | 27% | 27.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 52 | **79** | 86 | 0.47 | 64 | — | 16.6 |
| 2 | GBM (normal) | 54 | **78** | 86 | 0.46 | 61 | 37% | 18.4 |
| 3 | GARCH(1,1)-lite | 48 | **79** | 87 | 0.47 | 59 | 36% | 18.5 |
| 4 | Ensemble (GBM-t + bootstraps) | 49 | **81** | 89 | 0.45 | 57 | 38% | 21.4 |
| 5 | GBM + Student-t | 49 | **76** | 84 | 0.46 | 60 | 36% | 22.2 |
| 6 | Bootstrap (IID) | 53 | **82** | 91 | 0.44 | 53 | 41% | 25.1 |
| 7 | Block bootstrap | 47 | **79** | 89 | 0.44 | 53 | 36% | 26.3 |
| 8 | EWMA vol, zero drift (t) | 50 | **77** | 85 | 0.42 | 59 | 37% | 29.1 |
| 9 | Momentum | 41 | **72** | 81 | 0.47 | 51 | 37% | 32.3 |
| 10 | Mean-reversion (OU) | 42 | **69** | 77 | 0.41 | 43 | 37% | 51.5 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 87 | 0.46 | 68 | — | 26.6 |
| 2 | Ensemble (GBM-t + bootstraps) | 54 | **82** | 92 | 0.43 | 63 | 65% | 30.7 |
| 3 | GARCH(1,1)-lite | 47 | **75** | 85 | 0.44 | 64 | 52% | 31.8 |
| 4 | GBM (normal) | 46 | **73** | 80 | 0.44 | 65 | 52% | 36.5 |
| 5 | Bootstrap (IID) | 52 | **80** | 88 | 0.41 | 63 | 59% | 36.6 |
| 6 | GBM + Student-t | 47 | **73** | 80 | 0.44 | 64 | 51% | 37.0 |
| 7 | Block bootstrap | 45 | **73** | 84 | 0.41 | 62 | 51% | 40.7 |
| 8 | Momentum | 39 | **66** | 75 | 0.46 | 52 | 51% | 49.3 |
| 9 | EWMA vol, zero drift (t) | 51 | **71** | 79 | 0.37 | 65 | 54% | 50.3 |
| 10 | Mean-reversion (OU) | 38 | **56** | 65 | 0.37 | 48 | 46% | 87.7 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 71% / 0.49 / 55% / 20.1 | 78% / 0.47 / 56% / 16 | 68% / 0.43 / 61% / 37.3 |
| ETH | 76% / 0.47 / 55% / 20.2 | 82% / 0.43 / 60% / 22.9 | 74% / 0.39 / 64% / 41.3 |
| SOL | 71% / 0.48 / 59% / 29.5 | 78% / 0.44 / 56% / 17.5 | 81% / 0.41 / 71% / 31.9 |
| BNB | 81% / 0.54 / 56% / 18.5 | 79% / 0.52 / 61% / 12.6 | 81% / 0.52 / 50% / 11.8 |
| XRP | 76% / 0.5 / 59% / 16.9 | 84% / 0.47 / 71% / 18 | 90% / 0.45 / 74% / 39.5 |
| SUI | 73% / 0.5 / 63% / 11.5 | 79% / 0.47 / 64% / 14.4 | 83% / 0.47 / 70% / 10.6 |
| AVAX | 81% / 0.48 / 56% / 16.8 | 79% / 0.45 / 62% / 21.3 | 80% / 0.42 / 65% / 29.2 |
| LINK | 81% / 0.47 / 59% / 13.2 | 82% / 0.44 / 63% / 16.9 | 83% / 0.42 / 59% / 30.2 |
| INJ | 71% / 0.54 / 59% / 25.2 | 73% / 0.53 / 62% / 23.7 | 77% / 0.54 / 68% / 24 |
| OP | 75% / 0.51 / 56% / 18.8 | 77% / 0.47 / 67% / 16.1 | 74% / 0.46 / 74% / 23.7 |
| ARB | 73% / 0.46 / 63% / 25.8 | 79% / 0.44 / 68% / 17.9 | 74% / 0.43 / 81% / 29.3 |
| DOGE | 76% / 0.49 / 56% / 22.6 | 79% / 0.46 / 68% / 14.4 | 86% / 0.46 / 74% / 23.5 |
| TIA | 79% / 0.52 / 61% / 14.6 | 81% / 0.51 / 63% / 8.4 | 87% / 0.52 / 71% / 20 |
| APT | 80% / 0.48 / 57% / 8.4 | 79% / 0.47 / 68% / 11.2 | 74% / 0.44 / 80% / 25.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
