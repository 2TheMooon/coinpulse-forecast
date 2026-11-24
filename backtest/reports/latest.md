# CoinPulse Strategy Tournament — 2026-11-24

_Generated 2026-11-24T20:02:00.427Z · 14 coins · 300 samples/window · 14.9s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 4.3 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`block_boot` · 14d→`ensemble` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 31.1 |
| 2 | Ensemble (GBM-t + bootstraps) | 31.1 |
| 3 | Momentum | 32.8 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 35.4 |
| 5 | Block bootstrap | 36.8 |
| 6 | Bootstrap (IID) | 40.4 |
| 7 | GARCH(1,1)-lite | 41.3 |
| 8 | GBM (normal) | 42.0 |
| 9 | GBM + Student-t | 42.2 |
| 10 | Mean-reversion (OU) | 62.6 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 52 | **80** | 88 | 0.50 | 57 | 23% | 12.5 |
| 2 | GARCH(1,1)-lite | 52 | **80** | 87 | 0.51 | 52 | 23% | 14.2 |
| 3 | Ensemble (GBM-t + bootstraps) | 54 | **79** | 87 | 0.50 | 55 | 23% | 14.9 |
| 4 | Bootstrap (IID) | 53 | **80** | 87 | 0.50 | 55 | 23% | 16.1 |
| 5 | Momentum | 54 | **82** | 88 | 0.49 | 56 | 25% | 17.1 |
| 6 | EWMA vol, zero drift (t) | 55 | **82** | 88 | 0.49 | 48 | 24% | 18.0 |
| 7 | GBM + Student-t | 54 | **81** | 87 | 0.52 | 52 | 24% | 18.0 |
| 8 | GBM (normal) | 58 | **82** | 87 | 0.51 | 51 | 25% | 19.0 |
| 9 | Mean-reversion (OU) | 50 | **76** | 82 | 0.51 | 55 | 20% | 25.6 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 63 | **86** | 91 | 0.52 | 47 | — | 26.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 52 | **78** | 85 | 0.53 | 51 | 33% | 23.1 |
| 2 | Momentum | 51 | **78** | 86 | 0.50 | 55 | 36% | 24.3 |
| 3 | EWMA vol, zero drift (t) | 53 | **78** | 86 | 0.51 | 50 | 34% | 24.8 |
| 4 | Block bootstrap | 53 | **76** | 85 | 0.53 | 55 | 34% | 26.0 |
| 5 | Bootstrap (IID) | 53 | **76** | 85 | 0.53 | 50 | 33% | 27.6 |
| 6 | GARCH(1,1)-lite | 49 | **77** | 84 | 0.55 | 52 | 32% | 29.0 |
| 7 | Shipped engine (forecast.js) _(shipped)_ | 59 | **82** | 89 | 0.54 | 45 | — | 29.4 |
| 8 | GBM + Student-t | 50 | **76** | 84 | 0.55 | 49 | 33% | 30.1 |
| 9 | GBM (normal) | 55 | **78** | 84 | 0.55 | 49 | 35% | 30.7 |
| 10 | Mean-reversion (OU) | 44 | **69** | 76 | 0.56 | 57 | 25% | 46.1 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 48 | **76** | 85 | 0.60 | 35 | — | 50.4 |
| 2 | EWMA vol, zero drift (t) | 41 | **69** | 77 | 0.58 | 50 | 49% | 50.6 |
| 3 | Ensemble (GBM-t + bootstraps) | 40 | **71** | 80 | 0.60 | 39 | 58% | 55.4 |
| 4 | Momentum | 34 | **62** | 75 | 0.53 | 51 | 55% | 56.9 |
| 5 | Block bootstrap | 35 | **62** | 71 | 0.60 | 41 | 50% | 72.0 |
| 6 | GBM (normal) | 36 | **62** | 72 | 0.63 | 39 | 49% | 76.2 |
| 7 | Bootstrap (IID) | 32 | **60** | 72 | 0.60 | 37 | 47% | 77.4 |
| 8 | GBM + Student-t | 34 | **62** | 72 | 0.63 | 40 | 48% | 78.6 |
| 9 | GARCH(1,1)-lite | 31 | **61** | 72 | 0.62 | 41 | 45% | 80.6 |
| 10 | Mean-reversion (OU) | 26 | **46** | 57 | 0.63 | 54 | 29% | 116.2 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.48 / 38% / 17.5 | 74% / 0.5 / 51% / 25.2 | 65% / 0.6 / 44% / 64 |
| ETH | 80% / 0.49 / 46% / 13.3 | 74% / 0.52 / 45% / 18.8 | 59% / 0.58 / 40% / 77.7 |
| SOL | 78% / 0.48 / 52% / 12.3 | 68% / 0.48 / 53% / 28.6 | 56% / 0.57 / 52% / 77.5 |
| BNB | 84% / 0.53 / 54% / 13.1 | 72% / 0.55 / 45% / 28.5 | 63% / 0.6 / 44% / 69.2 |
| XRP | 84% / 0.43 / 48% / 29.1 | 79% / 0.43 / 60% / 24.8 | 65% / 0.52 / 56% / 44 |
| SUI | 86% / 0.49 / 54% / 18.6 | 83% / 0.51 / 57% / 18.5 | 76% / 0.57 / 57% / 31.6 |
| AVAX | 86% / 0.51 / 48% / 25.3 | 81% / 0.54 / 51% / 30.9 | 67% / 0.61 / 57% / 63.6 |
| LINK | 78% / 0.55 / 48% / 14.2 | 79% / 0.54 / 51% / 18 | 65% / 0.64 / 37% / 86 |
| INJ | 84% / 0.54 / 36% / 20.4 | 81% / 0.6 / 30% / 26.7 | 73% / 0.65 / 38% / 50.3 |
| OP | 86% / 0.48 / 56% / 14.7 | 89% / 0.48 / 55% / 24.3 | 84% / 0.53 / 52% / 24.4 |
| ARB | 72% / 0.51 / 52% / 18.8 | 70% / 0.56 / 53% / 40.8 | 75% / 0.62 / 46% / 45.1 |
| DOGE | 86% / 0.44 / 60% / 27.9 | 81% / 0.43 / 64% / 24.3 | 68% / 0.5 / 63% / 28.1 |
| TIA | 82% / 0.5 / 44% / 8.3 | 83% / 0.53 / 40% / 18.5 | 83% / 0.58 / 48% / 26.4 |
| APT | 74% / 0.46 / 42% / 17.9 | 83% / 0.48 / 49% / 18.8 | 73% / 0.51 / 62% / 20.5 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
