# CoinPulse Strategy Tournament — 2026-07-05

_Generated 2026-07-05T14:19:33.227Z · 14 coins · 300 samples/window · 29.3s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`block_boot`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 23.5 |
| 2 | GBM + Student-t | 23.6 |
| 3 | GARCH(1,1)-lite | 25.1 |
| 4 | Momentum | 25.3 |
| 5 | GBM (normal) | 25.5 |
| 6 | Block bootstrap | 26.9 |
| 7 | Ensemble (GBM-t + bootstraps) | 28.9 |
| 8 | EWMA vol, zero drift (t) | 30.7 |
| 9 | Bootstrap (IID) | 31.4 |
| 10 | Mean-reversion (OU) | 38.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **79** | 90 | 0.51 | 50 | 25% | 15.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 89 | 0.52 | 53 | — | 17.7 |
| 3 | GBM + Student-t | 56 | **83** | 90 | 0.52 | 55 | 24% | 19.2 |
| 4 | GARCH(1,1)-lite | 56 | **83** | 91 | 0.51 | 55 | 24% | 20.2 |
| 5 | EWMA vol, zero drift (t) | 57 | **83** | 91 | 0.48 | 45 | 24% | 22.2 |
| 6 | GBM (normal) | 59 | **84** | 91 | 0.51 | 54 | 25% | 22.3 |
| 7 | Ensemble (GBM-t + bootstraps) | 59 | **85** | 92 | 0.50 | 55 | 25% | 22.4 |
| 8 | Block bootstrap | 57 | **86** | 93 | 0.48 | 48 | 25% | 22.9 |
| 9 | Bootstrap (IID) | 61 | **87** | 93 | 0.50 | 50 | 26% | 27.5 |
| 10 | Mean-reversion (OU) | 59 | **81** | 88 | 0.48 | 50 | 26% | 31.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 48 | **80** | 88 | 0.52 | 54 | 35% | 16.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **82** | 90 | 0.53 | 56 | — | 19.2 |
| 3 | GBM + Student-t | 56 | **82** | 89 | 0.51 | 59 | 34% | 20.6 |
| 4 | GBM (normal) | 57 | **84** | 90 | 0.52 | 58 | 35% | 23.0 |
| 5 | GARCH(1,1)-lite | 57 | **85** | 92 | 0.52 | 59 | 34% | 23.3 |
| 6 | Block bootstrap | 58 | **86** | 93 | 0.48 | 52 | 35% | 27.0 |
| 7 | Ensemble (GBM-t + bootstraps) | 59 | **87** | 93 | 0.50 | 59 | 35% | 27.1 |
| 8 | EWMA vol, zero drift (t) | 58 | **83** | 89 | 0.46 | 57 | 35% | 29.2 |
| 9 | Mean-reversion (OU) | 54 | **80** | 85 | 0.47 | 51 | 35% | 32.3 |
| 10 | Bootstrap (IID) | 62 | **88** | 93 | 0.49 | 57 | 37% | 32.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 58 | **81** | 90 | 0.52 | 53 | 51% | 30.8 |
| 2 | GBM (normal) | 53 | **76** | 84 | 0.54 | 57 | 49% | 31.0 |
| 3 | GBM + Student-t | 53 | **76** | 84 | 0.54 | 57 | 49% | 31.1 |
| 4 | GARCH(1,1)-lite | 52 | **80** | 90 | 0.55 | 57 | 49% | 31.7 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 57 | **81** | 88 | 0.55 | 57 | — | 33.5 |
| 6 | Bootstrap (IID) | 61 | **85** | 93 | 0.52 | 54 | 54% | 34.0 |
| 7 | Ensemble (GBM-t + bootstraps) | 64 | **87** | 95 | 0.52 | 56 | 62% | 37.3 |
| 8 | EWMA vol, zero drift (t) | 62 | **77** | 84 | 0.47 | 55 | 51% | 40.6 |
| 9 | Momentum | 40 | **66** | 78 | 0.52 | 48 | 50% | 44.3 |
| 10 | Mean-reversion (OU) | 50 | **68** | 77 | 0.47 | 52 | 56% | 50.2 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.52 / 53% / 10.1 | 83% / 0.51 / 54% / 9.3 | 70% / 0.53 / 46% / 23.6 |
| ETH | 84% / 0.51 / 57% / 17.5 | 85% / 0.5 / 59% / 14.6 | 81% / 0.51 / 51% / 11.7 |
| SOL | 77% / 0.54 / 51% / 27.4 | 85% / 0.55 / 45% / 16.4 | 90% / 0.54 / 68% / 31.7 |
| BNB | 88% / 0.53 / 55% / 24.3 | 82% / 0.54 / 56% / 18.5 | 94% / 0.57 / 56% / 48.2 |
| XRP | 84% / 0.49 / 57% / 13.5 | 87% / 0.49 / 63% / 27.4 | 84% / 0.49 / 68% / 18.6 |
| SUI | 82% / 0.52 / 55% / 12.6 | 86% / 0.54 / 55% / 19.8 | 92% / 0.56 / 56% / 39 |
| AVAX | 85% / 0.51 / 49% / 17.4 | 87% / 0.5 / 56% / 21.4 | 78% / 0.48 / 62% / 36.8 |
| LINK | 84% / 0.52 / 49% / 10.9 | 86% / 0.53 / 56% / 22.7 | 87% / 0.55 / 48% / 29.8 |
| INJ | 77% / 0.61 / 41% / 26.6 | 72% / 0.64 / 44% / 45 | 67% / 0.71 / 38% / 73.3 |
| OP | 74% / 0.52 / 55% / 17.7 | 75% / 0.53 / 59% / 15.4 | 84% / 0.57 / 65% / 33.4 |
| ARB | 73% / 0.5 / 58% / 20.3 | 75% / 0.5 / 68% / 10.5 | 70% / 0.55 / 68% / 38.8 |
| DOGE | 80% / 0.51 / 51% / 15.9 | 76% / 0.49 / 58% / 10.4 | 75% / 0.52 / 52% / 12.4 |
| TIA | 74% / 0.55 / 51% / 20.4 | 82% / 0.59 / 45% / 29.1 | 87% / 0.63 / 48% / 51.2 |
| APT | 81% / 0.5 / 53% / 12.8 | 86% / 0.5 / 65% / 8.6 | 75% / 0.51 / 71% / 20.4 |

Coins: BTC (binance), ETH (binance), SOL (binance), BNB (binance), XRP (binance), SUI (binance), AVAX (binance), LINK (binance), INJ (binance), OP (binance), ARB (binance), DOGE (binance), TIA (binance), APT (binance)
