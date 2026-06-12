# CoinPulse Strategy Tournament — 2026-06-12

_Generated 2026-06-12T12:23:24.887Z · 14 coins · 300 samples/window · 10.4s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Momentum) does not beat the shipped engine by the required 3-point margin.

Overall best: **momentum** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`momentum`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Momentum | 23.8 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 25.5 |
| 3 | GBM (normal) | 25.8 |
| 4 | GBM + Student-t | 26.6 |
| 5 | GARCH(1,1)-lite | 28.1 |
| 6 | EWMA vol, zero drift (t) | 29.2 |
| 7 | Ensemble (GBM-t + bootstraps) | 30.6 |
| 8 | Bootstrap (IID) | 34.9 |
| 9 | Block bootstrap | 35.2 |
| 10 | Mean-reversion (OU) | 60.9 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 48 | **77** | 89 | 0.46 | 55 | 27% | 17.3 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 52 | **80** | 90 | 0.46 | 57 | — | 17.4 |
| 3 | GBM (normal) | 52 | **79** | 89 | 0.45 | 53 | 28% | 20.5 |
| 4 | GBM + Student-t | 49 | **78** | 88 | 0.45 | 56 | 27% | 21.4 |
| 5 | EWMA vol, zero drift (t) | 50 | **78** | 89 | 0.44 | 63 | 27% | 22.1 |
| 6 | GARCH(1,1)-lite | 50 | **78** | 89 | 0.44 | 55 | 26% | 22.7 |
| 7 | Ensemble (GBM-t + bootstraps) | 53 | **82** | 93 | 0.43 | 57 | 28% | 24.9 |
| 8 | Block bootstrap | 54 | **80** | 90 | 0.42 | 51 | 27% | 30.1 |
| 9 | Bootstrap (IID) | 57 | **84** | 92 | 0.43 | 52 | 29% | 30.2 |
| 10 | Mean-reversion (OU) | 50 | **78** | 86 | 0.40 | 47 | 28% | 34.5 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 46 | **76** | 87 | 0.46 | 53 | 38% | 20.9 |
| 2 | GBM (normal) | 52 | **81** | 88 | 0.44 | 57 | 39% | 22.1 |
| 3 | GBM + Student-t | 50 | **80** | 88 | 0.44 | 56 | 37% | 22.9 |
| 4 | GARCH(1,1)-lite | 51 | **80** | 88 | 0.44 | 55 | 37% | 23.9 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 58 | **83** | 90 | 0.46 | 56 | — | 24.6 |
| 6 | EWMA vol, zero drift (t) | 53 | **82** | 88 | 0.42 | 55 | 38% | 26.1 |
| 7 | Ensemble (GBM-t + bootstraps) | 52 | **80** | 91 | 0.42 | 54 | 39% | 29.0 |
| 8 | Bootstrap (IID) | 54 | **83** | 91 | 0.41 | 52 | 41% | 33.1 |
| 9 | Block bootstrap | 51 | **80** | 89 | 0.41 | 54 | 38% | 33.9 |
| 10 | Mean-reversion (OU) | 45 | **67** | 78 | 0.38 | 47 | 37% | 56.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 42 | **71** | 80 | 0.48 | 56 | 53% | 33.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 64 | **84** | 91 | 0.45 | 62 | — | 34.6 |
| 3 | GBM (normal) | 55 | **76** | 84 | 0.43 | 59 | 56% | 34.9 |
| 4 | GBM + Student-t | 54 | **76** | 83 | 0.42 | 59 | 56% | 35.5 |
| 5 | Ensemble (GBM-t + bootstraps) | 60 | **83** | 90 | 0.40 | 52 | 69% | 37.7 |
| 6 | GARCH(1,1)-lite | 52 | **77** | 84 | 0.42 | 60 | 55% | 37.8 |
| 7 | EWMA vol, zero drift (t) | 58 | **77** | 85 | 0.40 | 69 | 57% | 39.5 |
| 8 | Bootstrap (IID) | 56 | **78** | 88 | 0.39 | 49 | 61% | 41.4 |
| 9 | Block bootstrap | 54 | **75** | 85 | 0.39 | 54 | 56% | 41.4 |
| 10 | Mean-reversion (OU) | 39 | **56** | 66 | 0.34 | 38 | 48% | 91.4 |

## Winner consistency — `momentum` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 76% / 0.45 / 54% / 22 | 67% / 0.45 / 53% / 35.7 | 65% / 0.44 / 46% / 51.7 |
| ETH | 80% / 0.45 / 54% / 13.5 | 80% / 0.45 / 51% / 20.3 | 72% / 0.43 / 52% / 44.7 |
| SOL | 80% / 0.45 / 66% / 15.8 | 76% / 0.46 / 51% / 14.2 | 74% / 0.47 / 57% / 21.3 |
| BNB | 72% / 0.48 / 48% / 17.5 | 75% / 0.48 / 42% / 24.8 | 60% / 0.49 / 36% / 49.7 |
| XRP | 84% / 0.46 / 48% / 15.1 | 78% / 0.46 / 45% / 17.2 | 80% / 0.47 / 46% / 20.8 |
| SUI | 76% / 0.46 / 50% / 17.3 | 69% / 0.47 / 45% / 25 | 74% / 0.5 / 57% / 17.9 |
| AVAX | 74% / 0.43 / 60% / 22.7 | 73% / 0.44 / 57% / 24.8 | 72% / 0.5 / 50% / 25.2 |
| LINK | 80% / 0.45 / 54% / 13.4 | 78% / 0.45 / 47% / 19.8 | 74% / 0.45 / 59% / 31.8 |
| INJ | 76% / 0.5 / 58% / 8.2 | 90% / 0.5 / 57% / 27.6 | 78% / 0.55 / 72% / 27.4 |
| OP | 68% / 0.48 / 56% / 26 | 78% / 0.47 / 59% / 23.7 | 65% / 0.5 / 70% / 37.8 |
| ARB | 78% / 0.46 / 52% / 22 | 73% / 0.45 / 63% / 22.6 | 70% / 0.46 / 74% / 39.2 |
| DOGE | 82% / 0.45 / 52% / 13.9 | 78% / 0.46 / 53% / 13.8 | 80% / 0.51 / 59% / 11.7 |
| TIA | 82% / 0.48 / 60% / 13.9 | 76% / 0.48 / 59% / 11.8 | 72% / 0.52 / 57% / 25.8 |
| APT | 76% / 0.46 / 54% / 20.8 | 78% / 0.46 / 57% / 10.9 | 59% / 0.46 / 50% / 56 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
