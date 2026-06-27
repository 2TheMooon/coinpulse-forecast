# CoinPulse Strategy Tournament — 2026-06-27

_Generated 2026-06-27T11:00:06.521Z · 14 coins · 300 samples/window · 9.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 20.6 |
| 2 | GARCH(1,1)-lite | 24.8 |
| 3 | GBM (normal) | 25.7 |
| 4 | GBM + Student-t | 26.4 |
| 5 | Ensemble (GBM-t + bootstraps) | 26.6 |
| 6 | Bootstrap (IID) | 30.8 |
| 7 | Momentum | 30.9 |
| 8 | EWMA vol, zero drift (t) | 31.7 |
| 9 | Block bootstrap | 32.2 |
| 10 | Mean-reversion (OU) | 58.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 88 | 0.48 | 53 | — | 15.1 |
| 2 | Momentum | 49 | **76** | 86 | 0.49 | 51 | 27% | 16.0 |
| 3 | GBM + Student-t | 55 | **80** | 88 | 0.48 | 54 | 26% | 16.3 |
| 4 | GARCH(1,1)-lite | 56 | **80** | 88 | 0.47 | 55 | 26% | 17.5 |
| 5 | GBM (normal) | 57 | **81** | 87 | 0.48 | 55 | 27% | 19.2 |
| 6 | EWMA vol, zero drift (t) | 57 | **80** | 88 | 0.46 | 51 | 26% | 20.6 |
| 7 | Ensemble (GBM-t + bootstraps) | 58 | **84** | 90 | 0.47 | 51 | 27% | 23.3 |
| 8 | Block bootstrap | 56 | **83** | 90 | 0.46 | 49 | 27% | 25.1 |
| 9 | Bootstrap (IID) | 59 | **85** | 92 | 0.46 | 50 | 29% | 27.5 |
| 10 | Mean-reversion (OU) | 53 | **77** | 85 | 0.44 | 47 | 27% | 29.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **81** | 89 | 0.46 | 59 | — | 18.1 |
| 2 | GBM (normal) | 52 | **79** | 87 | 0.46 | 57 | 38% | 19.8 |
| 3 | GARCH(1,1)-lite | 49 | **79** | 86 | 0.46 | 54 | 37% | 20.2 |
| 4 | Ensemble (GBM-t + bootstraps) | 51 | **80** | 89 | 0.44 | 53 | 38% | 22.8 |
| 5 | GBM + Student-t | 47 | **76** | 84 | 0.46 | 56 | 37% | 24.4 |
| 6 | Bootstrap (IID) | 53 | **82** | 91 | 0.43 | 48 | 41% | 25.9 |
| 7 | Block bootstrap | 50 | **79** | 88 | 0.43 | 50 | 37% | 27.8 |
| 8 | EWMA vol, zero drift (t) | 50 | **77** | 85 | 0.42 | 51 | 37% | 27.8 |
| 9 | Momentum | 41 | **71** | 81 | 0.48 | 47 | 37% | 30.9 |
| 10 | Mean-reversion (OU) | 43 | **68** | 76 | 0.41 | 40 | 36% | 53.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **81** | 89 | 0.45 | 64 | — | 28.6 |
| 2 | Ensemble (GBM-t + bootstraps) | 55 | **81** | 90 | 0.42 | 59 | 66% | 33.6 |
| 3 | GARCH(1,1)-lite | 46 | **74** | 84 | 0.43 | 61 | 53% | 36.6 |
| 4 | GBM (normal) | 50 | **73** | 80 | 0.43 | 62 | 53% | 38.2 |
| 5 | GBM + Student-t | 48 | **72** | 79 | 0.43 | 62 | 53% | 38.6 |
| 6 | Bootstrap (IID) | 51 | **78** | 87 | 0.40 | 54 | 60% | 39.1 |
| 7 | Block bootstrap | 47 | **72** | 84 | 0.40 | 55 | 53% | 43.6 |
| 8 | Momentum | 40 | **65** | 75 | 0.47 | 52 | 51% | 45.8 |
| 9 | EWMA vol, zero drift (t) | 54 | **72** | 81 | 0.38 | 65 | 55% | 46.8 |
| 10 | Mean-reversion (OU) | 37 | **54** | 63 | 0.36 | 45 | 46% | 93.2 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 76% / 0.49 / 48% / 16.6 | 78% / 0.48 / 52% / 15 | 75% / 0.45 / 58% / 23.1 |
| ETH | 80% / 0.44 / 48% / 21.6 | 82% / 0.41 / 51% / 29.1 | 80% / 0.38 / 46% / 36 |
| SOL | 81% / 0.47 / 55% / 19.8 | 79% / 0.45 / 53% / 15.2 | 80% / 0.41 / 68% / 29.9 |
| BNB | 80% / 0.54 / 55% / 19 | 80% / 0.53 / 59% / 13.2 | 83% / 0.53 / 48% / 17.7 |
| XRP | 88% / 0.46 / 53% / 26.3 | 85% / 0.45 / 59% / 30.4 | 88% / 0.43 / 72% / 43.4 |
| SUI | 79% / 0.48 / 57% / 9.9 | 81% / 0.48 / 63% / 16.7 | 87% / 0.47 / 65% / 18.2 |
| AVAX | 80% / 0.48 / 57% / 6.6 | 82% / 0.45 / 62% / 16.6 | 78% / 0.43 / 65% / 33.7 |
| LINK | 83% / 0.45 / 48% / 17.1 | 85% / 0.44 / 53% / 29.6 | 81% / 0.42 / 57% / 31.4 |
| INJ | 81% / 0.51 / 53% / 6.5 | 79% / 0.51 / 59% / 4.9 | 72% / 0.53 / 67% / 31.1 |
| OP | 80% / 0.49 / 47% / 6.8 | 79% / 0.47 / 60% / 11.9 | 78% / 0.45 / 72% / 26.4 |
| ARB | 79% / 0.46 / 55% / 17 | 77% / 0.43 / 63% / 29.3 | 71% / 0.43 / 81% / 31 |
| DOGE | 81% / 0.46 / 55% / 20.8 | 81% / 0.45 / 59% / 22.2 | 87% / 0.44 / 58% / 33.1 |
| TIA | 76% / 0.51 / 53% / 7.4 | 81% / 0.51 / 62% / 6.1 | 88% / 0.52 / 71% / 27 |
| APT | 76% / 0.48 / 60% / 16.5 | 79% / 0.46 / 70% / 12.7 | 78% / 0.44 / 77% / 21.8 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
