# CoinPulse Strategy Tournament — 2026-11-01

_Generated 2026-11-01T15:54:13.482Z · 14 coins · 300 samples/window · 15.0s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 9.7 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`block_boot` · 14d→`ewma_t_zero` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 33.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 35.6 |
| 3 | Block bootstrap | 36.6 |
| 4 | Bootstrap (IID) | 38.8 |
| 5 | GBM (normal) | 40.7 |
| 6 | GBM + Student-t | 41.2 |
| 7 | GARCH(1,1)-lite | 41.4 |
| 8 | Momentum | 42.1 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 43.1 |
| 10 | Mean-reversion (OU) | 66.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 48 | **78** | 87 | 0.49 | 53 | 22% | 16.9 |
| 2 | Ensemble (GBM-t + bootstraps) | 50 | **78** | 88 | 0.51 | 55 | 22% | 17.8 |
| 3 | GARCH(1,1)-lite | 52 | **77** | 87 | 0.51 | 51 | 22% | 18.5 |
| 4 | EWMA vol, zero drift (t) | 55 | **81** | 87 | 0.50 | 57 | 23% | 19.0 |
| 5 | GBM (normal) | 56 | **80** | 88 | 0.51 | 49 | 24% | 19.4 |
| 6 | Bootstrap (IID) | 50 | **77** | 85 | 0.50 | 49 | 22% | 19.7 |
| 7 | GBM + Student-t | 55 | **80** | 87 | 0.52 | 53 | 23% | 20.6 |
| 8 | Momentum | 50 | **76** | 84 | 0.49 | 51 | 24% | 21.6 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 64 | **87** | 93 | 0.52 | 49 | — | 30.6 |
| 10 | Mean-reversion (OU) | 50 | **71** | 79 | 0.51 | 53 | 20% | 35.8 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 57 | **82** | 88 | 0.56 | 54 | 33% | 30.4 |
| 2 | Momentum | 48 | **72** | 84 | 0.55 | 48 | 35% | 31.4 |
| 3 | Block bootstrap | 54 | **81** | 87 | 0.56 | 50 | 33% | 32.6 |
| 4 | Ensemble (GBM-t + bootstraps) | 55 | **80** | 88 | 0.57 | 48 | 32% | 33.4 |
| 5 | Bootstrap (IID) | 53 | **79** | 87 | 0.57 | 48 | 31% | 34.1 |
| 6 | GARCH(1,1)-lite | 52 | **80** | 87 | 0.59 | 49 | 31% | 34.6 |
| 7 | GBM + Student-t | 56 | **79** | 87 | 0.59 | 45 | 33% | 36.5 |
| 8 | GBM (normal) | 58 | **79** | 88 | 0.59 | 49 | 34% | 37.6 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 68 | **88** | 92 | 0.57 | 45 | — | 43.8 |
| 10 | Mean-reversion (OU) | 45 | **68** | 76 | 0.58 | 51 | 26% | 53.5 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 53 | **74** | 81 | 0.64 | 40 | 47% | 51.0 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 60 | **82** | 90 | 0.65 | 39 | — | 54.9 |
| 3 | Ensemble (GBM-t + bootstraps) | 52 | **76** | 85 | 0.65 | 38 | 55% | 55.6 |
| 4 | Block bootstrap | 48 | **72** | 80 | 0.65 | 38 | 48% | 60.1 |
| 5 | Bootstrap (IID) | 44 | **71** | 80 | 0.66 | 37 | 44% | 62.8 |
| 6 | GBM (normal) | 46 | **71** | 79 | 0.68 | 38 | 47% | 65.0 |
| 7 | GBM + Student-t | 46 | **71** | 78 | 0.68 | 37 | 46% | 66.6 |
| 8 | GARCH(1,1)-lite | 41 | **70** | 77 | 0.68 | 37 | 43% | 71.1 |
| 9 | Momentum | 35 | **61** | 73 | 0.61 | 46 | 52% | 73.4 |
| 10 | Mean-reversion (OU) | 32 | **54** | 61 | 0.67 | 45 | 33% | 109.3 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 88% / 0.51 / 60% / 21.9 | 77% / 0.58 / 51% / 34 | 75% / 0.68 / 38% / 66.8 |
| ETH | 84% / 0.51 / 58% / 22.7 | 81% / 0.58 / 53% / 22.8 | 70% / 0.68 / 33% / 65.5 |
| SOL | 76% / 0.52 / 52% / 24.9 | 72% / 0.6 / 47% / 39.5 | 73% / 0.69 / 35% / 61.1 |
| BNB | 82% / 0.53 / 42% / 16.8 | 87% / 0.6 / 57% / 35.9 | 73% / 0.67 / 46% / 57.9 |
| XRP | 86% / 0.45 / 70% / 22.6 | 87% / 0.49 / 66% / 19 | 75% / 0.57 / 48% / 50.6 |
| SUI | 82% / 0.49 / 62% / 11.6 | 85% / 0.54 / 62% / 28.4 | 78% / 0.63 / 37% / 50.1 |
| AVAX | 86% / 0.51 / 50% / 25.4 | 79% / 0.56 / 51% / 27.6 | 65% / 0.66 / 43% / 63.5 |
| LINK | 72% / 0.54 / 58% / 19.7 | 79% / 0.6 / 49% / 30.9 | 70% / 0.72 / 27% / 75.9 |
| INJ | 80% / 0.49 / 62% / 15.2 | 81% / 0.58 / 49% / 28.9 | 76% / 0.65 / 37% / 46.1 |
| OP | 82% / 0.48 / 56% / 10.5 | 89% / 0.53 / 49% / 33.3 | 83% / 0.59 / 46% / 28.1 |
| ARB | 70% / 0.51 / 54% / 24.5 | 70% / 0.6 / 53% / 47 | 71% / 0.67 / 30% / 61.3 |
| DOGE | 82% / 0.44 / 62% / 22.8 | 79% / 0.46 / 66% / 16.6 | 76% / 0.51 / 59% / 21.1 |
| TIA | 84% / 0.53 / 50% / 11 | 87% / 0.6 / 45% / 36.4 | 78% / 0.66 / 33% / 36.8 |
| APT | 80% / 0.47 / 62% / 16.3 | 87% / 0.5 / 62% / 24.8 | 78% / 0.56 / 51% / 28.4 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
