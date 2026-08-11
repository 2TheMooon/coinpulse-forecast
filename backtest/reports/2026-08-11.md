# CoinPulse Strategy Tournament — 2026-08-11

_Generated 2026-08-11T10:03:09.099Z · 14 coins · 300 samples/window · 11.8s_

## 🏆 Recommendation: **SWITCH → `momentum`**

> Momentum beats the shipped engine by 3.5 score points (lower=better).

Overall best: **momentum** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`block_boot`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Momentum | 24.7 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 28.2 |
| 3 | EWMA vol, zero drift (t) | 28.4 |
| 4 | GBM + Student-t | 29.4 |
| 5 | GBM (normal) | 30.3 |
| 6 | Block bootstrap | 30.4 |
| 7 | GARCH(1,1)-lite | 31.6 |
| 8 | Ensemble (GBM-t + bootstraps) | 34.8 |
| 9 | Bootstrap (IID) | 39.1 |
| 10 | Mean-reversion (OU) | 61.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **79** | 90 | 0.50 | 45 | 22% | 17.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 88 | 0.54 | 57 | — | 19.7 |
| 3 | EWMA vol, zero drift (t) | 54 | **84** | 91 | 0.50 | 49 | 21% | 20.5 |
| 4 | GBM + Student-t | 52 | **82** | 91 | 0.55 | 52 | 21% | 21.4 |
| 5 | GBM (normal) | 53 | **83** | 92 | 0.54 | 52 | 21% | 24.0 |
| 6 | Block bootstrap | 58 | **88** | 94 | 0.51 | 46 | 24% | 24.5 |
| 7 | GARCH(1,1)-lite | 55 | **85** | 93 | 0.54 | 52 | 21% | 25.6 |
| 8 | Ensemble (GBM-t + bootstraps) | 58 | **87** | 95 | 0.53 | 53 | 24% | 28.2 |
| 9 | Mean-reversion (OU) | 54 | **80** | 87 | 0.45 | 54 | 21% | 31.5 |
| 10 | Bootstrap (IID) | 62 | **91** | 95 | 0.53 | 52 | 26% | 34.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 47 | **78** | 88 | 0.49 | 48 | 32% | 17.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **81** | 88 | 0.56 | 56 | — | 24.2 |
| 3 | GBM + Student-t | 53 | **80** | 88 | 0.55 | 55 | 29% | 24.4 |
| 4 | EWMA vol, zero drift (t) | 54 | **83** | 90 | 0.47 | 53 | 30% | 24.6 |
| 5 | GBM (normal) | 56 | **81** | 89 | 0.55 | 56 | 31% | 25.7 |
| 6 | GARCH(1,1)-lite | 56 | **82** | 91 | 0.55 | 55 | 31% | 28.8 |
| 7 | Block bootstrap | 59 | **86** | 94 | 0.51 | 49 | 34% | 28.8 |
| 8 | Ensemble (GBM-t + bootstraps) | 60 | **85** | 95 | 0.53 | 56 | 34% | 33.5 |
| 9 | Bootstrap (IID) | 64 | **90** | 96 | 0.52 | 52 | 38% | 39.6 |
| 10 | Mean-reversion (OU) | 40 | **70** | 79 | 0.42 | 55 | 24% | 56.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 56 | **82** | 91 | 0.54 | 51 | 48% | 37.7 |
| 2 | Momentum | 43 | **69** | 78 | 0.50 | 46 | 46% | 39.2 |
| 3 | EWMA vol, zero drift (t) | 60 | **78** | 85 | 0.47 | 50 | 45% | 40.1 |
| 4 | GARCH(1,1)-lite | 47 | **81** | 90 | 0.58 | 53 | 46% | 40.5 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 47 | **78** | 87 | 0.58 | 53 | — | 40.6 |
| 6 | GBM (normal) | 45 | **75** | 84 | 0.57 | 53 | 43% | 41.4 |
| 7 | GBM + Student-t | 45 | **74** | 84 | 0.57 | 53 | 43% | 42.5 |
| 8 | Ensemble (GBM-t + bootstraps) | 60 | **89** | 96 | 0.55 | 52 | 58% | 42.5 |
| 9 | Bootstrap (IID) | 59 | **87** | 93 | 0.55 | 52 | 54% | 43.1 |
| 10 | Mean-reversion (OU) | 35 | **55** | 67 | 0.41 | 60 | 25% | 95.4 |

## Winner consistency — `momentum` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 78% / 0.49 / 42% / 7.7 | 72% / 0.47 / 45% / 21.5 | 57% / 0.48 / 52% / 62.5 |
| ETH | 82% / 0.49 / 50% / 7.2 | 77% / 0.48 / 60% / 14.3 | 67% / 0.47 / 54% / 45.9 |
| SOL | 76% / 0.49 / 40% / 12.4 | 72% / 0.47 / 36% / 23.1 | 71% / 0.46 / 38% / 26.3 |
| BNB | 86% / 0.51 / 38% / 12.7 | 81% / 0.49 / 40% / 11.4 | 75% / 0.5 / 41% / 14.6 |
| XRP | 84% / 0.47 / 42% / 18.1 | 77% / 0.45 / 40% / 18.7 | 73% / 0.44 / 46% / 37.4 |
| SUI | 76% / 0.49 / 44% / 10.2 | 77% / 0.49 / 38% / 7.5 | 75% / 0.52 / 35% / 22.5 |
| AVAX | 84% / 0.49 / 40% / 24.7 | 87% / 0.47 / 45% / 16.2 | 67% / 0.45 / 44% / 45.3 |
| LINK | 76% / 0.5 / 42% / 10.8 | 77% / 0.49 / 43% / 22.6 | 75% / 0.53 / 43% / 24 |
| INJ | 80% / 0.56 / 60% / 27.1 | 85% / 0.55 / 55% / 21.2 | 62% / 0.63 / 48% / 73.9 |
| OP | 76% / 0.52 / 48% / 9.1 | 81% / 0.5 / 60% / 5.4 | 81% / 0.51 / 52% / 12.4 |
| ARB | 64% / 0.49 / 42% / 47.4 | 64% / 0.48 / 45% / 44.5 | 54% / 0.53 / 41% / 67.8 |
| DOGE | 86% / 0.49 / 56% / 13.7 | 83% / 0.48 / 66% / 12.1 | 70% / 0.48 / 62% / 26.3 |
| TIA | 76% / 0.51 / 46% / 19.9 | 77% / 0.5 / 45% / 16.7 | 68% / 0.52 / 33% / 40.6 |
| APT | 76% / 0.52 / 46% / 20.4 | 79% / 0.47 / 57% / 10.1 | 65% / 0.46 / 48% / 49.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
