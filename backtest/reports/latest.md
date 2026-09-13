# CoinPulse Strategy Tournament — 2026-09-13

_Generated 2026-09-13T13:44:17.433Z · 14 coins · 300 samples/window · 12.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_t` · 14d→`gbm_t` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 28.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 28.9 |
| 3 | GBM + Student-t | 30.5 |
| 4 | Bootstrap (IID) | 30.7 |
| 5 | GBM (normal) | 30.8 |
| 6 | GARCH(1,1)-lite | 32.3 |
| 7 | EWMA vol, zero drift (t) | 32.4 |
| 8 | Block bootstrap | 34.9 |
| 9 | Momentum | 36.2 |
| 10 | Mean-reversion (OU) | 66.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 52 | **77** | 87 | 0.51 | 46 | 20% | 17.9 |
| 2 | Bootstrap (IID) | 53 | **78** | 88 | 0.50 | 44 | 21% | 18.2 |
| 3 | GBM (normal) | 52 | **79** | 86 | 0.50 | 51 | 21% | 18.5 |
| 4 | Ensemble (GBM-t + bootstraps) | 51 | **78** | 87 | 0.50 | 46 | 21% | 18.8 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 56 | **80** | 86 | 0.50 | 43 | — | 19.3 |
| 6 | GARCH(1,1)-lite | 51 | **76** | 87 | 0.50 | 47 | 20% | 19.4 |
| 7 | Block bootstrap | 52 | **78** | 86 | 0.49 | 51 | 20% | 19.7 |
| 8 | Momentum | 48 | **76** | 85 | 0.49 | 51 | 21% | 20.7 |
| 9 | EWMA vol, zero drift (t) | 53 | **78** | 87 | 0.51 | 47 | 20% | 20.9 |
| 10 | Mean-reversion (OU) | 47 | **71** | 78 | 0.49 | 50 | 18% | 36.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 51 | **75** | 85 | 0.52 | 44 | 29% | 23.8 |
| 2 | GBM (normal) | 53 | **76** | 85 | 0.52 | 47 | 30% | 24.6 |
| 3 | Bootstrap (IID) | 54 | **78** | 84 | 0.51 | 47 | 30% | 24.8 |
| 4 | EWMA vol, zero drift (t) | 51 | **77** | 86 | 0.52 | 49 | 29% | 24.8 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 57 | **79** | 87 | 0.51 | 45 | — | 25.1 |
| 6 | Ensemble (GBM-t + bootstraps) | 53 | **76** | 85 | 0.51 | 47 | 29% | 25.5 |
| 7 | Momentum | 46 | **75** | 83 | 0.51 | 53 | 30% | 25.9 |
| 8 | GARCH(1,1)-lite | 50 | **76** | 84 | 0.52 | 46 | 28% | 26.0 |
| 9 | Block bootstrap | 52 | **75** | 83 | 0.50 | 49 | 29% | 28.0 |
| 10 | Mean-reversion (OU) | 40 | **62** | 72 | 0.49 | 50 | 22% | 60.5 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **73** | 80 | 0.49 | 36 | — | 41.6 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **72** | 81 | 0.49 | 41 | 51% | 42.5 |
| 3 | Bootstrap (IID) | 48 | **68** | 76 | 0.49 | 37 | 45% | 49.0 |
| 4 | GBM (normal) | 47 | **68** | 74 | 0.51 | 41 | 42% | 49.2 |
| 5 | GBM + Student-t | 45 | **67** | 74 | 0.51 | 39 | 42% | 49.9 |
| 6 | GARCH(1,1)-lite | 45 | **66** | 74 | 0.51 | 42 | 41% | 51.4 |
| 7 | EWMA vol, zero drift (t) | 48 | **69** | 76 | 0.50 | 51 | 42% | 51.5 |
| 8 | Block bootstrap | 45 | **65** | 72 | 0.48 | 38 | 42% | 56.9 |
| 9 | Momentum | 35 | **59** | 72 | 0.53 | 49 | 42% | 62.0 |
| 10 | Mean-reversion (OU) | 32 | **49** | 56 | 0.44 | 60 | 27% | 102.5 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 85% / 0.49 / 42% / 14.5 | 77% / 0.49 / 37% / 20.5 | 57% / 0.49 / 19% / 58.6 |
| ETH | 81% / 0.49 / 35% / 17.9 | 75% / 0.5 / 31% / 22.3 | 57% / 0.51 / 10% / 63.7 |
| SOL | 76% / 0.53 / 39% / 32.3 | 76% / 0.54 / 38% / 29.8 | 70% / 0.55 / 32% / 36.5 |
| BNB | 85% / 0.55 / 31% / 25 | 80% / 0.58 / 41% / 25.6 | 70% / 0.56 / 27% / 31.4 |
| XRP | 84% / 0.47 / 43% / 13.6 | 80% / 0.47 / 48% / 26.1 | 65% / 0.48 / 48% / 44.3 |
| SUI | 85% / 0.5 / 42% / 11.6 | 83% / 0.51 / 45% / 17.7 | 89% / 0.49 / 51% / 29.4 |
| AVAX | 85% / 0.5 / 47% / 26.3 | 80% / 0.5 / 46% / 20 | 76% / 0.48 / 52% / 29.7 |
| LINK | 76% / 0.54 / 41% / 21.5 | 75% / 0.55 / 45% / 19.6 | 63% / 0.57 / 19% / 56.5 |
| INJ | 76% / 0.55 / 62% / 21 | 87% / 0.56 / 61% / 25.1 | 81% / 0.53 / 56% / 19 |
| OP | 80% / 0.48 / 42% / 18 | 85% / 0.48 / 44% / 25.5 | 90% / 0.45 / 41% / 45.6 |
| ARB | 70% / 0.48 / 38% / 36.2 | 61% / 0.49 / 42% / 42.7 | 71% / 0.45 / 16% / 32.2 |
| DOGE | 80% / 0.49 / 47% / 14.3 | 73% / 0.48 / 52% / 22.5 | 59% / 0.46 / 44% / 50.3 |
| TIA | 78% / 0.49 / 34% / 8 | 89% / 0.51 / 44% / 26.4 | 97% / 0.48 / 24% / 48.3 |
| APT | 81% / 0.5 / 51% / 10.2 | 87% / 0.48 / 58% / 27.6 | 78% / 0.43 / 59% / 37.1 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
