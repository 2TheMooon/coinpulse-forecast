# CoinPulse Strategy Tournament — 2026-11-02

_Generated 2026-11-02T19:20:14.539Z · 14 coins · 300 samples/window · 9.8s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 10.3 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`ewma_t_zero` · 14d→`ewma_t_zero` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 32.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 36.4 |
| 3 | Block bootstrap | 37.4 |
| 4 | Bootstrap (IID) | 38.6 |
| 5 | GBM (normal) | 41.2 |
| 6 | GBM + Student-t | 42.0 |
| 7 | Momentum | 42.4 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 43.2 |
| 9 | GARCH(1,1)-lite | 43.6 |
| 10 | Mean-reversion (OU) | 65.1 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 53 | **80** | 86 | 0.53 | 54 | 23% | 19.7 |
| 2 | Block bootstrap | 49 | **78** | 86 | 0.53 | 50 | 23% | 20.1 |
| 3 | Ensemble (GBM-t + bootstraps) | 49 | **79** | 86 | 0.54 | 51 | 22% | 20.1 |
| 4 | Momentum | 49 | **76** | 84 | 0.53 | 53 | 24% | 20.3 |
| 5 | GBM (normal) | 53 | **80** | 86 | 0.54 | 47 | 24% | 20.9 |
| 6 | Bootstrap (IID) | 50 | **77** | 86 | 0.53 | 48 | 22% | 21.7 |
| 7 | GARCH(1,1)-lite | 52 | **78** | 85 | 0.54 | 47 | 22% | 21.8 |
| 8 | GBM + Student-t | 52 | **80** | 86 | 0.55 | 48 | 23% | 22.2 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 64 | **87** | 91 | 0.54 | 45 | — | 30.9 |
| 10 | Mean-reversion (OU) | 47 | **71** | 79 | 0.54 | 54 | 20% | 36.8 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 56 | **81** | 87 | 0.57 | 51 | 33% | 29.4 |
| 2 | Momentum | 49 | **74** | 85 | 0.57 | 52 | 35% | 32.8 |
| 3 | Bootstrap (IID) | 54 | **80** | 87 | 0.57 | 45 | 31% | 33.1 |
| 4 | Ensemble (GBM-t + bootstraps) | 55 | **80** | 88 | 0.58 | 48 | 32% | 33.5 |
| 5 | Block bootstrap | 56 | **81** | 88 | 0.57 | 51 | 33% | 33.6 |
| 6 | GBM + Student-t | 56 | **80** | 86 | 0.60 | 46 | 33% | 36.9 |
| 7 | GBM (normal) | 58 | **80** | 87 | 0.60 | 50 | 34% | 37.1 |
| 8 | GARCH(1,1)-lite | 54 | **80** | 86 | 0.60 | 50 | 31% | 37.7 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 67 | **88** | 92 | 0.57 | 45 | — | 43.8 |
| 10 | Mean-reversion (OU) | 46 | **70** | 76 | 0.59 | 50 | 26% | 51.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 51 | **76** | 81 | 0.64 | 43 | 47% | 49.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 59 | **82** | 89 | 0.65 | 38 | — | 54.8 |
| 3 | Ensemble (GBM-t + bootstraps) | 51 | **78** | 85 | 0.65 | 37 | 56% | 55.4 |
| 4 | Block bootstrap | 46 | **73** | 81 | 0.65 | 37 | 49% | 58.4 |
| 5 | Bootstrap (IID) | 43 | **72** | 80 | 0.66 | 38 | 45% | 61.1 |
| 6 | GBM (normal) | 45 | **71** | 80 | 0.69 | 38 | 47% | 65.5 |
| 7 | GBM + Student-t | 44 | **71** | 78 | 0.69 | 37 | 46% | 66.9 |
| 8 | GARCH(1,1)-lite | 41 | **70** | 78 | 0.69 | 37 | 43% | 71.2 |
| 9 | Momentum | 34 | **61** | 74 | 0.61 | 48 | 52% | 73.9 |
| 10 | Mean-reversion (OU) | 30 | **54** | 63 | 0.67 | 46 | 34% | 106.5 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.55 / 54% / 21.3 | 81% / 0.58 / 53% / 26.4 | 76% / 0.68 / 40% / 63.2 |
| ETH | 82% / 0.54 / 54% / 20.6 | 81% / 0.58 / 51% / 31.1 | 70% / 0.68 / 30% / 60.6 |
| SOL | 76% / 0.55 / 60% / 30.8 | 74% / 0.59 / 51% / 28.3 | 71% / 0.69 / 35% / 65.8 |
| BNB | 84% / 0.56 / 40% / 27.4 | 87% / 0.6 / 49% / 31.2 | 73% / 0.66 / 51% / 58.3 |
| XRP | 86% / 0.48 / 64% / 15.2 | 87% / 0.49 / 60% / 20.7 | 76% / 0.58 / 49% / 46.1 |
| SUI | 76% / 0.52 / 54% / 12 | 81% / 0.55 / 55% / 24.4 | 78% / 0.63 / 44% / 37.7 |
| AVAX | 82% / 0.51 / 56% / 14.9 | 74% / 0.55 / 51% / 41.6 | 70% / 0.66 / 49% / 61.9 |
| LINK | 76% / 0.57 / 52% / 23.9 | 79% / 0.61 / 45% / 30.9 | 73% / 0.72 / 32% / 78 |
| INJ | 82% / 0.55 / 62% / 15.7 | 83% / 0.61 / 43% / 32.4 | 73% / 0.65 / 46% / 50.3 |
| OP | 80% / 0.52 / 48% / 11.3 | 83% / 0.55 / 45% / 20.4 | 83% / 0.59 / 46% / 23.1 |
| ARB | 74% / 0.54 / 52% / 30.1 | 68% / 0.6 / 49% / 46.3 | 73% / 0.67 / 33% / 56.6 |
| DOGE | 82% / 0.47 / 56% / 18.9 | 77% / 0.47 / 57% / 19.6 | 76% / 0.52 / 56% / 23.3 |
| TIA | 80% / 0.54 / 44% / 16.7 | 85% / 0.62 / 45% / 31.2 | 86% / 0.65 / 33% / 37.9 |
| APT | 76% / 0.5 / 60% / 16.7 | 89% / 0.51 / 55% / 26.6 | 79% / 0.56 / 56% / 29.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
