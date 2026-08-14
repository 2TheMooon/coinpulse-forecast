# CoinPulse Strategy Tournament — 2026-08-14

_Generated 2026-08-14T12:22:20.161Z · 14 coins · 300 samples/window · 37.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Momentum) does not beat the shipped engine by the required 3-point margin.

Overall best: **momentum** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`block_boot`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Momentum | 25.9 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 27.4 |
| 3 | EWMA vol, zero drift (t) | 28.4 |
| 4 | GBM + Student-t | 29.5 |
| 5 | GBM (normal) | 29.7 |
| 6 | GARCH(1,1)-lite | 30.0 |
| 7 | Block bootstrap | 31.5 |
| 8 | Ensemble (GBM-t + bootstraps) | 34.1 |
| 9 | Bootstrap (IID) | 38.5 |
| 10 | Mean-reversion (OU) | 76.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **80** | 90 | 0.50 | 46 | 21% | 15.4 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 52 | **79** | 88 | 0.55 | 53 | — | 20.6 |
| 3 | GBM + Student-t | 53 | **82** | 91 | 0.54 | 54 | 20% | 20.7 |
| 4 | EWMA vol, zero drift (t) | 55 | **84** | 92 | 0.49 | 53 | 21% | 20.9 |
| 5 | GARCH(1,1)-lite | 55 | **83** | 92 | 0.53 | 54 | 21% | 22.7 |
| 6 | GBM (normal) | 56 | **85** | 92 | 0.54 | 53 | 21% | 23.6 |
| 7 | Block bootstrap | 61 | **89** | 95 | 0.51 | 49 | 25% | 28.9 |
| 8 | Ensemble (GBM-t + bootstraps) | 61 | **89** | 95 | 0.53 | 53 | 24% | 31.2 |
| 9 | Mean-reversion (OU) | 48 | **76** | 83 | 0.43 | 54 | 19% | 37.2 |
| 10 | Bootstrap (IID) | 66 | **91** | 96 | 0.52 | 54 | 26% | 37.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 47 | **78** | 88 | 0.49 | 48 | 31% | 17.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 88 | 0.55 | 57 | — | 22.7 |
| 3 | GBM + Student-t | 54 | **79** | 88 | 0.55 | 57 | 29% | 24.7 |
| 4 | GBM (normal) | 57 | **81** | 89 | 0.55 | 56 | 30% | 25.3 |
| 5 | EWMA vol, zero drift (t) | 53 | **84** | 90 | 0.47 | 55 | 30% | 26.2 |
| 6 | GARCH(1,1)-lite | 56 | **83** | 91 | 0.55 | 56 | 31% | 28.4 |
| 7 | Block bootstrap | 59 | **86** | 95 | 0.51 | 52 | 34% | 30.8 |
| 8 | Ensemble (GBM-t + bootstraps) | 60 | **86** | 95 | 0.53 | 55 | 34% | 31.8 |
| 9 | Bootstrap (IID) | 65 | **90** | 95 | 0.52 | 55 | 37% | 39.8 |
| 10 | Mean-reversion (OU) | 34 | **64** | 73 | 0.41 | 55 | 22% | 73.5 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 55 | **81** | 90 | 0.54 | 54 | 49% | 34.7 |
| 2 | Bootstrap (IID) | 58 | **85** | 93 | 0.54 | 55 | 54% | 38.1 |
| 3 | EWMA vol, zero drift (t) | 57 | **76** | 84 | 0.47 | 50 | 45% | 38.2 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 47 | **77** | 86 | 0.58 | 56 | — | 38.8 |
| 5 | GARCH(1,1)-lite | 47 | **80** | 89 | 0.58 | 56 | 46% | 38.8 |
| 6 | Ensemble (GBM-t + bootstraps) | 60 | **87** | 95 | 0.55 | 55 | 58% | 39.3 |
| 7 | GBM (normal) | 46 | **72** | 82 | 0.57 | 56 | 43% | 40.2 |
| 8 | GBM + Student-t | 44 | **72** | 81 | 0.57 | 55 | 42% | 42.9 |
| 9 | Momentum | 38 | **65** | 79 | 0.49 | 47 | 46% | 45.0 |
| 10 | Mean-reversion (OU) | 30 | **48** | 58 | 0.40 | 62 | 23% | 117.3 |

## Winner consistency — `momentum` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 80% / 0.48 / 48% / 7.7 | 70% / 0.47 / 53% / 25.4 | 54% / 0.47 / 48% / 67 |
| ETH | 80% / 0.48 / 46% / 9.1 | 79% / 0.47 / 53% / 17.2 | 62% / 0.46 / 57% / 53 |
| SOL | 78% / 0.49 / 42% / 7.2 | 72% / 0.48 / 36% / 22.7 | 68% / 0.46 / 33% / 39 |
| BNB | 88% / 0.51 / 42% / 19 | 83% / 0.51 / 40% / 8.8 | 65% / 0.5 / 48% / 20.9 |
| XRP | 82% / 0.47 / 40% / 16.7 | 79% / 0.45 / 36% / 16 | 73% / 0.43 / 41% / 44.5 |
| SUI | 78% / 0.49 / 46% / 6.6 | 74% / 0.5 / 36% / 9.4 | 71% / 0.52 / 49% / 26.5 |
| AVAX | 88% / 0.48 / 44% / 28.8 | 85% / 0.48 / 47% / 11.7 | 63% / 0.45 / 51% / 53.3 |
| LINK | 78% / 0.51 / 44% / 5.4 | 81% / 0.49 / 43% / 4.6 | 75% / 0.52 / 46% / 26.1 |
| INJ | 86% / 0.55 / 64% / 28.7 | 85% / 0.55 / 57% / 24.6 | 65% / 0.6 / 57% / 62.9 |
| OP | 78% / 0.5 / 50% / 7 | 83% / 0.5 / 53% / 11.2 | 70% / 0.5 / 44% / 24.1 |
| ARB | 68% / 0.48 / 38% / 39.7 | 64% / 0.48 / 47% / 44.5 | 48% / 0.53 / 35% / 77.7 |
| DOGE | 84% / 0.49 / 54% / 15.7 | 83% / 0.48 / 64% / 11 | 68% / 0.46 / 63% / 28.8 |
| TIA | 80% / 0.5 / 44% / 12.5 | 74% / 0.51 / 47% / 23.3 | 67% / 0.51 / 29% / 49.2 |
| APT | 78% / 0.51 / 48% / 11.5 | 79% / 0.48 / 57% / 11.3 | 63% / 0.46 / 52% / 57.1 |

Coins: BTC (binance), ETH (binance), SOL (binance), BNB (binance), XRP (binance), SUI (binance), AVAX (binance), LINK (binance), INJ (binance), OP (binance), ARB (binance), DOGE (binance), TIA (binance), APT (binance)
