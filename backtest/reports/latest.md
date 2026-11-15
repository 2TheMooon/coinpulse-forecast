# CoinPulse Strategy Tournament — 2026-11-15

_Generated 2026-11-15T16:10:56.225Z · 14 coins · 300 samples/window · 8.8s_

## 🏆 Recommendation: **SWITCH → `ensemble`**

> Ensemble (GBM-t + bootstraps) beats the shipped engine by 8.2 score points (lower=better).

Overall best: **ensemble** · by horizon: 7d→`garch` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 28.7 |
| 2 | EWMA vol, zero drift (t) | 29.6 |
| 3 | Block bootstrap | 29.9 |
| 4 | Momentum | 30.9 |
| 5 | Bootstrap (IID) | 31.9 |
| 6 | GBM + Student-t | 34.7 |
| 7 | GARCH(1,1)-lite | 35.2 |
| 8 | GBM (normal) | 36.4 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 37.0 |
| 10 | Mean-reversion (OU) | 52.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GARCH(1,1)-lite | 52 | **80** | 87 | 0.50 | 50 | 23% | 14.9 |
| 2 | Bootstrap (IID) | 54 | **82** | 89 | 0.49 | 52 | 23% | 15.1 |
| 3 | Block bootstrap | 52 | **82** | 89 | 0.49 | 54 | 24% | 15.2 |
| 4 | Ensemble (GBM-t + bootstraps) | 55 | **83** | 89 | 0.49 | 55 | 24% | 15.3 |
| 5 | GBM + Student-t | 56 | **81** | 88 | 0.51 | 54 | 23% | 16.2 |
| 6 | Momentum | 53 | **80** | 87 | 0.48 | 55 | 24% | 17.2 |
| 7 | EWMA vol, zero drift (t) | 56 | **82** | 89 | 0.50 | 57 | 24% | 17.8 |
| 8 | GBM (normal) | 57 | **82** | 88 | 0.50 | 51 | 24% | 18.7 |
| 9 | Mean-reversion (OU) | 54 | **78** | 84 | 0.50 | 55 | 21% | 24.2 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 65 | **88** | 93 | 0.50 | 49 | — | 29.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 54 | **81** | 88 | 0.51 | 54 | 36% | 21.7 |
| 2 | Block bootstrap | 57 | **82** | 90 | 0.53 | 52 | 35% | 23.4 |
| 3 | Ensemble (GBM-t + bootstraps) | 57 | **82** | 90 | 0.53 | 51 | 34% | 24.4 |
| 4 | Bootstrap (IID) | 54 | **81** | 89 | 0.53 | 45 | 33% | 24.7 |
| 5 | EWMA vol, zero drift (t) | 56 | **83** | 89 | 0.53 | 51 | 33% | 25.5 |
| 6 | GARCH(1,1)-lite | 54 | **81** | 88 | 0.55 | 47 | 32% | 26.6 |
| 7 | GBM + Student-t | 56 | **81** | 88 | 0.55 | 49 | 33% | 27.9 |
| 8 | GBM (normal) | 59 | **82** | 88 | 0.55 | 50 | 34% | 30.9 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 65 | **86** | 91 | 0.54 | 43 | — | 34.1 |
| 10 | Mean-reversion (OU) | 48 | **73** | 82 | 0.55 | 53 | 27% | 35.1 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 49 | **73** | 81 | 0.61 | 43 | 48% | 45.5 |
| 2 | Ensemble (GBM-t + bootstraps) | 51 | **77** | 86 | 0.61 | 39 | 59% | 46.5 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 57 | **83** | 90 | 0.61 | 36 | — | 47.5 |
| 4 | Block bootstrap | 46 | **71** | 81 | 0.60 | 43 | 52% | 51.1 |
| 5 | Momentum | 38 | **64** | 77 | 0.56 | 48 | 54% | 53.7 |
| 6 | Bootstrap (IID) | 42 | **70** | 80 | 0.61 | 36 | 48% | 55.9 |
| 7 | GBM (normal) | 44 | **70** | 79 | 0.64 | 39 | 49% | 59.5 |
| 8 | GBM + Student-t | 43 | **70** | 78 | 0.64 | 41 | 47% | 60.1 |
| 9 | GARCH(1,1)-lite | 39 | **68** | 78 | 0.64 | 41 | 45% | 64.2 |
| 10 | Mean-reversion (OU) | 31 | **55** | 65 | 0.64 | 48 | 33% | 97.3 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 88% / 0.49 / 54% / 19.1 | 85% / 0.55 / 49% / 26.7 | 71% / 0.66 / 29% / 56.5 |
| ETH | 80% / 0.51 / 52% / 17 | 79% / 0.56 / 38% / 22.7 | 68% / 0.64 / 14% / 69.2 |
| SOL | 82% / 0.48 / 48% / 15.9 | 70% / 0.51 / 40% / 17.9 | 70% / 0.58 / 35% / 36.7 |
| BNB | 88% / 0.51 / 44% / 12.1 | 83% / 0.55 / 38% / 14.9 | 76% / 0.61 / 33% / 30.3 |
| XRP | 78% / 0.44 / 70% / 24.7 | 83% / 0.48 / 64% / 13.6 | 71% / 0.58 / 52% / 44.9 |
| SUI | 86% / 0.5 / 56% / 14.5 | 85% / 0.53 / 51% / 22.2 | 84% / 0.61 / 32% / 33.1 |
| AVAX | 86% / 0.52 / 54% / 21.1 | 81% / 0.58 / 47% / 33.7 | 68% / 0.66 / 40% / 62.1 |
| LINK | 76% / 0.52 / 46% / 14 | 77% / 0.54 / 45% / 13.2 | 70% / 0.65 / 27% / 58.6 |
| INJ | 84% / 0.49 / 50% / 8.2 | 94% / 0.52 / 62% / 32.3 | 97% / 0.56 / 70% / 56.8 |
| OP | 86% / 0.49 / 58% / 19.4 | 87% / 0.51 / 57% / 31.5 | 90% / 0.57 / 48% / 44.1 |
| ARB | 74% / 0.53 / 58% / 25.1 | 70% / 0.59 / 51% / 35.2 | 73% / 0.68 / 17% / 59.4 |
| DOGE | 82% / 0.46 / 70% / 13.8 | 77% / 0.49 / 70% / 20.2 | 75% / 0.58 / 60% / 27.9 |
| TIA | 82% / 0.5 / 56% / 4.7 | 85% / 0.52 / 51% / 23 | 89% / 0.56 / 33% / 39 |
| APT | 84% / 0.5 / 60% / 4.9 | 85% / 0.55 / 53% / 34.4 | 81% / 0.62 / 54% / 31.8 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
