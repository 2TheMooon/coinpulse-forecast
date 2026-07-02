# CoinPulse Strategy Tournament — 2026-07-02

_Generated 2026-07-02T11:38:05.142Z · 14 coins · 300 samples/window · 10.6s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_t` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 21.2 |
| 2 | GARCH(1,1)-lite | 24.5 |
| 3 | GBM + Student-t | 25.4 |
| 4 | GBM (normal) | 26.3 |
| 5 | Ensemble (GBM-t + bootstraps) | 28.9 |
| 6 | Block bootstrap | 30.2 |
| 7 | Bootstrap (IID) | 32.0 |
| 8 | Momentum | 32.0 |
| 9 | EWMA vol, zero drift (t) | 35.0 |
| 10 | Mean-reversion (OU) | 52.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 55 | **81** | 89 | 0.48 | 62 | 26% | 17.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 49 | **76** | 87 | 0.48 | 61 | — | 17.5 |
| 3 | GARCH(1,1)-lite | 56 | **80** | 89 | 0.47 | 62 | 25% | 18.9 |
| 4 | Momentum | 51 | **77** | 85 | 0.47 | 50 | 26% | 19.3 |
| 5 | GBM (normal) | 58 | **81** | 89 | 0.47 | 62 | 26% | 21.0 |
| 6 | EWMA vol, zero drift (t) | 55 | **80** | 89 | 0.44 | 56 | 26% | 22.3 |
| 7 | Block bootstrap | 55 | **83** | 91 | 0.45 | 61 | 26% | 23.0 |
| 8 | Ensemble (GBM-t + bootstraps) | 58 | **85** | 92 | 0.46 | 63 | 27% | 26.3 |
| 9 | Bootstrap (IID) | 59 | **86** | 92 | 0.45 | 55 | 29% | 28.0 |
| 10 | Mean-reversion (OU) | 56 | **80** | 88 | 0.43 | 48 | 28% | 31.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 52 | **79** | 87 | 0.47 | 62 | — | 18.0 |
| 2 | GARCH(1,1)-lite | 53 | **78** | 87 | 0.46 | 64 | 36% | 23.4 |
| 3 | GBM (normal) | 57 | **79** | 87 | 0.46 | 65 | 37% | 24.5 |
| 4 | GBM + Student-t | 54 | **77** | 85 | 0.46 | 64 | 36% | 24.5 |
| 5 | Ensemble (GBM-t + bootstraps) | 56 | **81** | 88 | 0.44 | 63 | 38% | 26.7 |
| 6 | Block bootstrap | 52 | **78** | 88 | 0.43 | 60 | 36% | 27.7 |
| 7 | Momentum | 43 | **72** | 84 | 0.47 | 53 | 37% | 28.2 |
| 8 | Bootstrap (IID) | 57 | **82** | 91 | 0.43 | 59 | 41% | 31.5 |
| 9 | EWMA vol, zero drift (t) | 55 | **77** | 84 | 0.41 | 57 | 37% | 32.7 |
| 10 | Mean-reversion (OU) | 48 | **73** | 82 | 0.40 | 51 | 37% | 41.5 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 88 | 0.46 | 69 | — | 28.1 |
| 2 | GARCH(1,1)-lite | 50 | **76** | 86 | 0.44 | 66 | 52% | 31.3 |
| 3 | GBM (normal) | 48 | **73** | 83 | 0.44 | 67 | 52% | 33.6 |
| 4 | Ensemble (GBM-t + bootstraps) | 57 | **81** | 92 | 0.42 | 63 | 65% | 33.8 |
| 5 | GBM + Student-t | 48 | **73** | 82 | 0.44 | 66 | 51% | 34.6 |
| 6 | Bootstrap (IID) | 52 | **80** | 88 | 0.41 | 61 | 59% | 36.4 |
| 7 | Block bootstrap | 47 | **75** | 85 | 0.41 | 64 | 51% | 39.7 |
| 8 | Momentum | 41 | **65** | 74 | 0.46 | 54 | 51% | 48.7 |
| 9 | EWMA vol, zero drift (t) | 51 | **72** | 80 | 0.37 | 68 | 54% | 50.1 |
| 10 | Mean-reversion (OU) | 40 | **58** | 66 | 0.36 | 47 | 47% | 84.7 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 73% / 0.47 / 56% / 23.9 | 78% / 0.48 / 53% / 20.8 | 72% / 0.44 / 65% / 31.5 |
| ETH | 77% / 0.44 / 59% / 21.5 | 81% / 0.42 / 58% / 17.1 | 75% / 0.39 / 62% / 39.7 |
| SOL | 72% / 0.47 / 64% / 27 | 82% / 0.45 / 53% / 17.4 | 84% / 0.41 / 67% / 35.4 |
| BNB | 81% / 0.54 / 56% / 18.5 | 78% / 0.52 / 60% / 12.5 | 81% / 0.52 / 50% / 11.8 |
| XRP | 81% / 0.48 / 67% / 10.1 | 85% / 0.47 / 66% / 22.7 | 91% / 0.45 / 75% / 37 |
| SUI | 76% / 0.47 / 60% / 12 | 75% / 0.48 / 64% / 15.1 | 84% / 0.47 / 72% / 17.2 |
| AVAX | 79% / 0.46 / 64% / 15 | 75% / 0.45 / 63% / 26.1 | 80% / 0.42 / 68% / 34.4 |
| LINK | 83% / 0.45 / 67% / 18.2 | 85% / 0.45 / 56% / 23.3 | 86% / 0.42 / 65% / 31.6 |
| INJ | 76% / 0.54 / 55% / 15.8 | 77% / 0.53 / 63% / 17 | 75% / 0.54 / 71% / 34.2 |
| OP | 73% / 0.48 / 59% / 15.7 | 77% / 0.47 / 67% / 16.9 | 74% / 0.46 / 78% / 21.7 |
| ARB | 73% / 0.46 / 56% / 22.5 | 75% / 0.44 / 68% / 24.8 | 71% / 0.43 / 77% / 32 |
| DOGE | 75% / 0.47 / 60% / 18.8 | 78% / 0.46 / 64% / 14.3 | 86% / 0.46 / 71% / 29.1 |
| TIA | 73% / 0.51 / 60% / 11.4 | 81% / 0.52 / 60% / 6 | 83% / 0.53 / 71% / 19.8 |
| APT | 75% / 0.48 / 65% / 15.4 | 79% / 0.47 / 66% / 16.9 | 75% / 0.44 / 77% / 22.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
