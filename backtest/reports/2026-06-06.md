# CoinPulse Strategy Tournament — 2026-06-06

_Generated 2026-06-06T19:02:31.056Z · 14 coins · 300 samples/window · 8.4s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`live_engine` · 14d→`live_engine` · 30d→`bootstrap_iid`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 26.9 |
| 2 | GBM (normal) | 27.4 |
| 3 | GBM + Student-t | 27.5 |
| 4 | Block bootstrap | 27.8 |
| 5 | Bootstrap (IID) | 28.4 |
| 6 | GARCH(1,1)-lite | 28.9 |
| 7 | EWMA vol, zero drift (t) | 33.7 |
| 8 | Momentum | 36.1 |
| 9 | Mean-reversion (OU) | 51.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 56 | **80** | 88 | 0.49 | 58 | — | 18.5 |
| 2 | GBM + Student-t | 53 | **79** | 87 | 0.49 | 56 | 24% | 20.1 |
| 3 | Block bootstrap | 55 | **82** | 90 | 0.47 | 54 | 24% | 20.7 |
| 4 | GARCH(1,1)-lite | 53 | **78** | 88 | 0.49 | 55 | 23% | 21.4 |
| 5 | GBM (normal) | 57 | **80** | 87 | 0.49 | 57 | 25% | 22.0 |
| 6 | Momentum | 50 | **78** | 87 | 0.46 | 52 | 25% | 24.2 |
| 7 | Bootstrap (IID) | 60 | **84** | 90 | 0.48 | 54 | 26% | 25.3 |
| 8 | EWMA vol, zero drift (t) | 55 | **80** | 87 | 0.45 | 57 | 24% | 25.9 |
| 9 | Mean-reversion (OU) | 55 | **75** | 83 | 0.45 | 47 | 24% | 37.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 50 | **78** | 86 | 0.50 | 58 | — | 22.5 |
| 2 | GBM (normal) | 51 | **77** | 86 | 0.50 | 59 | 35% | 22.6 |
| 3 | GBM + Student-t | 47 | **76** | 86 | 0.50 | 59 | 33% | 23.1 |
| 4 | Block bootstrap | 50 | **78** | 88 | 0.47 | 52 | 34% | 24.7 |
| 5 | GARCH(1,1)-lite | 45 | **77** | 86 | 0.50 | 57 | 33% | 25.8 |
| 6 | Bootstrap (IID) | 54 | **82** | 88 | 0.48 | 55 | 37% | 26.5 |
| 7 | EWMA vol, zero drift (t) | 50 | **77** | 87 | 0.44 | 50 | 35% | 29.1 |
| 8 | Momentum | 45 | **69** | 82 | 0.46 | 46 | 35% | 36.0 |
| 9 | Mean-reversion (OU) | 47 | **71** | 78 | 0.43 | 50 | 31% | 44.2 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 51 | **74** | 81 | 0.50 | 54 | 53% | 33.4 |
| 2 | GBM (normal) | 48 | **70** | 79 | 0.52 | 57 | 49% | 37.6 |
| 3 | Block bootstrap | 50 | **72** | 78 | 0.49 | 53 | 48% | 37.9 |
| 4 | GBM + Student-t | 46 | **69** | 77 | 0.53 | 56 | 48% | 39.3 |
| 5 | GARCH(1,1)-lite | 45 | **69** | 78 | 0.53 | 55 | 48% | 39.4 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 46 | **70** | 77 | 0.54 | 56 | — | 39.7 |
| 7 | EWMA vol, zero drift (t) | 56 | **72** | 77 | 0.44 | 59 | 52% | 46.1 |
| 8 | Momentum | 41 | **64** | 76 | 0.50 | 46 | 50% | 48.1 |
| 9 | Mean-reversion (OU) | 45 | **62** | 65 | 0.39 | 51 | 38% | 74.2 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 81% / 0.49 / 49% / 5.5 | 76% / 0.49 / 52% / 17.7 | 63% / 0.51 / 44% / 44.7 |
| ETH | 81% / 0.48 / 57% / 21.6 | 79% / 0.46 / 58% / 15.9 | 73% / 0.49 / 46% / 37.2 |
| SOL | 80% / 0.47 / 59% / 18.1 | 79% / 0.46 / 56% / 21.4 | 75% / 0.49 / 62% / 30.3 |
| BNB | 77% / 0.51 / 55% / 8.1 | 77% / 0.51 / 51% / 18.2 | 76% / 0.52 / 44% / 25.6 |
| XRP | 85% / 0.46 / 68% / 33.4 | 86% / 0.46 / 66% / 27.4 | 78% / 0.47 / 67% / 20.6 |
| SUI | 78% / 0.46 / 58% / 24.6 | 73% / 0.48 / 52% / 23.9 | 73% / 0.52 / 48% / 25.6 |
| AVAX | 84% / 0.48 / 55% / 21.3 | 86% / 0.47 / 59% / 16 | 81% / 0.51 / 63% / 12 |
| LINK | 81% / 0.49 / 55% / 14.1 | 77% / 0.5 / 59% / 8.2 | 75% / 0.53 / 49% / 22.9 |
| INJ | 78% / 0.6 / 46% / 23.2 | 66% / 0.63 / 45% / 64.9 | 56% / 0.67 / 49% / 94.6 |
| OP | 77% / 0.49 / 64% / 9.8 | 69% / 0.49 / 65% / 26.8 | 57% / 0.51 / 68% / 59.9 |
| ARB | 66% / 0.47 / 64% / 30 | 69% / 0.47 / 68% / 36.4 | 52% / 0.52 / 65% / 76 |
| DOGE | 85% / 0.48 / 64% / 22 | 83% / 0.5 / 56% / 5.5 | 78% / 0.55 / 60% / 18.9 |
| TIA | 80% / 0.53 / 61% / 15.7 | 85% / 0.56 / 56% / 18.9 | 71% / 0.63 / 52% / 42.9 |
| APT | 81% / 0.52 / 61% / 11.9 | 79% / 0.52 / 62% / 13.7 | 67% / 0.57 / 65% / 44.8 |

Coins: BTC (cryptocompare), ETH (cryptocompare), SOL (binance), BNB (binance), XRP (binance), SUI (binance), AVAX (cryptocompare), LINK (cryptocompare), INJ (binance), OP (binance), ARB (binance), DOGE (binance), TIA (binance), APT (binance)
