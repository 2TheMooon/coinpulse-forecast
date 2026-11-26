# CoinPulse Strategy Tournament — 2026-11-26

_Generated 2026-11-26T18:53:56.781Z · 14 coins · 300 samples/window · 14.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (EWMA vol, zero drift (t)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ewma_t_zero** · by horizon: 7d→`ewma_t_zero` · 14d→`live_engine` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 33.2 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 35.5 |
| 3 | Momentum | 36.1 |
| 4 | Ensemble (GBM-t + bootstraps) | 37.4 |
| 5 | Block bootstrap | 42.4 |
| 6 | Bootstrap (IID) | 44.2 |
| 7 | GBM (normal) | 46.5 |
| 8 | GARCH(1,1)-lite | 49.0 |
| 9 | GBM + Student-t | 49.5 |
| 10 | Mean-reversion (OU) | 70.2 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 49 | **78** | 84 | 0.50 | 48 | 24% | 18.2 |
| 2 | Momentum | 49 | **76** | 85 | 0.50 | 57 | 24% | 19.1 |
| 3 | Ensemble (GBM-t + bootstraps) | 50 | **76** | 84 | 0.52 | 53 | 23% | 19.2 |
| 4 | GBM (normal) | 51 | **76** | 85 | 0.52 | 49 | 24% | 20.3 |
| 5 | Bootstrap (IID) | 50 | **76** | 83 | 0.51 | 53 | 23% | 20.9 |
| 6 | Block bootstrap | 48 | **74** | 83 | 0.51 | 53 | 23% | 21.8 |
| 7 | GARCH(1,1)-lite | 47 | **74** | 83 | 0.52 | 47 | 22% | 21.9 |
| 8 | GBM + Student-t | 49 | **76** | 83 | 0.53 | 49 | 23% | 23.3 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 62 | **85** | 90 | 0.53 | 48 | — | 25.6 |
| 10 | Mean-reversion (OU) | 45 | **72** | 79 | 0.52 | 54 | 20% | 32.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 57 | **82** | 88 | 0.54 | 46 | — | 27.4 |
| 2 | Momentum | 46 | **73** | 82 | 0.52 | 55 | 35% | 27.8 |
| 3 | EWMA vol, zero drift (t) | 52 | **74** | 84 | 0.53 | 51 | 33% | 28.3 |
| 4 | Block bootstrap | 47 | **73** | 81 | 0.55 | 52 | 33% | 31.6 |
| 5 | Ensemble (GBM-t + bootstraps) | 47 | **72** | 83 | 0.55 | 48 | 33% | 33.0 |
| 6 | Bootstrap (IID) | 49 | **72** | 81 | 0.54 | 49 | 32% | 33.3 |
| 7 | GBM (normal) | 49 | **73** | 81 | 0.57 | 48 | 34% | 36.1 |
| 8 | GARCH(1,1)-lite | 45 | **71** | 80 | 0.57 | 54 | 31% | 40.3 |
| 9 | GBM + Student-t | 47 | **70** | 80 | 0.57 | 48 | 33% | 40.7 |
| 10 | Mean-reversion (OU) | 40 | **64** | 75 | 0.57 | 58 | 24% | 57.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 40 | **68** | 76 | 0.57 | 50 | 48% | 53.0 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 44 | **74** | 83 | 0.61 | 35 | — | 53.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 37 | **68** | 79 | 0.60 | 37 | 57% | 59.9 |
| 4 | Momentum | 33 | **60** | 73 | 0.52 | 51 | 55% | 61.5 |
| 5 | Block bootstrap | 33 | **61** | 72 | 0.59 | 41 | 50% | 73.8 |
| 6 | Bootstrap (IID) | 31 | **60** | 72 | 0.59 | 36 | 46% | 78.5 |
| 7 | GBM (normal) | 33 | **60** | 71 | 0.63 | 40 | 48% | 83.0 |
| 8 | GBM + Student-t | 32 | **59** | 70 | 0.63 | 41 | 47% | 84.6 |
| 9 | GARCH(1,1)-lite | 30 | **58** | 71 | 0.62 | 42 | 44% | 84.9 |
| 10 | Mean-reversion (OU) | 25 | **43** | 55 | 0.62 | 56 | 27% | 120.3 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 80% / 0.51 / 38% / 12.1 | 74% / 0.53 / 49% / 21.3 | 65% / 0.59 / 46% / 63.9 |
| ETH | 76% / 0.51 / 44% / 18.7 | 72% / 0.53 / 43% / 31.4 | 59% / 0.57 / 41% / 73.8 |
| SOL | 72% / 0.5 / 46% / 26.6 | 60% / 0.49 / 51% / 43.8 | 54% / 0.55 / 52% / 81.2 |
| BNB | 82% / 0.52 / 46% / 12.4 | 77% / 0.56 / 38% / 26.2 | 59% / 0.6 / 44% / 78 |
| XRP | 80% / 0.46 / 46% / 13.2 | 79% / 0.45 / 64% / 22.9 | 63% / 0.51 / 54% / 45.2 |
| SUI | 76% / 0.49 / 54% / 9.9 | 74% / 0.51 / 57% / 15.4 | 71% / 0.56 / 56% / 36.1 |
| AVAX | 82% / 0.49 / 58% / 16.5 | 74% / 0.53 / 57% / 31.7 | 63% / 0.6 / 57% / 71.9 |
| LINK | 72% / 0.56 / 48% / 29.6 | 72% / 0.58 / 51% / 33.6 | 63% / 0.63 / 40% / 85.6 |
| INJ | 80% / 0.54 / 40% / 18.1 | 81% / 0.61 / 32% / 31 | 73% / 0.64 / 41% / 47.3 |
| OP | 80% / 0.48 / 54% / 12 | 79% / 0.51 / 57% / 11.4 | 79% / 0.53 / 52% / 21.6 |
| ARB | 74% / 0.54 / 50% / 25.1 | 60% / 0.59 / 49% / 57.5 | 73% / 0.61 / 49% / 46.4 |
| DOGE | 78% / 0.45 / 56% / 20.4 | 77% / 0.46 / 64% / 24.6 | 67% / 0.49 / 62% / 37.1 |
| TIA | 82% / 0.5 / 52% / 14.2 | 79% / 0.55 / 47% / 21.6 | 84% / 0.58 / 49% / 33.3 |
| APT | 74% / 0.48 / 44% / 26.9 | 83% / 0.48 / 53% / 23.5 | 70% / 0.5 / 57% / 20.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
