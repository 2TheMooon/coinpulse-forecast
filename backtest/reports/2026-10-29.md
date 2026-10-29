# CoinPulse Strategy Tournament — 2026-10-29

_Generated 2026-10-29T15:57:28.696Z · 14 coins · 300 samples/window · 13.5s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 5.4 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`block_boot` · 14d→`ewma_t_zero` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 33.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 35.3 |
| 3 | Block bootstrap | 36.2 |
| 4 | Bootstrap (IID) | 38.1 |
| 5 | GBM + Student-t | 38.6 |
| 6 | GBM (normal) | 38.9 |
| 7 | Shipped engine (forecast.js) _(shipped)_ | 39.0 |
| 8 | GARCH(1,1)-lite | 40.5 |
| 9 | Momentum | 42.0 |
| 10 | Mean-reversion (OU) | 67.5 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 49 | **77** | 87 | 0.49 | 50 | 23% | 18.2 |
| 2 | GBM + Student-t | 54 | **79** | 86 | 0.51 | 50 | 23% | 18.4 |
| 3 | GBM (normal) | 55 | **80** | 87 | 0.50 | 48 | 24% | 18.5 |
| 4 | EWMA vol, zero drift (t) | 56 | **80** | 86 | 0.50 | 58 | 23% | 18.9 |
| 5 | GARCH(1,1)-lite | 53 | **77** | 85 | 0.50 | 52 | 22% | 19.2 |
| 6 | Ensemble (GBM-t + bootstraps) | 52 | **79** | 87 | 0.50 | 54 | 23% | 19.8 |
| 7 | Momentum | 50 | **75** | 85 | 0.49 | 52 | 24% | 20.6 |
| 8 | Bootstrap (IID) | 53 | **77** | 84 | 0.50 | 52 | 22% | 22.6 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 62 | **85** | 89 | 0.52 | 45 | — | 24.6 |
| 10 | Mean-reversion (OU) | 51 | **70** | 78 | 0.50 | 50 | 20% | 38.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 54 | **80** | 87 | 0.55 | 48 | 33% | 29.9 |
| 2 | Momentum | 48 | **73** | 85 | 0.55 | 49 | 35% | 30.9 |
| 3 | Bootstrap (IID) | 54 | **79** | 86 | 0.55 | 47 | 31% | 31.8 |
| 4 | Block bootstrap | 54 | **79** | 87 | 0.55 | 48 | 33% | 32.0 |
| 5 | Ensemble (GBM-t + bootstraps) | 54 | **80** | 87 | 0.56 | 48 | 33% | 32.3 |
| 6 | GBM + Student-t | 53 | **78** | 86 | 0.57 | 46 | 33% | 32.8 |
| 7 | GARCH(1,1)-lite | 52 | **78** | 85 | 0.57 | 50 | 31% | 34.9 |
| 8 | GBM (normal) | 57 | **80** | 87 | 0.58 | 50 | 34% | 36.0 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 67 | **87** | 91 | 0.55 | 46 | — | 40.1 |
| 10 | Mean-reversion (OU) | 43 | **66** | 74 | 0.56 | 51 | 26% | 56.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 52 | **73** | 79 | 0.63 | 41 | 46% | 52.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 61 | **81** | 88 | 0.62 | 42 | — | 52.4 |
| 3 | Ensemble (GBM-t + bootstraps) | 53 | **77** | 83 | 0.63 | 38 | 56% | 53.9 |
| 4 | Block bootstrap | 47 | **73** | 79 | 0.63 | 41 | 49% | 58.5 |
| 5 | Bootstrap (IID) | 44 | **72** | 79 | 0.64 | 39 | 46% | 59.9 |
| 6 | GBM (normal) | 47 | **71** | 78 | 0.66 | 39 | 47% | 62.3 |
| 7 | GBM + Student-t | 46 | **70** | 77 | 0.66 | 37 | 46% | 64.5 |
| 8 | GARCH(1,1)-lite | 42 | **70** | 77 | 0.66 | 37 | 44% | 67.6 |
| 9 | Momentum | 35 | **61** | 74 | 0.62 | 51 | 51% | 74.5 |
| 10 | Mean-reversion (OU) | 32 | **52** | 60 | 0.64 | 44 | 33% | 107.2 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.51 / 66% / 18.7 | 79% / 0.57 / 49% / 32.3 | 73% / 0.67 / 33% / 66.9 |
| ETH | 80% / 0.51 / 58% / 18.9 | 81% / 0.57 / 49% / 23 | 68% / 0.68 / 27% / 67.3 |
| SOL | 74% / 0.53 / 58% / 23.9 | 70% / 0.59 / 47% / 46.4 | 73% / 0.69 / 30% / 63.2 |
| BNB | 84% / 0.54 / 48% / 23.6 | 87% / 0.59 / 51% / 32.4 | 68% / 0.66 / 48% / 66.5 |
| XRP | 84% / 0.45 / 58% / 16.4 | 85% / 0.48 / 53% / 14.7 | 73% / 0.57 / 49% / 53 |
| SUI | 80% / 0.49 / 70% / 12.3 | 83% / 0.54 / 57% / 23.3 | 79% / 0.62 / 46% / 35.4 |
| AVAX | 84% / 0.5 / 52% / 28.1 | 77% / 0.55 / 40% / 39 | 63% / 0.66 / 46% / 65.5 |
| LINK | 78% / 0.53 / 66% / 12.2 | 79% / 0.59 / 45% / 33.7 | 70% / 0.71 / 29% / 77 |
| INJ | 78% / 0.5 / 60% / 18.8 | 81% / 0.59 / 51% / 29.1 | 70% / 0.65 / 41% / 50.9 |
| OP | 80% / 0.48 / 50% / 16.3 | 87% / 0.52 / 34% / 27.1 | 81% / 0.58 / 44% / 20.7 |
| ARB | 72% / 0.5 / 58% / 26.7 | 68% / 0.6 / 51% / 54.2 | 70% / 0.66 / 32% / 63.5 |
| DOGE | 80% / 0.43 / 58% / 19.1 | 79% / 0.46 / 49% / 11.8 | 73% / 0.51 / 59% / 26 |
| TIA | 82% / 0.52 / 50% / 8.8 | 83% / 0.6 / 47% / 29.8 | 83% / 0.65 / 37% / 40.7 |
| APT | 78% / 0.46 / 58% / 21.4 | 83% / 0.5 / 53% / 21.9 | 78% / 0.55 / 52% / 33.3 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
