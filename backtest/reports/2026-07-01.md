# CoinPulse Strategy Tournament — 2026-07-01

_Generated 2026-07-01T12:11:55.236Z · 14 coins · 300 samples/window · 10.6s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 20.0 |
| 2 | GBM + Student-t | 23.3 |
| 3 | GARCH(1,1)-lite | 24.1 |
| 4 | GBM (normal) | 24.3 |
| 5 | Momentum | 28.5 |
| 6 | Ensemble (GBM-t + bootstraps) | 28.9 |
| 7 | Block bootstrap | 30.8 |
| 8 | Bootstrap (IID) | 32.9 |
| 9 | EWMA vol, zero drift (t) | 34.4 |
| 10 | Mean-reversion (OU) | 52.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 51 | **79** | 87 | 0.48 | 55 | — | 15.0 |
| 2 | GBM + Student-t | 53 | **77** | 86 | 0.48 | 58 | 26% | 17.3 |
| 3 | Momentum | 48 | **77** | 85 | 0.48 | 46 | 27% | 17.6 |
| 4 | GARCH(1,1)-lite | 54 | **79** | 87 | 0.47 | 58 | 25% | 17.7 |
| 5 | GBM (normal) | 55 | **78** | 86 | 0.47 | 59 | 27% | 18.9 |
| 6 | EWMA vol, zero drift (t) | 54 | **77** | 87 | 0.45 | 52 | 26% | 23.3 |
| 7 | Ensemble (GBM-t + bootstraps) | 58 | **82** | 91 | 0.46 | 55 | 27% | 24.7 |
| 8 | Block bootstrap | 57 | **81** | 89 | 0.45 | 55 | 26% | 25.0 |
| 9 | Bootstrap (IID) | 59 | **83** | 91 | 0.45 | 53 | 29% | 27.7 |
| 10 | Mean-reversion (OU) | 54 | **79** | 88 | 0.42 | 49 | 28% | 30.9 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 51 | **79** | 87 | 0.47 | 61 | — | 17.5 |
| 2 | GBM + Student-t | 54 | **79** | 87 | 0.46 | 63 | 36% | 19.8 |
| 3 | GARCH(1,1)-lite | 53 | **81** | 88 | 0.46 | 63 | 36% | 20.9 |
| 4 | GBM (normal) | 57 | **82** | 88 | 0.46 | 64 | 38% | 21.5 |
| 5 | Momentum | 46 | **74** | 86 | 0.47 | 51 | 37% | 22.4 |
| 6 | Ensemble (GBM-t + bootstraps) | 55 | **83** | 90 | 0.44 | 63 | 38% | 26.8 |
| 7 | Block bootstrap | 52 | **81** | 89 | 0.43 | 60 | 36% | 28.7 |
| 8 | EWMA vol, zero drift (t) | 55 | **80** | 87 | 0.41 | 58 | 37% | 30.0 |
| 9 | Bootstrap (IID) | 59 | **84** | 92 | 0.43 | 61 | 41% | 32.3 |
| 10 | Mean-reversion (OU) | 49 | **73** | 82 | 0.40 | 49 | 37% | 40.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 87 | 0.46 | 66 | — | 27.4 |
| 2 | GBM (normal) | 48 | **74** | 82 | 0.44 | 67 | 52% | 32.7 |
| 3 | GBM + Student-t | 50 | **74** | 83 | 0.44 | 67 | 52% | 32.9 |
| 4 | GARCH(1,1)-lite | 50 | **77** | 86 | 0.44 | 66 | 52% | 33.6 |
| 5 | Ensemble (GBM-t + bootstraps) | 58 | **83** | 90 | 0.42 | 64 | 65% | 35.0 |
| 6 | Bootstrap (IID) | 54 | **80** | 88 | 0.41 | 63 | 59% | 38.6 |
| 7 | Block bootstrap | 49 | **74** | 85 | 0.40 | 64 | 51% | 38.7 |
| 8 | Momentum | 41 | **67** | 78 | 0.46 | 54 | 52% | 45.4 |
| 9 | EWMA vol, zero drift (t) | 54 | **72** | 80 | 0.37 | 66 | 55% | 49.8 |
| 10 | Mean-reversion (OU) | 40 | **59** | 67 | 0.35 | 48 | 47% | 84.6 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 73% / 0.48 / 49% / 24.4 | 75% / 0.48 / 53% / 24.4 | 74% / 0.44 / 58% / 30.4 |
| ETH | 79% / 0.45 / 52% / 20.9 | 81% / 0.43 / 58% / 19.4 | 78% / 0.4 / 55% / 36.1 |
| SOL | 80% / 0.48 / 55% / 15.3 | 79% / 0.45 / 53% / 11.7 | 80% / 0.41 / 68% / 28.9 |
| BNB | 81% / 0.53 / 55% / 17.7 | 78% / 0.52 / 60% / 12.5 | 81% / 0.52 / 49% / 12.8 |
| XRP | 87% / 0.47 / 60% / 14.8 | 82% / 0.47 / 67% / 24.2 | 90% / 0.46 / 75% / 36.7 |
| SUI | 73% / 0.49 / 57% / 18.8 | 78% / 0.48 / 64% / 20.9 | 87% / 0.48 / 65% / 22.3 |
| AVAX | 77% / 0.49 / 52% / 6.5 | 79% / 0.45 / 59% / 15.5 | 77% / 0.43 / 65% / 32.2 |
| LINK | 83% / 0.46 / 49% / 14.6 | 84% / 0.45 / 55% / 17 | 83% / 0.43 / 58% / 23.9 |
| INJ | 79% / 0.52 / 56% / 9.4 | 79% / 0.51 / 62% / 11.2 | 72% / 0.53 / 67% / 32.4 |
| OP | 80% / 0.49 / 53% / 8.9 | 78% / 0.47 / 66% / 12.9 | 78% / 0.46 / 77% / 25.8 |
| ARB | 79% / 0.46 / 59% / 16.4 | 73% / 0.43 / 68% / 30.5 | 67% / 0.43 / 81% / 38.4 |
| DOGE | 80% / 0.46 / 55% / 16.9 | 78% / 0.44 / 60% / 20.3 | 83% / 0.44 / 59% / 23.1 |
| TIA | 76% / 0.51 / 53% / 7.4 | 78% / 0.51 / 62% / 5.2 | 86% / 0.52 / 71% / 20 |
| APT | 75% / 0.48 / 61% / 18.1 | 77% / 0.46 / 71% / 18.2 | 75% / 0.44 / 77% / 25.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
