# CoinPulse Strategy Tournament — 2026-10-27

_Generated 2026-10-27T15:14:01.812Z · 14 coins · 300 samples/window · 13.0s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Ensemble (GBM-t + bootstraps)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ensemble** · by horizon: 7d→`ensemble` · 14d→`ewma_t_zero` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 33.9 |
| 2 | EWMA vol, zero drift (t) | 34.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 36.8 |
| 4 | Bootstrap (IID) | 37.4 |
| 5 | Block bootstrap | 37.6 |
| 6 | GBM + Student-t | 39.6 |
| 7 | GBM (normal) | 39.6 |
| 8 | GARCH(1,1)-lite | 40.9 |
| 9 | Momentum | 44.7 |
| 10 | Mean-reversion (OU) | 66.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 50 | **77** | 83 | 0.52 | 50 | 23% | 19.4 |
| 2 | GBM (normal) | 51 | **77** | 83 | 0.52 | 42 | 24% | 21.5 |
| 3 | EWMA vol, zero drift (t) | 50 | **76** | 84 | 0.52 | 57 | 23% | 22.1 |
| 4 | GBM + Student-t | 50 | **77** | 84 | 0.53 | 48 | 23% | 22.9 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 62 | **84** | 89 | 0.51 | 45 | — | 23.0 |
| 6 | Bootstrap (IID) | 50 | **75** | 83 | 0.51 | 43 | 23% | 23.3 |
| 7 | Block bootstrap | 47 | **74** | 82 | 0.51 | 49 | 22% | 23.9 |
| 8 | GARCH(1,1)-lite | 49 | **74** | 82 | 0.52 | 47 | 22% | 24.3 |
| 9 | Momentum | 44 | **74** | 82 | 0.52 | 51 | 24% | 26.3 |
| 10 | Mean-reversion (OU) | 45 | **69** | 76 | 0.51 | 49 | 20% | 38.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 53 | **77** | 85 | 0.55 | 46 | 32% | 29.2 |
| 2 | Ensemble (GBM-t + bootstraps) | 53 | **78** | 85 | 0.55 | 48 | 32% | 30.4 |
| 3 | Block bootstrap | 52 | **77** | 85 | 0.54 | 48 | 33% | 31.9 |
| 4 | Bootstrap (IID) | 52 | **78** | 84 | 0.55 | 47 | 32% | 31.9 |
| 5 | GBM + Student-t | 52 | **75** | 84 | 0.56 | 44 | 32% | 32.1 |
| 6 | GARCH(1,1)-lite | 50 | **76** | 83 | 0.57 | 50 | 31% | 33.2 |
| 7 | GBM (normal) | 55 | **78** | 84 | 0.57 | 49 | 34% | 35.0 |
| 8 | Momentum | 45 | **71** | 83 | 0.55 | 52 | 34% | 35.1 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 66 | **86** | 90 | 0.54 | 46 | — | 37.3 |
| 10 | Mean-reversion (OU) | 43 | **66** | 73 | 0.55 | 48 | 26% | 53.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 62 | **81** | 88 | 0.61 | 42 | — | 50.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 54 | **76** | 83 | 0.63 | 41 | 57% | 51.8 |
| 3 | EWMA vol, zero drift (t) | 50 | **72** | 79 | 0.63 | 41 | 46% | 52.4 |
| 4 | Bootstrap (IID) | 46 | **72** | 78 | 0.62 | 42 | 47% | 56.9 |
| 5 | Block bootstrap | 47 | **72** | 79 | 0.62 | 42 | 49% | 56.9 |
| 6 | GBM (normal) | 45 | **70** | 77 | 0.65 | 38 | 47% | 62.4 |
| 7 | GBM + Student-t | 45 | **69** | 76 | 0.65 | 37 | 46% | 63.8 |
| 8 | GARCH(1,1)-lite | 43 | **69** | 76 | 0.65 | 38 | 44% | 65.2 |
| 9 | Momentum | 34 | **62** | 75 | 0.62 | 52 | 50% | 72.8 |
| 10 | Mean-reversion (OU) | 31 | **51** | 60 | 0.62 | 42 | 33% | 105.6 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.54 / 48% / 18.1 | 81% / 0.57 / 49% / 24.8 | 71% / 0.67 / 33% / 69.6 |
| ETH | 80% / 0.55 / 52% / 15.4 | 74% / 0.59 / 36% / 33.8 | 65% / 0.7 / 21% / 73.4 |
| SOL | 76% / 0.55 / 46% / 27.2 | 72% / 0.58 / 43% / 33 | 75% / 0.68 / 43% / 55.8 |
| BNB | 86% / 0.54 / 52% / 29.7 | 83% / 0.55 / 43% / 26.6 | 71% / 0.61 / 46% / 44.4 |
| XRP | 78% / 0.49 / 56% / 11.9 | 81% / 0.5 / 64% / 7.7 | 71% / 0.6 / 43% / 61.9 |
| SUI | 76% / 0.52 / 52% / 14.4 | 83% / 0.55 / 51% / 27.2 | 81% / 0.64 / 41% / 35 |
| AVAX | 72% / 0.51 / 52% / 22.5 | 66% / 0.56 / 53% / 49.1 | 65% / 0.68 / 41% / 77.5 |
| LINK | 74% / 0.54 / 52% / 34.5 | 70% / 0.58 / 47% / 43.1 | 71% / 0.69 / 37% / 61.5 |
| INJ | 78% / 0.5 / 52% / 10.9 | 89% / 0.51 / 62% / 17 | 84% / 0.52 / 57% / 20 |
| OP | 78% / 0.5 / 44% / 10.3 | 85% / 0.54 / 45% / 28.9 | 92% / 0.59 / 33% / 49.5 |
| ARB | 74% / 0.53 / 58% / 25 | 62% / 0.59 / 49% / 55.8 | 71% / 0.67 / 27% / 61 |
| DOGE | 72% / 0.46 / 52% / 25.7 | 72% / 0.47 / 51% / 24.6 | 73% / 0.54 / 51% / 22.6 |
| TIA | 80% / 0.52 / 40% / 7.2 | 87% / 0.57 / 38% / 26.1 | 92% / 0.58 / 46% / 55.4 |
| APT | 74% / 0.5 / 46% / 18.5 | 83% / 0.53 / 47% / 28.2 | 79% / 0.59 / 48% / 38 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
