# CoinPulse Strategy Tournament — 2026-08-28

_Generated 2026-08-28T20:47:02.096Z · 14 coins · 300 samples/window · 12.9s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`block_boot` · 14d→`live_engine` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 24.0 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 24.7 |
| 3 | Bootstrap (IID) | 25.2 |
| 4 | GARCH(1,1)-lite | 26.8 |
| 5 | Block bootstrap | 27.3 |
| 6 | GBM + Student-t | 27.4 |
| 7 | GBM (normal) | 27.5 |
| 8 | EWMA vol, zero drift (t) | 28.4 |
| 9 | Momentum | 39.3 |
| 10 | Mean-reversion (OU) | 69.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 53 | **79** | 87 | 0.50 | 49 | 21% | 15.1 |
| 2 | Ensemble (GBM-t + bootstraps) | 55 | **80** | 87 | 0.51 | 49 | 21% | 18.0 |
| 3 | EWMA vol, zero drift (t) | 50 | **79** | 86 | 0.52 | 44 | 20% | 19.4 |
| 4 | GBM + Student-t | 50 | **78** | 85 | 0.53 | 44 | 20% | 19.4 |
| 5 | GARCH(1,1)-lite | 51 | **78** | 85 | 0.52 | 45 | 20% | 19.5 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 86 | 0.53 | 43 | — | 19.7 |
| 7 | Bootstrap (IID) | 57 | **82** | 88 | 0.51 | 47 | 23% | 19.9 |
| 8 | GBM (normal) | 54 | **78** | 85 | 0.52 | 47 | 20% | 20.1 |
| 9 | Momentum | 45 | **74** | 83 | 0.53 | 47 | 20% | 27.3 |
| 10 | Mean-reversion (OU) | 46 | **70** | 79 | 0.48 | 56 | 18% | 37.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **78** | 87 | 0.52 | 45 | — | 21.8 |
| 2 | Bootstrap (IID) | 56 | **80** | 88 | 0.51 | 46 | 32% | 23.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 54 | **77** | 87 | 0.51 | 49 | 30% | 24.3 |
| 4 | GBM + Student-t | 50 | **75** | 85 | 0.53 | 47 | 28% | 24.5 |
| 5 | GBM (normal) | 52 | **76** | 85 | 0.53 | 42 | 29% | 24.8 |
| 6 | Block bootstrap | 51 | **75** | 84 | 0.50 | 46 | 29% | 25.7 |
| 7 | GARCH(1,1)-lite | 49 | **75** | 85 | 0.53 | 46 | 28% | 26.4 |
| 8 | EWMA vol, zero drift (t) | 49 | **78** | 87 | 0.52 | 54 | 28% | 26.6 |
| 9 | Momentum | 45 | **70** | 81 | 0.54 | 46 | 29% | 33.0 |
| 10 | Mean-reversion (OU) | 40 | **63** | 70 | 0.48 | 56 | 21% | 63.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 58 | **78** | 86 | 0.48 | 43 | 53% | 29.9 |
| 2 | Bootstrap (IID) | 55 | **75** | 83 | 0.48 | 45 | 48% | 32.2 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 57 | **76** | 84 | 0.48 | 40 | — | 32.5 |
| 4 | GARCH(1,1)-lite | 50 | **72** | 81 | 0.50 | 40 | 43% | 34.4 |
| 5 | GBM (normal) | 50 | **72** | 80 | 0.50 | 42 | 43% | 37.5 |
| 6 | GBM + Student-t | 49 | **71** | 79 | 0.50 | 41 | 43% | 38.2 |
| 7 | EWMA vol, zero drift (t) | 51 | **73** | 80 | 0.49 | 52 | 43% | 39.1 |
| 8 | Block bootstrap | 49 | **70** | 78 | 0.47 | 42 | 43% | 41.3 |
| 9 | Momentum | 35 | **61** | 74 | 0.53 | 47 | 43% | 57.5 |
| 10 | Mean-reversion (OU) | 31 | **50** | 57 | 0.42 | 60 | 24% | 106.2 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.52 / 50% / 17.3 | 77% / 0.51 / 40% / 14.3 | 65% / 0.49 / 35% / 30.9 |
| ETH | 84% / 0.51 / 52% / 15.5 | 70% / 0.51 / 40% / 19.1 | 70% / 0.48 / 24% / 23.5 |
| SOL | 78% / 0.54 / 44% / 23.4 | 79% / 0.53 / 36% / 19.4 | 84% / 0.5 / 32% / 19.1 |
| BNB | 88% / 0.55 / 54% / 23.4 | 83% / 0.55 / 43% / 27.5 | 86% / 0.52 / 33% / 26.1 |
| XRP | 82% / 0.47 / 56% / 17.1 | 79% / 0.46 / 64% / 24.2 | 76% / 0.43 / 54% / 35.4 |
| SUI | 80% / 0.5 / 50% / 12.4 | 79% / 0.5 / 51% / 14.5 | 81% / 0.48 / 54% / 31 |
| AVAX | 82% / 0.48 / 32% / 11.9 | 77% / 0.46 / 53% / 25 | 78% / 0.42 / 51% / 49.4 |
| LINK | 76% / 0.53 / 46% / 22.4 | 77% / 0.54 / 43% / 15.8 | 78% / 0.53 / 35% / 11.1 |
| INJ | 82% / 0.59 / 58% / 23.2 | 70% / 0.6 / 55% / 39.9 | 67% / 0.59 / 44% / 43.7 |
| OP | 78% / 0.52 / 48% / 12.5 | 85% / 0.55 / 51% / 23.3 | 86% / 0.53 / 59% / 31.5 |
| ARB | 70% / 0.51 / 50% / 31.4 | 64% / 0.49 / 51% / 47.3 | 79% / 0.46 / 29% / 20.3 |
| DOGE | 84% / 0.47 / 54% / 21.4 | 74% / 0.46 / 55% / 24.7 | 73% / 0.42 / 49% / 33.6 |
| TIA | 78% / 0.5 / 36% / 12.8 | 79% / 0.53 / 40% / 14.8 | 90% / 0.51 / 30% / 25.7 |
| APT | 80% / 0.48 / 50% / 7.3 | 89% / 0.46 / 57% / 29.8 | 79% / 0.42 / 68% / 37.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
