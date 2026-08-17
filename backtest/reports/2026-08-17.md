# CoinPulse Strategy Tournament — 2026-08-17

_Generated 2026-08-17T09:48:05.316Z · 14 coins · 300 samples/window · 9.9s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 23.9 |
| 2 | Momentum | 24.0 |
| 3 | GBM + Student-t | 27.4 |
| 4 | GBM (normal) | 28.3 |
| 5 | Block bootstrap | 28.4 |
| 6 | GARCH(1,1)-lite | 29.6 |
| 7 | EWMA vol, zero drift (t) | 30.1 |
| 8 | Ensemble (GBM-t + bootstraps) | 31.3 |
| 9 | Bootstrap (IID) | 38.2 |
| 10 | Mean-reversion (OU) | 82.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 53 | **80** | 91 | 0.50 | 46 | 22% | 17.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 88 | 0.51 | 57 | — | 18.8 |
| 3 | GBM + Student-t | 54 | **83** | 91 | 0.53 | 53 | 21% | 21.3 |
| 4 | EWMA vol, zero drift (t) | 56 | **84** | 92 | 0.49 | 56 | 21% | 22.5 |
| 5 | GARCH(1,1)-lite | 57 | **84** | 92 | 0.52 | 53 | 21% | 22.9 |
| 6 | GBM (normal) | 57 | **85** | 92 | 0.52 | 52 | 21% | 23.9 |
| 7 | Block bootstrap | 58 | **88** | 94 | 0.50 | 45 | 23% | 24.8 |
| 8 | Ensemble (GBM-t + bootstraps) | 59 | **88** | 94 | 0.51 | 53 | 23% | 26.6 |
| 9 | Bootstrap (IID) | 65 | **90** | 95 | 0.51 | 55 | 26% | 35.5 |
| 10 | Mean-reversion (OU) | 46 | **73** | 80 | 0.43 | 55 | 18% | 42.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 48 | **78** | 88 | 0.50 | 47 | 31% | 16.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 55 | **82** | 89 | 0.52 | 54 | — | 20.9 |
| 3 | GBM + Student-t | 54 | **81** | 89 | 0.53 | 55 | 30% | 23.5 |
| 4 | GBM (normal) | 55 | **82** | 90 | 0.54 | 55 | 31% | 25.3 |
| 5 | Block bootstrap | 57 | **84** | 92 | 0.51 | 52 | 32% | 25.6 |
| 6 | EWMA vol, zero drift (t) | 56 | **84** | 91 | 0.48 | 58 | 30% | 27.8 |
| 7 | Ensemble (GBM-t + bootstraps) | 58 | **85** | 94 | 0.52 | 52 | 33% | 29.0 |
| 8 | GARCH(1,1)-lite | 58 | **84** | 92 | 0.54 | 54 | 31% | 29.7 |
| 9 | Bootstrap (IID) | 64 | **89** | 95 | 0.51 | 51 | 37% | 39.2 |
| 10 | Mean-reversion (OU) | 32 | **60** | 70 | 0.41 | 54 | 21% | 81.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 55 | **80** | 88 | 0.53 | 52 | — | 32.0 |
| 2 | Block bootstrap | 54 | **79** | 89 | 0.52 | 49 | 46% | 34.9 |
| 3 | GBM (normal) | 49 | **76** | 85 | 0.55 | 53 | 44% | 35.8 |
| 4 | GARCH(1,1)-lite | 51 | **81** | 91 | 0.55 | 52 | 47% | 36.2 |
| 5 | GBM + Student-t | 49 | **75** | 84 | 0.55 | 53 | 43% | 37.3 |
| 6 | Ensemble (GBM-t + bootstraps) | 62 | **88** | 95 | 0.52 | 52 | 58% | 38.2 |
| 7 | Momentum | 42 | **68** | 79 | 0.49 | 47 | 46% | 38.4 |
| 8 | Bootstrap (IID) | 62 | **86** | 94 | 0.52 | 50 | 55% | 39.9 |
| 9 | EWMA vol, zero drift (t) | 58 | **78** | 85 | 0.47 | 51 | 46% | 39.9 |
| 10 | Mean-reversion (OU) | 29 | **47** | 54 | 0.40 | 61 | 22% | 122.5 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 85% / 0.51 / 54% / 8.6 | 85% / 0.53 / 49% / 15.6 | 71% / 0.52 / 48% / 24.7 |
| ETH | 86% / 0.5 / 57% / 18.7 | 80% / 0.52 / 51% / 10.8 | 73% / 0.52 / 43% / 20 |
| SOL | 78% / 0.52 / 62% / 17.4 | 82% / 0.54 / 51% / 18.2 | 87% / 0.54 / 56% / 28.5 |
| BNB | 82% / 0.58 / 54% / 27.6 | 85% / 0.6 / 48% / 30.3 | 92% / 0.6 / 43% / 43.8 |
| XRP | 86% / 0.47 / 66% / 18.1 | 87% / 0.47 / 68% / 23.4 | 86% / 0.46 / 67% / 28.1 |
| SUI | 78% / 0.49 / 61% / 17.8 | 83% / 0.52 / 58% / 11.6 | 89% / 0.52 / 54% / 28.2 |
| AVAX | 89% / 0.47 / 59% / 30 | 89% / 0.47 / 59% / 30.6 | 79% / 0.44 / 67% / 49.6 |
| LINK | 80% / 0.51 / 57% / 8 | 79% / 0.54 / 46% / 14.6 | 83% / 0.55 / 37% / 19.4 |
| INJ | 77% / 0.56 / 45% / 22.8 | 72% / 0.59 / 37% / 30.1 | 67% / 0.64 / 25% / 56.7 |
| OP | 82% / 0.52 / 58% / 12.2 | 82% / 0.57 / 55% / 19.8 | 79% / 0.59 / 63% / 34.5 |
| ARB | 61% / 0.5 / 61% / 41.9 | 66% / 0.51 / 61% / 34 | 67% / 0.53 / 49% / 38.3 |
| DOGE | 81% / 0.47 / 59% / 16.7 | 80% / 0.46 / 59% / 21 | 71% / 0.44 / 68% / 28 |
| TIA | 81% / 0.48 / 41% / 11.8 | 83% / 0.51 / 41% / 10.4 | 94% / 0.54 / 32% / 29.3 |
| APT | 77% / 0.5 / 58% / 12.4 | 89% / 0.49 / 69% / 21.6 | 78% / 0.48 / 71% / 19.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
