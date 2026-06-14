# CoinPulse Strategy Tournament — 2026-06-14

_Generated 2026-06-14T11:33:53.683Z · 14 coins · 300 samples/window · 10.8s_

## 🏆 Recommendation: **KEEP → `live_engine`**

> Best challenger (Momentum) does not beat the shipped engine by the required 3-point margin.

Overall best: **momentum** · by horizon: 7d→`momentum` · 14d→`live_engine` · 30d→`gbm_normal`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Momentum | 28.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 29.1 |
| 3 | GBM (normal) | 29.7 |
| 4 | GBM + Student-t | 30.0 |
| 5 | GARCH(1,1)-lite | 30.1 |
| 6 | EWMA vol, zero drift (t) | 31.4 |
| 7 | Ensemble (GBM-t + bootstraps) | 32.1 |
| 8 | Bootstrap (IID) | 37.1 |
| 9 | Block bootstrap | 37.2 |
| 10 | Mean-reversion (OU) | 59.5 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 53 | **78** | 88 | 0.47 | 50 | 27% | 18.0 |
| 2 | GBM + Student-t | 57 | **80** | 88 | 0.45 | 60 | 26% | 24.3 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 59 | **84** | 91 | 0.46 | 57 | — | 25.1 |
| 4 | GARCH(1,1)-lite | 58 | **81** | 89 | 0.44 | 60 | 26% | 26.1 |
| 5 | GBM (normal) | 59 | **82** | 90 | 0.45 | 58 | 27% | 26.3 |
| 6 | EWMA vol, zero drift (t) | 57 | **80** | 88 | 0.44 | 56 | 27% | 26.7 |
| 7 | Ensemble (GBM-t + bootstraps) | 60 | **85** | 92 | 0.43 | 59 | 28% | 30.6 |
| 8 | Block bootstrap | 60 | **85** | 91 | 0.43 | 54 | 28% | 32.2 |
| 9 | Mean-reversion (OU) | 54 | **78** | 87 | 0.40 | 49 | 28% | 34.3 |
| 10 | Bootstrap (IID) | 61 | **87** | 92 | 0.42 | 57 | 29% | 35.2 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 58 | **83** | 90 | 0.45 | 59 | — | 25.7 |
| 2 | GARCH(1,1)-lite | 55 | **80** | 86 | 0.44 | 58 | 37% | 26.7 |
| 3 | Momentum | 45 | **73** | 84 | 0.47 | 49 | 38% | 27.3 |
| 4 | GBM + Student-t | 56 | **77** | 86 | 0.44 | 59 | 37% | 27.9 |
| 5 | EWMA vol, zero drift (t) | 55 | **79** | 85 | 0.43 | 52 | 37% | 28.2 |
| 6 | GBM (normal) | 58 | **78** | 86 | 0.45 | 61 | 38% | 28.3 |
| 7 | Ensemble (GBM-t + bootstraps) | 57 | **80** | 88 | 0.42 | 58 | 39% | 30.3 |
| 8 | Block bootstrap | 56 | **80** | 87 | 0.41 | 56 | 38% | 33.9 |
| 9 | Bootstrap (IID) | 59 | **82** | 90 | 0.42 | 50 | 41% | 35.8 |
| 10 | Mean-reversion (OU) | 46 | **69** | 80 | 0.39 | 46 | 37% | 50.8 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM (normal) | 52 | **75** | 83 | 0.43 | 59 | 56% | 34.3 |
| 2 | Ensemble (GBM-t + bootstraps) | 59 | **82** | 90 | 0.41 | 56 | 69% | 35.5 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 65 | **86** | 92 | 0.45 | 59 | — | 36.5 |
| 4 | GARCH(1,1)-lite | 50 | **74** | 84 | 0.42 | 59 | 55% | 37.4 |
| 5 | GBM + Student-t | 52 | **73** | 81 | 0.42 | 58 | 55% | 37.8 |
| 6 | EWMA vol, zero drift (t) | 55 | **76** | 83 | 0.40 | 62 | 56% | 39.3 |
| 7 | Momentum | 44 | **67** | 75 | 0.49 | 53 | 53% | 40.2 |
| 8 | Bootstrap (IID) | 51 | **76** | 86 | 0.39 | 49 | 61% | 40.3 |
| 9 | Block bootstrap | 49 | **74** | 83 | 0.39 | 50 | 56% | 45.5 |
| 10 | Mean-reversion (OU) | 39 | **55** | 63 | 0.35 | 42 | 47% | 93.4 |

## Winner consistency — `momentum` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 76% / 0.45 / 54% / 21 | 71% / 0.45 / 49% / 40.4 | 63% / 0.47 / 39% / 52.1 |
| ETH | 82% / 0.46 / 50% / 22.9 | 73% / 0.45 / 39% / 26.8 | 70% / 0.45 / 50% / 50.5 |
| SOL | 80% / 0.48 / 46% / 20.3 | 71% / 0.47 / 49% / 29.6 | 67% / 0.48 / 54% / 34.4 |
| BNB | 72% / 0.48 / 48% / 17.5 | 75% / 0.48 / 42% / 24.8 | 59% / 0.48 / 35% / 54.7 |
| XRP | 82% / 0.45 / 46% / 14.5 | 69% / 0.44 / 49% / 29.7 | 74% / 0.47 / 57% / 22 |
| SUI | 78% / 0.45 / 48% / 21.2 | 67% / 0.47 / 39% / 37.9 | 70% / 0.51 / 59% / 28.5 |
| AVAX | 84% / 0.46 / 60% / 15.1 | 73% / 0.47 / 55% / 28 | 70% / 0.51 / 57% / 30.2 |
| LINK | 82% / 0.46 / 46% / 21.7 | 78% / 0.46 / 43% / 20.1 | 72% / 0.47 / 52% / 30.7 |
| INJ | 82% / 0.5 / 52% / 12.7 | 71% / 0.52 / 53% / 18.1 | 70% / 0.55 / 63% / 42.5 |
| OP | 78% / 0.48 / 46% / 11.7 | 69% / 0.48 / 45% / 31 | 65% / 0.48 / 59% / 36.3 |
| ARB | 80% / 0.46 / 56% / 11.6 | 73% / 0.45 / 57% / 20.2 | 63% / 0.45 / 61% / 48.8 |
| DOGE | 74% / 0.46 / 50% / 24.8 | 78% / 0.47 / 61% / 14.1 | 76% / 0.52 / 57% / 18.9 |
| TIA | 76% / 0.48 / 54% / 15.9 | 73% / 0.49 / 59% / 21.6 | 67% / 0.51 / 61% / 29 |
| APT | 72% / 0.47 / 48% / 21.6 | 71% / 0.47 / 45% / 40.1 | 52% / 0.45 / 43% / 81.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
