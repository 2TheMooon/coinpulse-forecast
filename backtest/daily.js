#!/usr/bin/env node
/*
 * CoinPulse — Daily Self-Improvement Runner
 * =========================================
 * One entry point the scheduler calls every day. It:
 *   1. runs the strategy tournament (run-backtest.js)          → reports/<date>.{json,md}
 *   2. auto-tunes the engine to minimise calibration error      → forecast.js + CHANGELOG
 *   3. commits the day's changes to git (if a repo + changes)   → reviewable history
 *
 * It is intentionally self-contained so it works both as a LOCAL scheduled task
 * and as the body a CLOUD routine executes (the cloud agent additionally pushes
 * and can reason about anomalies — see DAILY_ROUTINE.md).
 *
 * Usage:  node backtest/daily.js          (tunes + commits)
 *         node backtest/daily.js --no-commit
 *         node backtest/daily.js --no-tune     (report only)
 */
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const HERE = __dirname;
const ROOT = path.resolve(HERE, "..");
const NO_COMMIT = process.argv.includes("--no-commit");
const NO_TUNE = process.argv.includes("--no-tune");

function run(label, args) {
  process.stdout.write("\n──────────── " + label + " ────────────\n");
  const res = spawnSync(process.execPath, args, { cwd: ROOT, stdio: "inherit" });
  return res.status === 0;
}

function git(args) {
  const res = spawnSync("git", args, { cwd: ROOT, encoding: "utf8" });
  return { code: res.status, out: (res.stdout || "").trim(), err: (res.stderr || "").trim() };
}

function isoDate() {
  return new Date().toISOString().slice(0, 10);
}

function main() {
  const date = isoDate();
  process.stdout.write("CoinPulse daily self-improvement run · " + date + "\n");

  // 1) tournament + calibration report
  const okBacktest = run("Strategy tournament", [path.join(HERE, "run-backtest.js")]);
  if (!okBacktest) process.stdout.write("\n[warn] backtest exited nonzero (continuing)\n");

  // 2) auto-tune the engine
  if (!NO_TUNE) {
    run("Auto-tune", [path.join(HERE, "auto-tune.js"), "--apply"]);
  }

  // 3) commit the day's artifacts + any engine change
  if (!NO_COMMIT) {
    const inRepo = git(["rev-parse", "--is-inside-work-tree"]);
    if (inRepo.code === 0 && inRepo.out === "true") {
      git(["add", "-A"]);
      const status = git(["status", "--porcelain"]);
      if (status.out) {
        let tuneNote = "";
        try {
          const t = JSON.parse(fs.readFileSync(path.join(HERE, "reports", "tuning-latest.json"), "utf8"));
          if (t.applied) tuneNote = " · tuned volPremium=" + t.best.volPremium + " driftDamp=" + t.best.driftDamp + " (cov80 " + t.best.cov80 + "%)";
        } catch (e) {
          /* no tuning report */
        }
        const msg =
          "daily calibration " + date + tuneNote + "\n\n" +
          "Automated run: strategy tournament + engine auto-tune.\n\n" +
          "Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>";
        const commit = git(["commit", "-m", msg]);
        process.stdout.write("\n" + (commit.code === 0 ? "[git] committed daily changes" : "[git] commit failed: " + commit.err) + "\n");
      } else {
        process.stdout.write("\n[git] no changes to commit today\n");
      }
    } else {
      process.stdout.write("\n[git] not a git repo — skipping commit\n");
    }
  }

  process.stdout.write("\nDaily run complete · " + date + "\n");
}

main();
