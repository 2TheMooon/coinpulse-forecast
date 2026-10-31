# CoinPulse Strategy Tournament — 2026-10-31

_Generated 2026-10-31T15:11:51.383Z · 14 coins · 300 samples/window · 13.1s_

## 🏆 Recommendation: **SWITCH → `ensemble`**

> Ensemble (GBM-t + bootstraps) beats the shipped engine by 9.2 score points (lower=better).

Overall best: **ensemble** · by horizon: 7d→`ensemble` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 31.0 |
| 2 | EWMA vol, zero drift (t) | 33.1 |
| 3 | Block bootstrap | 33.7 |
| 4 | Bootstrap (IID) | 35.5 |
| 5 | GBM + Student-t | 37.2 |
| 6 | GBM (normal) | 37.4 |
| 7 | GARCH(1,1)-lite | 37.5 |
| 8 | Momentum | 37.5 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 40.2 |
| 10 | Mean-reversion (OU) | 62.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 53 | **82** | 89 | 0.51 | 50 | 23% | 14.0 |
| 2 | Block bootstrap | 49 | **80** | 88 | 0.49 | 50 | 23% | 14.2 |
| 3 | Momentum | 51 | **78** | 87 | 0.50 | 49 | 25% | 15.1 |
| 4 | Bootstrap (IID) | 50 | **79** | 86 | 0.51 | 49 | 22% | 15.6 |
| 5 | GARCH(1,1)-lite | 53 | **79** | 86 | 0.51 | 49 | 23% | 16.6 |
| 6 | GBM (normal) | 57 | **82** | 88 | 0.52 | 47 | 24% | 18.0 |
| 7 | EWMA vol, zero drift (t) | 56 | **82** | 87 | 0.51 | 56 | 24% | 18.7 |
| 8 | GBM + Student-t | 55 | **82** | 87 | 0.52 | 50 | 24% | 18.9 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 63 | **86** | 90 | 0.52 | 44 | — | 26.8 |
| 10 | Mean-reversion (OU) | 51 | **74** | 79 | 0.50 | 54 | 20% | 32.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **78** | 86 | 0.54 | 52 | 36% | 24.3 |
| 2 | Block bootstrap | 56 | **82** | 89 | 0.54 | 53 | 33% | 27.7 |
| 3 | Ensemble (GBM-t + bootstraps) | 56 | **82** | 89 | 0.55 | 49 | 33% | 27.9 |
| 4 | GBM + Student-t | 58 | **81** | 88 | 0.56 | 47 | 33% | 29.6 |
| 5 | Bootstrap (IID) | 56 | **81** | 88 | 0.55 | 48 | 32% | 29.9 |
| 6 | EWMA vol, zero drift (t) | 59 | **83** | 88 | 0.54 | 56 | 33% | 30.1 |
| 7 | GARCH(1,1)-lite | 55 | **82** | 88 | 0.56 | 49 | 32% | 30.1 |
| 8 | GBM (normal) | 61 | **82** | 88 | 0.57 | 51 | 35% | 33.7 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 67 | **88** | 92 | 0.56 | 46 | — | 40.4 |
| 10 | Mean-reversion (OU) | 46 | **69** | 77 | 0.55 | 49 | 27% | 48.0 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 51 | **74** | 80 | 0.64 | 41 | 47% | 50.6 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **78** | 84 | 0.64 | 39 | 57% | 51.1 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 62 | **82** | 89 | 0.63 | 40 | — | 53.4 |
| 4 | Block bootstrap | 47 | **73** | 79 | 0.64 | 40 | 49% | 59.2 |
| 5 | GBM (normal) | 46 | **73** | 79 | 0.67 | 39 | 48% | 60.6 |
| 6 | Bootstrap (IID) | 44 | **71** | 79 | 0.64 | 39 | 46% | 60.9 |
| 7 | GBM + Student-t | 46 | **71** | 79 | 0.67 | 37 | 47% | 63.0 |
| 8 | GARCH(1,1)-lite | 42 | **71** | 78 | 0.67 | 38 | 44% | 65.6 |
| 9 | Momentum | 35 | **61** | 75 | 0.61 | 48 | 52% | 73.2 |
| 10 | Mean-reversion (OU) | 30 | **53** | 62 | 0.64 | 44 | 34% | 106.2 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 88% / 0.51 / 40% / 14.9 | 87% / 0.57 / 43% / 30.6 | 75% / 0.68 / 29% / 59.7 |
| ETH | 80% / 0.54 / 42% / 21.9 | 79% / 0.6 / 38% / 24.4 | 67% / 0.71 / 16% / 80.8 |
| SOL | 80% / 0.52 / 46% / 14.2 | 79% / 0.57 / 40% / 25.4 | 75% / 0.67 / 40% / 53.1 |
| BNB | 86% / 0.53 / 42% / 14.3 | 83% / 0.56 / 43% / 16.1 | 73% / 0.62 / 43% / 51.2 |
| XRP | 84% / 0.47 / 64% / 9.7 | 87% / 0.5 / 62% / 13.3 | 75% / 0.61 / 46% / 53.2 |
| SUI | 86% / 0.51 / 54% / 14.7 | 85% / 0.56 / 51% / 24.4 | 86% / 0.65 / 38% / 41.1 |
| AVAX | 80% / 0.5 / 50% / 6.5 | 74% / 0.57 / 51% / 33.1 | 67% / 0.69 / 41% / 76.7 |
| LINK | 74% / 0.55 / 44% / 21.9 | 74% / 0.57 / 32% / 31.5 | 75% / 0.69 / 35% / 58.8 |
| INJ | 80% / 0.47 / 50% / 16 | 85% / 0.49 / 57% / 20.8 | 87% / 0.53 / 59% / 28.1 |
| OP | 84% / 0.51 / 48% / 5.9 | 89% / 0.54 / 47% / 34 | 90% / 0.59 / 38% / 44.9 |
| ARB | 72% / 0.52 / 56% / 19.5 | 68% / 0.58 / 55% / 40 | 75% / 0.68 / 21% / 55.8 |
| DOGE | 82% / 0.46 / 64% / 19.8 | 81% / 0.47 / 66% / 20.6 | 76% / 0.54 / 52% / 19.2 |
| TIA | 82% / 0.52 / 48% / 8.4 | 94% / 0.58 / 47% / 44.3 | 92% / 0.6 / 32% / 55.4 |
| APT | 84% / 0.49 / 52% / 8.8 | 87% / 0.54 / 53% / 32.7 | 79% / 0.6 / 54% / 37.7 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
