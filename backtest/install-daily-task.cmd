@echo off
REM Registers a Windows Scheduled Task that runs the CoinPulse fork daily loop.
REM Runs every day at 09:00. Re-run to update; delete with:
REM   schtasks /Delete /TN "CoinPulse Fork Daily" /F
setlocal
set "SCRIPT=%~dp0daily.js"
schtasks /Create /TN "CoinPulse Fork Daily" /TR "node \"%SCRIPT%\"" /SC DAILY /ST 09:00 /F
if %ERRORLEVEL%==0 (
  echo.
  echo Registered: "CoinPulse Fork Daily"  -- runs node backtest\daily.js every day at 09:00
) else (
  echo.
  echo Failed to register task. Try running this file as Administrator.
)
endlocal
