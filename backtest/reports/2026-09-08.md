# CoinPulse Strategy Tournament — 2026-09-08

_Generated 2026-09-08T13:26:04.852Z · 14 coins · 300 samples/window · 11.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 25.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 27.9 |
| 3 | Bootstrap (IID) | 28.5 |
| 4 | GBM (normal) | 30.8 |
| 5 | GARCH(1,1)-lite | 31.5 |
| 6 | EWMA vol, zero drift (t) | 32.2 |
| 7 | GBM + Student-t | 32.3 |
| 8 | Block bootstrap | 34.4 |
| 9 | Momentum | 36.5 |
| 10 | Mean-reversion (OU) | 67.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **80** | 88 | 0.50 | 44 | — | 16.8 |
| 2 | GBM (normal) | 55 | **77** | 85 | 0.51 | 52 | 21% | 20.7 |
| 3 | Ensemble (GBM-t + bootstraps) | 53 | **77** | 85 | 0.51 | 47 | 21% | 21.1 |
| 4 | Bootstrap (IID) | 57 | **78** | 86 | 0.51 | 48 | 22% | 22.5 |
| 5 | GBM + Student-t | 54 | **76** | 84 | 0.52 | 52 | 20% | 23.5 |
| 6 | EWMA vol, zero drift (t) | 54 | **76** | 84 | 0.51 | 54 | 20% | 23.6 |
| 7 | GARCH(1,1)-lite | 51 | **76** | 84 | 0.51 | 53 | 20% | 23.6 |
| 8 | Momentum | 51 | **74** | 82 | 0.50 | 53 | 21% | 24.6 |
| 9 | Block bootstrap | 52 | **74** | 83 | 0.50 | 47 | 20% | 25.1 |
| 10 | Mean-reversion (OU) | 46 | **68** | 77 | 0.50 | 50 | 18% | 39.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **80** | 87 | 0.51 | 42 | — | 23.4 |
| 2 | Bootstrap (IID) | 56 | **80** | 87 | 0.52 | 45 | 31% | 23.9 |
| 3 | Ensemble (GBM-t + bootstraps) | 52 | **77** | 87 | 0.52 | 45 | 30% | 24.5 |
| 4 | Momentum | 49 | **73** | 84 | 0.52 | 52 | 30% | 26.3 |
| 5 | GBM (normal) | 53 | **77** | 85 | 0.53 | 43 | 30% | 26.5 |
| 6 | GARCH(1,1)-lite | 52 | **77** | 86 | 0.53 | 41 | 28% | 26.8 |
| 7 | GBM + Student-t | 52 | **76** | 85 | 0.53 | 45 | 28% | 26.9 |
| 8 | EWMA vol, zero drift (t) | 52 | **78** | 86 | 0.52 | 50 | 28% | 28.0 |
| 9 | Block bootstrap | 52 | **75** | 84 | 0.51 | 44 | 29% | 29.1 |
| 10 | Mean-reversion (OU) | 41 | **63** | 71 | 0.50 | 50 | 22% | 60.3 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **75** | 83 | 0.49 | 34 | — | 36.9 |
| 2 | Ensemble (GBM-t + bootstraps) | 57 | **74** | 83 | 0.49 | 38 | 53% | 38.0 |
| 3 | Bootstrap (IID) | 52 | **70** | 80 | 0.49 | 42 | 47% | 39.3 |
| 4 | GARCH(1,1)-lite | 47 | **69** | 77 | 0.51 | 40 | 42% | 44.0 |
| 5 | EWMA vol, zero drift (t) | 50 | **70** | 77 | 0.50 | 51 | 42% | 45.0 |
| 6 | GBM (normal) | 48 | **68** | 76 | 0.51 | 40 | 43% | 45.3 |
| 7 | GBM + Student-t | 48 | **68** | 75 | 0.51 | 38 | 42% | 46.4 |
| 8 | Block bootstrap | 48 | **68** | 75 | 0.48 | 39 | 42% | 48.9 |
| 9 | Momentum | 36 | **61** | 72 | 0.53 | 47 | 43% | 58.5 |
| 10 | Mean-reversion (OU) | 31 | **51** | 57 | 0.44 | 59 | 26% | 102.7 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.49 / 50% / 12.3 | 80% / 0.5 / 45% / 18.5 | 60% / 0.49 / 27% / 53.1 |
| ETH | 82% / 0.47 / 39% / 23 | 70% / 0.49 / 34% / 28.4 | 60% / 0.49 / 8% / 48.1 |
| SOL | 78% / 0.53 / 43% / 17.1 | 79% / 0.55 / 38% / 28.5 | 73% / 0.54 / 30% / 25.8 |
| BNB | 85% / 0.57 / 41% / 24.7 | 80% / 0.58 / 35% / 24 | 75% / 0.56 / 22% / 29.5 |
| XRP | 86% / 0.48 / 47% / 15.6 | 80% / 0.48 / 52% / 21.4 | 70% / 0.48 / 57% / 38.8 |
| SUI | 80% / 0.49 / 42% / 14.1 | 83% / 0.51 / 41% / 12.4 | 84% / 0.5 / 41% / 22.2 |
| AVAX | 84% / 0.49 / 41% / 21.9 | 80% / 0.49 / 41% / 19.9 | 76% / 0.46 / 46% / 36.9 |
| LINK | 80% / 0.53 / 45% / 7.5 | 79% / 0.55 / 42% / 15.2 | 67% / 0.56 / 21% / 37.4 |
| INJ | 80% / 0.55 / 45% / 13.4 | 80% / 0.58 / 44% / 20 | 76% / 0.57 / 38% / 40.2 |
| OP | 76% / 0.49 / 42% / 11.3 | 89% / 0.5 / 39% / 24.3 | 90% / 0.48 / 48% / 39.2 |
| ARB | 62% / 0.49 / 47% / 41.3 | 62% / 0.49 / 45% / 30.7 | 76% / 0.44 / 22% / 23.1 |
| DOGE | 80% / 0.48 / 49% / 11.3 | 73% / 0.49 / 44% / 21.1 | 65% / 0.46 / 41% / 38.9 |
| TIA | 81% / 0.51 / 36% / 8.1 | 90% / 0.52 / 34% / 23.1 | 92% / 0.49 / 29% / 43 |
| APT | 78% / 0.48 / 53% / 13.6 | 90% / 0.46 / 52% / 40.1 | 79% / 0.41 / 49% / 40.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
