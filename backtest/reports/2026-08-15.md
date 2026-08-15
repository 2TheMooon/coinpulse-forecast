# CoinPulse Strategy Tournament — 2026-08-15

_Generated 2026-08-15T09:30:18.692Z · 14 coins · 300 samples/window · 12.5s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Momentum) does not beat the shipped engine by the required 3-point margin.

Overall best: **momentum** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Momentum | 24.8 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 24.8 |
| 3 | GBM + Student-t | 27.8 |
| 4 | GBM (normal) | 29.5 |
| 5 | EWMA vol, zero drift (t) | 29.9 |
| 6 | GARCH(1,1)-lite | 30.2 |
| 7 | Block bootstrap | 32.7 |
| 8 | Ensemble (GBM-t + bootstraps) | 34.7 |
| 9 | Bootstrap (IID) | 38.6 |
| 10 | Mean-reversion (OU) | 83.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 53 | **80** | 89 | 0.48 | 50 | 22% | 17.7 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **81** | 89 | 0.49 | 58 | — | 18.2 |
| 3 | GBM + Student-t | 56 | **82** | 89 | 0.53 | 59 | 21% | 19.9 |
| 4 | GBM (normal) | 59 | **83** | 91 | 0.52 | 58 | 21% | 21.6 |
| 5 | EWMA vol, zero drift (t) | 57 | **83** | 90 | 0.48 | 58 | 21% | 21.6 |
| 6 | GARCH(1,1)-lite | 58 | **84** | 90 | 0.52 | 59 | 21% | 21.9 |
| 7 | Ensemble (GBM-t + bootstraps) | 64 | **87** | 93 | 0.51 | 56 | 24% | 28.6 |
| 8 | Block bootstrap | 64 | **86** | 93 | 0.50 | 53 | 24% | 29.5 |
| 9 | Bootstrap (IID) | 68 | **89** | 95 | 0.51 | 58 | 26% | 36.7 |
| 10 | Mean-reversion (OU) | 46 | **72** | 80 | 0.42 | 53 | 18% | 43.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **80** | 90 | 0.49 | 47 | 31% | 17.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 56 | **83** | 89 | 0.50 | 55 | — | 22.0 |
| 3 | GBM + Student-t | 55 | **82** | 89 | 0.54 | 56 | 29% | 23.6 |
| 4 | GBM (normal) | 59 | **84** | 90 | 0.55 | 56 | 31% | 27.8 |
| 5 | EWMA vol, zero drift (t) | 59 | **86** | 90 | 0.47 | 59 | 30% | 29.5 |
| 6 | GARCH(1,1)-lite | 59 | **86** | 92 | 0.55 | 55 | 31% | 30.7 |
| 7 | Block bootstrap | 63 | **88** | 94 | 0.51 | 52 | 34% | 32.7 |
| 8 | Ensemble (GBM-t + bootstraps) | 63 | **88** | 94 | 0.52 | 55 | 34% | 33.8 |
| 9 | Bootstrap (IID) | 67 | **91** | 95 | 0.52 | 54 | 37% | 38.5 |
| 10 | Mean-reversion (OU) | 33 | **60** | 72 | 0.40 | 57 | 21% | 81.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 60 | **81** | 88 | 0.51 | 53 | — | 34.3 |
| 2 | Block bootstrap | 55 | **82** | 91 | 0.54 | 52 | 49% | 36.0 |
| 3 | GARCH(1,1)-lite | 48 | **81** | 91 | 0.58 | 53 | 46% | 37.9 |
| 4 | EWMA vol, zero drift (t) | 58 | **78** | 85 | 0.47 | 48 | 45% | 38.7 |
| 5 | GBM (normal) | 46 | **75** | 84 | 0.57 | 53 | 43% | 39.0 |
| 6 | Momentum | 42 | **67** | 79 | 0.49 | 46 | 46% | 39.3 |
| 7 | GBM + Student-t | 45 | **73** | 84 | 0.57 | 53 | 43% | 40.1 |
| 8 | Bootstrap (IID) | 59 | **86** | 94 | 0.54 | 52 | 54% | 40.6 |
| 9 | Ensemble (GBM-t + bootstraps) | 62 | **88** | 96 | 0.54 | 51 | 58% | 41.8 |
| 10 | Mean-reversion (OU) | 29 | **46** | 55 | 0.40 | 62 | 21% | 124.6 |

## Winner consistency — `momentum` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.47 / 52% / 9.3 | 70% / 0.46 / 49% / 18.7 | 56% / 0.47 / 46% / 60.8 |
| ETH | 86% / 0.47 / 52% / 24.6 | 81% / 0.45 / 49% / 11.6 | 67% / 0.46 / 54% / 46.9 |
| SOL | 78% / 0.48 / 44% / 11.5 | 74% / 0.49 / 36% / 12.3 | 73% / 0.46 / 38% / 22.8 |
| BNB | 88% / 0.5 / 48% / 20.1 | 87% / 0.53 / 47% / 22.2 | 75% / 0.51 / 44% / 12.9 |
| XRP | 82% / 0.44 / 52% / 19.1 | 87% / 0.44 / 51% / 21.2 | 68% / 0.43 / 46% / 40.5 |
| SUI | 84% / 0.47 / 54% / 15 | 74% / 0.5 / 40% / 12.4 | 73% / 0.52 / 38% / 21.9 |
| AVAX | 86% / 0.49 / 38% / 20.7 | 81% / 0.48 / 32% / 11.5 | 67% / 0.46 / 51% / 41.2 |
| LINK | 80% / 0.49 / 46% / 14.8 | 85% / 0.49 / 40% / 18.8 | 75% / 0.52 / 48% / 19.8 |
| INJ | 80% / 0.52 / 56% / 11.6 | 81% / 0.56 / 55% / 19.5 | 62% / 0.62 / 46% / 73.6 |
| OP | 74% / 0.48 / 50% / 22.7 | 83% / 0.49 / 49% / 13.3 | 79% / 0.5 / 51% / 7.4 |
| ARB | 70% / 0.48 / 52% / 29.4 | 72% / 0.48 / 47% / 30 | 49% / 0.51 / 38% / 71.6 |
| DOGE | 80% / 0.48 / 72% / 18.9 | 85% / 0.47 / 64% / 21.6 | 70% / 0.47 / 63% / 34.7 |
| TIA | 72% / 0.48 / 42% / 23.4 | 74% / 0.51 / 40% / 13.5 | 67% / 0.51 / 30% / 41.9 |
| APT | 78% / 0.5 / 46% / 6.6 | 77% / 0.47 / 64% / 15.4 | 62% / 0.46 / 48% / 53.7 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
