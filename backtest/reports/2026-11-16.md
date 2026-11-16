# CoinPulse Strategy Tournament — 2026-11-16

_Generated 2026-11-16T19:26:08.236Z · 14 coins · 300 samples/window · 14.9s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 6.2 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`garch` · 14d→`momentum` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 30.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 30.5 |
| 3 | Block bootstrap | 31.0 |
| 4 | Momentum | 32.6 |
| 5 | Bootstrap (IID) | 34.0 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 36.5 |
| 7 | GBM (normal) | 36.9 |
| 8 | GBM + Student-t | 37.1 |
| 9 | GARCH(1,1)-lite | 38.3 |
| 10 | Mean-reversion (OU) | 55.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GARCH(1,1)-lite | 52 | **80** | 87 | 0.48 | 51 | 22% | 16.2 |
| 2 | Bootstrap (IID) | 53 | **80** | 87 | 0.48 | 51 | 23% | 16.8 |
| 3 | GBM (normal) | 56 | **81** | 88 | 0.49 | 52 | 24% | 16.9 |
| 4 | Block bootstrap | 52 | **80** | 88 | 0.48 | 55 | 24% | 17.3 |
| 5 | GBM + Student-t | 56 | **81** | 88 | 0.49 | 57 | 23% | 17.4 |
| 6 | EWMA vol, zero drift (t) | 56 | **81** | 88 | 0.48 | 58 | 23% | 17.6 |
| 7 | Ensemble (GBM-t + bootstraps) | 54 | **81** | 88 | 0.48 | 56 | 23% | 18.8 |
| 8 | Momentum | 52 | **78** | 88 | 0.47 | 56 | 24% | 19.0 |
| 9 | Mean-reversion (OU) | 52 | **76** | 84 | 0.49 | 58 | 21% | 25.1 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 64 | **87** | 91 | 0.52 | 45 | — | 27.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 50 | **76** | 86 | 0.52 | 52 | 36% | 22.2 |
| 2 | Block bootstrap | 52 | **79** | 88 | 0.54 | 51 | 35% | 23.6 |
| 3 | Bootstrap (IID) | 50 | **78** | 86 | 0.54 | 45 | 33% | 24.8 |
| 4 | Ensemble (GBM-t + bootstraps) | 51 | **78** | 88 | 0.54 | 48 | 34% | 26.4 |
| 5 | EWMA vol, zero drift (t) | 52 | **81** | 88 | 0.54 | 52 | 33% | 26.5 |
| 6 | GBM + Student-t | 50 | **78** | 87 | 0.56 | 47 | 33% | 30.4 |
| 7 | GBM (normal) | 53 | **80** | 87 | 0.56 | 51 | 34% | 30.9 |
| 8 | GARCH(1,1)-lite | 48 | **79** | 87 | 0.56 | 48 | 32% | 31.3 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 64 | **87** | 91 | 0.55 | 44 | — | 34.7 |
| 10 | Mean-reversion (OU) | 45 | **70** | 80 | 0.56 | 54 | 27% | 40.4 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 48 | **77** | 85 | 0.61 | 37 | 59% | 46.3 |
| 2 | EWMA vol, zero drift (t) | 47 | **74** | 80 | 0.61 | 44 | 48% | 46.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 55 | **82** | 89 | 0.61 | 35 | — | 47.0 |
| 4 | Block bootstrap | 43 | **70** | 80 | 0.60 | 40 | 52% | 52.2 |
| 5 | Momentum | 36 | **63** | 77 | 0.56 | 50 | 54% | 56.5 |
| 6 | Bootstrap (IID) | 39 | **68** | 79 | 0.61 | 35 | 48% | 60.5 |
| 7 | GBM (normal) | 41 | **69** | 78 | 0.64 | 38 | 48% | 62.8 |
| 8 | GBM + Student-t | 41 | **69** | 77 | 0.64 | 39 | 47% | 63.4 |
| 9 | GARCH(1,1)-lite | 38 | **67** | 77 | 0.64 | 41 | 45% | 67.4 |
| 10 | Mean-reversion (OU) | 28 | **54** | 64 | 0.64 | 49 | 32% | 101.6 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.48 / 56% / 32.6 | 81% / 0.55 / 51% / 22.6 | 73% / 0.64 / 41% / 50.6 |
| ETH | 82% / 0.49 / 54% / 22.1 | 79% / 0.55 / 57% / 23 | 63% / 0.63 / 33% / 66.1 |
| SOL | 76% / 0.47 / 54% / 21.2 | 68% / 0.54 / 47% / 38.4 | 63% / 0.61 / 44% / 66.9 |
| BNB | 82% / 0.51 / 54% / 13.2 | 81% / 0.57 / 53% / 19.5 | 70% / 0.63 / 41% / 57.7 |
| XRP | 82% / 0.41 / 58% / 23.7 | 83% / 0.47 / 60% / 15.5 | 71% / 0.54 / 49% / 39 |
| SUI | 80% / 0.48 / 62% / 10.9 | 85% / 0.53 / 53% / 18.3 | 76% / 0.6 / 52% / 31.9 |
| AVAX | 88% / 0.51 / 48% / 34 | 83% / 0.56 / 49% / 32.8 | 68% / 0.64 / 52% / 60 |
| LINK | 80% / 0.51 / 58% / 5.4 | 77% / 0.57 / 45% / 32.3 | 73% / 0.68 / 32% / 76.6 |
| INJ | 80% / 0.51 / 54% / 16.3 | 83% / 0.59 / 43% / 31.9 | 73% / 0.67 / 35% / 57.2 |
| OP | 84% / 0.46 / 66% / 16.6 | 89% / 0.5 / 53% / 23.5 | 86% / 0.56 / 51% / 26 |
| ARB | 78% / 0.5 / 62% / 8.6 | 70% / 0.6 / 51% / 47.9 | 75% / 0.65 / 35% / 52.4 |
| DOGE | 80% / 0.41 / 60% / 20.4 | 81% / 0.45 / 62% / 14.9 | 76% / 0.51 / 57% / 17.9 |
| TIA | 82% / 0.49 / 60% / 7.3 | 87% / 0.55 / 45% / 27.3 | 86% / 0.61 / 41% / 30 |
| APT | 78% / 0.46 / 66% / 14.4 | 87% / 0.49 / 60% / 23.1 | 76% / 0.53 / 54% / 20.6 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
