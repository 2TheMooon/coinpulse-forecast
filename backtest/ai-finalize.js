#!/usr/bin/env node
/*
 * Runs AFTER the headless AI maintainer. Guarantees a clean, safe committed
 * state even if the AI's stream timed out mid-run:
 *   - if the AI already committed ([ai-daily] ...), do nothing;
 *   - else if there are uncommitted CODE edits, keep them only if selftest
 *     passes, otherwise revert them (unverified);
 *   - then commit any remaining report/changelog/summary so the day is captured.
 */
"use strict";
const { execSync } = require("child_process");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

function git(args, opts) {
  return execSync("git " + args, Object.assign({ cwd: ROOT, encoding: "utf8" }, opts || {})).trim();
}

let last = "";
try {
  last = git("log -1 --format=%s");
} catch (e) {
  /* no commits yet */
}
if (last.indexOf("[ai-daily]") === 0) {
  console.log("AI committed cleanly: " + last);
  process.exit(0);
}

let status = "";
try {
  status = git("status --porcelain");
} catch (e) {
  status = "";
}
if (!status) {
  console.log("Finalize: nothing to do (working tree clean).");
  process.exit(0);
}

const CODE = ["forecast.js", "app.js", "data.js", "index.html", "styles.css"];
const changedCode = CODE.filter((f) => status.split("\n").some((l) => l.indexOf(f) >= 0));

let keptCode = false;
if (changedCode.length) {
  let pass = false;
  try {
    execSync("node backtest/selftest.js", { cwd: ROOT, stdio: "ignore" });
    pass = true;
  } catch (e) {
    pass = false;
  }
  if (pass) {
    keptCode = true;
    console.log("Finalize: uncommitted code changes PASS selftest — keeping.");
  } else {
    changedCode.forEach((f) => {
      try {
        git('checkout -- "' + f + '"');
      } catch (e) {
        /* ignore */
      }
    });
    console.log("Finalize: code changes FAILED selftest — reverted " + changedCode.join(", ") + ".");
  }
}

try {
  git("add -A");
  git(
    'commit -m "[ai-daily] finalize: ' +
      (keptCode ? "kept selftest-verified edits + " : changedCode.length ? "reverted unverified edits + " : "") +
      'daily report"'
  );
  console.log("Finalize: committed.");
} catch (e) {
  console.log("Finalize: nothing to commit.");
}
