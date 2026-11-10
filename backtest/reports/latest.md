# CoinPulse Strategy Tournament — 2026-11-10

_Generated 2026-11-10T16:53:46.068Z · 14 coins · 300 samples/window · 9.8s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 9.6 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 31.8 |
| 2 | Ensemble (GBM-t + bootstraps) | 32.6 |
| 3 | Block bootstrap | 33.1 |
| 4 | Bootstrap (IID) | 35.6 |
| 5 | Momentum | 35.7 |
| 6 | GBM + Student-t | 37.2 |
| 7 | GARCH(1,1)-lite | 38.3 |
| 8 | GBM (normal) | 39.7 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 41.4 |
| 10 | Mean-reversion (OU) | 56.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 54 | **80** | 89 | 0.49 | 56 | 24% | 16.2 |
| 2 | Block bootstrap | 53 | **82** | 91 | 0.50 | 56 | 23% | 16.6 |
| 3 | GARCH(1,1)-lite | 55 | **81** | 89 | 0.51 | 51 | 22% | 16.6 |
| 4 | Bootstrap (IID) | 55 | **81** | 89 | 0.50 | 52 | 23% | 17.1 |
| 5 | Ensemble (GBM-t + bootstraps) | 54 | **81** | 90 | 0.50 | 55 | 23% | 17.2 |
| 6 | GBM + Student-t | 56 | **82** | 90 | 0.52 | 51 | 23% | 17.5 |
| 7 | EWMA vol, zero drift (t) | 57 | **83** | 90 | 0.50 | 50 | 23% | 20.3 |
| 8 | GBM (normal) | 59 | **84** | 90 | 0.51 | 54 | 24% | 21.5 |
| 9 | Mean-reversion (OU) | 52 | **75** | 84 | 0.51 | 55 | 21% | 26.0 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 66 | **88** | 92 | 0.53 | 45 | — | 33.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **78** | 87 | 0.54 | 51 | 36% | 24.8 |
| 2 | Block bootstrap | 54 | **82** | 89 | 0.55 | 51 | 34% | 27.9 |
| 3 | EWMA vol, zero drift (t) | 54 | **83** | 90 | 0.55 | 49 | 33% | 28.5 |
| 4 | Bootstrap (IID) | 51 | **80** | 87 | 0.56 | 48 | 32% | 28.8 |
| 5 | Ensemble (GBM-t + bootstraps) | 54 | **82** | 89 | 0.56 | 49 | 33% | 30.2 |
| 6 | GARCH(1,1)-lite | 49 | **81** | 88 | 0.57 | 46 | 31% | 30.9 |
| 7 | GBM + Student-t | 52 | **81** | 89 | 0.58 | 48 | 33% | 30.9 |
| 8 | GBM (normal) | 56 | **82** | 89 | 0.58 | 48 | 34% | 34.1 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 67 | **88** | 92 | 0.56 | 44 | — | 40.0 |
| 10 | Mean-reversion (OU) | 47 | **71** | 81 | 0.57 | 52 | 27% | 42.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 50 | **75** | 82 | 0.63 | 44 | 47% | 46.5 |
| 2 | Ensemble (GBM-t + bootstraps) | 51 | **79** | 85 | 0.63 | 38 | 58% | 50.4 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 58 | **83** | 90 | 0.63 | 36 | — | 51.0 |
| 4 | Block bootstrap | 46 | **74** | 81 | 0.63 | 39 | 51% | 54.7 |
| 5 | Bootstrap (IID) | 41 | **70** | 81 | 0.64 | 35 | 46% | 60.8 |
| 6 | GBM + Student-t | 43 | **71** | 79 | 0.66 | 39 | 47% | 63.2 |
| 7 | GBM (normal) | 43 | **71** | 80 | 0.66 | 38 | 48% | 63.4 |
| 8 | Momentum | 35 | **62** | 75 | 0.59 | 48 | 53% | 66.1 |
| 9 | GARCH(1,1)-lite | 39 | **70** | 79 | 0.66 | 37 | 44% | 67.4 |
| 10 | Mean-reversion (OU) | 30 | **55** | 66 | 0.66 | 47 | 32% | 101.1 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 88% / 0.5 / 46% / 30.7 | 81% / 0.56 / 51% / 28.8 | 76% / 0.66 / 41% / 54.1 |
| ETH | 84% / 0.52 / 42% / 25.7 | 83% / 0.56 / 45% / 21.5 | 67% / 0.66 / 32% / 60.8 |
| SOL | 76% / 0.5 / 42% / 12.9 | 72% / 0.57 / 49% / 38.2 | 67% / 0.65 / 44% / 63.5 |
| BNB | 84% / 0.52 / 44% / 16.9 | 83% / 0.59 / 53% / 27.2 | 75% / 0.65 / 44% / 49.8 |
| XRP | 88% / 0.44 / 48% / 24.4 | 87% / 0.48 / 49% / 18.2 | 76% / 0.56 / 51% / 38.2 |
| SUI | 82% / 0.49 / 52% / 12.1 | 85% / 0.54 / 55% / 23.3 | 78% / 0.61 / 52% / 30.1 |
| AVAX | 90% / 0.51 / 46% / 34.5 | 83% / 0.57 / 34% / 30.9 | 70% / 0.65 / 49% / 60.3 |
| LINK | 78% / 0.53 / 48% / 12.3 | 81% / 0.59 / 45% / 28.1 | 73% / 0.7 / 29% / 73 |
| INJ | 78% / 0.52 / 50% / 18.4 | 81% / 0.59 / 47% / 34.8 | 71% / 0.68 / 37% / 64.7 |
| OP | 86% / 0.48 / 64% / 22.4 | 89% / 0.53 / 45% / 34.8 | 84% / 0.57 / 51% / 23.2 |
| ARB | 76% / 0.52 / 54% / 18.6 | 72% / 0.6 / 47% / 40.3 | 75% / 0.67 / 32% / 54.9 |
| DOGE | 86% / 0.43 / 62% / 24.8 | 85% / 0.46 / 55% / 19.6 | 78% / 0.51 / 59% / 21.3 |
| TIA | 88% / 0.52 / 48% / 16.7 | 83% / 0.57 / 47% / 28.7 | 84% / 0.64 / 35% / 33.2 |
| APT | 84% / 0.47 / 60% / 13.6 | 89% / 0.5 / 60% / 24.9 | 81% / 0.55 / 56% / 23.4 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
