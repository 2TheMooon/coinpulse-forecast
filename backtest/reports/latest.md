# CoinPulse Strategy Tournament — 2026-08-20

_Generated 2026-08-20T09:39:05.575Z · 14 coins · 300 samples/window · 11.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`garch`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 23.0 |
| 2 | Block bootstrap | 25.7 |
| 3 | Momentum | 25.7 |
| 4 | GBM + Student-t | 26.5 |
| 5 | GARCH(1,1)-lite | 27.1 |
| 6 | GBM (normal) | 27.1 |
| 7 | Ensemble (GBM-t + bootstraps) | 27.5 |
| 8 | EWMA vol, zero drift (t) | 27.5 |
| 9 | Bootstrap (IID) | 36.2 |
| 10 | Mean-reversion (OU) | 78.5 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 48 | **78** | 89 | 0.51 | 47 | 21% | 16.6 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 53 | **79** | 88 | 0.52 | 50 | — | 18.0 |
| 3 | Block bootstrap | 55 | **84** | 92 | 0.51 | 48 | 22% | 18.2 |
| 4 | EWMA vol, zero drift (t) | 54 | **83** | 91 | 0.50 | 59 | 20% | 20.3 |
| 5 | GBM (normal) | 54 | **83** | 91 | 0.53 | 49 | 21% | 21.7 |
| 6 | GBM + Student-t | 53 | **82** | 91 | 0.53 | 53 | 20% | 22.0 |
| 7 | Ensemble (GBM-t + bootstraps) | 58 | **85** | 93 | 0.52 | 46 | 23% | 22.6 |
| 8 | GARCH(1,1)-lite | 56 | **84** | 91 | 0.53 | 49 | 21% | 22.9 |
| 9 | Bootstrap (IID) | 64 | **90** | 95 | 0.51 | 52 | 25% | 34.7 |
| 10 | Mean-reversion (OU) | 48 | **73** | 80 | 0.45 | 55 | 18% | 41.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **79** | 88 | 0.51 | 49 | 30% | 16.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 88 | 0.51 | 51 | — | 19.3 |
| 3 | GBM + Student-t | 54 | **81** | 89 | 0.53 | 55 | 29% | 22.1 |
| 4 | GBM (normal) | 56 | **82** | 90 | 0.53 | 53 | 30% | 25.2 |
| 5 | EWMA vol, zero drift (t) | 55 | **84** | 91 | 0.48 | 55 | 29% | 25.5 |
| 6 | Block bootstrap | 57 | **84** | 91 | 0.50 | 50 | 31% | 25.5 |
| 7 | Ensemble (GBM-t + bootstraps) | 58 | **85** | 92 | 0.51 | 51 | 32% | 26.3 |
| 8 | GARCH(1,1)-lite | 57 | **83** | 91 | 0.53 | 53 | 31% | 26.9 |
| 9 | Bootstrap (IID) | 65 | **89** | 96 | 0.51 | 48 | 36% | 37.6 |
| 10 | Mean-reversion (OU) | 35 | **60** | 71 | 0.42 | 55 | 21% | 75.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GARCH(1,1)-lite | 52 | **79** | 87 | 0.53 | 53 | 46% | 31.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **77** | 85 | 0.51 | 48 | — | 31.8 |
| 3 | Block bootstrap | 53 | **77** | 86 | 0.50 | 44 | 45% | 33.2 |
| 4 | Ensemble (GBM-t + bootstraps) | 62 | **85** | 93 | 0.51 | 49 | 57% | 33.7 |
| 5 | GBM (normal) | 50 | **75** | 83 | 0.53 | 54 | 43% | 34.5 |
| 6 | GBM + Student-t | 48 | **74** | 82 | 0.53 | 53 | 43% | 35.4 |
| 7 | Bootstrap (IID) | 60 | **84** | 92 | 0.50 | 48 | 54% | 36.1 |
| 8 | EWMA vol, zero drift (t) | 55 | **76** | 83 | 0.47 | 50 | 44% | 36.9 |
| 9 | Momentum | 39 | **65** | 78 | 0.50 | 48 | 45% | 44.1 |
| 10 | Mean-reversion (OU) | 29 | **47** | 56 | 0.40 | 60 | 22% | 118.9 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 85% / 0.53 / 41% / 15.6 | 82% / 0.53 / 38% / 11.7 | 70% / 0.51 / 32% / 28.2 |
| ETH | 78% / 0.52 / 41% / 10.3 | 82% / 0.51 / 42% / 9.7 | 70% / 0.49 / 32% / 24.7 |
| SOL | 80% / 0.53 / 53% / 18.3 | 80% / 0.53 / 48% / 12.9 | 87% / 0.52 / 59% / 19.6 |
| BNB | 86% / 0.58 / 47% / 30.9 | 79% / 0.59 / 51% / 25.5 | 89% / 0.59 / 48% / 35.3 |
| XRP | 84% / 0.47 / 62% / 12.8 | 83% / 0.46 / 66% / 21.2 | 83% / 0.44 / 70% / 32.5 |
| SUI | 84% / 0.51 / 53% / 7 | 86% / 0.51 / 52% / 12.6 | 86% / 0.5 / 59% / 21.3 |
| AVAX | 84% / 0.49 / 51% / 20.2 | 86% / 0.47 / 58% / 31.4 | 78% / 0.44 / 70% / 50 |
| LINK | 74% / 0.54 / 45% / 21.3 | 80% / 0.54 / 41% / 11.4 | 83% / 0.53 / 27% / 10.7 |
| INJ | 76% / 0.57 / 50% / 21.1 | 70% / 0.57 / 39% / 30.7 | 65% / 0.62 / 29% / 58.9 |
| OP | 78% / 0.54 / 54% / 16.4 | 80% / 0.56 / 55% / 13.6 | 79% / 0.57 / 62% / 33.3 |
| ARB | 68% / 0.49 / 54% / 30.8 | 66% / 0.5 / 61% / 36.2 | 68% / 0.5 / 48% / 42.4 |
| DOGE | 80% / 0.49 / 51% / 18.9 | 76% / 0.46 / 56% / 22.6 | 67% / 0.43 / 52% / 35.9 |
| TIA | 74% / 0.48 / 38% / 16.8 | 82% / 0.5 / 28% / 8.1 | 86% / 0.52 / 13% / 16.2 |
| APT | 78% / 0.49 / 54% / 11.3 | 89% / 0.47 / 72% / 22.8 | 75% / 0.46 / 78% / 36.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
