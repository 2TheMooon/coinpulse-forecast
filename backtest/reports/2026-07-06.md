# CoinPulse Strategy Tournament — 2026-07-06

_Generated 2026-07-06T12:53:31.528Z · 14 coins · 300 samples/window · 13.0s_

## 🏆 Recommendation: **SWITCH → `gbm_t`**

> GBM + Student-t beats the shipped engine by 3.4 score points (lower=better).

Overall best: **gbm_t** · by horizon: 7d→`gbm_t` · 14d→`gbm_t` · 30d→`live_engine`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | GBM + Student-t | 19.4 |
| 2 | GBM (normal) | 21.2 |
| 3 | GARCH(1,1)-lite | 21.8 |
| 4 | Shipped engine (forecast.js) _(shipped)_ | 22.8 |
| 5 | Momentum | 23.6 |
| 6 | Ensemble (GBM-t + bootstraps) | 25.2 |
| 7 | Block bootstrap | 26.5 |
| 8 | Bootstrap (IID) | 30.9 |
| 9 | EWMA vol, zero drift (t) | 31.1 |
| 10 | Mean-reversion (OU) | 52.3 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 49 | **79** | 89 | 0.49 | 61 | 26% | 11.7 |
| 2 | Momentum | 47 | **76** | 89 | 0.48 | 53 | 27% | 14.7 |
| 3 | GBM (normal) | 53 | **80** | 91 | 0.48 | 62 | 27% | 15.6 |
| 4 | GARCH(1,1)-lite | 50 | **80** | 91 | 0.48 | 60 | 26% | 17.3 |
| 5 | EWMA vol, zero drift (t) | 50 | **79** | 90 | 0.45 | 55 | 26% | 17.5 |
| 6 | Block bootstrap | 53 | **83** | 92 | 0.47 | 56 | 26% | 17.6 |
| 7 | Ensemble (GBM-t + bootstraps) | 53 | **83** | 93 | 0.47 | 58 | 27% | 18.8 |
| 8 | Shipped engine (forecast.js) _(shipped)_ | 48 | **73** | 85 | 0.48 | 60 | — | 21.6 |
| 9 | Bootstrap (IID) | 57 | **87** | 94 | 0.47 | 55 | 29% | 24.9 |
| 10 | Mean-reversion (OU) | 52 | **81** | 88 | 0.43 | 46 | 28% | 27.1 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 52 | **81** | 88 | 0.47 | 62 | 36% | 17.1 |
| 2 | Momentum | 47 | **77** | 88 | 0.47 | 55 | 37% | 18.3 |
| 3 | GARCH(1,1)-lite | 52 | **81** | 90 | 0.47 | 62 | 37% | 18.7 |
| 4 | GBM (normal) | 57 | **83** | 89 | 0.47 | 62 | 38% | 19.6 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 51 | **78** | 85 | 0.48 | 63 | — | 20.1 |
| 6 | Ensemble (GBM-t + bootstraps) | 53 | **83** | 91 | 0.46 | 61 | 38% | 21.4 |
| 7 | Block bootstrap | 52 | **83** | 92 | 0.44 | 59 | 37% | 25.1 |
| 8 | EWMA vol, zero drift (t) | 52 | **80** | 88 | 0.42 | 61 | 38% | 27.8 |
| 9 | Bootstrap (IID) | 57 | **87** | 93 | 0.44 | 59 | 41% | 32.1 |
| 10 | Mean-reversion (OU) | 47 | **72** | 82 | 0.39 | 48 | 37% | 45.9 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Shipped engine (forecast.js) _(shipped)_ | 54 | **79** | 88 | 0.46 | 71 | — | 26.7 |
| 2 | GBM (normal) | 52 | **77** | 86 | 0.45 | 71 | 53% | 28.3 |
| 3 | GARCH(1,1)-lite | 51 | **80** | 89 | 0.45 | 70 | 53% | 29.3 |
| 4 | GBM + Student-t | 50 | **75** | 85 | 0.45 | 70 | 52% | 29.4 |
| 5 | Ensemble (GBM-t + bootstraps) | 59 | **85** | 93 | 0.43 | 69 | 66% | 35.3 |
| 6 | Bootstrap (IID) | 57 | **82** | 90 | 0.41 | 68 | 59% | 35.6 |
| 7 | Block bootstrap | 51 | **76** | 85 | 0.41 | 67 | 52% | 36.7 |
| 8 | Momentum | 41 | **70** | 80 | 0.46 | 56 | 52% | 37.8 |
| 9 | EWMA vol, zero drift (t) | 53 | **73** | 82 | 0.36 | 74 | 56% | 47.8 |
| 10 | Mean-reversion (OU) | 42 | **61** | 68 | 0.33 | 48 | 48% | 83.9 |

## Winner consistency — `gbm_t` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 76% / 0.49 / 60% / 12.2 | 78% / 0.47 / 55% / 21.7 | 67% / 0.42 / 70% / 44.4 |
| ETH | 78% / 0.47 / 60% / 12.5 | 86% / 0.43 / 51% / 22.3 | 67% / 0.39 / 65% / 46.7 |
| SOL | 72% / 0.49 / 66% / 12.8 | 82% / 0.47 / 55% / 13.8 | 78% / 0.42 / 67% / 29.7 |
| BNB | 73% / 0.52 / 63% / 15.2 | 78% / 0.52 / 60% / 7.8 | 83% / 0.52 / 48% / 17.4 |
| XRP | 84% / 0.5 / 62% / 4.1 | 84% / 0.48 / 63% / 22.9 | 85% / 0.44 / 74% / 29.4 |
| SUI | 82% / 0.49 / 62% / 7.3 | 73% / 0.48 / 67% / 18.4 | 76% / 0.45 / 70% / 16.4 |
| AVAX | 80% / 0.46 / 68% / 8.8 | 80% / 0.43 / 63% / 23.1 | 76% / 0.41 / 70% / 34.4 |
| LINK | 84% / 0.47 / 62% / 14.6 | 84% / 0.45 / 59% / 23.3 | 78% / 0.41 / 70% / 24.2 |
| INJ | 80% / 0.54 / 58% / 10.3 | 80% / 0.51 / 61% / 6 | 74% / 0.52 / 72% / 22.8 |
| OP | 80% / 0.5 / 58% / 4.4 | 78% / 0.47 / 65% / 13.9 | 72% / 0.45 / 78% / 26.9 |
| ARB | 70% / 0.47 / 62% / 28.9 | 78% / 0.43 / 69% / 21.1 | 70% / 0.41 / 78% / 48.1 |
| DOGE | 80% / 0.48 / 58% / 8.7 | 82% / 0.45 / 67% / 18.6 | 78% / 0.45 / 76% / 22.6 |
| TIA | 82% / 0.53 / 54% / 12.5 | 86% / 0.52 / 61% / 12.3 | 80% / 0.52 / 72% / 7.2 |
| APT | 78% / 0.48 / 58% / 11.5 | 82% / 0.46 / 69% / 14.3 | 70% / 0.42 / 76% / 40.9 |

Coins: BTC (coinbase), ETH (coinbase), SOL (coinbase), BNB (coinbase), XRP (coinbase), SUI (coinbase), AVAX (coinbase), LINK (coinbase), INJ (coinbase), OP (coinbase), ARB (coinbase), DOGE (coinbase), TIA (coinbase), APT (coinbase)
