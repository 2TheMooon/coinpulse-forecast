/*
 * CoinPulse Data Layer
 * --------------------
 * Loads live daily OHLCV candles + spot quotes from CryptoCompare's keyless,
 * CORS-enabled public API. If anything fails (offline, rate limit, file://
 * quirks) it falls back to a deterministic synthetic series so the tool is
 * ALWAYS fully functional — never a blank screen.
 *
 * Exposed as the global `CoinData`.
 */
(function (global) {
  "use strict";

  // Tracked universe. apiSym is the CryptoCompare ticker.
  var COINS = [
    { symbol: "BTC", name: "Bitcoin", color: "#f7931a" },
    { symbol: "ETH", name: "Ethereum", color: "#7b9cff" },
    { symbol: "SOL", name: "Solana", color: "#14f195" },
    { symbol: "BNB", name: "BNB", color: "#f3ba2f" },
    { symbol: "XRP", name: "XRP", color: "#9fb3c8" },
    { symbol: "SUI", name: "Sui", color: "#4da2ff" },
    { symbol: "AVAX", name: "Avalanche", color: "#e84142" },
    { symbol: "LINK", name: "Chainlink", color: "#2a5ada" },
    { symbol: "INJ", name: "Injective", color: "#00d2ff" },
    { symbol: "OP", name: "Optimism", color: "#ff5a5f" },
    { symbol: "ARB", name: "Arbitrum", color: "#28a0f0" },
    { symbol: "DOGE", name: "Dogecoin", color: "#c2a633" },
    { symbol: "TIA", name: "Celestia", color: "#7e1bcc" },
    { symbol: "APT", name: "Aptos", color: "#06d6a0" },
  ];

  var HISTORY_DAYS = 200;
  var BASE = "https://min-api.cryptocompare.com/data";
  var REQUEST_TIMEOUT = 9000;

  function fetchJson(url) {
    var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timer = controller
      ? setTimeout(function () {
          controller.abort();
        }, REQUEST_TIMEOUT)
      : null;
    var opts = controller ? { signal: controller.signal } : {};
    return fetch(url, opts)
      .then(function (res) {
        if (timer) clearTimeout(timer);
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .catch(function (err) {
        if (timer) clearTimeout(timer);
        throw err;
      });
  }

  // ---- deterministic synthetic fallback ----------------------------------

  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function hashSeed(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i += 1) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function gauss(rng) {
    var u = 0;
    var v = 0;
    while (u === 0) u = rng();
    while (v === 0) v = rng();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }

  // Reasonable per-coin starting prices for the demo layer.
  var DEMO_BASE_PRICE = {
    BTC: 67000,
    ETH: 3500,
    SOL: 165,
    BNB: 600,
    XRP: 0.62,
    SUI: 2.1,
    AVAX: 38,
    LINK: 18,
    INJ: 32,
    OP: 2.7,
    ARB: 1.2,
    DOGE: 0.16,
    TIA: 9.5,
    APT: 11,
  };

  function buildSyntheticCandles(coin) {
    var seed = hashSeed(coin.symbol + "-cp");
    var rng = mulberry32(seed);
    var price = DEMO_BASE_PRICE[coin.symbol] || 10;
    // Distinct drift / vol per coin so the demo feels varied but stable.
    var drift = (rng() - 0.45) * 0.004; // slight per-coin bias
    var vol = 0.025 + rng() * 0.04;
    var candles = [];
    var nowSec = 1700000000; // fixed epoch keeps the demo deterministic
    var daySec = 86400;
    var start = nowSec - HISTORY_DAYS * daySec;
    // walk the price backward-friendly: generate forward from a start price
    var startPrice = price / Math.exp(drift * HISTORY_DAYS);
    var cur = startPrice;
    for (var d = 0; d < HISTORY_DAYS; d += 1) {
      var shock = gauss(rng) * vol;
      // occasional regime bursts
      if (rng() > 0.97) shock *= 2.4;
      var open = cur;
      var close = cur * Math.exp(drift + shock);
      var hi = Math.max(open, close) * (1 + Math.abs(gauss(rng)) * vol * 0.6);
      var lo = Math.min(open, close) * (1 - Math.abs(gauss(rng)) * vol * 0.6);
      var baseVol = (DEMO_BASE_PRICE[coin.symbol] || 10) * 1e6;
      var volume = baseVol * (0.6 + rng() * 1.4) * (1 + Math.abs(shock) * 8);
      candles.push({
        time: start + d * daySec,
        open: open,
        high: hi,
        low: lo,
        close: close,
        volume: volume,
      });
      cur = close;
    }
    return candles;
  }

  function syntheticMeta(coin, candles) {
    var last = candles[candles.length - 1];
    var prev = candles[candles.length - 2] || last;
    var change = ((last.close - prev.close) / prev.close) * 100;
    return {
      price: last.close,
      change24: change,
      volume24: last.volume,
      high24: last.high,
      low24: last.low,
      open24: last.open,
      mktcap: 0,
    };
  }

  function demoCoin(coin) {
    var candles = buildSyntheticCandles(coin);
    return {
      symbol: coin.symbol,
      name: coin.name,
      color: coin.color,
      candles: candles,
      meta: syntheticMeta(coin, candles),
      live: false,
    };
  }

  function demoAll() {
    return COINS.map(demoCoin);
  }

  // ---- live loaders -------------------------------------------------------

  function parseHistory(payload) {
    if (!payload || payload.Response !== "Success" || !payload.Data || !payload.Data.Data) {
      return null;
    }
    var rows = payload.Data.Data;
    var candles = [];
    for (var i = 0; i < rows.length; i += 1) {
      var r = rows[i];
      var close = Number(r.close);
      if (!Number.isFinite(close) || close <= 0) continue;
      candles.push({
        time: r.time,
        open: Number(r.open) || close,
        high: Number(r.high) || close,
        low: Number(r.low) || close,
        close: close,
        volume: Number(r.volumeto) || 0,
      });
    }
    // CryptoCompare sometimes leads with zero-price padding; trim those.
    candles = candles.filter(function (c) {
      return c.close > 0;
    });
    return candles.length >= 30 ? candles : null;
  }

  function loadHistory(coin) {
    var url =
      BASE +
      "/v2/histoday?fsym=" +
      encodeURIComponent(coin.symbol) +
      "&tsym=USD&limit=" +
      HISTORY_DAYS;
    return fetchJson(url).then(parseHistory);
  }

  function loadQuotes() {
    var syms = COINS.map(function (c) {
      return c.symbol;
    }).join(",");
    var url = BASE + "/pricemultifull?fsyms=" + syms + "&tsyms=USD";
    return fetchJson(url).then(function (data) {
      if (!data || (data.Response === "Error")) throw new Error(data && data.Message ? data.Message : "quote error");
      return data.RAW || {};
    });
  }

  function metaFromRaw(raw) {
    if (!raw) return null;
    var price = Number(raw.PRICE);
    if (!Number.isFinite(price) || price <= 0) return null; // avoid quote/price desync
    return {
      price: price,
      change24: Number(raw.CHANGEPCT24HOUR) || 0,
      volume24: Number(raw.VOLUME24HOURTO) || Number(raw.TOPTIERVOLUME24HOURTO) || 0,
      high24: Number(raw.HIGH24HOUR) || 0,
      low24: Number(raw.LOW24HOUR) || 0,
      open24: Number(raw.OPEN24HOUR) || 0,
      mktcap: Number(raw.MKTCAP) || 0,
    };
  }

  // Patch the last historical candle with the live spot price so the forecast
  // starts exactly from "now".
  function applyLivePrice(candles, meta) {
    if (!candles || !candles.length || !meta || !Number.isFinite(meta.price) || meta.price <= 0) {
      return candles;
    }
    // Patch ONLY the in-progress bar's close with the live spot, and extend its
    // own high/low to include spot. We intentionally do NOT overwrite the bar's
    // high/low/volume with 24h rolling aggregates — those are different units
    // and would distort ATR / volatility / volume-ratio estimates.
    var last = candles[candles.length - 1];
    last.high = Math.max(last.high, meta.price);
    last.low = Math.min(last.low, meta.price);
    last.close = meta.price;
    return candles;
  }

  // ---- Binance fallback (keyless, CORS, very reliable) -------------------

  function binanceSymbol(sym) {
    return sym + "USDT";
  }

  function parseBinanceKlines(rows) {
    if (!Array.isArray(rows)) return null;
    var candles = [];
    for (var i = 0; i < rows.length; i += 1) {
      var r = rows[i];
      var close = Number(r[4]);
      if (!Number.isFinite(close) || close <= 0) continue;
      candles.push({
        time: Math.floor(Number(r[0]) / 1000),
        open: Number(r[1]) || close,
        high: Number(r[2]) || close,
        low: Number(r[3]) || close,
        close: close,
        volume: Number(r[7]) || Number(r[5]) || 0, // quote volume (USDT) preferred
      });
    }
    return candles.length >= 30 ? candles : null;
  }

  function loadBinanceHistory(symbol) {
    var url =
      "https://api.binance.com/api/v3/klines?symbol=" +
      binanceSymbol(symbol) +
      "&interval=1d&limit=" +
      HISTORY_DAYS;
    return fetchJson(url).then(parseBinanceKlines);
  }

  function metaFromBinanceTicker(t) {
    var price = Number(t && t.lastPrice);
    if (!Number.isFinite(price) || price <= 0) return null;
    return {
      price: price,
      change24: Number(t.priceChangePercent) || 0,
      volume24: Number(t.quoteVolume) || 0,
      high24: Number(t.highPrice) || 0,
      low24: Number(t.lowPrice) || 0,
      open24: Number(t.openPrice) || 0,
      mktcap: 0,
    };
  }

  function loadBinanceTicker1(symbol) {
    var url = "https://api.binance.com/api/v3/ticker/24hr?symbol=" + binanceSymbol(symbol);
    return fetchJson(url).then(function (t) {
      return metaFromBinanceTicker(t);
    });
  }

  function loadBinanceTickers(symbols) {
    var jsonArr = JSON.stringify(symbols.map(binanceSymbol));
    var url = "https://api.binance.com/api/v3/ticker/24hr?symbols=" + encodeURIComponent(jsonArr);
    return fetchJson(url)
      .then(function (arr) {
        var map = {};
        if (Array.isArray(arr)) {
          arr.forEach(function (t) {
            var sym = String(t.symbol || "").replace(/USDT$/, "");
            var meta = metaFromBinanceTicker(t);
            if (meta) map[sym] = meta;
          });
        }
        return map;
      })
      .catch(function () {
        // Batch fails wholesale if any one pair is invalid — fall back to
        // per-symbol requests so the good ones still resolve.
        return Promise.all(
          symbols.map(function (s) {
            return loadBinanceTicker1(s).catch(function () {
              return null;
            });
          })
        ).then(function (list) {
          var map = {};
          list.forEach(function (meta, i) {
            if (meta) map[symbols[i]] = meta;
          });
          return map;
        });
      });
  }

  function liveCoin(coin, candles, meta, src) {
    if (meta) applyLivePrice(candles, meta);
    if (!meta) meta = syntheticMeta(coin, candles);
    return {
      symbol: coin.symbol,
      name: coin.name,
      color: coin.color,
      candles: candles,
      meta: meta,
      live: true,
      src: src,
    };
  }

  /*
   * loadAll() resolves to { source, coins } where source is "live", "partial"
   * or "demo". Tries CryptoCompare first, fills any gaps from Binance, then
   * synthetic. Never rejects.
   */
  function loadAll() {
    var quotesPromise = loadQuotes().catch(function () {
      return null;
    });
    var historyPromises = COINS.map(function (coin) {
      return loadHistory(coin).catch(function () {
        return null;
      });
    });

    return Promise.all([quotesPromise, Promise.all(historyPromises)])
      .then(function (results) {
        var raw = results[0];
        var histories = results[1];
        var coins = new Array(COINS.length);
        var missing = [];

        COINS.forEach(function (coin, idx) {
          var candles = histories[idx];
          var meta = raw ? metaFromRaw(raw[coin.symbol] && raw[coin.symbol].USD) : null;
          if (candles && candles.length >= 30) {
            coins[idx] = liveCoin(coin, candles, meta, "cryptocompare");
          } else {
            missing.push(idx);
          }
        });

        if (!missing.length) return coins;

        // Try Binance for the coins CryptoCompare could not provide.
        var missingSymbols = missing.map(function (idx) {
          return COINS[idx].symbol;
        });
        var tickerPromise = loadBinanceTickers(missingSymbols).catch(function () {
          return {};
        });
        var klinePromises = missing.map(function (idx) {
          return loadBinanceHistory(COINS[idx].symbol).catch(function () {
            return null;
          });
        });

        return Promise.all([tickerPromise, Promise.all(klinePromises)]).then(function (bn) {
          var tickers = bn[0];
          var klines = bn[1];
          missing.forEach(function (idx, j) {
            var coin = COINS[idx];
            var candles = klines[j];
            if (candles && candles.length >= 30) {
              coins[idx] = liveCoin(coin, candles, tickers[coin.symbol] || null, "binance");
            } else {
              coins[idx] = demoCoin(coin);
            }
          });
          return coins;
        });
      })
      .then(function (coins) {
        var liveCount = coins.filter(function (c) {
          return c.live;
        }).length;
        var source = liveCount === COINS.length ? "live" : liveCount > 0 ? "partial" : "demo";
        return { source: source, coins: coins, liveCount: liveCount, total: COINS.length };
      });
  }

  global.CoinData = {
    COINS: COINS,
    HISTORY_DAYS: HISTORY_DAYS,
    loadAll: loadAll,
    demoAll: demoAll,
  };
})(typeof window !== "undefined" ? window : this);
