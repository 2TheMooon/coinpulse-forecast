# CoinPulse Strategy Tournament — 2026-11-25

_Generated 2026-11-25T19:02:53.042Z · 14 coins · 300 samples/window · 10.1s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (EWMA vol, zero drift (t)) does not beat the shipped engine by the required 3-point margin.

Overall best: **ewma_t_zero** · by horizon: 7d→`ensemble` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 32.9 |
| 2 | Momentum | 33.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 34.1 |
| 4 | Ensemble (GBM-t + bootstraps) | 35.9 |
| 5 | Block bootstrap | 41.1 |
| 6 | Bootstrap (IID) | 44.3 |
| 7 | GBM (normal) | 46.1 |
| 8 | GBM + Student-t | 47.1 |
| 9 | GARCH(1,1)-lite | 47.5 |
| 10 | Mean-reversion (OU) | 70.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 54 | **78** | 87 | 0.49 | 58 | 23% | 16.3 |
| 2 | Block bootstrap | 50 | **77** | 86 | 0.49 | 58 | 23% | 17.3 |
| 3 | GARCH(1,1)-lite | 51 | **78** | 86 | 0.50 | 53 | 23% | 17.7 |
| 4 | GBM + Student-t | 55 | **80** | 86 | 0.51 | 54 | 24% | 18.3 |
| 5 | Momentum | 53 | **80** | 88 | 0.47 | 59 | 25% | 18.4 |
| 6 | GBM (normal) | 56 | **80** | 87 | 0.50 | 55 | 24% | 18.7 |
| 7 | EWMA vol, zero drift (t) | 55 | **81** | 86 | 0.47 | 48 | 24% | 19.6 |
| 8 | Bootstrap (IID) | 52 | **78** | 86 | 0.48 | 54 | 23% | 19.8 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 61 | **84** | 90 | 0.51 | 52 | — | 21.9 |
| 10 | Mean-reversion (OU) | 47 | **71** | 81 | 0.50 | 55 | 20% | 32.7 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 47 | **72** | 83 | 0.49 | 52 | 36% | 27.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 57 | **82** | 89 | 0.55 | 47 | — | 28.2 |
| 3 | EWMA vol, zero drift (t) | 49 | **75** | 84 | 0.51 | 54 | 33% | 28.4 |
| 4 | Ensemble (GBM-t + bootstraps) | 46 | **73** | 83 | 0.54 | 52 | 33% | 32.5 |
| 5 | Block bootstrap | 46 | **72** | 81 | 0.54 | 52 | 33% | 32.7 |
| 6 | Bootstrap (IID) | 45 | **73** | 81 | 0.53 | 52 | 32% | 32.9 |
| 7 | GBM (normal) | 47 | **73** | 82 | 0.56 | 49 | 34% | 37.7 |
| 8 | GARCH(1,1)-lite | 42 | **71** | 82 | 0.56 | 54 | 31% | 39.1 |
| 9 | GBM + Student-t | 44 | **71** | 82 | 0.56 | 50 | 33% | 40.7 |
| 10 | Mean-reversion (OU) | 41 | **64** | 73 | 0.56 | 59 | 24% | 56.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 43 | **67** | 77 | 0.58 | 50 | 48% | 50.7 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 47 | **75** | 85 | 0.61 | 36 | — | 52.1 |
| 3 | Momentum | 36 | **62** | 75 | 0.53 | 51 | 55% | 55.1 |
| 4 | Ensemble (GBM-t + bootstraps) | 40 | **69** | 80 | 0.61 | 39 | 57% | 58.8 |
| 5 | Block bootstrap | 34 | **62** | 72 | 0.60 | 42 | 49% | 73.4 |
| 6 | Bootstrap (IID) | 33 | **59** | 72 | 0.60 | 37 | 46% | 80.1 |
| 7 | GBM (normal) | 36 | **59** | 72 | 0.64 | 39 | 48% | 82.0 |
| 8 | GBM + Student-t | 34 | **60** | 71 | 0.63 | 41 | 47% | 82.3 |
| 9 | GARCH(1,1)-lite | 32 | **59** | 70 | 0.63 | 42 | 44% | 85.6 |
| 10 | Mean-reversion (OU) | 27 | **45** | 54 | 0.64 | 55 | 27% | 120.7 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.48 / 44% / 30.5 | 72% / 0.52 / 53% / 24.6 | 65% / 0.6 / 43% / 63.5 |
| ETH | 80% / 0.49 / 46% / 19.3 | 70% / 0.52 / 49% / 38.2 | 52% / 0.57 / 41% / 78.8 |
| SOL | 76% / 0.47 / 52% / 18.3 | 57% / 0.49 / 55% / 49.3 | 56% / 0.56 / 52% / 74.2 |
| BNB | 82% / 0.5 / 46% / 8.5 | 74% / 0.55 / 49% / 30.1 | 62% / 0.61 / 46% / 75 |
| XRP | 86% / 0.42 / 50% / 27.2 | 79% / 0.45 / 64% / 24.2 | 62% / 0.51 / 57% / 44.1 |
| SUI | 80% / 0.47 / 50% / 7.2 | 79% / 0.5 / 57% / 5.8 | 70% / 0.57 / 54% / 31.2 |
| AVAX | 86% / 0.5 / 46% / 28.7 | 79% / 0.52 / 53% / 18.8 | 65% / 0.61 / 57% / 59.7 |
| LINK | 78% / 0.52 / 52% / 9.7 | 74% / 0.55 / 51% / 32.4 | 65% / 0.63 / 40% / 75.4 |
| INJ | 82% / 0.51 / 38% / 18.4 | 77% / 0.59 / 34% / 33.9 | 76% / 0.65 / 35% / 44.3 |
| OP | 82% / 0.45 / 56% / 22.9 | 85% / 0.48 / 55% / 20 | 81% / 0.54 / 56% / 26.9 |
| ARB | 78% / 0.5 / 46% / 16.2 | 66% / 0.58 / 51% / 57.5 | 71% / 0.63 / 48% / 55 |
| DOGE | 84% / 0.42 / 54% / 24.6 | 77% / 0.44 / 66% / 26 | 65% / 0.5 / 63% / 33.3 |
| TIA | 84% / 0.48 / 50% / 12.7 | 81% / 0.52 / 49% / 22.6 | 76% / 0.58 / 48% / 26 |
| APT | 78% / 0.45 / 44% / 30.5 | 81% / 0.46 / 62% / 13.9 | 71% / 0.51 / 62% / 22 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
