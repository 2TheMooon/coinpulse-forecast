# CoinPulse Strategy Tournament — 2026-11-21

_Generated 2026-11-21T16:40:42.075Z · 14 coins · 300 samples/window · 12.3s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 4.1 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`block_boot` · 14d→`block_boot` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 30.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 31.0 |
| 3 | Momentum | 32.1 |
| 4 | Block bootstrap | 32.3 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 34.3 |
| 6 | Bootstrap (IID) | 36.8 |
| 7 | GBM + Student-t | 38.9 |
| 8 | GARCH(1,1)-lite | 39.5 |
| 9 | GBM (normal) | 40.2 |
| 10 | Mean-reversion (OU) | 57.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 53 | **81** | 89 | 0.49 | 58 | 24% | 13.5 |
| 2 | GARCH(1,1)-lite | 54 | **81** | 87 | 0.51 | 56 | 23% | 15.4 |
| 3 | Ensemble (GBM-t + bootstraps) | 54 | **81** | 87 | 0.50 | 54 | 24% | 15.4 |
| 4 | Momentum | 52 | **81** | 88 | 0.48 | 55 | 25% | 16.9 |
| 5 | GBM + Student-t | 55 | **80** | 87 | 0.52 | 52 | 24% | 17.5 |
| 6 | Bootstrap (IID) | 54 | **81** | 88 | 0.50 | 54 | 24% | 17.6 |
| 7 | GBM (normal) | 56 | **82** | 88 | 0.51 | 52 | 24% | 17.7 |
| 8 | EWMA vol, zero drift (t) | 57 | **81** | 88 | 0.49 | 52 | 24% | 18.6 |
| 9 | Mean-reversion (OU) | 53 | **78** | 84 | 0.51 | 57 | 21% | 22.3 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 62 | **85** | 91 | 0.50 | 50 | — | 22.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 56 | **78** | 87 | 0.53 | 52 | 34% | 23.9 |
| 2 | Momentum | 53 | **79** | 86 | 0.50 | 54 | 36% | 25.1 |
| 3 | EWMA vol, zero drift (t) | 55 | **80** | 87 | 0.52 | 53 | 33% | 25.2 |
| 4 | Bootstrap (IID) | 55 | **79** | 87 | 0.53 | 48 | 33% | 26.0 |
| 5 | Ensemble (GBM-t + bootstraps) | 53 | **80** | 88 | 0.54 | 51 | 34% | 27.1 |
| 6 | GARCH(1,1)-lite | 51 | **78** | 86 | 0.55 | 50 | 32% | 28.3 |
| 7 | GBM + Student-t | 52 | **78** | 86 | 0.55 | 49 | 33% | 29.2 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 61 | **84** | 90 | 0.55 | 43 | — | 31.1 |
| 9 | GBM (normal) | 57 | **80** | 86 | 0.56 | 49 | 34% | 31.8 |
| 10 | Mean-reversion (OU) | 48 | **71** | 80 | 0.56 | 54 | 26% | 40.0 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 47 | **71** | 79 | 0.59 | 47 | 48% | 46.7 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 51 | **79** | 87 | 0.61 | 34 | — | 49.2 |
| 3 | Ensemble (GBM-t + bootstraps) | 46 | **72** | 83 | 0.61 | 39 | 59% | 50.6 |
| 4 | Momentum | 36 | **63** | 76 | 0.54 | 49 | 55% | 54.2 |
| 5 | Block bootstrap | 40 | **66** | 78 | 0.60 | 38 | 52% | 59.4 |
| 6 | Bootstrap (IID) | 36 | **66** | 76 | 0.60 | 37 | 48% | 66.8 |
| 7 | GBM + Student-t | 39 | **65** | 75 | 0.64 | 39 | 47% | 69.9 |
| 8 | GBM (normal) | 38 | **64** | 76 | 0.64 | 38 | 48% | 71.2 |
| 9 | GARCH(1,1)-lite | 35 | **64** | 74 | 0.63 | 40 | 45% | 74.8 |
| 10 | Mean-reversion (OU) | 29 | **51** | 60 | 0.64 | 50 | 31% | 108.7 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.48 / 46% / 19.3 | 79% / 0.51 / 47% / 22.7 | 68% / 0.62 / 41% / 56.1 |
| ETH | 80% / 0.49 / 50% / 15.7 | 77% / 0.52 / 45% / 18.3 | 57% / 0.59 / 41% / 73.9 |
| SOL | 80% / 0.49 / 46% / 9 | 66% / 0.5 / 60% / 22.7 | 60% / 0.58 / 48% / 72.6 |
| BNB | 84% / 0.52 / 58% / 14.7 | 77% / 0.56 / 51% / 28.4 | 70% / 0.62 / 48% / 61.9 |
| XRP | 82% / 0.43 / 50% / 25.3 | 81% / 0.44 / 62% / 22.2 | 65% / 0.53 / 59% / 42.5 |
| SUI | 84% / 0.49 / 56% / 13.3 | 83% / 0.51 / 62% / 11.3 | 75% / 0.59 / 49% / 30.1 |
| AVAX | 84% / 0.51 / 50% / 30.7 | 81% / 0.55 / 53% / 29.3 | 65% / 0.63 / 48% / 55 |
| LINK | 76% / 0.54 / 48% / 16.7 | 79% / 0.55 / 49% / 20.3 | 68% / 0.66 / 33% / 76.4 |
| INJ | 82% / 0.55 / 48% / 18.2 | 83% / 0.6 / 36% / 34.8 | 76% / 0.67 / 30% / 52.4 |
| OP | 82% / 0.48 / 64% / 19.4 | 89% / 0.5 / 57% / 27.1 | 84% / 0.55 / 54% / 21.7 |
| ARB | 72% / 0.52 / 56% / 23.2 | 70% / 0.57 / 57% / 38.1 | 75% / 0.65 / 43% / 49.6 |
| DOGE | 84% / 0.44 / 58% / 32.4 | 83% / 0.44 / 66% / 29.7 | 71% / 0.51 / 63% / 22.6 |
| TIA | 78% / 0.51 / 48% / 8.4 | 85% / 0.54 / 38% / 20.2 | 79% / 0.6 / 44% / 22 |
| APT | 80% / 0.46 / 54% / 14.2 | 87% / 0.49 / 55% / 27 | 76% / 0.53 / 59% / 17.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
