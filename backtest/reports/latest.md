# CoinPulse Strategy Tournament — 2026-06-20

_Generated 2026-06-20T11:21:52.948Z · 14 coins · 300 samples/window · 10.6s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 24.5 |
| 2 | GBM + Student-t | 28.8 |
| 3 | Momentum | 28.9 |
| 4 | GBM (normal) | 29.0 |
| 5 | GARCH(1,1)-lite | 29.4 |
| 6 | EWMA vol, zero drift (t) | 31.3 |
| 7 | Ensemble (GBM-t + bootstraps) | 31.6 |
| 8 | Block bootstrap | 36.0 |
| 9 | Bootstrap (IID) | 37.4 |
| 10 | Mean-reversion (OU) | 59.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 53 | **81** | 90 | 0.46 | 57 | — | 16.5 |
| 2 | Momentum | 52 | **79** | 87 | 0.48 | 49 | 27% | 16.8 |
| 3 | GBM + Student-t | 56 | **81** | 89 | 0.46 | 61 | 26% | 20.0 |
| 4 | GARCH(1,1)-lite | 56 | **82** | 90 | 0.46 | 61 | 26% | 22.2 |
| 5 | EWMA vol, zero drift (t) | 56 | **81** | 89 | 0.45 | 56 | 26% | 22.8 |
| 6 | GBM (normal) | 59 | **82** | 90 | 0.46 | 57 | 27% | 23.5 |
| 7 | Ensemble (GBM-t + bootstraps) | 59 | **83** | 91 | 0.45 | 58 | 28% | 27.9 |
| 8 | Block bootstrap | 57 | **84** | 91 | 0.43 | 52 | 28% | 29.5 |
| 9 | Bootstrap (IID) | 60 | **84** | 92 | 0.44 | 52 | 29% | 31.3 |
| 10 | Mean-reversion (OU) | 52 | **79** | 86 | 0.41 | 48 | 27% | 32.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **82** | 89 | 0.46 | 58 | — | 22.8 |
| 2 | Momentum | 44 | **72** | 85 | 0.48 | 49 | 37% | 26.0 |
| 3 | GBM (normal) | 56 | **79** | 86 | 0.44 | 61 | 38% | 27.4 |
| 4 | GARCH(1,1)-lite | 55 | **79** | 86 | 0.44 | 61 | 37% | 27.8 |
| 5 | EWMA vol, zero drift (t) | 55 | **79** | 86 | 0.42 | 59 | 37% | 29.3 |
| 6 | GBM + Student-t | 55 | **76** | 85 | 0.44 | 61 | 37% | 29.4 |
| 7 | Block bootstrap | 56 | **80** | 88 | 0.42 | 54 | 39% | 31.4 |
| 8 | Ensemble (GBM-t + bootstraps) | 58 | **80** | 89 | 0.42 | 60 | 39% | 31.8 |
| 9 | Bootstrap (IID) | 59 | **82** | 91 | 0.42 | 52 | 41% | 36.0 |
| 10 | Mean-reversion (OU) | 46 | **69** | 78 | 0.39 | 45 | 37% | 53.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 62 | **84** | 90 | 0.45 | 62 | — | 34.0 |
| 2 | Ensemble (GBM-t + bootstraps) | 57 | **82** | 90 | 0.41 | 55 | 68% | 34.9 |
| 3 | GBM (normal) | 51 | **74** | 82 | 0.42 | 60 | 55% | 36.1 |
| 4 | GBM + Student-t | 50 | **73** | 81 | 0.42 | 58 | 54% | 36.9 |
| 5 | GARCH(1,1)-lite | 50 | **75** | 84 | 0.42 | 60 | 54% | 38.2 |
| 6 | EWMA vol, zero drift (t) | 54 | **75** | 83 | 0.39 | 64 | 55% | 41.8 |
| 7 | Momentum | 43 | **65** | 75 | 0.48 | 52 | 52% | 43.8 |
| 8 | Bootstrap (IID) | 51 | **76** | 86 | 0.39 | 49 | 61% | 44.8 |
| 9 | Block bootstrap | 48 | **73** | 83 | 0.39 | 52 | 56% | 47.1 |
| 10 | Mean-reversion (OU) | 38 | **56** | 63 | 0.35 | 45 | 47% | 93.3 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 80% / 0.46 / 49% / 13.8 | 79% / 0.46 / 56% / 14.9 | 80% / 0.44 / 55% / 19.5 |
| ETH | 80% / 0.42 / 49% / 18.5 | 84% / 0.39 / 44% / 32.9 | 78% / 0.37 / 45% / 39.6 |
| SOL | 80% / 0.45 / 61% / 13.1 | 84% / 0.44 / 58% / 28.8 | 84% / 0.42 / 68% / 36.2 |
| BNB | 81% / 0.54 / 53% / 19.8 | 79% / 0.53 / 57% / 11.8 | 83% / 0.54 / 46% / 25.4 |
| XRP | 85% / 0.45 / 63% / 20.1 | 85% / 0.43 / 58% / 38.3 | 90% / 0.41 / 64% / 56.1 |
| SUI | 77% / 0.45 / 55% / 21.2 | 78% / 0.47 / 55% / 17.2 | 88% / 0.46 / 62% / 30.3 |
| AVAX | 81% / 0.44 / 67% / 16.1 | 81% / 0.44 / 66% / 23.2 | 84% / 0.43 / 70% / 38.6 |
| LINK | 84% / 0.43 / 61% / 29.6 | 89% / 0.42 / 52% / 37.6 | 87% / 0.41 / 59% / 43.4 |
| INJ | 84% / 0.52 / 45% / 13.3 | 78% / 0.52 / 55% / 10.7 | 75% / 0.52 / 61% / 26.2 |
| OP | 77% / 0.46 / 56% / 16.4 | 79% / 0.45 / 62% / 21.7 | 84% / 0.44 / 65% / 29 |
| ARB | 77% / 0.45 / 55% / 15.9 | 79% / 0.43 / 60% / 25.4 | 74% / 0.42 / 65% / 33.7 |
| DOGE | 81% / 0.46 / 60% / 15.1 | 86% / 0.45 / 60% / 29.1 | 91% / 0.45 / 68% / 45.1 |
| TIA | 80% / 0.5 / 60% / 3.4 | 85% / 0.5 / 62% / 14.9 | 88% / 0.51 / 71% / 34.1 |
| APT | 77% / 0.47 / 63% / 15.9 | 82% / 0.46 / 62% / 11.5 | 84% / 0.45 / 75% / 20.7 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
