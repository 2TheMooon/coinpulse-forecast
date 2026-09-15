# CoinPulse Strategy Tournament — 2026-09-15

_Generated 2026-09-15T14:15:00.338Z · 14 coins · 300 samples/window · 11.9s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Shipped engine is already the best-calibrated overall.

Overall best: **live_engine** · by horizon: 7d→`gbm_normal` · 14d→`bootstrap_iid` · 30d→`ensemble`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 30.4 |
| 2 | Ensemble (GBM-t + bootstraps) | 31.2 |
| 3 | GBM (normal) | 32.5 |
| 4 | Bootstrap (IID) | 32.5 |
| 5 | GBM + Student-t | 32.7 |
| 6 | EWMA vol, zero drift (t) | 33.8 |
| 7 | GARCH(1,1)-lite | 33.9 |
| 8 | Block bootstrap | 37.1 |
| 9 | Momentum | 42.1 |
| 10 | Mean-reversion (OU) | 64.7 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 50 | **78** | 86 | 0.50 | 44 | 21% | 17.3 |
| 2 | GBM + Student-t | 50 | **77** | 84 | 0.51 | 43 | 20% | 19.1 |
| 3 | EWMA vol, zero drift (t) | 51 | **77** | 85 | 0.50 | 51 | 20% | 19.3 |
| 4 | Ensemble (GBM-t + bootstraps) | 51 | **77** | 85 | 0.49 | 46 | 21% | 19.9 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 56 | **80** | 86 | 0.49 | 43 | — | 20.1 |
| 6 | Bootstrap (IID) | 51 | **78** | 84 | 0.49 | 44 | 21% | 20.7 |
| 7 | GARCH(1,1)-lite | 48 | **75** | 84 | 0.50 | 43 | 20% | 20.8 |
| 8 | Block bootstrap | 50 | **76** | 85 | 0.49 | 52 | 20% | 23.3 |
| 9 | Momentum | 44 | **72** | 83 | 0.49 | 47 | 21% | 27.4 |
| 10 | Mean-reversion (OU) | 46 | **70** | 78 | 0.49 | 53 | 18% | 36.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Bootstrap (IID) | 53 | **77** | 84 | 0.49 | 49 | 30% | 26.0 |
| 2 | GARCH(1,1)-lite | 50 | **74** | 84 | 0.51 | 46 | 28% | 26.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 58 | **79** | 87 | 0.50 | 45 | — | 26.9 |
| 4 | GBM + Student-t | 52 | **73** | 84 | 0.51 | 43 | 28% | 27.5 |
| 5 | GBM (normal) | 54 | **75** | 83 | 0.51 | 47 | 30% | 27.6 |
| 6 | EWMA vol, zero drift (t) | 52 | **75** | 85 | 0.51 | 48 | 28% | 28.8 |
| 7 | Ensemble (GBM-t + bootstraps) | 51 | **75** | 82 | 0.50 | 49 | 29% | 29.6 |
| 8 | Block bootstrap | 51 | **75** | 82 | 0.49 | 44 | 29% | 30.9 |
| 9 | Momentum | 44 | **69** | 81 | 0.50 | 52 | 30% | 33.9 |
| 10 | Mean-reversion (OU) | 42 | **64** | 72 | 0.48 | 51 | 23% | 55.6 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Ensemble (GBM-t + bootstraps) | 52 | **72** | 80 | 0.49 | 38 | 51% | 44.0 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 54 | **72** | 80 | 0.49 | 35 | — | 44.3 |
| 3 | Bootstrap (IID) | 48 | **68** | 76 | 0.49 | 42 | 44% | 50.9 |
| 4 | GBM + Student-t | 46 | **66** | 74 | 0.51 | 39 | 42% | 51.4 |
| 5 | GBM (normal) | 46 | **66** | 74 | 0.51 | 40 | 42% | 52.5 |
| 6 | EWMA vol, zero drift (t) | 49 | **68** | 76 | 0.50 | 52 | 41% | 53.4 |
| 7 | GARCH(1,1)-lite | 45 | **65** | 73 | 0.50 | 41 | 41% | 54.2 |
| 8 | Block bootstrap | 47 | **65** | 73 | 0.48 | 39 | 43% | 57.2 |
| 9 | Momentum | 33 | **59** | 71 | 0.53 | 49 | 42% | 65.0 |
| 10 | Mean-reversion (OU) | 31 | **49** | 58 | 0.43 | 60 | 27% | 101.9 |

## Winner consistency — `live_engine` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 85% / 0.48 / 41% / 17.3 | 77% / 0.48 / 35% / 23.8 | 56% / 0.49 / 17% / 60.1 |
| ETH | 81% / 0.49 / 31% / 19.6 | 72% / 0.48 / 27% / 30.2 | 56% / 0.51 / 3% / 68 |
| SOL | 76% / 0.52 / 35% / 31.1 | 76% / 0.53 / 35% / 28.3 | 67% / 0.55 / 30% / 40.7 |
| BNB | 85% / 0.54 / 32% / 22.9 | 80% / 0.58 / 44% / 25.7 | 67% / 0.56 / 25% / 35.2 |
| XRP | 84% / 0.46 / 49% / 16.6 | 80% / 0.46 / 46% / 27.9 | 60% / 0.48 / 41% / 51.3 |
| SUI | 85% / 0.49 / 47% / 12.6 | 83% / 0.5 / 48% / 17.2 | 92% / 0.48 / 46% / 35.3 |
| AVAX | 84% / 0.49 / 49% / 24.9 | 80% / 0.5 / 42% / 19.5 | 75% / 0.48 / 44% / 29.7 |
| LINK | 76% / 0.53 / 41% / 19.2 | 75% / 0.54 / 46% / 20.4 | 63% / 0.56 / 21% / 53.3 |
| INJ | 77% / 0.54 / 64% / 19.3 | 86% / 0.55 / 62% / 25.2 | 83% / 0.53 / 57% / 18.5 |
| OP | 81% / 0.47 / 45% / 22.3 | 85% / 0.49 / 42% / 27.9 | 92% / 0.46 / 46% / 49 |
| ARB | 70% / 0.47 / 36% / 37.9 | 61% / 0.49 / 42% / 42.9 | 70% / 0.45 / 14% / 36.3 |
| DOGE | 80% / 0.47 / 53% / 16.6 | 75% / 0.47 / 56% / 26.1 | 56% / 0.45 / 49% / 56.8 |
| TIA | 80% / 0.47 / 28% / 8.3 | 92% / 0.49 / 44% / 30.5 | 97% / 0.47 / 30% / 50.4 |
| APT | 81% / 0.49 / 53% / 12.8 | 89% / 0.48 / 58% / 31.1 | 79% / 0.43 / 59% / 35.7 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
