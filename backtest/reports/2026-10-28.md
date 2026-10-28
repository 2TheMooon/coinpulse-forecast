# CoinPulse Strategy Tournament — 2026-10-28

_Generated 2026-10-28T15:49:56.761Z · 14 coins · 300 samples/window · 13.0s_

## 🏆 Recommendation: **SWITCH → `ensemble`**

> Ensemble (GBM-t + bootstraps) beats the shipped engine by 6.4 score points (lower=better).

Overall best: **ensemble** · by horizon: 7d→`garch` · 14d→`momentum` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 30.9 |
| 2 | EWMA vol, zero drift (t) | 33.6 |
| 3 | Block bootstrap | 33.6 |
| 4 | Bootstrap (IID) | 34.2 |
| 5 | GBM (normal) | 34.3 |
| 6 | GARCH(1,1)-lite | 34.5 |
| 7 | GBM + Student-t | 34.8 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 37.3 |
| 9 | Momentum | 38.4 |
| 10 | Mean-reversion (OU) | 63.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GARCH(1,1)-lite | 50 | **78** | 86 | 0.50 | 51 | 23% | 14.5 |
| 2 | GBM (normal) | 53 | **80** | 87 | 0.50 | 45 | 24% | 14.9 |
| 3 | Ensemble (GBM-t + bootstraps) | 52 | **80** | 87 | 0.49 | 51 | 23% | 15.4 |
| 4 | Block bootstrap | 49 | **79** | 87 | 0.48 | 51 | 23% | 16.6 |
| 5 | GBM + Student-t | 53 | **79** | 87 | 0.51 | 50 | 24% | 17.4 |
| 6 | Momentum | 48 | **77** | 86 | 0.50 | 50 | 24% | 17.4 |
| 7 | Bootstrap (IID) | 50 | **78** | 86 | 0.49 | 50 | 22% | 17.6 |
| 8 | EWMA vol, zero drift (t) | 55 | **80** | 89 | 0.50 | 58 | 23% | 18.4 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 62 | **86** | 91 | 0.50 | 47 | — | 24.4 |
| 10 | Mean-reversion (OU) | 48 | **72** | 78 | 0.48 | 50 | 20% | 36.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **77** | 86 | 0.53 | 52 | 35% | 25.5 |
| 2 | GBM + Student-t | 56 | **79** | 87 | 0.54 | 45 | 33% | 27.1 |
| 3 | GARCH(1,1)-lite | 55 | **80** | 86 | 0.55 | 50 | 32% | 27.3 |
| 4 | Ensemble (GBM-t + bootstraps) | 56 | **82** | 88 | 0.53 | 49 | 33% | 27.3 |
| 5 | Block bootstrap | 57 | **81** | 88 | 0.52 | 52 | 34% | 28.3 |
| 6 | Bootstrap (IID) | 56 | **80** | 87 | 0.53 | 49 | 32% | 29.2 |
| 7 | EWMA vol, zero drift (t) | 59 | **81** | 87 | 0.54 | 51 | 33% | 29.3 |
| 8 | GBM (normal) | 59 | **81** | 87 | 0.55 | 49 | 34% | 31.2 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 68 | **86** | 91 | 0.54 | 44 | — | 37.8 |
| 10 | Mean-reversion (OU) | 43 | **67** | 75 | 0.52 | 49 | 26% | 50.2 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 63 | **83** | 91 | 0.61 | 40 | — | 49.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 56 | **78** | 86 | 0.62 | 40 | 58% | 50.1 |
| 3 | EWMA vol, zero drift (t) | 52 | **72** | 80 | 0.64 | 41 | 47% | 53.0 |
| 4 | Bootstrap (IID) | 47 | **72** | 80 | 0.62 | 39 | 47% | 55.9 |
| 5 | Block bootstrap | 50 | **73** | 80 | 0.61 | 41 | 50% | 56.0 |
| 6 | GBM (normal) | 48 | **71** | 79 | 0.65 | 39 | 48% | 56.9 |
| 7 | GBM + Student-t | 47 | **70** | 78 | 0.65 | 37 | 47% | 60.0 |
| 8 | GARCH(1,1)-lite | 45 | **70** | 77 | 0.65 | 38 | 45% | 61.8 |
| 9 | Momentum | 35 | **61** | 75 | 0.62 | 48 | 51% | 72.4 |
| 10 | Mean-reversion (OU) | 32 | **52** | 59 | 0.61 | 45 | 33% | 104.2 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.5 / 52% / 10.2 | 85% / 0.55 / 43% / 32.9 | 73% / 0.66 / 37% / 67.3 |
| ETH | 78% / 0.52 / 46% / 20.4 | 79% / 0.58 / 43% / 29.1 | 68% / 0.68 / 22% / 64.8 |
| SOL | 78% / 0.51 / 48% / 17 | 77% / 0.56 / 45% / 24.8 | 75% / 0.67 / 33% / 50.3 |
| BNB | 84% / 0.51 / 56% / 8.1 | 85% / 0.54 / 45% / 16.4 | 75% / 0.61 / 48% / 38 |
| XRP | 82% / 0.46 / 66% / 18.5 | 85% / 0.47 / 60% / 18.4 | 71% / 0.59 / 43% / 57.6 |
| SUI | 86% / 0.5 / 56% / 12.4 | 85% / 0.54 / 49% / 21.9 | 84% / 0.64 / 32% / 45.2 |
| AVAX | 80% / 0.49 / 52% / 17.3 | 74% / 0.55 / 51% / 37.4 | 63% / 0.68 / 38% / 72 |
| LINK | 74% / 0.54 / 54% / 29.3 | 77% / 0.55 / 47% / 22.5 | 71% / 0.68 / 33% / 54.2 |
| INJ | 80% / 0.47 / 50% / 9.9 | 83% / 0.48 / 57% / 14.5 | 90% / 0.51 / 63% / 25.8 |
| OP | 82% / 0.49 / 46% / 7.1 | 91% / 0.52 / 49% / 38.5 | 95% / 0.57 / 35% / 57.8 |
| ARB | 70% / 0.51 / 58% / 21.7 | 72% / 0.57 / 53% / 31.6 | 70% / 0.67 / 22% / 62.7 |
| DOGE | 80% / 0.44 / 60% / 19.5 | 81% / 0.45 / 49% / 22.9 | 78% / 0.53 / 51% / 14.3 |
| TIA | 86% / 0.51 / 24% / 13.5 | 91% / 0.56 / 49% / 40.9 | 94% / 0.58 / 49% / 51.9 |
| APT | 76% / 0.48 / 50% / 10.8 | 87% / 0.52 / 49% / 30.8 | 78% / 0.58 / 46% / 39.4 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
