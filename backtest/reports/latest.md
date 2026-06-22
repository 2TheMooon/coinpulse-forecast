# CoinPulse Strategy Tournament — 2026-06-22

_Generated 2026-06-22T14:46:26.471Z · 14 coins · 300 samples/window · 10.5s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Momentum) does not beat the shipped engine by the required 3-point margin.

Overall best: **momentum** · by horizon: 7d→`momentum` · 14d→`gbm_normal` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Momentum | 24.7 |
| 2 | GBM + Student-t | 25.6 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 25.7 |
| 4 | GBM (normal) | 25.9 |
| 5 | GARCH(1,1)-lite | 27.2 |
| 6 | Ensemble (GBM-t + bootstraps) | 29.2 |
| 7 | EWMA vol, zero drift (t) | 29.4 |
| 8 | Bootstrap (IID) | 33.8 |
| 9 | Block bootstrap | 34.7 |
| 10 | Mean-reversion (OU) | 61.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **79** | 87 | 0.48 | 52 | 27% | 14.6 |
| 2 | GBM + Student-t | 51 | **79** | 88 | 0.46 | 55 | 26% | 17.5 |
| 3 | GBM (normal) | 51 | **80** | 88 | 0.46 | 53 | 27% | 17.7 |
| 4 | GARCH(1,1)-lite | 51 | **80** | 89 | 0.46 | 53 | 26% | 18.1 |
| 5 | EWMA vol, zero drift (t) | 52 | **80** | 88 | 0.45 | 59 | 26% | 19.7 |
| 6 | Shipped engine (forecast.js) _(shipped)_ | 57 | **81** | 89 | 0.46 | 57 | — | 20.6 |
| 7 | Ensemble (GBM-t + bootstraps) | 53 | **82** | 92 | 0.45 | 49 | 28% | 22.5 |
| 8 | Block bootstrap | 52 | **81** | 91 | 0.43 | 44 | 28% | 27.2 |
| 9 | Bootstrap (IID) | 56 | **83** | 92 | 0.44 | 49 | 29% | 27.6 |
| 10 | Mean-reversion (OU) | 51 | **75** | 82 | 0.41 | 46 | 27% | 36.6 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 52 | **81** | 89 | 0.45 | 56 | 39% | 21.6 |
| 2 | GBM + Student-t | 49 | **80** | 88 | 0.44 | 53 | 37% | 21.7 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 56 | **81** | 89 | 0.45 | 59 | — | 22.7 |
| 4 | Momentum | 42 | **76** | 87 | 0.47 | 49 | 38% | 22.8 |
| 5 | GARCH(1,1)-lite | 49 | **82** | 90 | 0.45 | 53 | 37% | 24.4 |
| 6 | EWMA vol, zero drift (t) | 53 | **80** | 88 | 0.42 | 54 | 38% | 26.8 |
| 7 | Ensemble (GBM-t + bootstraps) | 52 | **83** | 90 | 0.43 | 53 | 39% | 27.2 |
| 8 | Block bootstrap | 51 | **82** | 90 | 0.42 | 46 | 39% | 29.9 |
| 9 | Bootstrap (IID) | 54 | **83** | 91 | 0.42 | 46 | 42% | 31.1 |
| 10 | Mean-reversion (OU) | 42 | **69** | 78 | 0.39 | 41 | 36% | 54.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 61 | **83** | 90 | 0.44 | 59 | — | 33.8 |
| 2 | Momentum | 44 | **68** | 79 | 0.47 | 53 | 53% | 36.6 |
| 3 | GBM + Student-t | 50 | **75** | 82 | 0.41 | 57 | 55% | 37.5 |
| 4 | Ensemble (GBM-t + bootstraps) | 57 | **82** | 90 | 0.40 | 53 | 69% | 37.8 |
| 5 | GBM (normal) | 52 | **75** | 82 | 0.42 | 58 | 55% | 38.5 |
| 6 | GARCH(1,1)-lite | 50 | **75** | 85 | 0.41 | 57 | 55% | 39.1 |
| 7 | EWMA vol, zero drift (t) | 55 | **77** | 83 | 0.38 | 67 | 56% | 41.7 |
| 8 | Bootstrap (IID) | 52 | **79** | 87 | 0.38 | 48 | 61% | 42.7 |
| 9 | Block bootstrap | 50 | **74** | 85 | 0.38 | 50 | 56% | 47.0 |
| 10 | Mean-reversion (OU) | 38 | **56** | 64 | 0.35 | 43 | 47% | 93.9 |

## Winner consistency — `momentum` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 74% / 0.48 / 50% / 30.5 | 73% / 0.49 / 45% / 33.1 | 59% / 0.46 / 46% / 62 |
| ETH | 84% / 0.47 / 44% / 13 | 76% / 0.46 / 49% / 19.5 | 72% / 0.45 / 54% / 37.2 |
| SOL | 78% / 0.49 / 52% / 17.9 | 73% / 0.46 / 47% / 28.1 | 72% / 0.45 / 57% / 34.2 |
| BNB | 73% / 0.49 / 48% / 15.5 | 74% / 0.49 / 34% / 20.6 | 56% / 0.46 / 33% / 62.7 |
| XRP | 80% / 0.48 / 48% / 7.4 | 84% / 0.47 / 47% / 15.2 | 80% / 0.47 / 48% / 12.1 |
| SUI | 78% / 0.48 / 48% / 16.3 | 71% / 0.49 / 41% / 27.2 | 72% / 0.49 / 52% / 27.7 |
| AVAX | 82% / 0.49 / 56% / 7.1 | 80% / 0.48 / 55% / 14 | 74% / 0.47 / 59% / 25.2 |
| LINK | 84% / 0.48 / 48% / 16.6 | 78% / 0.47 / 41% / 18.3 | 72% / 0.47 / 52% / 20.2 |
| INJ | 80% / 0.5 / 64% / 4.7 | 84% / 0.51 / 53% / 24.9 | 65% / 0.54 / 63% / 38 |
| OP | 76% / 0.46 / 50% / 13.8 | 73% / 0.45 / 57% / 29.7 | 67% / 0.47 / 65% / 29.9 |
| ARB | 78% / 0.47 / 58% / 18.7 | 76% / 0.45 / 67% / 24.5 | 67% / 0.45 / 65% / 36.6 |
| DOGE | 82% / 0.49 / 60% / 13.6 | 76% / 0.48 / 49% / 13.1 | 80% / 0.5 / 54% / 12.9 |
| TIA | 76% / 0.49 / 50% / 19.1 | 69% / 0.48 / 47% / 36.5 | 74% / 0.5 / 57% / 20.2 |
| APT | 76% / 0.49 / 50% / 10 | 76% / 0.46 / 47% / 15 | 50% / 0.45 / 46% / 87 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
