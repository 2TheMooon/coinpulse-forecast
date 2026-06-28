# CoinPulse Strategy Tournament — 2026-06-28

_Generated 2026-06-28T11:11:56.127Z · 14 coins · 300 samples/window · 10.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`garch` · 14d→`gbm_t` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 21.6 |
| 2 | GBM (normal) | 23.4 |
| 3 | GBM + Student-t | 23.6 |
| 4 | GARCH(1,1)-lite | 23.9 |
| 5 | Momentum | 24.3 |
| 6 | Ensemble (GBM-t + bootstraps) | 26.7 |
| 7 | EWMA vol, zero drift (t) | 31.5 |
| 8 | Bootstrap (IID) | 32.5 |
| 9 | Block bootstrap | 33.2 |
| 10 | Mean-reversion (OU) | 54.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GARCH(1,1)-lite | 52 | **79** | 89 | 0.47 | 57 | 26% | 15.0 |
| 2 | GBM (normal) | 53 | **80** | 89 | 0.47 | 58 | 27% | 15.0 |
| 3 | GBM + Student-t | 51 | **78** | 88 | 0.47 | 57 | 26% | 15.4 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 52 | **79** | 89 | 0.47 | 60 | — | 15.7 |
| 5 | Momentum | 49 | **77** | 86 | 0.48 | 54 | 27% | 16.6 |
| 6 | Ensemble (GBM-t + bootstraps) | 52 | **81** | 91 | 0.46 | 53 | 27% | 19.3 |
| 7 | EWMA vol, zero drift (t) | 52 | **78** | 89 | 0.45 | 54 | 26% | 20.1 |
| 8 | Block bootstrap | 53 | **80** | 90 | 0.44 | 53 | 27% | 25.3 |
| 9 | Bootstrap (IID) | 57 | **82** | 92 | 0.45 | 54 | 29% | 26.1 |
| 10 | Mean-reversion (OU) | 53 | **76** | 84 | 0.42 | 47 | 27% | 31.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 50 | **79** | 88 | 0.46 | 57 | 37% | 18.8 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **81** | 88 | 0.47 | 60 | — | 18.8 |
| 3 | Momentum | 45 | **77** | 88 | 0.48 | 51 | 37% | 18.9 |
| 4 | GBM (normal) | 51 | **81** | 90 | 0.46 | 59 | 38% | 19.2 |
| 5 | GARCH(1,1)-lite | 50 | **83** | 90 | 0.46 | 57 | 37% | 20.6 |
| 6 | Ensemble (GBM-t + bootstraps) | 52 | **83** | 91 | 0.44 | 54 | 38% | 25.0 |
| 7 | EWMA vol, zero drift (t) | 53 | **80** | 88 | 0.42 | 55 | 37% | 26.8 |
| 8 | Block bootstrap | 50 | **82** | 90 | 0.43 | 51 | 37% | 28.9 |
| 9 | Bootstrap (IID) | 55 | **85** | 92 | 0.44 | 52 | 41% | 29.9 |
| 10 | Mean-reversion (OU) | 46 | **73** | 79 | 0.41 | 41 | 37% | 43.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **82** | 90 | 0.46 | 68 | — | 30.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 56 | **83** | 92 | 0.41 | 59 | 66% | 35.9 |
| 3 | GBM (normal) | 49 | **73** | 83 | 0.43 | 64 | 53% | 35.9 |
| 4 | GARCH(1,1)-lite | 49 | **76** | 86 | 0.43 | 63 | 53% | 36.2 |
| 5 | GBM + Student-t | 50 | **74** | 82 | 0.42 | 63 | 53% | 36.5 |
| 6 | Momentum | 43 | **69** | 79 | 0.47 | 53 | 52% | 37.4 |
| 7 | Bootstrap (IID) | 52 | **79** | 89 | 0.40 | 58 | 60% | 41.6 |
| 8 | Block bootstrap | 48 | **75** | 85 | 0.39 | 59 | 53% | 45.4 |
| 9 | EWMA vol, zero drift (t) | 53 | **73** | 82 | 0.37 | 66 | 55% | 47.7 |
| 10 | Mean-reversion (OU) | 39 | **56** | 66 | 0.35 | 46 | 47% | 89.2 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 76% / 0.48 / 57% / 16.8 | 79% / 0.49 / 55% / 14.7 | 75% / 0.45 / 67% / 20.5 |
| ETH | 80% / 0.43 / 56% / 20.3 | 82% / 0.41 / 52% / 26.5 | 77% / 0.38 / 55% / 41.1 |
| SOL | 76% / 0.45 / 64% / 19.1 | 84% / 0.45 / 55% / 20.2 | 84% / 0.41 / 68% / 38 |
| BNB | 80% / 0.54 / 55% / 19 | 80% / 0.53 / 59% / 13.1 | 83% / 0.53 / 49% / 16.2 |
| XRP | 83% / 0.46 / 64% / 12.9 | 85% / 0.46 / 63% / 30.5 | 91% / 0.44 / 75% / 47.4 |
| SUI | 79% / 0.47 / 61% / 12.5 | 79% / 0.49 / 63% / 10.5 | 86% / 0.48 / 72% / 16.9 |
| AVAX | 81% / 0.45 / 67% / 12.8 | 78% / 0.45 / 64% / 20.9 | 81% / 0.42 / 67% / 36.4 |
| LINK | 84% / 0.44 / 65% / 25.7 | 86% / 0.44 / 55% / 30.2 | 87% / 0.42 / 62% / 38.9 |
| INJ | 81% / 0.53 / 52% / 10.8 | 77% / 0.53 / 59% / 13.8 | 77% / 0.54 / 71% / 27.5 |
| OP | 76% / 0.48 / 56% / 16.5 | 79% / 0.47 / 62% / 16.3 | 78% / 0.46 / 75% / 24.4 |
| ARB | 75% / 0.45 / 56% / 17.7 | 77% / 0.44 / 64% / 23.9 | 74% / 0.43 / 75% / 33.8 |
| DOGE | 80% / 0.46 / 61% / 15.2 | 82% / 0.46 / 60% / 19.7 | 88% / 0.45 / 67% / 35.5 |
| TIA | 79% / 0.51 / 60% / 5.3 | 82% / 0.52 / 59% / 9.7 | 86% / 0.52 / 71% / 27.9 |
| APT | 75% / 0.47 / 65% / 15.9 | 81% / 0.47 / 64% / 13.1 | 78% / 0.45 / 77% / 21.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
