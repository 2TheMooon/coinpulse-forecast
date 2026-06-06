# CoinPulse Strategy Tournament — 2026-06-06

_Generated 2026-06-06T19:33:00.416Z · 14 coins · 300 samples/window · 10.2s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`bootstrap_iid`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 26.0 |
| 2 | Ensemble (GBM-t + bootstraps) | 27.1 |
| 3 | GBM (normal) | 27.6 |
| 4 | GBM + Student-t | 27.9 |
| 5 | Block bootstrap | 28.2 |
| 6 | GARCH(1,1)-lite | 28.9 |
| 7 | Bootstrap (IID) | 29.0 |
| 8 | EWMA vol, zero drift (t) | 34.2 |
| 9 | Momentum | 35.2 |
| 10 | Mean-reversion (OU) | 49.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **82** | 90 | 0.49 | 59 | — | 19.9 |
| 2 | GBM + Student-t | 54 | **80** | 88 | 0.49 | 56 | 24% | 20.3 |
| 3 | Block bootstrap | 56 | **82** | 90 | 0.47 | 55 | 24% | 20.7 |
| 4 | Ensemble (GBM-t + bootstraps) | 57 | **81** | 90 | 0.48 | 55 | 25% | 21.1 |
| 5 | GBM (normal) | 56 | **81** | 87 | 0.49 | 58 | 25% | 22.0 |
| 6 | Momentum | 51 | **78** | 87 | 0.46 | 52 | 25% | 22.1 |
| 7 | GARCH(1,1)-lite | 54 | **79** | 88 | 0.49 | 55 | 23% | 22.3 |
| 8 | Bootstrap (IID) | 59 | **84** | 90 | 0.48 | 54 | 26% | 25.7 |
| 9 | EWMA vol, zero drift (t) | 56 | **80** | 88 | 0.45 | 56 | 24% | 25.9 |
| 10 | Mean-reversion (OU) | 55 | **76** | 83 | 0.45 | 47 | 24% | 33.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 52 | **79** | 87 | 0.50 | 58 | — | 22.3 |
| 2 | GBM (normal) | 52 | **77** | 86 | 0.50 | 59 | 35% | 22.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 51 | **79** | 87 | 0.49 | 56 | 35% | 23.6 |
| 4 | GBM + Student-t | 48 | **75** | 86 | 0.50 | 59 | 33% | 24.0 |
| 5 | GARCH(1,1)-lite | 47 | **77** | 86 | 0.50 | 58 | 33% | 24.5 |
| 6 | Block bootstrap | 51 | **78** | 86 | 0.48 | 53 | 34% | 24.9 |
| 7 | Bootstrap (IID) | 54 | **82** | 88 | 0.48 | 56 | 37% | 25.9 |
| 8 | EWMA vol, zero drift (t) | 50 | **77** | 86 | 0.44 | 50 | 35% | 29.9 |
| 9 | Momentum | 46 | **70** | 82 | 0.46 | 47 | 35% | 34.0 |
| 10 | Mean-reversion (OU) | 48 | **71** | 78 | 0.43 | 52 | 31% | 42.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 52 | **74** | 80 | 0.50 | 54 | 53% | 35.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 47 | **70** | 80 | 0.54 | 56 | — | 35.8 |
| 3 | Ensemble (GBM-t + bootstraps) | 51 | **72** | 80 | 0.51 | 54 | 50% | 36.6 |
| 4 | GBM (normal) | 48 | **70** | 78 | 0.52 | 57 | 49% | 38.2 |
| 5 | Block bootstrap | 50 | **71** | 77 | 0.49 | 53 | 48% | 39.0 |
| 6 | GBM + Student-t | 47 | **69** | 77 | 0.53 | 56 | 48% | 39.3 |
| 7 | GARCH(1,1)-lite | 46 | **69** | 78 | 0.53 | 56 | 48% | 39.8 |
| 8 | EWMA vol, zero drift (t) | 57 | **72** | 77 | 0.44 | 59 | 52% | 46.7 |
| 9 | Momentum | 42 | **63** | 75 | 0.50 | 46 | 51% | 49.4 |
| 10 | Mean-reversion (OU) | 46 | **62** | 66 | 0.39 | 52 | 39% | 73.3 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 83% / 0.49 / 49% / 8.3 | 77% / 0.49 / 52% / 12.1 | 63% / 0.51 / 44% / 41 |
| ETH | 81% / 0.48 / 57% / 20.2 | 82% / 0.47 / 58% / 17.7 | 73% / 0.48 / 46% / 32.6 |
| SOL | 81% / 0.48 / 55% / 24.4 | 80% / 0.48 / 55% / 11.3 | 75% / 0.49 / 70% / 19.8 |
| BNB | 78% / 0.51 / 55% / 5.4 | 80% / 0.51 / 51% / 17.1 | 76% / 0.52 / 44% / 23.5 |
| XRP | 86% / 0.46 / 68% / 38.4 | 86% / 0.46 / 66% / 27.3 | 78% / 0.47 / 67% / 24.4 |
| SUI | 81% / 0.46 / 59% / 24.9 | 73% / 0.48 / 54% / 20.7 | 73% / 0.52 / 49% / 20.8 |
| AVAX | 85% / 0.46 / 66% / 26.3 | 85% / 0.47 / 65% / 24.3 | 81% / 0.51 / 60% / 13.5 |
| LINK | 82% / 0.47 / 66% / 17.5 | 82% / 0.48 / 58% / 18.2 | 76% / 0.52 / 51% / 14.8 |
| INJ | 80% / 0.6 / 46% / 25.4 | 66% / 0.63 / 45% / 59.2 | 57% / 0.67 / 49% / 93.2 |
| OP | 80% / 0.49 / 64% / 8.1 | 72% / 0.49 / 65% / 19.3 | 59% / 0.51 / 68% / 48.9 |
| ARB | 72% / 0.47 / 64% / 20.3 | 72% / 0.47 / 69% / 33.8 | 49% / 0.52 / 68% / 73.7 |
| DOGE | 87% / 0.51 / 56% / 28.9 | 82% / 0.51 / 59% / 15.1 | 79% / 0.56 / 52% / 14.5 |
| TIA | 82% / 0.53 / 61% / 15.2 | 85% / 0.56 / 56% / 21.9 | 73% / 0.63 / 52% / 40.6 |
| APT | 84% / 0.52 / 61% / 15.7 | 85% / 0.52 / 62% / 14.5 | 68% / 0.57 / 65% / 40.1 |

Coins: BTC (cryptocompare), ETH (cryptocompare), SOL (cryptocompare), BNB (binance), XRP (binance), SUI (binance), AVAX (binance), LINK (binance), INJ (binance), OP (binance), ARB (cryptocompare), DOGE (cryptocompare), TIA (binance), APT (binance)
