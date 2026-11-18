# CoinPulse Strategy Tournament — 2026-11-18

_Generated 2026-11-18T17:54:12.747Z · 14 coins · 300 samples/window · 10.8s_

## 🏆 Recommendation: **SWITCH → `ensemble`**

> Ensemble (GBM-t + bootstraps) beats the shipped engine by 6.1 score points (lower=better).

Overall best: **ensemble** · by horizon: 7d→`garch` · 14d→`momentum` · 30d→`ewma_t_zero`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 28.8 |
| 2 | EWMA vol, zero drift (t) | 29.2 |
| 3 | Block bootstrap | 29.8 |
| 4 | Momentum | 31.0 |
| 5 | Bootstrap (IID) | 34.2 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 35.0 |
| 7 | GBM + Student-t | 35.4 |
| 8 | GARCH(1,1)-lite | 35.7 |
| 9 | GBM (normal) | 36.6 |
| 10 | Mean-reversion (OU) | 52.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GARCH(1,1)-lite | 52 | **80** | 87 | 0.50 | 52 | 23% | 13.4 |
| 2 | Block bootstrap | 53 | **82** | 89 | 0.48 | 55 | 24% | 13.9 |
| 3 | GBM + Student-t | 54 | **81** | 88 | 0.51 | 53 | 23% | 14.2 |
| 4 | Ensemble (GBM-t + bootstraps) | 54 | **81** | 89 | 0.49 | 52 | 24% | 14.4 |
| 5 | Momentum | 51 | **81** | 89 | 0.48 | 54 | 24% | 15.0 |
| 6 | GBM (normal) | 56 | **82** | 89 | 0.50 | 52 | 24% | 15.2 |
| 7 | Bootstrap (IID) | 53 | **80** | 87 | 0.48 | 49 | 23% | 15.7 |
| 8 | EWMA vol, zero drift (t) | 55 | **82** | 88 | 0.49 | 59 | 23% | 16.4 |
| 9 | Mean-reversion (OU) | 53 | **77** | 84 | 0.50 | 58 | 21% | 23.0 |
| 10 | Shipped engine (forecast.js) _(shipped)_ | 63 | **86** | 91 | 0.51 | 44 | — | 25.4 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 53 | **80** | 87 | 0.51 | 55 | 36% | 22.0 |
| 2 | Block bootstrap | 56 | **80** | 89 | 0.53 | 53 | 36% | 22.1 |
| 3 | Bootstrap (IID) | 55 | **80** | 88 | 0.53 | 48 | 33% | 23.5 |
| 4 | EWMA vol, zero drift (t) | 56 | **82** | 88 | 0.52 | 48 | 33% | 24.6 |
| 5 | Ensemble (GBM-t + bootstraps) | 57 | **82** | 88 | 0.53 | 47 | 34% | 25.4 |
| 6 | GARCH(1,1)-lite | 53 | **80** | 87 | 0.55 | 49 | 32% | 26.3 |
| 7 | GBM + Student-t | 55 | **80** | 86 | 0.55 | 48 | 33% | 27.5 |
| 8 | GBM (normal) | 58 | **81** | 87 | 0.55 | 50 | 34% | 30.0 |
| 9 | Shipped engine (forecast.js) _(shipped)_ | 63 | **86** | 90 | 0.54 | 43 | — | 32.6 |
| 10 | Mean-reversion (OU) | 49 | **73** | 81 | 0.55 | 55 | 27% | 35.0 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | EWMA vol, zero drift (t) | 45 | **72** | 79 | 0.60 | 45 | 48% | 46.7 |
| 2 | Ensemble (GBM-t + bootstraps) | 47 | **75** | 84 | 0.60 | 37 | 60% | 46.8 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 53 | **81** | 88 | 0.60 | 34 | — | 46.9 |
| 4 | Block bootstrap | 43 | **69** | 78 | 0.60 | 40 | 53% | 53.4 |
| 5 | Momentum | 36 | **63** | 76 | 0.55 | 49 | 54% | 55.9 |
| 6 | Bootstrap (IID) | 38 | **67** | 77 | 0.60 | 36 | 48% | 63.4 |
| 7 | GBM (normal) | 40 | **68** | 77 | 0.64 | 38 | 48% | 64.5 |
| 8 | GBM + Student-t | 38 | **68** | 77 | 0.63 | 38 | 47% | 64.7 |
| 9 | GARCH(1,1)-lite | 37 | **66** | 77 | 0.63 | 40 | 45% | 67.5 |
| 10 | Mean-reversion (OU) | 27 | **54** | 64 | 0.63 | 50 | 33% | 100.5 |

## Winner consistency — `ensemble` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 84% / 0.5 / 42% / 8.2 | 81% / 0.55 / 51% / 27.1 | 73% / 0.66 / 17% / 57.7 |
| ETH | 80% / 0.5 / 46% / 14.4 | 74% / 0.55 / 43% / 23.9 | 62% / 0.64 / 16% / 76 |
| SOL | 80% / 0.47 / 44% / 10.2 | 74% / 0.5 / 38% / 16.3 | 63% / 0.58 / 40% / 53.1 |
| BNB | 86% / 0.51 / 42% / 15.1 | 83% / 0.55 / 43% / 16 | 73% / 0.59 / 35% / 35.7 |
| XRP | 78% / 0.44 / 68% / 22.4 | 81% / 0.47 / 64% / 16.1 | 70% / 0.58 / 46% / 45.2 |
| SUI | 86% / 0.5 / 64% / 18.7 | 87% / 0.53 / 47% / 28.7 | 81% / 0.6 / 33% / 28.5 |
| AVAX | 84% / 0.52 / 56% / 25.1 | 81% / 0.57 / 45% / 32.1 | 67% / 0.65 / 43% / 74.9 |
| LINK | 74% / 0.52 / 48% / 14.2 | 74% / 0.53 / 34% / 26.6 | 70% / 0.64 / 30% / 61 |
| INJ | 82% / 0.5 / 42% / 14.2 | 91% / 0.54 / 47% / 33.8 | 89% / 0.56 / 60% / 42.1 |
| OP | 84% / 0.49 / 54% / 12.4 | 85% / 0.51 / 51% / 27.8 | 87% / 0.56 / 40% / 27.4 |
| ARB | 70% / 0.52 / 48% / 22.5 | 72% / 0.58 / 47% / 35.4 | 75% / 0.65 / 19% / 55.5 |
| DOGE | 82% / 0.47 / 70% / 10.9 | 83% / 0.5 / 70% / 17.9 | 73% / 0.58 / 57% / 31.7 |
| TIA | 80% / 0.49 / 42% / 6.7 | 91% / 0.51 / 21% / 23.1 | 87% / 0.55 / 32% / 28.4 |
| APT | 82% / 0.49 / 62% / 6.3 | 85% / 0.54 / 51% / 30.3 | 76% / 0.6 / 54% / 37.8 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
