# CoinPulse Strategy Tournament — 2026-09-12

_Generated 2026-09-12T12:45:55.481Z · 14 coins · 300 samples/window · 11.7s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 26.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 29.7 |
| 3 | Bootstrap (IID) | 30.5 |
| 4 | GBM (normal) | 32.5 |
| 5 | GBM + Student-t | 32.7 |
| 6 | GARCH(1,1)-lite | 33.2 |
| 7 | EWMA vol, zero drift (t) | 33.5 |
| 8 | Block bootstrap | 34.3 |
| 9 | Momentum | 40.2 |
| 10 | Mean-reversion (OU) | 66.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 88 | 0.50 | 47 | — | 17.0 |
| 2 | Block bootstrap | 50 | **76** | 84 | 0.50 | 45 | 20% | 19.5 |
| 3 | GBM (normal) | 52 | **78** | 84 | 0.52 | 47 | 21% | 19.6 |
| 4 | GBM + Student-t | 51 | **76** | 84 | 0.52 | 45 | 20% | 19.8 |
| 5 | GARCH(1,1)-lite | 51 | **75** | 84 | 0.51 | 44 | 20% | 20.8 |
| 6 | EWMA vol, zero drift (t) | 52 | **76** | 85 | 0.51 | 49 | 20% | 21.0 |
| 7 | Ensemble (GBM-t + bootstraps) | 50 | **76** | 84 | 0.51 | 46 | 20% | 21.2 |
| 8 | Bootstrap (IID) | 52 | **77** | 85 | 0.51 | 44 | 21% | 21.8 |
| 9 | Momentum | 45 | **73** | 82 | 0.50 | 49 | 21% | 25.9 |
| 10 | Mean-reversion (OU) | 46 | **69** | 78 | 0.51 | 52 | 18% | 37.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **80** | 87 | 0.51 | 43 | — | 23.7 |
| 2 | Bootstrap (IID) | 52 | **76** | 85 | 0.50 | 45 | 30% | 25.0 |
| 3 | GBM + Student-t | 51 | **73** | 83 | 0.52 | 45 | 28% | 27.4 |
| 4 | Ensemble (GBM-t + bootstraps) | 51 | **75** | 83 | 0.51 | 48 | 29% | 27.6 |
| 5 | GARCH(1,1)-lite | 50 | **74** | 82 | 0.52 | 45 | 28% | 28.7 |
| 6 | EWMA vol, zero drift (t) | 51 | **75** | 84 | 0.51 | 49 | 28% | 29.3 |
| 7 | GBM (normal) | 54 | **74** | 83 | 0.52 | 48 | 29% | 29.4 |
| 8 | Block bootstrap | 49 | **74** | 82 | 0.50 | 43 | 28% | 29.5 |
| 9 | Momentum | 44 | **69** | 80 | 0.50 | 50 | 30% | 33.3 |
| 10 | Mean-reversion (OU) | 41 | **62** | 72 | 0.49 | 52 | 22% | 58.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **73** | 82 | 0.51 | 36 | — | 38.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 54 | **72** | 81 | 0.50 | 42 | 51% | 40.2 |
| 3 | Bootstrap (IID) | 49 | **68** | 77 | 0.50 | 40 | 44% | 44.6 |
| 4 | GBM (normal) | 47 | **68** | 75 | 0.52 | 42 | 42% | 48.6 |
| 5 | EWMA vol, zero drift (t) | 48 | **68** | 77 | 0.50 | 49 | 41% | 50.2 |
| 6 | GARCH(1,1)-lite | 45 | **66** | 75 | 0.52 | 42 | 40% | 50.3 |
| 7 | GBM + Student-t | 44 | **67** | 74 | 0.52 | 40 | 41% | 51.0 |
| 8 | Block bootstrap | 47 | **66** | 73 | 0.49 | 39 | 42% | 53.9 |
| 9 | Momentum | 35 | **60** | 71 | 0.53 | 49 | 42% | 61.5 |
| 10 | Mean-reversion (OU) | 32 | **48** | 56 | 0.45 | 60 | 26% | 102.3 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.48 / 49% / 15.3 | 79% / 0.49 / 42% / 21.6 | 57% / 0.49 / 24% / 56.3 |
| ETH | 82% / 0.47 / 43% / 23.4 | 73% / 0.49 / 37% / 24.4 | 54% / 0.51 / 10% / 60.5 |
| SOL | 77% / 0.53 / 53% / 20.6 | 76% / 0.55 / 38% / 26 | 70% / 0.56 / 35% / 36.6 |
| BNB | 84% / 0.57 / 43% / 23.9 | 79% / 0.58 / 32% / 24.9 | 71% / 0.57 / 19% / 31.9 |
| XRP | 85% / 0.47 / 49% / 16.2 | 80% / 0.47 / 55% / 22.9 | 67% / 0.49 / 59% / 37.6 |
| SUI | 81% / 0.49 / 47% / 16 | 82% / 0.52 / 45% / 12.6 | 84% / 0.51 / 38% / 22.5 |
| AVAX | 82% / 0.5 / 47% / 19.5 | 80% / 0.5 / 44% / 20.9 | 76% / 0.48 / 52% / 29 |
| LINK | 80% / 0.53 / 39% / 10.5 | 77% / 0.55 / 38% / 18 | 67% / 0.58 / 19% / 45.1 |
| INJ | 78% / 0.54 / 58% / 14.3 | 86% / 0.56 / 59% / 23.8 | 78% / 0.54 / 56% / 24.8 |
| OP | 77% / 0.48 / 45% / 11.3 | 90% / 0.49 / 38% / 26.2 | 92% / 0.47 / 44% / 48.8 |
| ARB | 64% / 0.49 / 49% / 37.6 | 62% / 0.5 / 41% / 32.1 | 73% / 0.46 / 19% / 24.1 |
| DOGE | 80% / 0.49 / 53% / 11.7 | 73% / 0.49 / 48% / 20.8 | 62% / 0.47 / 43% / 44.3 |
| TIA | 81% / 0.51 / 32% / 7.1 | 92% / 0.52 / 31% / 28.7 | 95% / 0.49 / 13% / 46.2 |
| APT | 78% / 0.5 / 49% / 9.9 | 90% / 0.49 / 58% / 28.4 | 79% / 0.45 / 68% / 27 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
