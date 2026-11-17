# CoinPulse Strategy Tournament — 2026-11-17

_Generated 2026-11-17T18:19:53.197Z · 14 coins · 300 samples/window · 10.1s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 6.3 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`block_boot` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 29.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 30.3 |
| 3 | Block bootstrap | 31.5 |
| 4 | Momentum | 33.0 |
| 5 | Bootstrap (IID) | 34.4 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 35.6 |
| 7 | GBM (normal) | 37.8 |
| 8 | GBM + Student-t | 38.2 |
| 9 | GARCH(1,1)-lite | 38.5 |
| 10 | Mean-reversion (OU) | 56.1 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 49 | **78** | 86 | 0.50 | 52 | 24% | 15.0 |
| 2 | Ensemble (GBM-t + bootstraps) | 50 | **78** | 85 | 0.51 | 50 | 24% | 15.8 |
| 3 | EWMA vol, zero drift (t) | 49 | **78** | 86 | 0.50 | 59 | 23% | 15.8 |
| 4 | GBM (normal) | 51 | **79** | 86 | 0.51 | 47 | 24% | 16.3 |
| 5 | Bootstrap (IID) | 50 | **76** | 86 | 0.50 | 53 | 23% | 16.7 |
| 6 | GARCH(1,1)-lite | 49 | **77** | 85 | 0.51 | 48 | 22% | 17.1 |
| 7 | Momentum | 46 | **76** | 86 | 0.49 | 55 | 24% | 18.1 |
| 8 | GBM + Student-t | 49 | **78** | 85 | 0.52 | 52 | 23% | 18.4 |
| 9 | Mean-reversion (OU) | 48 | **74** | 82 | 0.51 | 55 | 21% | 24.5 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 63 | **86** | 92 | 0.50 | 49 | — | 26.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **76** | 85 | 0.54 | 54 | 35% | 27.5 |
| 2 | EWMA vol, zero drift (t) | 52 | **80** | 87 | 0.55 | 49 | 33% | 27.8 |
| 3 | Block bootstrap | 54 | **80** | 87 | 0.55 | 51 | 35% | 28.0 |
| 4 | Ensemble (GBM-t + bootstraps) | 53 | **79** | 87 | 0.56 | 46 | 34% | 28.0 |
| 5 | Bootstrap (IID) | 54 | **78** | 87 | 0.55 | 46 | 32% | 28.8 |
| 6 | GARCH(1,1)-lite | 51 | **78** | 86 | 0.57 | 47 | 32% | 32.8 |
| 7 | GBM + Student-t | 52 | **78** | 85 | 0.57 | 47 | 33% | 33.3 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 64 | **86** | 91 | 0.55 | 43 | — | 33.4 |
| 9 | GBM (normal) | 55 | **79** | 86 | 0.58 | 48 | 34% | 33.6 |
| 10 | Mean-reversion (OU) | 47 | **71** | 81 | 0.57 | 53 | 27% | 41.0 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 49 | **72** | 81 | 0.60 | 44 | 48% | 44.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 49 | **76** | 86 | 0.61 | 37 | 59% | 47.0 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 55 | **82** | 89 | 0.61 | 33 | — | 47.5 |
| 4 | Block bootstrap | 45 | **70** | 80 | 0.60 | 41 | 52% | 51.6 |
| 5 | Momentum | 38 | **64** | 77 | 0.55 | 47 | 54% | 53.4 |
| 6 | Bootstrap (IID) | 40 | **70** | 79 | 0.61 | 39 | 48% | 57.8 |
| 7 | GBM + Student-t | 41 | **68** | 77 | 0.64 | 39 | 47% | 62.9 |
| 8 | GBM (normal) | 42 | **68** | 78 | 0.64 | 39 | 48% | 63.5 |
| 9 | GARCH(1,1)-lite | 39 | **67** | 77 | 0.64 | 41 | 45% | 65.7 |
| 10 | Mean-reversion (OU) | 29 | **53** | 64 | 0.64 | 49 | 33% | 102.9 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.51 / 58% / 11.1 | 81% / 0.55 / 47% / 19.6 | 73% / 0.63 / 41% / 54.5 |
| ETH | 74% / 0.51 / 60% / 19.3 | 79% / 0.55 / 47% / 24.3 | 63% / 0.62 / 37% / 67.3 |
| SOL | 72% / 0.5 / 54% / 20.5 | 68% / 0.54 / 51% / 34.3 | 63% / 0.6 / 43% / 60.9 |
| BNB | 84% / 0.53 / 54% / 9.7 | 85% / 0.59 / 49% / 26 | 68% / 0.64 / 43% / 60.3 |
| XRP | 80% / 0.45 / 62% / 14.8 | 81% / 0.47 / 60% / 16.2 | 68% / 0.53 / 52% / 38 |
| SUI | 80% / 0.49 / 60% / 8.1 | 81% / 0.54 / 55% / 18.8 | 79% / 0.6 / 46% / 30.7 |
| AVAX | 82% / 0.5 / 58% / 11 | 77% / 0.57 / 53% / 37.5 | 67% / 0.64 / 51% / 52.9 |
| LINK | 74% / 0.54 / 66% / 26.1 | 77% / 0.6 / 47% / 30.9 | 68% / 0.67 / 30% / 70.3 |
| INJ | 82% / 0.55 / 58% / 11.9 | 83% / 0.63 / 38% / 37.2 | 75% / 0.67 / 27% / 51.4 |
| OP | 80% / 0.49 / 56% / 7.7 | 85% / 0.54 / 51% / 25.4 | 81% / 0.55 / 51% / 19.1 |
| ARB | 78% / 0.53 / 64% / 20.3 | 68% / 0.61 / 49% / 46.3 | 75% / 0.66 / 37% / 53.8 |
| DOGE | 70% / 0.43 / 62% / 30 | 85% / 0.46 / 55% / 18.6 | 75% / 0.51 / 60% / 19.6 |
| TIA | 80% / 0.5 / 54% / 8.4 | 87% / 0.57 / 40% / 33.9 | 79% / 0.6 / 41% / 24.1 |
| APT | 74% / 0.47 / 58% / 23 | 85% / 0.51 / 47% / 19.8 | 76% / 0.54 / 51% / 19.1 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
