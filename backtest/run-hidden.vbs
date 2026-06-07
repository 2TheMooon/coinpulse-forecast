' Launches the daily AI maintainer (ai-daily.cmd) with NO visible window.
' Used by the "CoinPulse Fork Daily" scheduled task so the headless Claude
' run does not pop a console. Window style 0 = hidden; True = wait for exit.
Option Explicit
Dim sh, fso, here, cmd
Set sh = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
here = fso.GetParentFolderName(WScript.ScriptFullName)
cmd = "cmd /c """ & here & "\ai-daily.cmd"""
sh.Run cmd, 0, True
