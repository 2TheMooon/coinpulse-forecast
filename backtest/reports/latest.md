# CoinPulse Strategy Tournament — 2026-08-18

_Generated 2026-08-18T09:37:55.456Z · 14 coins · 300 samples/window · 12.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_t` · 14d→`momentum` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 23.2 |
| 2 | GBM + Student-t | 25.2 |
| 3 | GBM (normal) | 26.6 |
| 4 | GARCH(1,1)-lite | 27.1 |
| 5 | Block bootstrap | 27.3 |
| 6 | Momentum | 27.6 |
| 7 | EWMA vol, zero drift (t) | 28.8 |
| 8 | Ensemble (GBM-t + bootstraps) | 29.9 |
| 9 | Bootstrap (IID) | 36.4 |
| 10 | Mean-reversion (OU) | 75.4 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 55 | **82** | 90 | 0.50 | 58 | 20% | 17.6 |
| 2 | Momentum | 52 | **81** | 88 | 0.48 | 49 | 21% | 18.2 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 53 | **80** | 88 | 0.51 | 51 | — | 18.6 |
| 4 | GBM (normal) | 57 | **83** | 91 | 0.50 | 55 | 21% | 20.5 |
| 5 | EWMA vol, zero drift (t) | 55 | **82** | 91 | 0.47 | 56 | 21% | 20.7 |
| 6 | GARCH(1,1)-lite | 56 | **83** | 90 | 0.49 | 55 | 21% | 21.2 |
| 7 | Block bootstrap | 57 | **83** | 92 | 0.48 | 46 | 22% | 23.2 |
| 8 | Ensemble (GBM-t + bootstraps) | 60 | **85** | 92 | 0.49 | 56 | 23% | 24.5 |
| 9 | Bootstrap (IID) | 64 | **89** | 95 | 0.49 | 56 | 25% | 32.7 |
| 10 | Mean-reversion (OU) | 46 | **72** | 81 | 0.43 | 52 | 19% | 41.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **78** | 89 | 0.49 | 47 | 31% | 19.4 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **81** | 89 | 0.50 | 52 | — | 19.5 |
| 3 | GBM + Student-t | 56 | **82** | 89 | 0.52 | 55 | 29% | 21.8 |
| 4 | GBM (normal) | 59 | **84** | 90 | 0.52 | 54 | 30% | 24.9 |
| 5 | Block bootstrap | 59 | **85** | 92 | 0.49 | 51 | 31% | 25.7 |
| 6 | EWMA vol, zero drift (t) | 57 | **84** | 90 | 0.47 | 56 | 30% | 27.7 |
| 7 | GARCH(1,1)-lite | 59 | **85** | 92 | 0.52 | 53 | 31% | 27.9 |
| 8 | Ensemble (GBM-t + bootstraps) | 61 | **85** | 94 | 0.50 | 51 | 32% | 29.5 |
| 9 | Bootstrap (IID) | 66 | **90** | 94 | 0.49 | 54 | 37% | 37.1 |
| 10 | Mean-reversion (OU) | 38 | **64** | 74 | 0.42 | 55 | 21% | 68.3 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **78** | 85 | 0.51 | 49 | — | 31.5 |
| 2 | GARCH(1,1)-lite | 52 | **79** | 88 | 0.53 | 54 | 47% | 32.4 |
| 3 | Block bootstrap | 53 | **77** | 85 | 0.50 | 51 | 45% | 33.0 |
| 4 | GBM (normal) | 51 | **75** | 83 | 0.53 | 54 | 44% | 34.4 |
| 5 | Ensemble (GBM-t + bootstraps) | 63 | **84** | 94 | 0.51 | 51 | 56% | 35.7 |
| 6 | GBM + Student-t | 48 | **75** | 82 | 0.53 | 54 | 43% | 36.0 |
| 7 | EWMA vol, zero drift (t) | 55 | **77** | 84 | 0.47 | 53 | 44% | 38.1 |
| 8 | Bootstrap (IID) | 63 | **83** | 92 | 0.50 | 50 | 54% | 39.3 |
| 9 | Momentum | 39 | **66** | 77 | 0.50 | 48 | 45% | 45.2 |
| 10 | Mean-reversion (OU) | 29 | **48** | 57 | 0.40 | 59 | 23% | 116.5 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.52 / 42% / 16.3 | 83% / 0.51 / 39% / 9.4 | 70% / 0.51 / 32% / 25.8 |
| ETH | 80% / 0.52 / 51% / 9.5 | 83% / 0.51 / 51% / 7.7 | 71% / 0.5 / 43% / 20.9 |
| SOL | 81% / 0.52 / 54% / 17.5 | 82% / 0.52 / 49% / 12.1 | 87% / 0.52 / 62% / 20.2 |
| BNB | 86% / 0.57 / 49% / 31 | 80% / 0.58 / 52% / 24.2 | 90% / 0.58 / 49% / 37.3 |
| XRP | 85% / 0.46 / 64% / 17.2 | 85% / 0.45 / 68% / 28.5 | 83% / 0.44 / 71% / 30.7 |
| SUI | 85% / 0.5 / 54% / 8.6 | 86% / 0.5 / 54% / 11.5 | 86% / 0.5 / 59% / 21.4 |
| AVAX | 85% / 0.48 / 51% / 23.5 | 86% / 0.46 / 58% / 33.5 | 78% / 0.43 / 70% / 51.3 |
| LINK | 76% / 0.53 / 46% / 17 | 82% / 0.53 / 42% / 9.8 | 84% / 0.53 / 29% / 11.5 |
| INJ | 77% / 0.56 / 51% / 19.1 | 70% / 0.57 / 39% / 30.7 | 65% / 0.62 / 29% / 58.1 |
| OP | 76% / 0.53 / 55% / 18.7 | 79% / 0.55 / 56% / 13.2 | 79% / 0.57 / 62% / 33 |
| ARB | 69% / 0.48 / 55% / 30.1 | 68% / 0.49 / 62% / 36.4 | 67% / 0.51 / 48% / 46.8 |
| DOGE | 81% / 0.48 / 53% / 22.9 | 77% / 0.44 / 59% / 24.8 | 71% / 0.41 / 51% / 32.5 |
| TIA | 74% / 0.47 / 38% / 19 | 80% / 0.49 / 30% / 8.1 | 86% / 0.52 / 10% / 16.6 |
| APT | 78% / 0.49 / 54% / 9.6 | 89% / 0.46 / 72% / 23.6 | 75% / 0.46 / 78% / 35.1 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
