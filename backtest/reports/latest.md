# CoinPulse Strategy Tournament — 2026-08-13

_Generated 2026-08-13T10:12:45.854Z · 14 coins · 300 samples/window · 12.4s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Momentum) does not beat the shipped engine by the required 3-point margin.

Overall best: **momentum** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`block_boot`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Momentum | 25.4 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 27.5 |
| 3 | GBM + Student-t | 28.8 |
| 4 | EWMA vol, zero drift (t) | 29.1 |
| 5 | GBM (normal) | 29.3 |
| 6 | GARCH(1,1)-lite | 30.0 |
| 7 | Block bootstrap | 32.2 |
| 8 | Ensemble (GBM-t + bootstraps) | 34.0 |
| 9 | Bootstrap (IID) | 38.3 |
| 10 | Mean-reversion (OU) | 64.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **80** | 89 | 0.49 | 45 | 21% | 16.9 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **81** | 88 | 0.53 | 57 | — | 19.2 |
| 3 | GBM + Student-t | 56 | **83** | 91 | 0.54 | 55 | 21% | 22.4 |
| 4 | EWMA vol, zero drift (t) | 57 | **85** | 91 | 0.48 | 52 | 21% | 23.1 |
| 5 | GARCH(1,1)-lite | 57 | **84** | 92 | 0.53 | 55 | 21% | 24.6 |
| 6 | GBM (normal) | 59 | **85** | 91 | 0.53 | 54 | 21% | 25.3 |
| 7 | Ensemble (GBM-t + bootstraps) | 62 | **88** | 93 | 0.52 | 54 | 24% | 29.8 |
| 8 | Block bootstrap | 63 | **89** | 94 | 0.50 | 52 | 24% | 30.1 |
| 9 | Mean-reversion (OU) | 54 | **78** | 86 | 0.43 | 56 | 20% | 34.0 |
| 10 | Bootstrap (IID) | 67 | **90** | 95 | 0.51 | 54 | 26% | 37.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **75** | 88 | 0.49 | 49 | 31% | 17.6 |
| 2 | GBM + Student-t | 53 | **80** | 88 | 0.54 | 57 | 29% | 22.5 |
| 3 | GBM (normal) | 55 | **81** | 89 | 0.55 | 57 | 30% | 23.1 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 55 | **81** | 88 | 0.55 | 56 | — | 23.3 |
| 5 | EWMA vol, zero drift (t) | 55 | **83** | 90 | 0.47 | 56 | 30% | 24.7 |
| 6 | GARCH(1,1)-lite | 57 | **83** | 92 | 0.55 | 56 | 31% | 27.7 |
| 7 | Ensemble (GBM-t + bootstraps) | 58 | **86** | 93 | 0.52 | 57 | 34% | 29.0 |
| 8 | Block bootstrap | 61 | **86** | 93 | 0.51 | 52 | 34% | 29.1 |
| 9 | Bootstrap (IID) | 64 | **88** | 94 | 0.52 | 56 | 37% | 36.8 |
| 10 | Mean-reversion (OU) | 41 | **69** | 77 | 0.42 | 55 | 23% | 57.1 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 55 | **82** | 91 | 0.53 | 51 | 49% | 37.4 |
| 2 | GARCH(1,1)-lite | 48 | **80** | 90 | 0.57 | 53 | 46% | 37.6 |
| 3 | EWMA vol, zero drift (t) | 58 | **78** | 85 | 0.47 | 49 | 45% | 39.3 |
| 4 | GBM (normal) | 46 | **74** | 85 | 0.57 | 53 | 43% | 39.5 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 48 | **78** | 87 | 0.58 | 53 | — | 40.0 |
| 6 | Bootstrap (IID) | 59 | **87** | 94 | 0.54 | 52 | 54% | 41.1 |
| 7 | GBM + Student-t | 45 | **74** | 83 | 0.57 | 53 | 42% | 41.6 |
| 8 | Momentum | 41 | **67** | 78 | 0.50 | 46 | 46% | 41.8 |
| 9 | Ensemble (GBM-t + bootstraps) | 61 | **89** | 97 | 0.54 | 52 | 58% | 43.0 |
| 10 | Mean-reversion (OU) | 34 | **52** | 63 | 0.41 | 60 | 24% | 103.6 |

## Winner consistency — `momentum` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 76% / 0.48 / 46% / 15.5 | 68% / 0.47 / 53% / 26 | 54% / 0.47 / 48% / 66.6 |
| ETH | 82% / 0.47 / 40% / 18.7 | 74% / 0.46 / 57% / 17.1 | 68% / 0.46 / 56% / 50.9 |
| SOL | 78% / 0.5 / 36% / 8.1 | 77% / 0.49 / 36% / 15.9 | 71% / 0.46 / 40% / 26.2 |
| BNB | 82% / 0.52 / 46% / 17.8 | 79% / 0.52 / 40% / 10.3 | 75% / 0.51 / 43% / 13.2 |
| XRP | 82% / 0.46 / 44% / 14.1 | 74% / 0.46 / 47% / 16.6 | 71% / 0.44 / 46% / 43.9 |
| SUI | 84% / 0.49 / 46% / 7.8 | 74% / 0.5 / 38% / 15.8 | 73% / 0.52 / 38% / 26.6 |
| AVAX | 84% / 0.47 / 38% / 11.6 | 74% / 0.46 / 45% / 16.9 | 65% / 0.45 / 46% / 46.6 |
| LINK | 78% / 0.49 / 40% / 6.2 | 77% / 0.5 / 47% / 5.3 | 73% / 0.52 / 46% / 24.9 |
| INJ | 90% / 0.56 / 54% / 28.9 | 77% / 0.59 / 47% / 27.8 | 60% / 0.63 / 48% / 75.2 |
| OP | 82% / 0.49 / 44% / 8.2 | 81% / 0.5 / 51% / 5.9 | 78% / 0.51 / 51% / 8.3 |
| ARB | 68% / 0.49 / 40% / 46.9 | 62% / 0.47 / 49% / 42.6 | 56% / 0.52 / 43% / 69.4 |
| DOGE | 84% / 0.47 / 56% / 23.7 | 79% / 0.47 / 68% / 11.4 | 71% / 0.48 / 60% / 29.5 |
| TIA | 74% / 0.48 / 54% / 17.5 | 72% / 0.5 / 49% / 18.5 | 60% / 0.52 / 33% / 54.1 |
| APT | 76% / 0.49 / 52% / 11.1 | 77% / 0.47 / 51% / 16.8 | 65% / 0.46 / 46% / 50.1 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
