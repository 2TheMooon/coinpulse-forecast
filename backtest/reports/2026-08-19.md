# CoinPulse Strategy Tournament — 2026-08-19

_Generated 2026-08-19T09:38:12.426Z · 14 coins · 300 samples/window · 11.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 23.6 |
| 2 | GBM + Student-t | 25.4 |
| 3 | Momentum | 26.2 |
| 4 | GBM (normal) | 26.5 |
| 5 | GARCH(1,1)-lite | 27.2 |
| 6 | Block bootstrap | 27.7 |
| 7 | EWMA vol, zero drift (t) | 29.4 |
| 8 | Ensemble (GBM-t + bootstraps) | 30.0 |
| 9 | Bootstrap (IID) | 36.7 |
| 10 | Mean-reversion (OU) | 70.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **81** | 89 | 0.50 | 46 | 21% | 17.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 88 | 0.50 | 54 | — | 18.0 |
| 3 | GBM + Student-t | 54 | **83** | 91 | 0.51 | 54 | 20% | 19.4 |
| 4 | Block bootstrap | 60 | **85** | 92 | 0.49 | 48 | 22% | 22.1 |
| 5 | GARCH(1,1)-lite | 58 | **84** | 90 | 0.50 | 50 | 21% | 22.4 |
| 6 | GBM (normal) | 58 | **84** | 91 | 0.51 | 50 | 21% | 22.6 |
| 7 | EWMA vol, zero drift (t) | 56 | **84** | 91 | 0.48 | 59 | 20% | 22.9 |
| 8 | Ensemble (GBM-t + bootstraps) | 62 | **87** | 92 | 0.50 | 51 | 22% | 28.0 |
| 9 | Mean-reversion (OU) | 48 | **74** | 82 | 0.44 | 55 | 19% | 35.8 |
| 10 | Bootstrap (IID) | 67 | **90** | 94 | 0.50 | 51 | 25% | 36.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **75** | 86 | 0.50 | 49 | 30% | 19.7 |
| 2 | GBM + Student-t | 54 | **81** | 89 | 0.52 | 54 | 29% | 20.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 55 | **81** | 88 | 0.52 | 50 | — | 20.9 |
| 4 | GBM (normal) | 55 | **82** | 90 | 0.52 | 53 | 30% | 22.5 |
| 5 | Block bootstrap | 57 | **84** | 90 | 0.49 | 53 | 31% | 24.6 |
| 6 | EWMA vol, zero drift (t) | 56 | **83** | 90 | 0.48 | 58 | 29% | 25.2 |
| 7 | GARCH(1,1)-lite | 57 | **84** | 91 | 0.52 | 52 | 31% | 25.4 |
| 8 | Ensemble (GBM-t + bootstraps) | 60 | **84** | 92 | 0.50 | 49 | 32% | 26.2 |
| 9 | Bootstrap (IID) | 64 | **89** | 93 | 0.50 | 52 | 37% | 36.2 |
| 10 | Mean-reversion (OU) | 41 | **66** | 74 | 0.43 | 55 | 22% | 62.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **77** | 86 | 0.51 | 45 | — | 32.0 |
| 2 | GARCH(1,1)-lite | 54 | **80** | 89 | 0.53 | 49 | 47% | 33.8 |
| 3 | GBM (normal) | 53 | **77** | 84 | 0.52 | 51 | 44% | 34.6 |
| 4 | Ensemble (GBM-t + bootstraps) | 62 | **85** | 94 | 0.50 | 47 | 56% | 35.7 |
| 5 | GBM + Student-t | 51 | **76** | 83 | 0.52 | 50 | 43% | 36.1 |
| 6 | Block bootstrap | 56 | **78** | 86 | 0.49 | 44 | 45% | 36.4 |
| 7 | Bootstrap (IID) | 62 | **85** | 93 | 0.49 | 46 | 54% | 37.6 |
| 8 | EWMA vol, zero drift (t) | 57 | **78** | 85 | 0.47 | 50 | 44% | 40.0 |
| 9 | Momentum | 40 | **67** | 78 | 0.50 | 46 | 45% | 41.8 |
| 10 | Mean-reversion (OU) | 31 | **50** | 58 | 0.40 | 59 | 23% | 112.5 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 85% / 0.5 / 49% / 6.1 | 82% / 0.52 / 41% / 13.9 | 71% / 0.51 / 27% / 24.9 |
| ETH | 84% / 0.48 / 50% / 20.8 | 77% / 0.5 / 41% / 13.1 | 71% / 0.48 / 24% / 28.1 |
| SOL | 78% / 0.51 / 61% / 13.9 | 82% / 0.53 / 49% / 15.1 | 84% / 0.52 / 54% / 19.5 |
| BNB | 81% / 0.57 / 54% / 18.5 | 85% / 0.6 / 46% / 31.4 | 90% / 0.59 / 41% / 41.8 |
| XRP | 85% / 0.46 / 66% / 18.5 | 87% / 0.46 / 68% / 24.2 | 83% / 0.45 / 67% / 29 |
| SUI | 77% / 0.48 / 58% / 18.3 | 83% / 0.51 / 55% / 9 | 86% / 0.5 / 51% / 21.4 |
| AVAX | 89% / 0.47 / 55% / 28.9 | 89% / 0.47 / 56% / 34.3 | 78% / 0.43 / 63% / 52.7 |
| LINK | 78% / 0.51 / 43% / 7.6 | 77% / 0.53 / 30% / 16 | 78% / 0.52 / 17% / 14 |
| INJ | 74% / 0.54 / 51% / 19.7 | 69% / 0.57 / 44% / 30.8 | 63% / 0.61 / 33% / 56.3 |
| OP | 80% / 0.53 / 58% / 11.6 | 79% / 0.58 / 55% / 22.2 | 75% / 0.6 / 63% / 39 |
| ARB | 61% / 0.5 / 58% / 42 | 66% / 0.51 / 58% / 33.8 | 65% / 0.52 / 48% / 42.3 |
| DOGE | 81% / 0.47 / 57% / 20.6 | 80% / 0.46 / 49% / 23.2 | 71% / 0.43 / 52% / 31.3 |
| TIA | 78% / 0.48 / 39% / 11.4 | 85% / 0.5 / 34% / 7.1 | 90% / 0.52 / 13% / 25.3 |
| APT | 77% / 0.49 / 59% / 13.6 | 89% / 0.48 / 69% / 18.6 | 78% / 0.47 / 71% / 21.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
