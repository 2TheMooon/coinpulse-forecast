# CoinPulse Strategy Tournament — 2026-06-30

_Generated 2026-06-30T11:47:38.137Z · 14 coins · 300 samples/window · 10.4s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 21.7 |
| 2 | GBM + Student-t | 22.4 |
| 3 | GARCH(1,1)-lite | 22.7 |
| 4 | GBM (normal) | 22.8 |
| 5 | Momentum | 25.0 |
| 6 | Ensemble (GBM-t + bootstraps) | 27.2 |
| 7 | Block bootstrap | 30.2 |
| 8 | EWMA vol, zero drift (t) | 31.4 |
| 9 | Bootstrap (IID) | 32.1 |
| 10 | Mean-reversion (OU) | 51.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 48 | **77** | 88 | 0.48 | 55 | 27% | 14.9 |
| 2 | GBM + Student-t | 51 | **78** | 90 | 0.48 | 59 | 26% | 15.9 |
| 3 | GBM (normal) | 53 | **79** | 90 | 0.47 | 61 | 27% | 16.6 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 88 | 0.47 | 59 | — | 17.0 |
| 5 | GARCH(1,1)-lite | 52 | **79** | 90 | 0.47 | 59 | 26% | 17.6 |
| 6 | EWMA vol, zero drift (t) | 50 | **79** | 89 | 0.45 | 51 | 26% | 18.6 |
| 7 | Ensemble (GBM-t + bootstraps) | 55 | **83** | 93 | 0.46 | 56 | 27% | 21.8 |
| 8 | Block bootstrap | 53 | **81** | 92 | 0.45 | 55 | 26% | 23.0 |
| 9 | Mean-reversion (OU) | 52 | **80** | 87 | 0.42 | 49 | 28% | 27.7 |
| 10 | Bootstrap (IID) | 58 | **85** | 95 | 0.46 | 53 | 29% | 28.9 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 53 | **80** | 88 | 0.47 | 62 | — | 17.9 |
| 2 | GBM + Student-t | 51 | **79** | 88 | 0.46 | 59 | 37% | 18.1 |
| 3 | GBM (normal) | 52 | **82** | 89 | 0.46 | 61 | 38% | 18.4 |
| 4 | Momentum | 45 | **76** | 88 | 0.48 | 52 | 37% | 18.6 |
| 5 | GARCH(1,1)-lite | 50 | **79** | 91 | 0.46 | 60 | 37% | 18.9 |
| 6 | Ensemble (GBM-t + bootstraps) | 52 | **82** | 91 | 0.44 | 60 | 38% | 24.6 |
| 7 | EWMA vol, zero drift (t) | 51 | **80** | 88 | 0.42 | 56 | 38% | 26.3 |
| 8 | Block bootstrap | 50 | **82** | 90 | 0.43 | 56 | 37% | 29.1 |
| 9 | Bootstrap (IID) | 56 | **85** | 93 | 0.44 | 61 | 41% | 30.5 |
| 10 | Mean-reversion (OU) | 46 | **72** | 82 | 0.40 | 48 | 37% | 44.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **82** | 89 | 0.45 | 65 | — | 30.1 |
| 2 | GARCH(1,1)-lite | 51 | **78** | 87 | 0.44 | 67 | 53% | 31.7 |
| 3 | GBM (normal) | 50 | **74** | 83 | 0.44 | 69 | 53% | 33.2 |
| 4 | GBM + Student-t | 51 | **74** | 84 | 0.43 | 68 | 52% | 33.3 |
| 5 | Ensemble (GBM-t + bootstraps) | 59 | **83** | 92 | 0.42 | 65 | 66% | 35.1 |
| 6 | Bootstrap (IID) | 55 | **80** | 89 | 0.40 | 63 | 59% | 37.0 |
| 7 | Block bootstrap | 50 | **76** | 85 | 0.40 | 63 | 52% | 38.4 |
| 8 | Momentum | 40 | **69** | 79 | 0.46 | 56 | 52% | 41.6 |
| 9 | EWMA vol, zero drift (t) | 54 | **72** | 81 | 0.37 | 67 | 55% | 49.2 |
| 10 | Mean-reversion (OU) | 41 | **60** | 69 | 0.34 | 47 | 47% | 82.8 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 79% / 0.48 / 56% / 9.6 | 78% / 0.47 / 55% / 15.5 | 72% / 0.44 / 59% / 29.8 |
| ETH | 84% / 0.44 / 52% / 28.7 | 84% / 0.42 / 55% / 27.2 | 78% / 0.39 / 57% / 34.3 |
| SOL | 75% / 0.47 / 57% / 25.2 | 81% / 0.45 / 60% / 13.2 | 86% / 0.41 / 67% / 36.5 |
| BNB | 81% / 0.53 / 55% / 18.9 | 80% / 0.52 / 60% / 10.9 | 83% / 0.52 / 49% / 14.7 |
| XRP | 85% / 0.46 / 67% / 21.4 | 81% / 0.45 / 67% / 21.2 | 91% / 0.44 / 72% / 52.3 |
| SUI | 77% / 0.48 / 64% / 18.5 | 77% / 0.48 / 70% / 11.3 | 90% / 0.47 / 65% / 19.4 |
| AVAX | 80% / 0.47 / 63% / 12.6 | 78% / 0.45 / 60% / 21 | 78% / 0.42 / 58% / 32.3 |
| LINK | 87% / 0.44 / 57% / 20.8 | 82% / 0.43 / 58% / 26.1 | 84% / 0.41 / 55% / 37.7 |
| INJ | 76% / 0.51 / 57% / 10.1 | 81% / 0.52 / 59% / 17 | 74% / 0.53 / 65% / 28.1 |
| OP | 80% / 0.48 / 57% / 12.5 | 77% / 0.47 / 66% / 15.3 | 80% / 0.46 / 75% / 17.2 |
| ARB | 72% / 0.45 / 64% / 25 | 75% / 0.43 / 73% / 28.1 | 77% / 0.43 / 80% / 27.3 |
| DOGE | 80% / 0.45 / 61% / 14.3 | 78% / 0.45 / 56% / 15.1 | 90% / 0.44 / 67% / 42.5 |
| TIA | 83% / 0.5 / 57% / 10.3 | 84% / 0.51 / 63% / 9.2 | 88% / 0.52 / 71% / 29 |
| APT | 77% / 0.48 / 57% / 11 | 81% / 0.46 / 64% / 18.6 | 75% / 0.44 / 74% / 24.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
