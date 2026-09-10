# CoinPulse Strategy Tournament — 2026-09-10

_Generated 2026-09-10T13:28:06.476Z · 14 coins · 300 samples/window · 10.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`ensemble` · 14d→`ensemble` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 27.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 28.7 |
| 3 | Bootstrap (IID) | 29.5 |
| 4 | GBM (normal) | 30.7 |
| 5 | GARCH(1,1)-lite | 30.8 |
| 6 | GBM + Student-t | 31.3 |
| 7 | EWMA vol, zero drift (t) | 31.4 |
| 8 | Block bootstrap | 33.9 |
| 9 | Momentum | 36.7 |
| 10 | Mean-reversion (OU) | 70.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 53 | **79** | 88 | 0.51 | 46 | 21% | 17.2 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 88 | 0.49 | 47 | — | 17.8 |
| 3 | Block bootstrap | 52 | **78** | 87 | 0.49 | 45 | 21% | 18.8 |
| 4 | GBM (normal) | 54 | **78** | 87 | 0.51 | 48 | 21% | 19.3 |
| 5 | GBM + Student-t | 51 | **78** | 87 | 0.51 | 45 | 20% | 19.5 |
| 6 | GARCH(1,1)-lite | 52 | **77** | 87 | 0.50 | 48 | 20% | 19.7 |
| 7 | Bootstrap (IID) | 55 | **81** | 88 | 0.50 | 45 | 22% | 20.1 |
| 8 | EWMA vol, zero drift (t) | 52 | **79** | 87 | 0.52 | 47 | 20% | 20.8 |
| 9 | Momentum | 49 | **74** | 85 | 0.50 | 52 | 21% | 21.2 |
| 10 | Mean-reversion (OU) | 47 | **70** | 78 | 0.49 | 52 | 18% | 37.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 52 | **78** | 85 | 0.51 | 43 | 30% | 25.1 |
| 2 | GBM + Student-t | 51 | **76** | 85 | 0.51 | 43 | 29% | 25.3 |
| 3 | Bootstrap (IID) | 55 | **79** | 86 | 0.50 | 45 | 32% | 25.3 |
| 4 | GARCH(1,1)-lite | 50 | **76** | 85 | 0.52 | 43 | 28% | 25.4 |
| 5 | GBM (normal) | 52 | **76** | 84 | 0.51 | 42 | 30% | 25.4 |
| 6 | EWMA vol, zero drift (t) | 50 | **76** | 86 | 0.52 | 46 | 28% | 25.9 |
| 7 | Shipped engine (forecast.js) _(shipped)_ | 58 | **80** | 87 | 0.49 | 44 | — | 26.2 |
| 8 | Momentum | 45 | **74** | 83 | 0.52 | 51 | 30% | 27.3 |
| 9 | Block bootstrap | 51 | **75** | 83 | 0.49 | 47 | 29% | 29.9 |
| 10 | Mean-reversion (OU) | 37 | **60** | 71 | 0.48 | 51 | 22% | 64.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 55 | **73** | 82 | 0.48 | 38 | 53% | 40.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 56 | **73** | 82 | 0.48 | 37 | — | 42.1 |
| 3 | Bootstrap (IID) | 51 | **70** | 79 | 0.48 | 40 | 47% | 43.0 |
| 4 | GARCH(1,1)-lite | 48 | **68** | 76 | 0.49 | 37 | 42% | 47.3 |
| 5 | GBM (normal) | 48 | **67** | 75 | 0.50 | 37 | 43% | 47.4 |
| 6 | EWMA vol, zero drift (t) | 49 | **69** | 77 | 0.50 | 49 | 42% | 47.7 |
| 7 | GBM + Student-t | 48 | **67** | 74 | 0.50 | 35 | 42% | 49.1 |
| 8 | Block bootstrap | 48 | **66** | 73 | 0.47 | 41 | 43% | 53.0 |
| 9 | Momentum | 35 | **60** | 71 | 0.53 | 48 | 42% | 61.7 |
| 10 | Mean-reversion (OU) | 30 | **48** | 56 | 0.42 | 61 | 26% | 108.7 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.49 / 44% / 8.4 | 81% / 0.5 / 30% / 13.2 | 59% / 0.47 / 41% / 47.5 |
| ETH | 80% / 0.5 / 42% / 8.8 | 81% / 0.5 / 30% / 11.9 | 59% / 0.49 / 21% / 51 |
| SOL | 78% / 0.52 / 54% / 19.3 | 77% / 0.54 / 47% / 26.2 | 67% / 0.53 / 30% / 28.8 |
| BNB | 84% / 0.55 / 42% / 25.8 | 79% / 0.57 / 49% / 20.6 | 76% / 0.54 / 46% / 20.2 |
| XRP | 84% / 0.46 / 48% / 15.1 | 81% / 0.46 / 49% / 21.1 | 63% / 0.45 / 41% / 53 |
| SUI | 80% / 0.49 / 50% / 7 | 81% / 0.51 / 45% / 5.9 | 87% / 0.48 / 41% / 29.4 |
| AVAX | 84% / 0.48 / 48% / 30.7 | 83% / 0.48 / 47% / 25.5 | 78% / 0.44 / 33% / 35 |
| LINK | 78% / 0.53 / 46% / 12.4 | 74% / 0.55 / 43% / 30.3 | 65% / 0.55 / 33% / 39.6 |
| INJ | 70% / 0.59 / 40% / 29 | 66% / 0.58 / 45% / 48 | 68% / 0.56 / 48% / 40.6 |
| OP | 78% / 0.5 / 48% / 12.8 | 81% / 0.49 / 43% / 10.1 | 92% / 0.46 / 51% / 39.5 |
| ARB | 64% / 0.48 / 46% / 33.2 | 62% / 0.48 / 45% / 52.7 | 71% / 0.43 / 17% / 39.4 |
| DOGE | 76% / 0.48 / 46% / 17.3 | 68% / 0.48 / 43% / 25.8 | 65% / 0.44 / 43% / 50.3 |
| TIA | 82% / 0.52 / 44% / 10.1 | 81% / 0.53 / 36% / 20.1 | 94% / 0.48 / 38% / 41.9 |
| APT | 80% / 0.49 / 48% / 10.5 | 91% / 0.46 / 55% / 39.4 | 79% / 0.39 / 52% / 47.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
