/*
 * CoinPulse Forecast — application shell
 * Wires the data layer + forecast engine into an interactive terminal that
 * visualises where each coin is likely to go (Monte Carlo probability cone).
 */
(function () {
  "use strict";

  var PALETTE = {
    bg: "#0a0e16",
    grid: "rgba(120, 138, 168, 0.12)",
    gridStrong: "rgba(120, 138, 168, 0.22)",
    text: "#e9eef6",
    muted: "#8493a8",
    hist: "#9fb2cc",
    median: "#5ad2a0",
    bull: "#44d07f",
    bear: "#ff6570",
    base: "#f5b94c",
    cone1: "rgba(90, 210, 160, 0.30)", // p25-p75
    cone2: "rgba(90, 210, 160, 0.13)", // p5-p95
    resistance: "rgba(255, 101, 112, 0.55)",
    support: "rgba(68, 208, 127, 0.55)",
    now: "rgba(120, 138, 168, 0.45)",
    blue: "#58b8ff",
  };

  // Model presets keep the UI friendly while mapping to engine params.
  var DRIFT_PRESETS = {
    conservative: { damp: 0.2, label: "Conservative" },
    balanced: { damp: 0.55, label: "Balanced" },
    trend: { damp: 0.95, label: "Trend-following" },
  };
  var VOL_PRESETS = {
    calm: { scale: 0.8, label: "Calm" },
    normal: { scale: 1.0, label: "Normal" },
    stress: { scale: 1.35, label: "Stress" },
  };

  var state = {
    coins: [],
    bySymbol: {},
    analysis: {}, // symbol -> Forecast.analyze result (for current model opts)
    selected: null,
    horizon: 30,
    drift: "balanced",
    vol: "normal",
    fatTails: true,
    source: "demo",
    loading: true,
    hoverIndex: null,
    filter: "",
    savedSelected: null,
  };

  var els = {};
  var chartGeo = null; // last drawn geometry, for hover hit-testing
  var refreshTimer = null;
  var STORAGE_KEY = "coinpulse-forecast-v1";

  function saveSettings() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          selected: state.selected,
          horizon: state.horizon,
          drift: state.drift,
          vol: state.vol,
          fatTails: state.fatTails,
        })
      );
    } catch (e) {
      /* private mode / quota — non-fatal */
    }
  }

  function loadSettings() {
    try {
      var s = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!s) return;
      if ([7, 14, 30, 90].indexOf(s.horizon) >= 0) state.horizon = s.horizon;
      if (DRIFT_PRESETS[s.drift]) state.drift = s.drift;
      if (VOL_PRESETS[s.vol]) state.vol = s.vol;
      if (typeof s.fatTails === "boolean") state.fatTails = s.fatTails;
      if (s.selected) state.savedSelected = s.selected;
    } catch (e) {
      /* ignore corrupt storage */
    }
  }

  function fmtDate(sec) {
    if (!Number.isFinite(sec)) return "";
    var d = new Date(sec * 1000);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  // ---------- formatting ----------
  function formatPrice(v) {
    if (!Number.isFinite(v)) return "$—";
    var abs = Math.abs(v);
    if (abs >= 1000) return "$" + v.toLocaleString("en-US", { maximumFractionDigits: 0 });
    if (abs >= 1) return "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (abs >= 0.01) return "$" + v.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 });
    return "$" + v.toLocaleString("en-US", { minimumFractionDigits: 6, maximumFractionDigits: 6 });
  }
  function formatPct(v, digits) {
    if (!Number.isFinite(v)) return "—";
    var d = digits == null ? 1 : digits;
    return (v >= 0 ? "+" : "") + v.toFixed(d) + "%";
  }
  function formatCompact(v) {
    if (!Number.isFinite(v) || v === 0) return "$—";
    if (v >= 1e12) return "$" + (v / 1e12).toFixed(2) + "T";
    if (v >= 1e9) return "$" + (v / 1e9).toFixed(2) + "B";
    if (v >= 1e6) return "$" + (v / 1e6).toFixed(1) + "M";
    if (v >= 1e3) return "$" + (v / 1e3).toFixed(1) + "K";
    return "$" + v.toFixed(0);
  }
  function clamp(v, a, b) {
    return Math.min(b, Math.max(a, v));
  }
  function toneClass(v) {
    return v >= 0 ? "up" : "down";
  }

  // ---------- analysis ----------
  function modelOpts(symbol) {
    // Selected coin runs full-resolution (bands + spaghetti); the rest run a
    // lighter sim — the rail only needs score / median / odds. Keeps toggles snappy.
    var full = symbol === state.selected;
    return {
      symbol: symbol,
      horizon: state.horizon,
      paths: full ? 800 : 300,
      driftDamp: DRIFT_PRESETS[state.drift].damp,
      volScale: VOL_PRESETS[state.vol].scale,
      fatTails: state.fatTails,
    };
  }

  function recompute() {
    state.analysis = {};
    for (var i = 0; i < state.coins.length; i += 1) {
      var coin = state.coins[i];
      var res = window.Forecast.analyze(coin.candles, modelOpts(coin.symbol));
      if (res) state.analysis[coin.symbol] = res;
    }
  }

  function currentAnalysis() {
    return state.selected ? state.analysis[state.selected] : null;
  }
  function currentCoin() {
    return state.selected ? state.bySymbol[state.selected] : null;
  }

  // ---------- rendering: rail ----------
  function miniBars(candles) {
    var closes = candles.slice(-20).map(function (c) {
      return c.close;
    });
    var min = Math.min.apply(null, closes);
    var max = Math.max.apply(null, closes);
    var span = max - min || 1;
    return (
      '<div class="spark">' +
      closes
        .map(function (c) {
          var h = 12 + ((c - min) / span) * 26;
          return '<span style="height:' + h.toFixed(1) + 'px"></span>';
        })
        .join("") +
      "</div>"
    );
  }

  function renderRail() {
    var q = state.filter.trim().toLowerCase();
    var rows = state.coins
      .filter(function (coin) {
        if (!q) return true;
        return (
          coin.symbol.toLowerCase().indexOf(q) >= 0 || coin.name.toLowerCase().indexOf(q) >= 0
        );
      })
      .map(function (coin) {
        var a = state.analysis[coin.symbol];
        var med = a ? a.sim.terminal.medianReturnPct : 0;
        var score = a ? a.score : 0;
        var probUp = a ? a.sim.probUp : 50;
        return {
          coin: coin,
          med: med,
          score: score,
          probUp: probUp,
        };
      })
      .sort(function (x, y) {
        return y.score - x.score;
      });

    if (!rows.length) {
      els.rail.innerHTML = '<div class="rail-empty">No coins match “' + state.filter + '”.</div>';
      return;
    }

    els.rail.innerHTML = rows
      .map(function (r) {
        var coin = r.coin;
        var active = coin.symbol === state.selected ? " active" : "";
        return (
          '<button class="coin-row' +
          active +
          '" data-symbol="' +
          coin.symbol +
          '">' +
          '<span class="coin-mark" style="background:' +
          coin.color +
          '">' +
          coin.symbol.slice(0, 1) +
          "</span>" +
          '<div class="coin-id"><b>' +
          coin.symbol +
          '<i class="live-dot ' +
          (coin.live ? "on" : "off") +
          '" title="' +
          (coin.live ? "live · " + (coin.src || "live") : "simulated data") +
          '"></i>' +
          "</b><small>" +
          coin.name +
          "</small></div>" +
          miniBars(coin.candles) +
          '<div class="coin-fc"><b class="' +
          toneClass(r.med) +
          '">' +
          formatPct(r.med) +
          '</b><small>' +
          state.horizon +
          'd median</small></div>' +
          '<div class="coin-score" title="forecast score">' +
          r.score +
          "</div>" +
          "</button>"
        );
      })
      .join("");
  }

  // ---------- rendering: hero ----------
  function regimeChips(stats) {
    var trendTone =
      stats.trend.indexOf("Up") >= 0 ? "good" : stats.trend.indexOf("Down") >= 0 ? "bad" : "mid";
    var volTone = stats.volState === "Expanding" ? "bad" : stats.volState === "Compressing" ? "good" : "mid";
    return (
      '<span class="chip ' + trendTone + '">' + stats.trend + "</span>" +
      '<span class="chip ' + volTone + '">Vol ' + stats.volState + "</span>" +
      '<span class="chip">σ ' + (stats.sigmaAnnual * 100).toFixed(0) + "%/yr</span>"
    );
  }

  function renderHero() {
    var coin = currentCoin();
    var a = currentAnalysis();
    if (!coin || !a) return;
    var meta = coin.meta;
    els.heroMark.style.background = coin.color;
    els.heroMark.textContent = coin.symbol.slice(0, 1);
    els.heroSymbol.textContent = coin.symbol;
    els.heroName.textContent = coin.name + (coin.live ? "" : " · demo");
    els.heroPrice.textContent = formatPrice(meta.price);
    els.heroChange.textContent = formatPct(meta.change24) + " 24h";
    els.heroChange.className = "hero-change " + toneClass(meta.change24);
    els.heroChips.innerHTML = regimeChips(a.stats);
    els.heroScore.textContent = a.score;
    els.heroScore.style.setProperty("--ring", scoreColor(a.score));
  }

  function scoreColor(s) {
    if (s >= 66) return PALETTE.bull;
    if (s >= 45) return PALETTE.base;
    return PALETTE.bear;
  }

  // ---------- rendering: scenarios + probabilities ----------
  function renderScenarios() {
    var a = currentAnalysis();
    if (!a) return;
    var t = a.sim.terminal;
    var s0 = a.sim.s0;
    var ret = function (p) {
      return ((p - s0) / s0) * 100;
    };
    var cards = [
      {
        cls: "bull",
        label: "Bull · top 10%",
        price: t.p90,
        move: ret(t.p90),
        note: "10% of simulated paths finish above this",
      },
      {
        cls: "base",
        label: "Base · median",
        price: t.p50,
        move: ret(t.p50),
        note: "median — half of paths finish above, half below",
      },
      {
        cls: "bear",
        label: "Bear · bottom 10%",
        price: t.p10,
        move: ret(t.p10),
        note: "10% of simulated paths finish below this",
      },
    ];
    els.scenarios.innerHTML = cards
      .map(function (c) {
        return (
          '<div class="scenario ' + c.cls + '">' +
          '<div class="scenario-head"><span>' + c.label + "</span>" +
          '<b class="' + toneClass(c.move) + '">' + formatPct(c.move) + "</b></div>" +
          '<strong>' + formatPrice(c.price) + "</strong>" +
          "<p>" + c.note + "</p>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderProbabilities() {
    var a = currentAnalysis();
    if (!a) return;
    var sim = a.sim;
    var stats = a.stats;
    var R = stats.levels.nearResistance;
    var S = stats.levels.nearSupport;
    var pR = sim.touchProbAbove(R);
    var pS = sim.touchProbBelow(S);

    var stat = function (label, value, tone, sub) {
      return (
        '<div class="prob">' +
        "<span>" + label + "</span>" +
        '<strong class="' + (tone || "") + '">' + value + "</strong>" +
        (sub ? "<small>" + sub + "</small>" : "") +
        "</div>"
      );
    };

    els.probabilities.innerHTML =
      stat("Expected move", formatPct(sim.terminal.expectedReturnPct), toneClass(sim.terminal.expectedReturnPct), "mean of " + sim.paths + " paths") +
      stat("Odds price ends up", sim.probUp.toFixed(0) + "%", sim.probUp >= 50 ? "up" : "down", "over " + state.horizon + " days") +
      stat("80% range", formatPrice(sim.terminal.p10) + " – " + formatPrice(sim.terminal.p90), "", "10th–90th percentile") +
      stat("Reach resistance", pR.toFixed(0) + "%", pR >= 50 ? "up" : "", "touch " + formatPrice(R) + " within " + state.horizon + "d") +
      stat("Break support", pS.toFixed(0) + "%", pS >= 50 ? "down" : "", "touch " + formatPrice(S) + " within " + state.horizon + "d") +
      stat("Risk / reward", riskReward(a), "", "median upside vs downside");
  }

  function riskReward(a) {
    var s0 = a.sim.s0;
    var up = a.sim.terminal.p75 - s0;
    var down = s0 - a.sim.terminal.p25;
    if (up <= 0 || down <= 0) return "—";
    return (up / down).toFixed(2) + "R";
  }

  // ---------- rendering: detail (stats / levels / signals / table) ----------
  function renderStats() {
    var a = currentAnalysis();
    if (!a) return;
    var s = a.stats;
    // Cross-check Monte Carlo against the closed-form lognormal — agreement is
    // a free confidence signal that the simulation has converged.
    var mcUp = a.sim.probUp;
    var anUp = a.analytic.probAbove(a.sim.s0);
    var diff = Math.abs(mcUp - anUp);
    var conv = diff <= 4 ? "up" : "";
    var rows = [
      ["Drift (annual)", formatPct(s.muAnnual * 100, 0), toneClass(s.muAnnual)],
      ["Volatility (annual)", (s.sigmaAnnual * 100).toFixed(0) + "%", ""],
      ["Sharpe (≈)", s.sharpe.toFixed(2), toneClass(s.sharpe)],
      ["Trend slope", formatPct(s.slopePerDay, 2) + "/d", toneClass(s.slopePerDay)],
      ["ATR (14d)", s.atrPct.toFixed(1) + "%", ""],
      ["Max drawdown", s.maxDrawdown.toFixed(1) + "%", "down"],
      ["7d / 30d", formatPct(s.change7) + " / " + formatPct(s.change30), toneClass(s.change30)],
      ["MC vs analytic", mcUp.toFixed(0) + "% / " + anUp.toFixed(0) + "%", conv],
      ["History", s.sampleSize + 1 + " candles", ""],
    ];
    els.modelStats.innerHTML = rows
      .map(function (r) {
        return '<div class="kv"><span>' + r[0] + '</span><b class="' + r[2] + '">' + r[1] + "</b></div>";
      })
      .join("");
  }

  function renderCalibration() {
    var coin = currentCoin();
    if (!coin || !els.calibration) return;
    var cal = window.Forecast.backtestCalibration(coin.candles, modelOpts(coin.symbol));
    if (!cal || !cal.ok) {
      if (els.calVerdict) {
        els.calVerdict.textContent = "n/a";
        els.calVerdict.className = "cal-verdict";
      }
      els.calibration.innerHTML =
        '<div class="cal-empty">' + (cal && cal.reason ? cal.reason : "Not enough history to calibrate.") + "</div>";
      return;
    }
    var bar = function (label, cov, target) {
      return (
        '<div class="cal-bar"><span>' + label + "</span>" +
        '<div class="cal-track"><div class="cal-fill" style="width:' + clamp(cov, 0, 100).toFixed(0) + '%"></div>' +
        '<div class="cal-target" style="left:' + target + '%" title="ideal"></div></div>' +
        "<b>" + cov.toFixed(0) + "%</b></div>"
      );
    };
    els.calibration.innerHTML =
      bar("50% band", cal.cov50, 50) +
      bar("80% band", cal.cov80, 80) +
      bar("90% band", cal.cov90, 90) +
      '<div class="cal-foot"><span>Direction <b>' + cal.dirAccuracy.toFixed(0) + '%</b></span>' +
      "<span><b>" + cal.bias + "</b></span></div>" +
      '<div class="cal-foot"><span>' + cal.windows + " walk-forward windows · " + cal.horizon + "d horizon</span></div>";
    if (els.calVerdict) {
      var good = cal.verdict === "Well calibrated";
      els.calVerdict.textContent = cal.verdict;
      els.calVerdict.className = "cal-verdict " + (good ? "good" : "warn");
    }
  }

  function renderLevels() {
    var a = currentAnalysis();
    if (!a) return;
    var s = a.stats;
    var price = s.lastPrice;
    var rows = [
      ["Resistance", formatPrice(s.levels.nearResistance), "up"],
      ["Current price", formatPrice(price), ""],
      ["Entry zone", formatPrice(s.levels.nearSupport) + " – " + formatPrice(price * 1.01), ""],
      ["Support / invalidation", formatPrice(s.levels.nearSupport), "down"],
    ];
    els.levels.innerHTML = rows
      .map(function (r) {
        return '<div class="kv"><span>' + r[0] + '</span><b class="' + r[2] + '">' + r[1] + "</b></div>";
      })
      .join("");
  }

  function signalBar(label, value) {
    var v = clamp(value, 0, 100);
    var tone = v > 66 ? "good" : v > 40 ? "mid" : "bad";
    return (
      '<div class="metric"><span>' + label + "</span>" +
      '<div class="track"><div class="' + tone + '" style="width:' + v.toFixed(0) + '%"></div></div>' +
      "<b>" + v.toFixed(0) + "</b></div>"
    );
  }

  function renderSignals() {
    var a = currentAnalysis();
    if (!a) return;
    var s = a.stats;
    var trend = clamp(50 + s.slopePerDay * 28, 0, 100);
    var momentum = clamp(50 + (Number.isFinite(s.change7) ? s.change7 : 0) * 2.2, 0, 100);
    var volume = clamp(s.volumeRatio * 55, 0, 100);
    var stability = clamp(100 - s.atrPct * 4.5, 0, 100);
    var odds = a.sim.probUp;
    els.signals.innerHTML =
      signalBar("Trend", trend) +
      signalBar("Momentum", momentum) +
      signalBar("Volume", volume) +
      signalBar("Stability", stability) +
      signalBar("Upside odds", odds);
  }

  function renderTable() {
    var a = currentAnalysis();
    if (!a) return;
    var bands = a.sim.bands;
    var H = a.sim.horizon;
    var s0 = a.sim.s0;
    var checkpoints = [];
    [0.25, 0.5, 0.75, 1].forEach(function (f) {
      var d = Math.max(1, Math.round(H * f));
      if (checkpoints.indexOf(d) < 0) checkpoints.push(d);
    });
    var ret = function (p) {
      return formatPct(((p - s0) / s0) * 100);
    };
    var head =
      '<div class="ftable-row head"><span>Day</span><span>Bear</span><span>Base</span><span>Bull</span><span>Range</span></div>';
    var body = checkpoints
      .map(function (d) {
        var bear = bands.p10[d];
        var base = bands.p50[d];
        var bull = bands.p90[d];
        return (
          '<div class="ftable-row">' +
          "<span>+" + d + "d</span>" +
          '<span class="down">' + formatPrice(bear) + "</span>" +
          "<span>" + formatPrice(base) + "</span>" +
          '<span class="up">' + formatPrice(bull) + "</span>" +
          '<span class="muted">' + ret(bear) + " / " + ret(bull) + "</span>" +
          "</div>"
        );
      })
      .join("");
    els.forecastTable.innerHTML = head + body;
  }

  function renderNotes() {
    var a = currentAnalysis();
    var coin = currentCoin();
    if (!a || !coin) return;
    var s = a.stats;
    var sim = a.sim;
    var up =
      coin.symbol +
      " is in a " + s.trend.toLowerCase() + " with " + (s.volumeRatio >= 1 ? "rising" : "soft") +
      " volume. The model's median path projects " + formatPct(sim.terminal.medianReturnPct) +
      " over " + state.horizon + " days, with a " + sim.probUp.toFixed(0) + "% chance of finishing above " +
      formatPrice(sim.s0) + ".";
    var down =
      "Downside: volatility runs ~" + (s.sigmaAnnual * 100).toFixed(0) +
      "%/yr, so the bottom-10% path falls to " + formatPrice(sim.terminal.p10) +
      " (" + formatPct(((sim.terminal.p10 - sim.s0) / sim.s0) * 100) +
      "). The idea weakens on a clean break of " + formatPrice(s.levels.nearSupport) + ".";
    els.noteUp.textContent = up;
    els.noteDown.textContent = down;
  }

  // ---------- market header ----------
  function renderMarket() {
    var changes = [];
    var volume = 0;
    var live = 0;
    state.coins.forEach(function (c) {
      if (Number.isFinite(c.meta.change24)) changes.push(c.meta.change24);
      if (Number.isFinite(c.meta.volume24)) volume += c.meta.volume24;
      if (c.live) live += 1;
    });
    var avg = changes.length
      ? changes.reduce(function (s, v) {
          return s + v;
        }, 0) / changes.length
      : 0;
    var bullish = 0;
    state.coins.forEach(function (c) {
      var a = state.analysis[c.symbol];
      if (a && a.sim.probUp >= 55) bullish += 1;
    });

    els.mAvg.textContent = formatPct(avg);
    els.mAvg.className = "value " + toneClass(avg);
    els.mVolume.textContent = formatCompact(volume);
    els.mBreadth.textContent = bullish + " / " + state.coins.length;
    els.mRegime.textContent = avg > 1.2 ? "Risk-on" : avg < -1.2 ? "Risk-off" : "Neutral";
    els.mRegime.className = "value " + (avg > 1.2 ? "up" : avg < -1.2 ? "down" : "");

    var tone = state.source === "live" ? "live" : state.source === "partial" ? "partial" : "demo";
    els.status.dataset.tone = tone;
    els.status.textContent =
      state.source === "live"
        ? "live · CryptoCompare"
        : state.source === "partial"
        ? live + "/" + state.coins.length + " live"
        : "demo data";
  }

  // ---------- the forecast chart ----------
  function drawChart() {
    var a = currentAnalysis();
    var coin = currentCoin();
    var canvas = els.canvas;
    if (!canvas) return;
    var dpr = window.devicePixelRatio || 1;
    var box = canvas.getBoundingClientRect();
    if (box.width === 0) return;
    canvas.width = Math.round(box.width * dpr);
    canvas.height = Math.round(box.height * dpr);
    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var W = box.width;
    var Hpx = box.height;
    ctx.clearRect(0, 0, W, Hpx);
    if (!a || !coin) return;

    var padL = 8;
    var padR = 66;
    var padT = 14;
    var padB = 26;
    var plotW = W - padL - padR;
    var plotH = Hpx - padT - padB;

    var sim = a.sim;
    var bands = sim.bands;
    var H = sim.horizon;
    var HIST = Math.min(60, coin.candles.length);
    var histCloses = coin.candles.slice(-HIST).map(function (c) {
      return c.close;
    });

    // x mapping: index 0..(HIST-1) history, then forecast day d -> HIST-1+d
    var totalSpan = HIST - 1 + H;
    function xAt(idx) {
      return padL + (idx / totalSpan) * plotW;
    }

    // y domain
    var lo = Math.min.apply(null, histCloses);
    var hi = Math.max.apply(null, histCloses);
    for (var d = 0; d <= H; d += 1) {
      if (bands.p5[d] < lo) lo = bands.p5[d];
      if (bands.p95[d] > hi) hi = bands.p95[d];
    }
    var levels = a.stats.levels;
    lo = Math.min(lo, levels.nearSupport);
    hi = Math.max(hi, levels.nearResistance);
    var pad = (hi - lo) * 0.08 || hi * 0.05;
    lo -= pad;
    hi += pad;
    var range = hi - lo || 1;
    function yAt(price) {
      return padT + (1 - (price - lo) / range) * plotH;
    }

    var nowX = xAt(HIST - 1);

    // --- grid + y labels ---
    ctx.font = "11px Inter, system-ui, sans-serif";
    ctx.textBaseline = "middle";
    for (var g = 0; g <= 4; g += 1) {
      var price = lo + (range * g) / 4;
      var y = yAt(price);
      ctx.strokeStyle = PALETTE.grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + plotW, y);
      ctx.stroke();
      ctx.fillStyle = PALETTE.muted;
      ctx.textAlign = "left";
      ctx.fillText(shortPrice(price), padL + plotW + 6, y);
    }

    // --- forecast cone: p5-p95 then p25-p75 ---
    function fillBand(lowArr, highArr, color) {
      ctx.beginPath();
      for (var i = 0; i <= H; i += 1) {
        var x = xAt(HIST - 1 + i);
        var yy = yAt(highArr[i]);
        if (i === 0) ctx.moveTo(x, yy);
        else ctx.lineTo(x, yy);
      }
      for (var j = H; j >= 0; j -= 1) {
        var x2 = xAt(HIST - 1 + j);
        ctx.lineTo(x2, yAt(lowArr[j]));
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }
    fillBand(bands.p5, bands.p95, PALETTE.cone2);
    fillBand(bands.p25, bands.p75, PALETTE.cone1);

    // faint individual simulated paths (spaghetti) — shows these are scenarios
    if (sim.samplePaths && sim.samplePaths.length) {
      ctx.lineWidth = 0.7;
      ctx.strokeStyle = "rgba(150, 200, 255, 0.10)";
      for (var sp = 0; sp < sim.samplePaths.length; sp += 1) {
        var spath = sim.samplePaths[sp];
        ctx.beginPath();
        for (var k = 0; k <= H; k += 1) {
          var sx = xAt(HIST - 1 + k);
          var sy = yAt(spath[k]);
          if (k === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.stroke();
      }
    }

    // --- horizontal level lines ---
    function levelLine(price, color, label) {
      var y = yAt(price);
      ctx.strokeStyle = color;
      ctx.setLineDash([4, 4]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(nowX, y);
      ctx.lineTo(padL + plotW, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = color;
      ctx.textAlign = "right";
      ctx.fillText(label, padL + plotW, y - 8);
    }
    levelLine(levels.nearResistance, PALETTE.resistance, "R");
    levelLine(levels.nearSupport, PALETTE.support, "S");

    // --- history line ---
    ctx.strokeStyle = PALETTE.hist;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    histCloses.forEach(function (c, i) {
      var x = xAt(i);
      var y = yAt(c);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // --- median forecast path ---
    ctx.strokeStyle = PALETTE.median;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    for (var m = 0; m <= H; m += 1) {
      var mx = xAt(HIST - 1 + m);
      var my = yAt(bands.p50[m]);
      if (m === 0) ctx.moveTo(mx, my);
      else ctx.lineTo(mx, my);
    }
    ctx.stroke();

    // --- now divider ---
    ctx.strokeStyle = PALETTE.now;
    ctx.setLineDash([3, 4]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(nowX, padT);
    ctx.lineTo(nowX, padT + plotH);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = PALETTE.muted;
    var lastTime = coin.candles[coin.candles.length - 1].time;
    var startTime = lastTime - (HIST - 1) * 86400;
    ctx.textAlign = "left";
    ctx.fillText(fmtDate(startTime), padL, padT + plotH + 14);
    ctx.textAlign = "center";
    ctx.fillText("now · " + fmtDate(lastTime), nowX, padT + plotH + 14);
    ctx.textAlign = "right";
    ctx.fillText("+" + H + "d · " + fmtDate(lastTime + H * 86400), padL + plotW, padT + plotH + 14);

    // --- terminal markers (p10/p50/p90) ---
    function marker(price, color) {
      var x = xAt(totalSpan);
      var y = yAt(price);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 3.2, 0, Math.PI * 2);
      ctx.fill();
    }
    marker(bands.p90[H], PALETTE.bull);
    marker(bands.p50[H], PALETTE.median);
    marker(bands.p10[H], PALETTE.bear);

    // demo watermark — make unmistakable that this is not live data
    if (!coin.live) {
      ctx.save();
      ctx.fillStyle = "rgba(245, 185, 76, 0.10)";
      ctx.font = "700 30px Inter, system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("SIMULATED DATA", padL + plotW / 2, padT + plotH / 2);
      ctx.restore();
    }

    // stash geometry for hover
    chartGeo = {
      padL: padL,
      plotW: plotW,
      totalSpan: totalSpan,
      HIST: HIST,
      H: H,
      xAt: xAt,
      yAt: yAt,
      lo: lo,
      hi: hi,
      histCloses: histCloses,
      bands: bands,
      padT: padT,
      plotH: plotH,
      s0: sim.s0,
      mu: sim.mu,
      sigma: sim.sigma,
      lastTime: lastTime,
    };

    // hover crosshair
    if (state.hoverIndex != null) drawHover(ctx);
  }

  function shortPrice(v) {
    if (v >= 1000) return "$" + (v / 1000).toFixed(1) + "k";
    if (v >= 1) return "$" + v.toFixed(2);
    return "$" + v.toFixed(4);
  }

  function drawHover(ctx) {
    var geo = chartGeo;
    if (!geo) return;
    var idx = state.hoverIndex;
    var x = geo.xAt(idx);
    ctx.strokeStyle = PALETTE.gridStrong;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, geo.padT);
    ctx.lineTo(x, geo.padT + geo.plotH);
    ctx.stroke();

    var isForecast = idx >= geo.HIST - 1;
    var tip = els.chartTip;
    if (!tip) return;
    var html = "";
    if (isForecast) {
      var d = idx - (geo.HIST - 1);
      var base = geo.bands.p50[d];
      var lo = geo.bands.p10[d];
      var hi = geo.bands.p90[d];
      var dot = function (c, label, val) {
        return (
          '<div><i style="background:' + c + '"></i>' + label + " <b>" + formatPrice(val) + "</b></div>"
        );
      };
      var movePct = ((base - geo.s0) / geo.s0) * 100;
      var pAbove = 50;
      if (d >= 1 && geo.sigma > 0) {
        var driftD = (geo.mu - 0.5 * geo.sigma * geo.sigma) * d;
        var volD = geo.sigma * Math.sqrt(d);
        var z = -driftD / volD;
        pAbove = (1 - window.Forecast._util.normCdf(z)) * 100;
      }
      html =
        '<div class="tip-h">+' + d + " days · " + fmtDate(geo.lastTime + d * 86400) + "</div>" +
        dot(PALETTE.bull, "Bull", hi) +
        dot(PALETTE.median, "Base", base) +
        dot(PALETTE.bear, "Bear", lo) +
        '<div class="tip-sub">Median ' + formatPct(movePct) + " · P(above now) " + pAbove.toFixed(0) + "%</div>";
      var y = geo.yAt(base);
      ctx.fillStyle = PALETTE.median;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    } else {
      var price = geo.histCloses[idx];
      var ht = geo.lastTime - (geo.HIST - 1 - idx) * 86400;
      html = '<div class="tip-h">' + fmtDate(ht) + '</div><div><i style="background:' + PALETTE.hist + '"></i>Close <b>' + formatPrice(price) + "</b></div>";
      var yh = geo.yAt(price);
      ctx.fillStyle = PALETTE.hist;
      ctx.beginPath();
      ctx.arc(x, yh, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
    tip.innerHTML = html;
    tip.style.display = "block";
    var canvasBox = els.canvas.getBoundingClientRect();
    var stageBox = els.chartWrap.getBoundingClientRect();
    var left = x + (canvasBox.left - stageBox.left) + 14;
    if (left > stageBox.width - 150) left = x + (canvasBox.left - stageBox.left) - 150;
    tip.style.left = left + "px";
    tip.style.top = "16px";
  }

  function onCanvasMove(e) {
    if (!chartGeo) return;
    var box = els.canvas.getBoundingClientRect();
    var px = e.clientX - box.left;
    var rel = clamp((px - chartGeo.padL) / chartGeo.plotW, 0, 1);
    state.hoverIndex = Math.round(rel * chartGeo.totalSpan);
    drawChart();
  }
  function onCanvasLeave() {
    state.hoverIndex = null;
    if (els.chartTip) els.chartTip.style.display = "none";
    drawChart();
  }

  // ---------- full render ----------
  function renderAll() {
    if (els.horizonLabel) els.horizonLabel.textContent = state.horizon + " days";
    renderRail();
    renderHero();
    renderScenarios();
    renderProbabilities();
    renderStats();
    renderCalibration();
    renderLevels();
    renderSignals();
    renderTable();
    renderNotes();
    renderMarket();
    requestAnimationFrame(drawChart);
  }

  // ---------- interactions ----------
  function selectCoin(symbol) {
    if (!state.bySymbol[symbol]) return;
    state.selected = symbol;
    state.hoverIndex = null;
    // Upgrade the newly-selected coin to a full-resolution analysis.
    var res = window.Forecast.analyze(state.bySymbol[symbol].candles, modelOpts(symbol));
    if (res) state.analysis[symbol] = res;
    saveSettings();
    renderAll();
  }

  function setHorizon(h) {
    state.horizon = h;
    syncSegments();
    recompute();
    saveSettings();
    renderAll();
  }

  function syncSegments() {
    [].forEach.call(document.querySelectorAll("[data-horizon]"), function (b) {
      b.classList.toggle("active", Number(b.dataset.horizon) === state.horizon);
    });
    [].forEach.call(document.querySelectorAll("[data-drift]"), function (b) {
      b.classList.toggle("active", b.dataset.drift === state.drift);
    });
    [].forEach.call(document.querySelectorAll("[data-vol]"), function (b) {
      b.classList.toggle("active", b.dataset.vol === state.vol);
    });
    if (els.fatToggle) els.fatToggle.classList.toggle("on", state.fatTails);
  }

  function bindEvents() {
    els.rail.addEventListener("click", function (e) {
      var row = e.target.closest("[data-symbol]");
      if (row) selectCoin(row.dataset.symbol);
    });
    [].forEach.call(document.querySelectorAll("[data-horizon]"), function (b) {
      b.addEventListener("click", function () {
        setHorizon(Number(b.dataset.horizon));
      });
    });
    [].forEach.call(document.querySelectorAll("[data-drift]"), function (b) {
      b.addEventListener("click", function () {
        state.drift = b.dataset.drift;
        syncSegments();
        recompute();
        saveSettings();
        renderAll();
      });
    });
    [].forEach.call(document.querySelectorAll("[data-vol]"), function (b) {
      b.addEventListener("click", function () {
        state.vol = b.dataset.vol;
        syncSegments();
        recompute();
        saveSettings();
        renderAll();
      });
    });
    if (els.fatToggle) {
      els.fatToggle.addEventListener("click", function () {
        state.fatTails = !state.fatTails;
        syncSegments();
        recompute();
        saveSettings();
        renderAll();
      });
    }
    if (els.railSearch) {
      els.railSearch.addEventListener("input", function () {
        state.filter = els.railSearch.value || "";
        renderRail();
      });
    }
    if (els.refresh) {
      els.refresh.addEventListener("click", function () {
        load(true);
      });
    }
    els.canvas.addEventListener("mousemove", onCanvasMove);
    els.canvas.addEventListener("mouseleave", onCanvasLeave);
    window.addEventListener("resize", function () {
      requestAnimationFrame(drawChart);
    });
  }

  // ---------- bootstrap ----------
  function cacheEls() {
    var byId = function (id) {
      return document.getElementById(id);
    };
    els.rail = byId("rail");
    els.canvas = byId("forecastChart");
    els.chartTip = byId("chartTip");
    els.chartWrap = byId("chartWrap");
    els.heroMark = byId("heroMark");
    els.heroSymbol = byId("heroSymbol");
    els.heroName = byId("heroName");
    els.heroPrice = byId("heroPrice");
    els.heroChange = byId("heroChange");
    els.heroChips = byId("heroChips");
    els.heroScore = byId("heroScore");
    els.scenarios = byId("scenarios");
    els.probabilities = byId("probabilities");
    els.modelStats = byId("modelStats");
    els.levels = byId("levels");
    els.signals = byId("signals");
    els.forecastTable = byId("forecastTable");
    els.noteUp = byId("noteUp");
    els.noteDown = byId("noteDown");
    els.mAvg = byId("mAvg");
    els.mVolume = byId("mVolume");
    els.mBreadth = byId("mBreadth");
    els.mRegime = byId("mRegime");
    els.status = byId("dataStatus");
    els.refresh = byId("refreshBtn");
    els.fatToggle = byId("fatToggle");
    els.horizonLabel = byId("horizonLabel");
    els.railSearch = byId("railSearch");
    els.calibration = byId("calibration");
    els.calVerdict = byId("calVerdict");
  }

  function applyDataset(result) {
    state.coins = result.coins;
    state.source = result.source;
    state.bySymbol = {};
    result.coins.forEach(function (c) {
      state.bySymbol[c.symbol] = c;
    });
    if (!state.selected || !state.bySymbol[state.selected]) {
      var preferred = state.savedSelected && state.bySymbol[state.savedSelected];
      state.selected = preferred
        ? state.savedSelected
        : result.coins[0]
        ? result.coins[0].symbol
        : null;
    }
    recompute();
    state.loading = false;
    syncSegments();
    renderAll();
  }

  function load(isRefresh) {
    if (els.status) {
      els.status.dataset.tone = "loading";
      els.status.textContent = isRefresh ? "refreshing…" : "loading…";
    }
    window.CoinData.loadAll()
      .then(applyDataset)
      .catch(function (err) {
        console.warn("load failed, using demo", err);
        applyDataset({ source: "demo", coins: window.CoinData.demoAll(), liveCount: 0, total: 0 });
      });
  }

  function init() {
    cacheEls();
    loadSettings();
    bindEvents();
    // Render instantly with deterministic demo data, then upgrade to live.
    applyDataset({ source: "demo", coins: window.CoinData.demoAll(), liveCount: 0, total: 0 });
    load(false);
    // Keep prices fresh while the tab stays open.
    refreshTimer = window.setInterval(function () {
      if (!document.hidden) load(true);
    }, 180000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
