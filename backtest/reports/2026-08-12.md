# CoinPulse Strategy Tournament — 2026-08-12

_Generated 2026-08-12T10:11:36.676Z · 14 coins · 300 samples/window · 12.4s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Momentum) does not beat the shipped engine by the required 3-point margin.

Overall best: **momentum** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`block_boot`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Momentum | 26.2 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 27.0 |
| 3 | GBM + Student-t | 28.1 |
| 4 | EWMA vol, zero drift (t) | 28.4 |
| 5 | GBM (normal) | 28.6 |
| 6 | GARCH(1,1)-lite | 29.2 |
| 7 | Block bootstrap | 32.1 |
| 8 | Ensemble (GBM-t + bootstraps) | 33.5 |
| 9 | Bootstrap (IID) | 38.6 |
| 10 | Mean-reversion (OU) | 59.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 53 | **81** | 88 | 0.49 | 47 | 22% | 17.9 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 53 | **80** | 88 | 0.54 | 53 | — | 20.2 |
| 3 | GBM + Student-t | 57 | **82** | 89 | 0.53 | 56 | 21% | 20.7 |
| 4 | EWMA vol, zero drift (t) | 57 | **83** | 90 | 0.48 | 50 | 21% | 20.7 |
| 5 | GBM (normal) | 58 | **83** | 90 | 0.52 | 56 | 21% | 20.8 |
| 6 | GARCH(1,1)-lite | 57 | **83** | 90 | 0.52 | 57 | 21% | 21.3 |
| 7 | Ensemble (GBM-t + bootstraps) | 60 | **87** | 93 | 0.51 | 57 | 24% | 26.7 |
| 8 | Block bootstrap | 63 | **86** | 93 | 0.49 | 50 | 24% | 27.5 |
| 9 | Mean-reversion (OU) | 56 | **80** | 87 | 0.44 | 52 | 21% | 30.7 |
| 10 | Bootstrap (IID) | 68 | **88** | 95 | 0.51 | 54 | 26% | 36.2 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **79** | 90 | 0.49 | 47 | 31% | 18.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 88 | 0.54 | 56 | — | 22.3 |
| 3 | GBM + Student-t | 56 | **82** | 90 | 0.54 | 55 | 29% | 22.4 |
| 4 | GBM (normal) | 59 | **83** | 91 | 0.54 | 55 | 31% | 26.6 |
| 5 | EWMA vol, zero drift (t) | 57 | **83** | 91 | 0.47 | 57 | 30% | 26.9 |
| 6 | GARCH(1,1)-lite | 59 | **84** | 92 | 0.54 | 54 | 31% | 29.0 |
| 7 | Ensemble (GBM-t + bootstraps) | 61 | **88** | 94 | 0.52 | 55 | 34% | 31.8 |
| 8 | Block bootstrap | 63 | **89** | 94 | 0.50 | 51 | 34% | 33.1 |
| 9 | Bootstrap (IID) | 66 | **91** | 95 | 0.52 | 54 | 37% | 38.5 |
| 10 | Mean-reversion (OU) | 43 | **72** | 80 | 0.42 | 55 | 24% | 52.2 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 56 | **81** | 90 | 0.53 | 52 | 49% | 35.8 |
| 2 | GARCH(1,1)-lite | 49 | **80** | 89 | 0.57 | 56 | 47% | 37.2 |
| 3 | EWMA vol, zero drift (t) | 58 | **77** | 84 | 0.47 | 52 | 45% | 37.6 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 49 | **77** | 86 | 0.57 | 56 | — | 38.4 |
| 5 | GBM (normal) | 48 | **74** | 83 | 0.56 | 55 | 44% | 38.4 |
| 6 | Bootstrap (IID) | 60 | **86** | 93 | 0.53 | 53 | 55% | 41.0 |
| 7 | GBM + Student-t | 46 | **74** | 82 | 0.56 | 55 | 43% | 41.1 |
| 8 | Ensemble (GBM-t + bootstraps) | 62 | **87** | 95 | 0.54 | 54 | 58% | 42.0 |
| 9 | Momentum | 40 | **67** | 79 | 0.50 | 47 | 46% | 42.3 |
| 10 | Mean-reversion (OU) | 36 | **54** | 67 | 0.41 | 60 | 26% | 94.7 |

## Winner consistency — `momentum` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.48 / 56% / 12.5 | 68% / 0.47 / 49% / 20.3 | 56% / 0.48 / 48% / 57.9 |
| ETH | 86% / 0.47 / 46% / 27.2 | 79% / 0.46 / 49% / 12.5 | 63% / 0.47 / 57% / 47.3 |
| SOL | 80% / 0.49 / 38% / 12.6 | 77% / 0.48 / 34% / 12.9 | 73% / 0.47 / 33% / 33.1 |
| BNB | 88% / 0.5 / 50% / 20.4 | 87% / 0.52 / 40% / 22.6 | 65% / 0.5 / 44% / 24.9 |
| XRP | 80% / 0.45 / 54% / 17.6 | 85% / 0.45 / 49% / 22.2 | 79% / 0.44 / 43% / 31.4 |
| SUI | 84% / 0.47 / 44% / 15.1 | 77% / 0.5 / 38% / 10.1 | 70% / 0.53 / 49% / 31.4 |
| AVAX | 86% / 0.48 / 30% / 17.4 | 79% / 0.47 / 34% / 10.9 | 63% / 0.45 / 48% / 52.9 |
| LINK | 80% / 0.48 / 44% / 16.5 | 83% / 0.49 / 43% / 15.1 | 76% / 0.53 / 44% / 23.4 |
| INJ | 82% / 0.52 / 52% / 16.5 | 81% / 0.57 / 51% / 17.8 | 62% / 0.61 / 59% / 65 |
| OP | 76% / 0.48 / 44% / 13.4 | 81% / 0.48 / 51% / 17.9 | 76% / 0.51 / 48% / 19.5 |
| ARB | 68% / 0.5 / 44% / 36.6 | 68% / 0.48 / 49% / 28.8 | 51% / 0.54 / 35% / 75 |
| DOGE | 80% / 0.48 / 66% / 19.2 | 85% / 0.47 / 64% / 24.5 | 67% / 0.47 / 65% / 29 |
| TIA | 78% / 0.49 / 44% / 16.9 | 74% / 0.51 / 47% / 29.9 | 67% / 0.52 / 29% / 47 |
| APT | 78% / 0.51 / 48% / 8.5 | 81% / 0.47 / 55% / 9.9 | 63% / 0.46 / 54% / 54.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
