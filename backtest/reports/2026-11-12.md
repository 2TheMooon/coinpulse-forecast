# CoinPulse Strategy Tournament — 2026-11-12

_Generated 2026-11-12T17:27:40.307Z · 14 coins · 300 samples/window · 15.2s_

## 🏆 Recommendation: **SWITCH → `ewma_t_zero`**

> EWMA vol, zero drift (t) beats the shipped engine by 9.6 score points (lower=better).

Overall best: **ewma_t_zero** · by horizon: 7d→`block_boot` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | EWMA vol, zero drift (t) | 30.1 |
| 2 | Block bootstrap | 31.0 |
| 3 | Ensemble (GBM-t + bootstraps) | 31.0 |
| 4 | Momentum | 33.9 |
| 5 | Bootstrap (IID) | 34.6 |
| 6 | GBM + Student-t | 35.8 |
| 7 | GARCH(1,1)-lite | 36.3 |
| 8 | GBM (normal) | 37.9 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 39.7 |
| 10 | Mean-reversion (OU) | 54.0 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Block bootstrap | 56 | **84** | 90 | 0.50 | 57 | 23% | 17.4 |
| 2 | GARCH(1,1)-lite | 55 | **82** | 88 | 0.51 | 50 | 22% | 17.5 |
| 3 | Momentum | 54 | **82** | 88 | 0.49 | 54 | 24% | 17.7 |
| 4 | GBM + Student-t | 56 | **83** | 90 | 0.52 | 52 | 23% | 17.7 |
| 5 | Bootstrap (IID) | 56 | **82** | 89 | 0.51 | 54 | 23% | 18.0 |
| 6 | Ensemble (GBM-t + bootstraps) | 56 | **84** | 90 | 0.51 | 57 | 23% | 18.3 |
| 7 | EWMA vol, zero drift (t) | 57 | **83** | 90 | 0.50 | 50 | 23% | 18.8 |
| 8 | GBM (normal) | 59 | **84** | 89 | 0.51 | 51 | 24% | 20.8 |
| 9 | Mean-reversion (OU) | 54 | **78** | 84 | 0.51 | 54 | 21% | 24.9 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 66 | **88** | 92 | 0.52 | 45 | — | 31.3 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 53 | **80** | 88 | 0.52 | 53 | 36% | 21.1 |
| 2 | Block bootstrap | 56 | **83** | 90 | 0.53 | 52 | 34% | 23.6 |
| 3 | GARCH(1,1)-lite | 54 | **82** | 88 | 0.55 | 47 | 32% | 25.8 |
| 4 | Ensemble (GBM-t + bootstraps) | 57 | **83** | 90 | 0.54 | 49 | 33% | 25.8 |
| 5 | EWMA vol, zero drift (t) | 56 | **83** | 89 | 0.53 | 50 | 33% | 26.1 |
| 6 | Bootstrap (IID) | 56 | **81** | 89 | 0.54 | 47 | 32% | 26.2 |
| 7 | GBM + Student-t | 56 | **81** | 88 | 0.55 | 48 | 33% | 27.4 |
| 8 | GBM (normal) | 61 | **82** | 88 | 0.56 | 49 | 34% | 31.0 |
| 9 | Mean-reversion (OU) | 50 | **74** | 81 | 0.55 | 53 | 27% | 36.8 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 67 | **88** | 92 | 0.55 | 44 | — | 38.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 48 | **75** | 82 | 0.62 | 45 | 48% | 45.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 49 | **78** | 85 | 0.63 | 37 | 58% | 48.9 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 58 | **83** | 90 | 0.62 | 36 | — | 49.0 |
| 4 | Block bootstrap | 45 | **73** | 82 | 0.62 | 39 | 51% | 51.9 |
| 5 | Bootstrap (IID) | 41 | **69** | 81 | 0.62 | 35 | 47% | 59.7 |
| 6 | GBM (normal) | 43 | **71** | 80 | 0.65 | 38 | 48% | 61.8 |
| 7 | GBM + Student-t | 43 | **71** | 78 | 0.66 | 40 | 47% | 62.4 |
| 8 | Momentum | 35 | **62** | 76 | 0.58 | 48 | 53% | 62.9 |
| 9 | GARCH(1,1)-lite | 39 | **70** | 79 | 0.65 | 38 | 45% | 65.5 |
| 10 | Mean-reversion (OU) | 29 | **55** | 66 | 0.65 | 46 | 33% | 100.3 |

## Winner consistency — `ewma_t_zero` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 86% / 0.5 / 46% / 21 | 85% / 0.53 / 57% / 23.8 | 76% / 0.65 / 43% / 49.3 |
| ETH | 82% / 0.51 / 40% / 21.4 | 87% / 0.54 / 47% / 25 | 65% / 0.65 / 30% / 65.2 |
| SOL | 82% / 0.5 / 42% / 6.4 | 79% / 0.54 / 49% / 16.5 | 67% / 0.63 / 41% / 64.8 |
| BNB | 86% / 0.54 / 46% / 17.5 | 81% / 0.58 / 55% / 19.7 | 75% / 0.64 / 46% / 50 |
| XRP | 80% / 0.43 / 54% / 21.8 | 87% / 0.45 / 55% / 24.7 | 75% / 0.55 / 56% / 37.1 |
| SUI | 88% / 0.49 / 54% / 15.7 | 85% / 0.52 / 57% / 21.1 | 76% / 0.61 / 51% / 36.8 |
| AVAX | 86% / 0.52 / 54% / 27.1 | 81% / 0.56 / 47% / 37.9 | 68% / 0.65 / 51% / 59.9 |
| LINK | 76% / 0.55 / 42% / 13.6 | 81% / 0.56 / 36% / 21 | 75% / 0.69 / 33% / 73.2 |
| INJ | 84% / 0.55 / 48% / 22.6 | 83% / 0.59 / 43% / 31.6 | 75% / 0.68 / 35% / 53.7 |
| OP | 86% / 0.5 / 52% / 16 | 89% / 0.51 / 47% / 24.6 | 84% / 0.57 / 51% / 21.6 |
| ARB | 74% / 0.52 / 54% / 24.7 | 72% / 0.57 / 53% / 37.4 | 75% / 0.67 / 33% / 55.4 |
| DOGE | 86% / 0.44 / 52% / 28.2 | 83% / 0.44 / 64% / 25.6 | 78% / 0.51 / 60% / 14.3 |
| TIA | 80% / 0.53 / 52% / 12.1 | 83% / 0.56 / 30% / 26 | 81% / 0.63 / 38% / 32.8 |
| APT | 82% / 0.47 / 58% / 15.6 | 89% / 0.49 / 53% / 30.3 | 81% / 0.55 / 56% / 21.4 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
