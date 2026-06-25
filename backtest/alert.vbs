' CoinPulse desktop alert — shows a popup ONLY when the daily task needs you
' (e.g. the Claude CLI login expired). Silent on normal days.
' Usage: wscript alert.vbs "message" [seconds]   (seconds 0 = stay until OK)
Option Explicit
Dim args, msg, secs, sh
Set args = WScript.Arguments
If args.Count > 0 Then msg = args(0) Else msg = "CoinPulse: action needed."
If args.Count > 1 And IsNumeric(args(1)) Then secs = CInt(args(1)) Else secs = 0
Set sh = CreateObject("WScript.Shell")
' 48 = exclamation icon; window stays on top of the desktop.
sh.Popup msg, secs, "Coin Flow Visualization tool", 48
