# CoinPulse Strategy Tournament — 2026-11-19

_Generated 2026-11-19T18:05:30.102Z · 14 coins · 300 samples/window · 12.9s_

## 🏆 Recommendation: **SWITCH → `ensemble`**

> Ensemble (GBM-t + bootstraps) beats the shipped engine by 4.7 score points (lower=better).

Overall best: **ensemble** · by horizon: 7d→`gbm_t` · 14d→`momentum` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 29.7 |
| 2 | EWMA vol, zero drift (t) | 31.5 |
| 3 | Block bootstrap | 31.7 |
| 4 | Momentum | 32.1 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 34.3 |
| 6 | Bootstrap (IID) | 35.9 |
| 7 | GBM (normal) | 37.4 |
| 8 | GBM + Student-t | 37.6 |
| 9 | GARCH(1,1)-lite | 37.9 |
| 10 | Mean-reversion (OU) | 57.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 54 | **79** | 87 | 0.49 | 55 | 23% | 16.2 |
| 2 | GARCH(1,1)-lite | 51 | **78** | 87 | 0.48 | 55 | 23% | 17.3 |
| 3 | Ensemble (GBM-t + bootstraps) | 53 | **79** | 87 | 0.48 | 55 | 24% | 17.5 |
| 4 | GBM (normal) | 54 | **80** | 87 | 0.48 | 56 | 24% | 17.9 |
| 5 | Block bootstrap | 52 | **79** | 88 | 0.47 | 56 | 24% | 18.4 |
| 6 | Bootstrap (IID) | 53 | **79** | 87 | 0.48 | 55 | 23% | 19.7 |
| 7 | EWMA vol, zero drift (t) | 55 | **81** | 87 | 0.47 | 57 | 23% | 20.2 |
| 8 | Momentum | 52 | **80** | 88 | 0.46 | 57 | 24% | 20.8 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 62 | **86** | 92 | 0.50 | 49 | — | 24.4 |
| 10 | Mean-reversion (OU) | 51 | **75** | 83 | 0.49 | 58 | 21% | 27.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **76** | 85 | 0.51 | 52 | 36% | 23.3 |
| 2 | Block bootstrap | 51 | **78** | 86 | 0.53 | 51 | 36% | 24.1 |
| 3 | Ensemble (GBM-t + bootstraps) | 50 | **78** | 87 | 0.54 | 45 | 34% | 24.9 |
| 4 | Bootstrap (IID) | 49 | **76** | 86 | 0.53 | 45 | 33% | 26.1 |
| 5 | EWMA vol, zero drift (t) | 53 | **80** | 87 | 0.53 | 49 | 33% | 27.0 |
| 6 | GARCH(1,1)-lite | 49 | **76** | 86 | 0.56 | 49 | 32% | 28.8 |
| 7 | GBM + Student-t | 51 | **76** | 86 | 0.56 | 49 | 33% | 30.3 |
| 8 | GBM (normal) | 52 | **78** | 86 | 0.56 | 48 | 34% | 31.3 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 63 | **86** | 91 | 0.54 | 43 | — | 32.4 |
| 10 | Mean-reversion (OU) | 45 | **70** | 80 | 0.56 | 55 | 27% | 40.1 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **81** | 89 | 0.60 | 33 | — | 46.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 48 | **76** | 85 | 0.60 | 38 | 60% | 46.5 |
| 3 | EWMA vol, zero drift (t) | 48 | **71** | 79 | 0.60 | 46 | 48% | 47.4 |
| 4 | Momentum | 37 | **65** | 77 | 0.55 | 48 | 55% | 52.3 |
| 5 | Block bootstrap | 43 | **69** | 80 | 0.60 | 40 | 53% | 52.7 |
| 6 | Bootstrap (IID) | 38 | **67** | 77 | 0.60 | 38 | 48% | 62.0 |
| 7 | GBM (normal) | 41 | **68** | 78 | 0.64 | 37 | 49% | 63.0 |
| 8 | GBM + Student-t | 39 | **67** | 76 | 0.63 | 38 | 48% | 66.3 |
| 9 | GARCH(1,1)-lite | 38 | **66** | 76 | 0.63 | 41 | 46% | 67.5 |
| 10 | Mean-reversion (OU) | 29 | **53** | 63 | 0.64 | 49 | 33% | 103.8 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 82% / 0.5 / 58% / 26.3 | 77% / 0.58 / 45% / 24.9 | 67% / 0.66 / 21% / 65.6 |
| ETH | 80% / 0.5 / 52% / 18.3 | 77% / 0.56 / 47% / 39.2 | 62% / 0.62 / 25% / 73.5 |
| SOL | 76% / 0.47 / 44% / 18.9 | 62% / 0.52 / 30% / 42.4 | 65% / 0.57 / 38% / 45 |
| BNB | 84% / 0.49 / 46% / 13.8 | 83% / 0.56 / 34% / 20.5 | 73% / 0.59 / 29% / 26.6 |
| XRP | 80% / 0.44 / 64% / 14.1 | 81% / 0.5 / 62% / 9.7 | 70% / 0.57 / 51% / 44.4 |
| SUI | 86% / 0.5 / 58% / 12 | 83% / 0.54 / 49% / 17.1 | 84% / 0.61 / 33% / 31 |
| AVAX | 86% / 0.52 / 52% / 27.9 | 79% / 0.57 / 32% / 18.3 | 67% / 0.66 / 37% / 66.9 |
| LINK | 70% / 0.49 / 56% / 22.2 | 72% / 0.56 / 28% / 38 | 70% / 0.64 / 25% / 56.9 |
| INJ | 80% / 0.47 / 48% / 10.5 | 87% / 0.53 / 49% / 32.1 | 97% / 0.56 / 65% / 54.3 |
| OP | 78% / 0.46 / 66% / 16.1 | 83% / 0.51 / 49% / 18.4 | 92% / 0.56 / 44% / 39.8 |
| ARB | 72% / 0.51 / 48% / 24.1 | 68% / 0.6 / 43% / 44.5 | 75% / 0.66 / 24% / 55.8 |
| DOGE | 78% / 0.45 / 74% / 12.3 | 79% / 0.51 / 66% / 7.5 | 73% / 0.58 / 60% / 33.2 |
| TIA | 80% / 0.47 / 40% / 10.9 | 77% / 0.51 / 36% / 15.9 | 89% / 0.55 / 25% / 30.4 |
| APT | 76% / 0.47 / 64% / 18.3 | 81% / 0.54 / 60% / 20.5 | 75% / 0.6 / 54% / 27.2 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
