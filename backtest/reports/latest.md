# CoinPulse Strategy Tournament — 2026-06-26

_Generated 2026-06-26T11:47:34.597Z · 14 coins · 300 samples/window · 10.3s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 22.9 |
| 2 | GARCH(1,1)-lite | 26.8 |
| 3 | GBM (normal) | 27.2 |
| 4 | GBM + Student-t | 27.5 |
| 5 | Ensemble (GBM-t + bootstraps) | 29.5 |
| 6 | Momentum | 29.7 |
| 7 | EWMA vol, zero drift (t) | 33.3 |
| 8 | Bootstrap (IID) | 34.8 |
| 9 | Block bootstrap | 34.9 |
| 10 | Mean-reversion (OU) | 55.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 88 | 0.47 | 58 | — | 18.2 |
| 2 | Momentum | 53 | **78** | 85 | 0.48 | 50 | 27% | 19.0 |
| 3 | GBM + Student-t | 56 | **80** | 89 | 0.47 | 59 | 26% | 20.1 |
| 4 | GBM (normal) | 58 | **81** | 89 | 0.46 | 61 | 27% | 21.8 |
| 5 | GARCH(1,1)-lite | 57 | **82** | 89 | 0.46 | 61 | 26% | 21.8 |
| 6 | EWMA vol, zero drift (t) | 56 | **80** | 89 | 0.44 | 51 | 26% | 24.5 |
| 7 | Ensemble (GBM-t + bootstraps) | 57 | **83** | 92 | 0.45 | 54 | 27% | 25.4 |
| 8 | Block bootstrap | 57 | **85** | 91 | 0.44 | 52 | 27% | 27.8 |
| 9 | Bootstrap (IID) | 59 | **85** | 93 | 0.44 | 53 | 28% | 30.0 |
| 10 | Mean-reversion (OU) | 54 | **79** | 88 | 0.42 | 51 | 27% | 31.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 53 | **79** | 88 | 0.46 | 60 | — | 18.7 |
| 2 | GARCH(1,1)-lite | 55 | **79** | 86 | 0.46 | 62 | 37% | 24.7 |
| 3 | GBM (normal) | 57 | **78** | 86 | 0.46 | 62 | 38% | 24.9 |
| 4 | GBM + Student-t | 55 | **76** | 85 | 0.46 | 62 | 36% | 26.3 |
| 5 | Momentum | 43 | **72** | 84 | 0.48 | 50 | 37% | 26.3 |
| 6 | Ensemble (GBM-t + bootstraps) | 58 | **81** | 89 | 0.43 | 59 | 39% | 28.8 |
| 7 | EWMA vol, zero drift (t) | 55 | **79** | 85 | 0.42 | 56 | 37% | 29.6 |
| 8 | Block bootstrap | 55 | **79** | 88 | 0.42 | 56 | 37% | 32.5 |
| 9 | Bootstrap (IID) | 58 | **83** | 91 | 0.43 | 55 | 42% | 32.9 |
| 10 | Mean-reversion (OU) | 48 | **71** | 80 | 0.40 | 49 | 37% | 44.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **81** | 89 | 0.45 | 63 | — | 31.8 |
| 2 | GARCH(1,1)-lite | 49 | **76** | 85 | 0.43 | 63 | 53% | 34.0 |
| 3 | Ensemble (GBM-t + bootstraps) | 56 | **82** | 92 | 0.41 | 59 | 67% | 34.5 |
| 4 | GBM (normal) | 51 | **74** | 82 | 0.43 | 63 | 53% | 35.0 |
| 5 | GBM + Student-t | 50 | **73** | 82 | 0.43 | 63 | 53% | 36.0 |
| 6 | Bootstrap (IID) | 52 | **77** | 87 | 0.40 | 55 | 60% | 41.6 |
| 7 | Momentum | 43 | **66** | 75 | 0.47 | 53 | 52% | 43.8 |
| 8 | Block bootstrap | 47 | **74** | 84 | 0.39 | 56 | 54% | 44.5 |
| 9 | EWMA vol, zero drift (t) | 53 | **73** | 83 | 0.38 | 67 | 55% | 45.8 |
| 10 | Mean-reversion (OU) | 38 | **57** | 64 | 0.35 | 47 | 47% | 91.9 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 79% / 0.48 / 56% / 7.8 | 78% / 0.48 / 55% / 13.7 | 74% / 0.44 / 58% / 30.6 |
| ETH | 84% / 0.43 / 47% / 28.2 | 84% / 0.41 / 51% / 28.9 | 78% / 0.38 / 46% / 36 |
| SOL | 75% / 0.47 / 53% / 30.5 | 81% / 0.44 / 60% / 14.5 | 84% / 0.4 / 64% / 37.9 |
| BNB | 80% / 0.54 / 55% / 18.9 | 79% / 0.53 / 59% / 13.7 | 83% / 0.53 / 48% / 17.7 |
| XRP | 84% / 0.45 / 61% / 21.9 | 81% / 0.44 / 62% / 23.4 | 91% / 0.42 / 67% / 55.9 |
| SUI | 77% / 0.47 / 65% / 20.9 | 74% / 0.47 / 68% / 18.6 | 87% / 0.45 / 65% / 21.1 |
| AVAX | 80% / 0.46 / 65% / 13.3 | 81% / 0.44 / 63% / 21.1 | 80% / 0.42 / 58% / 33.9 |
| LINK | 87% / 0.44 / 56% / 23.3 | 79% / 0.43 / 56% / 25.3 | 81% / 0.4 / 54% / 38.3 |
| INJ | 77% / 0.5 / 56% / 8.4 | 79% / 0.51 / 55% / 14.2 | 72% / 0.52 / 65% / 30.5 |
| OP | 80% / 0.47 / 56% / 13.8 | 78% / 0.46 / 62% / 16.2 | 77% / 0.45 / 72% / 20.4 |
| ARB | 72% / 0.44 / 61% / 28.6 | 75% / 0.43 / 68% / 30.6 | 74% / 0.42 / 78% / 33.1 |
| DOGE | 81% / 0.45 / 65% / 18.4 | 79% / 0.45 / 58% / 16.3 | 90% / 0.44 / 61% / 44.4 |
| TIA | 83% / 0.5 / 59% / 9.9 | 84% / 0.5 / 63% / 7.8 | 87% / 0.51 / 71% / 25.3 |
| APT | 77% / 0.48 / 56% / 11.3 | 79% / 0.46 / 63% / 17.7 | 77% / 0.43 / 74% / 24.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
