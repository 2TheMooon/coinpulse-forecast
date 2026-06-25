# CoinPulse Strategy Tournament — 2026-06-25

_Generated 2026-06-25T11:43:20.606Z · 14 coins · 300 samples/window · 7.0s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 21.9 |
| 2 | GBM (normal) | 25.5 |
| 3 | GBM + Student-t | 25.5 |
| 4 | GARCH(1,1)-lite | 26.1 |
| 5 | Momentum | 28.1 |
| 6 | Ensemble (GBM-t + bootstraps) | 29.5 |
| 7 | EWMA vol, zero drift (t) | 32.7 |
| 8 | Block bootstrap | 33.3 |
| 9 | Bootstrap (IID) | 34.3 |
| 10 | Mean-reversion (OU) | 53.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **77** | 84 | 0.48 | 47 | 27% | 15.0 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 58 | **78** | 86 | 0.48 | 57 | — | 19.3 |
| 3 | GBM (normal) | 55 | **79** | 86 | 0.47 | 58 | 27% | 19.9 |
| 4 | GBM + Student-t | 55 | **77** | 86 | 0.47 | 55 | 26% | 19.9 |
| 5 | GARCH(1,1)-lite | 56 | **80** | 87 | 0.47 | 57 | 26% | 20.1 |
| 6 | Ensemble (GBM-t + bootstraps) | 56 | **83** | 90 | 0.46 | 51 | 27% | 23.7 |
| 7 | EWMA vol, zero drift (t) | 54 | **76** | 86 | 0.45 | 52 | 26% | 23.9 |
| 8 | Block bootstrap | 55 | **82** | 90 | 0.45 | 50 | 27% | 27.0 |
| 9 | Bootstrap (IID) | 60 | **84** | 91 | 0.45 | 49 | 28% | 30.0 |
| 10 | Mean-reversion (OU) | 53 | **78** | 88 | 0.42 | 53 | 27% | 31.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 87 | 0.47 | 60 | — | 17.5 |
| 2 | GBM + Student-t | 55 | **80** | 87 | 0.46 | 61 | 37% | 21.7 |
| 3 | GARCH(1,1)-lite | 55 | **82** | 88 | 0.46 | 61 | 37% | 23.1 |
| 4 | GBM (normal) | 57 | **81** | 87 | 0.46 | 61 | 38% | 23.5 |
| 5 | Momentum | 44 | **73** | 85 | 0.48 | 49 | 37% | 25.3 |
| 6 | EWMA vol, zero drift (t) | 56 | **81** | 87 | 0.42 | 52 | 37% | 28.1 |
| 7 | Ensemble (GBM-t + bootstraps) | 56 | **83** | 90 | 0.43 | 58 | 39% | 28.7 |
| 8 | Block bootstrap | 55 | **82** | 88 | 0.43 | 54 | 37% | 31.6 |
| 9 | Bootstrap (IID) | 59 | **84** | 92 | 0.43 | 59 | 41% | 33.2 |
| 10 | Mean-reversion (OU) | 49 | **72** | 81 | 0.40 | 48 | 37% | 42.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **81** | 89 | 0.46 | 65 | — | 29.0 |
| 2 | GBM (normal) | 52 | **75** | 83 | 0.44 | 63 | 53% | 32.9 |
| 3 | GBM + Student-t | 52 | **73** | 82 | 0.43 | 64 | 53% | 34.9 |
| 4 | GARCH(1,1)-lite | 51 | **75** | 85 | 0.43 | 63 | 53% | 35.1 |
| 5 | Ensemble (GBM-t + bootstraps) | 58 | **82** | 90 | 0.42 | 60 | 67% | 36.0 |
| 6 | Bootstrap (IID) | 55 | **79** | 88 | 0.40 | 58 | 60% | 39.9 |
| 7 | Block bootstrap | 49 | **74** | 84 | 0.40 | 58 | 53% | 41.2 |
| 8 | Momentum | 43 | **66** | 77 | 0.47 | 52 | 52% | 44.0 |
| 9 | EWMA vol, zero drift (t) | 54 | **73** | 82 | 0.38 | 69 | 55% | 46.2 |
| 10 | Mean-reversion (OU) | 39 | **58** | 65 | 0.35 | 48 | 47% | 87.8 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 76% / 0.49 / 55% / 13.1 | 78% / 0.48 / 53% / 15 | 72% / 0.45 / 58% / 28 |
| ETH | 79% / 0.45 / 47% / 24 | 82% / 0.41 / 53% / 27.2 | 77% / 0.38 / 54% / 40.9 |
| SOL | 75% / 0.47 / 57% / 27.7 | 82% / 0.44 / 59% / 18.6 | 81% / 0.41 / 68% / 33.2 |
| BNB | 80% / 0.54 / 54% / 18.6 | 79% / 0.53 / 59% / 13.7 | 83% / 0.53 / 48% / 19.2 |
| XRP | 79% / 0.47 / 57% / 20.1 | 85% / 0.45 / 63% / 30.8 | 90% / 0.43 / 65% / 48.1 |
| SUI | 79% / 0.48 / 60% / 7.4 | 79% / 0.47 / 59% / 11.6 | 84% / 0.47 / 67% / 12.8 |
| AVAX | 84% / 0.46 / 60% / 25.7 | 81% / 0.44 / 64% / 24.1 | 83% / 0.43 / 62% / 30 |
| LINK | 83% / 0.46 / 57% / 23.4 | 82% / 0.43 / 62% / 18.7 | 83% / 0.41 / 55% / 35.1 |
| INJ | 73% / 0.53 / 57% / 21.5 | 75% / 0.53 / 56% / 20.8 | 77% / 0.54 / 67% / 22.8 |
| OP | 77% / 0.5 / 56% / 17.4 | 78% / 0.47 / 60% / 10.9 | 74% / 0.46 / 71% / 28.9 |
| ARB | 75% / 0.46 / 64% / 25 | 79% / 0.44 / 64% / 20.6 | 75% / 0.43 / 78% / 29.4 |
| DOGE | 77% / 0.48 / 53% / 19.4 | 79% / 0.47 / 62% / 11.4 | 90% / 0.46 / 64% / 35.4 |
| TIA | 79% / 0.51 / 63% / 13.3 | 81% / 0.51 / 62% / 10.2 | 87% / 0.52 / 71% / 24.9 |
| APT | 80% / 0.48 / 59% / 13 | 82% / 0.47 / 66% / 11.6 | 83% / 0.45 / 80% / 19.5 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
