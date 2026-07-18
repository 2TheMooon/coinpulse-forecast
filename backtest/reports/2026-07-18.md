# CoinPulse Strategy Tournament — 2026-07-18

_Generated 2026-07-18T15:28:05.004Z · 14 coins · 300 samples/window · 103.3s_

## 🏆 Recommendation: **SWITCH → `momentum`**

> Momentum beats the shipped engine by 5.4 score points (lower=better).

Overall best: **momentum** · by horizon: 7d→`momentum` · 14d→`momentum` · 30d→`gbm_t`

> Calibration target: 80% band contains ~80% of realized prices, mean PIT ~0.50.
> `score` = |cov50−50| + |cov80−80| + |cov90−90| + 200·|PIT−0.5|  (lower = better).

## Overall ranking (mean score across horizons)

| Rank | Strategy | mean score |
|---|---|---|
| 1 | Momentum | 22.5 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 27.9 |
| 3 | EWMA vol, zero drift (t) | 28.4 |
| 4 | GBM + Student-t | 28.6 |
| 5 | GBM (normal) | 30.0 |
| 6 | Block bootstrap | 30.6 |
| 7 | GARCH(1,1)-lite | 31.1 |
| 8 | Mean-reversion (OU) | 32.9 |
| 9 | Ensemble (GBM-t + bootstraps) | 34.0 |
| 10 | Bootstrap (IID) | 35.8 |

## 7-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 51 | **80** | 90 | 0.51 | 48 | 24% | 16.1 |
| 2 | Shipped engine (forecast.js) _(shipped)_ | 51 | **76** | 86 | 0.54 | 55 | — | 21.6 |
| 3 | EWMA vol, zero drift (t) | 55 | **85** | 91 | 0.50 | 57 | 23% | 22.4 |
| 4 | GBM + Student-t | 52 | **83** | 91 | 0.54 | 53 | 23% | 25.1 |
| 5 | GARCH(1,1)-lite | 53 | **85** | 93 | 0.54 | 51 | 23% | 25.4 |
| 6 | GBM (normal) | 56 | **86** | 92 | 0.53 | 53 | 24% | 25.7 |
| 7 | Block bootstrap | 59 | **89** | 94 | 0.52 | 48 | 26% | 26.9 |
| 8 | Ensemble (GBM-t + bootstraps) | 57 | **88** | 95 | 0.53 | 51 | 25% | 29.3 |
| 9 | Mean-reversion (OU) | 64 | **87** | 93 | 0.49 | 51 | 26% | 32.8 |
| 10 | Bootstrap (IID) | 61 | **89** | 95 | 0.53 | 50 | 27% | 34.0 |

## 14-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | Momentum | 49 | **78** | 87 | 0.52 | 46 | 34% | 15.4 |
| 2 | EWMA vol, zero drift (t) | 58 | **83** | 90 | 0.50 | 49 | 34% | 23.3 |
| 3 | Shipped engine (forecast.js) _(shipped)_ | 53 | **80** | 88 | 0.57 | 51 | — | 25.2 |
| 4 | GBM + Student-t | 54 | **81** | 89 | 0.56 | 52 | 33% | 26.1 |
| 5 | GBM (normal) | 56 | **82** | 90 | 0.56 | 51 | 34% | 27.5 |
| 6 | Mean-reversion (OU) | 57 | **85** | 91 | 0.50 | 53 | 35% | 28.0 |
| 7 | GARCH(1,1)-lite | 54 | **83** | 93 | 0.56 | 51 | 33% | 29.8 |
| 8 | Block bootstrap | 58 | **87** | 95 | 0.53 | 48 | 36% | 30.2 |
| 9 | Ensemble (GBM-t + bootstraps) | 59 | **86** | 95 | 0.54 | 51 | 36% | 31.5 |
| 10 | Bootstrap (IID) | 62 | **90** | 95 | 0.53 | 49 | 39% | 35.7 |

## 30-day horizon

| Rank | Strategy | cov50 | cov80 | cov90 | mean PIT | dir % | width | score |
|---|---|---|---|---|---|---|---|---|
| 1 | GBM + Student-t | 49 | **77** | 86 | 0.56 | 54 | 47% | 34.6 |
| 2 | Block bootstrap | 57 | **84** | 93 | 0.53 | 50 | 52% | 34.7 |
| 3 | Momentum | 44 | **69** | 80 | 0.52 | 47 | 49% | 36.1 |
| 4 | GBM (normal) | 51 | **77** | 86 | 0.57 | 54 | 47% | 36.8 |
| 5 | Shipped engine (forecast.js) _(shipped)_ | 52 | **81** | 88 | 0.57 | 54 | — | 36.9 |
| 6 | Mean-reversion (OU) | 53 | **75** | 84 | 0.48 | 53 | 44% | 37.8 |
| 7 | Bootstrap (IID) | 58 | **86** | 94 | 0.54 | 53 | 55% | 37.8 |
| 8 | GARCH(1,1)-lite | 51 | **82** | 92 | 0.57 | 54 | 49% | 38.2 |
| 9 | EWMA vol, zero drift (t) | 62 | **78** | 85 | 0.48 | 53 | 50% | 39.5 |
| 10 | Ensemble (GBM-t + bootstraps) | 62 | **90** | 97 | 0.54 | 53 | 62% | 41.2 |

## Winner consistency — `momentum` per coin (cov80 / PIT / dir / score)

| Coin | 7d | 14d | 30d |
|---|---|---|---|
| BTC | 80% / 0.5 / 52% / 0.1 | 72% / 0.51 / 47% / 13.8 | 63% / 0.49 / 52% / 49.2 |
| ETH | 82% / 0.5 / 54% / 10.5 | 81% / 0.51 / 53% / 9.4 | 70% / 0.49 / 44% / 33.9 |
| SOL | 80% / 0.49 / 44% / 8.7 | 72% / 0.52 / 32% / 17.4 | 78% / 0.52 / 37% / 16.7 |
| BNB | 90% / 0.5 / 44% / 16.6 | 83% / 0.51 / 36% / 8.9 | 71% / 0.49 / 40% / 17.9 |
| XRP | 80% / 0.48 / 38% / 9.2 | 79% / 0.49 / 40% / 5.4 | 76% / 0.46 / 52% / 18.7 |
| SUI | 80% / 0.51 / 46% / 7.1 | 81% / 0.55 / 34% / 14.6 | 78% / 0.55 / 44% / 19.1 |
| AVAX | 84% / 0.48 / 48% / 19.2 | 87% / 0.49 / 40% / 10 | 65% / 0.48 / 46% / 41.5 |
| LINK | 80% / 0.51 / 50% / 3.9 | 72% / 0.52 / 38% / 16.8 | 81% / 0.51 / 40% / 7.4 |
| INJ | 84% / 0.57 / 56% / 27 | 83% / 0.59 / 60% / 21.8 | 62% / 0.62 / 57% / 72.9 |
| OP | 74% / 0.52 / 48% / 24.4 | 77% / 0.54 / 51% / 17.7 | 71% / 0.59 / 62% / 34.1 |
| ARB | 64% / 0.52 / 46% / 45.5 | 74% / 0.52 / 49% / 22.7 | 57% / 0.54 / 52% / 62.3 |
| DOGE | 82% / 0.47 / 54% / 19 | 83% / 0.48 / 62% / 11.8 | 71% / 0.48 / 57% / 25 |
| TIA | 82% / 0.53 / 42% / 17 | 77% / 0.55 / 43% / 21.3 | 67% / 0.59 / 37% / 45 |
| APT | 78% / 0.53 / 48% / 16.9 | 74% / 0.54 / 55% / 23.4 | 59% / 0.49 / 41% / 61.2 |

Coins: BTC (binance), ETH (binance), SOL (binance), BNB (binance), XRP (binance), SUI (binance), AVAX (binance), LINK (binance), INJ (binance), OP (binance), ARB (binance), DOGE (binance), TIA (binance), APT (binance)
