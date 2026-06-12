@echo off
REM ============================================================================
REM CoinPulse Forecast (FORK) — daily AI maintainer
REM   1) sync latest from the cloud (GitHub Actions' deterministic report+tune)
REM   2) autonomous Claude Code pass on the MAX model (Opus): reviews the report,
REM      may make ONE small VERIFIED improvement, commits [ai-daily]
REM   3) finalize -> guaranteed clean committed state
REM   4) push to the public GitHub repo (rebase-retry)
REM Registered with Windows Task Scheduler (see install-ai-task.cmd).
REM ============================================================================
setlocal
cd /d "%~dp0.."

set LOG=backtest\ai-daily.log
echo. >> "%LOG%"
echo ==== %date% %time% : AI daily (fork) ==== >> "%LOG%"

REM --- 1) sync, then regenerate the report LOCALLY. GitHub's runners are IP-
REM        blocked by the crypto APIs (CC 0 / Binance 451), so the cloud report
REM        goes stale — this machine CAN fetch, so do the deterministic layer here.
git pull --rebase origin master >> "%LOG%" 2>&1
node backtest\run-backtest.js >> "%LOG%" 2>&1
node backtest\auto-tune.js --apply >> "%LOG%" 2>&1

REM --- 2) autonomous AI creative pass (Opus 4.8 — max model) ---
set CLAUDE_EXE=claude
where claude >nul 2>&1 || set CLAUDE_EXE=
if "%CLAUDE_EXE%"=="" (
  echo claude CLI not found on PATH - skipping AI layer >> "%LOG%"
) else (
  claude --model opus -p "Read backtest/ai-improve-prompt.md and follow it exactly. You are the autonomous daily maintainer of this CoinPulse Forecast FORK. Use maximum reasoning effort. Be rigorous but conservative, verify every change with backtest/selftest.js, and keep the tool fully working." --dangerously-skip-permissions < nul >> "%LOG%" 2>&1
  echo AI layer exit code: %ERRORLEVEL% >> "%LOG%"
)

REM --- 3) guarantee a clean, safe committed state ---
node backtest\ai-finalize.js >> "%LOG%" 2>&1
echo finalize exit code: %ERRORLEVEL% >> "%LOG%"

REM --- 4) push to the public repo (rebase, then retry once on failure) ---
git pull --rebase origin master >> "%LOG%" 2>&1
git push origin master >> "%LOG%" 2>&1
if errorlevel 1 (
  git pull --rebase origin master >> "%LOG%" 2>&1
  git push origin master >> "%LOG%" 2>&1
)

echo ==== done ==== >> "%LOG%"
endlocal
