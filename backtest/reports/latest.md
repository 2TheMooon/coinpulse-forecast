# CoinPulse Strategy Tournament — 2026-06-21

_Generated 2026-06-21T11:48:42.691Z · 14 coins · 300 samples/window · 10.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 24.7 |
| 2 | GARCH(1,1)-lite | 27.4 |
| 3 | GBM (normal) | 27.5 |
| 4 | Ensemble (GBM-t + bootstraps) | 28.1 |
| 5 | GBM + Student-t | 28.4 |
| 6 | EWMA vol, zero drift (t) | 29.9 |
| 7 | Momentum | 30.6 |
| 8 | Bootstrap (IID) | 32.9 |
| 9 | Block bootstrap | 34.1 |
| 10 | Mean-reversion (OU) | 63.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **78** | 87 | 0.50 | 50 | 27% | 15.6 |
| 2 | GARCH(1,1)-lite | 56 | **81** | 88 | 0.48 | 53 | 26% | 19.3 |
| 3 | GBM + Student-t | 58 | **80** | 88 | 0.48 | 54 | 26% | 19.4 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 60 | **81** | 88 | 0.48 | 57 | — | 20.6 |
| 5 | GBM (normal) | 59 | **81** | 88 | 0.47 | 54 | 27% | 20.8 |
| 6 | EWMA vol, zero drift (t) | 60 | **82** | 88 | 0.47 | 55 | 26% | 21.7 |
| 7 | Ensemble (GBM-t + bootstraps) | 59 | **83** | 90 | 0.46 | 52 | 27% | 22.6 |
| 8 | Block bootstrap | 58 | **83** | 90 | 0.45 | 51 | 28% | 27.1 |
| 9 | Bootstrap (IID) | 60 | **85** | 92 | 0.46 | 48 | 29% | 28.1 |
| 10 | Mean-reversion (OU) | 52 | **76** | 84 | 0.43 | 46 | 27% | 30.8 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **82** | 88 | 0.46 | 59 | — | 21.2 |
| 2 | GBM (normal) | 51 | **76** | 86 | 0.45 | 54 | 38% | 21.8 |
| 3 | GARCH(1,1)-lite | 48 | **77** | 86 | 0.45 | 52 | 37% | 23.7 |
| 4 | GBM + Student-t | 49 | **75** | 84 | 0.45 | 51 | 37% | 25.6 |
| 5 | EWMA vol, zero drift (t) | 52 | **76** | 86 | 0.43 | 52 | 37% | 25.6 |
| 6 | Ensemble (GBM-t + bootstraps) | 51 | **79** | 87 | 0.43 | 50 | 39% | 25.8 |
| 7 | Block bootstrap | 51 | **80** | 88 | 0.43 | 44 | 39% | 28.9 |
| 8 | Bootstrap (IID) | 54 | **82** | 89 | 0.42 | 47 | 41% | 29.1 |
| 9 | Momentum | 41 | **71** | 82 | 0.48 | 47 | 37% | 30.5 |
| 10 | Mean-reversion (OU) | 41 | **66** | 74 | 0.40 | 38 | 36% | 62.2 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 60 | **83** | 89 | 0.45 | 62 | — | 32.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 56 | **79** | 90 | 0.41 | 52 | 68% | 35.8 |
| 3 | GARCH(1,1)-lite | 47 | **73** | 83 | 0.42 | 57 | 55% | 39.1 |
| 4 | GBM (normal) | 51 | **72** | 79 | 0.43 | 57 | 55% | 39.9 |
| 5 | GBM + Student-t | 50 | **73** | 79 | 0.42 | 56 | 54% | 40.3 |
| 6 | Bootstrap (IID) | 52 | **76** | 86 | 0.39 | 48 | 61% | 41.5 |
| 7 | EWMA vol, zero drift (t) | 55 | **74** | 82 | 0.39 | 64 | 55% | 42.5 |
| 8 | Momentum | 40 | **65** | 76 | 0.48 | 50 | 52% | 45.5 |
| 9 | Block bootstrap | 49 | **71** | 83 | 0.39 | 50 | 56% | 46.2 |
| 10 | Mean-reversion (OU) | 36 | **53** | 61 | 0.36 | 44 | 46% | 98.8 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 80% / 0.49 / 55% / 10.7 | 79% / 0.46 / 55% / 23 | 75% / 0.43 / 51% / 30.2 |
| ETH | 81% / 0.45 / 48% / 26.3 | 84% / 0.4 / 49% / 30.1 | 78% / 0.37 / 45% / 42.5 |
| SOL | 76% / 0.47 / 56% / 23.1 | 84% / 0.43 / 58% / 22.5 | 83% / 0.41 / 70% / 35.3 |
| BNB | 81% / 0.54 / 53% / 19.8 | 79% / 0.53 / 58% / 11.9 | 83% / 0.54 / 46% / 26.6 |
| XRP | 83% / 0.46 / 59% / 24.5 | 85% / 0.43 / 64% / 35 | 88% / 0.41 / 65% / 51.6 |
| SUI | 81% / 0.48 / 63% / 12.4 | 81% / 0.46 / 59% / 18.3 | 87% / 0.46 / 62% / 21.8 |
| AVAX | 85% / 0.46 / 60% / 27.4 | 81% / 0.43 / 64% / 25.7 | 84% / 0.43 / 65% / 36.8 |
| LINK | 83% / 0.45 / 56% / 26.7 | 84% / 0.42 / 60% / 24.4 | 84% / 0.41 / 54% / 40.4 |
| INJ | 81% / 0.53 / 56% / 17.1 | 77% / 0.52 / 53% / 17.7 | 77% / 0.53 / 64% / 20.9 |
| OP | 79% / 0.49 / 57% / 17.7 | 79% / 0.46 / 62% / 15.2 | 78% / 0.45 / 68% / 24.7 |
| ARB | 75% / 0.45 / 64% / 31.1 | 81% / 0.42 / 59% / 24.9 | 75% / 0.42 / 67% / 31.1 |
| DOGE | 83% / 0.48 / 59% / 24.2 | 85% / 0.45 / 64% / 22.1 | 93% / 0.45 / 64% / 45.5 |
| TIA | 80% / 0.51 / 60% / 10.5 | 82% / 0.49 / 62% / 12 | 87% / 0.51 / 70% / 23.6 |
| APT | 83% / 0.48 / 55% / 16.2 | 85% / 0.46 / 64% / 13.3 | 83% / 0.45 / 78% / 22.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
