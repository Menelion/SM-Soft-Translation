; GUI form to test Layout by Code
; by Jamal Mazrui

;Include file with function definitions, global variables, and constants
#Include "lbc.au3"

;The following function may be used to produce speech that does not occur automatically with a popular screen reader
;_lbcSay("Speak this via the API of JAWS, NVDA, or Window-Eyes")

;Begin creation of the GUI form
;It will automatically be centered and sized based on the controls added
;The parameter is the window title
$hForm = _lbcCreate("Format Sao Mai Music data")

;Create a single line input box with a label to its left
;The label is sized according to the actual display width of the text in the current font
;Save the resulting ID to conveniently reference the same control again

$data = _lbcCtrlCreateEdit("Data:", "")

_lbcStartVGroup()
$vIdOK = _lbcCtrlCreateButton("OK", -1, -1, -1, -1, -1, $BS_DEFPUSHBUTTON)
$vIdCancel = _lbcCtrlCreateButton("Cancel")

;The buttons look better if horizontally centered on the bottom band
;Uncomment to check coordinates of OK button before and after
;_lbcTestCoord($vIdOK)
_lbcBandHCenter()
;_lbcTestCoord($vIdOK)

;create a status bar at bottom of form, initialized with "Ready" text
_lbcCtrlCreateStatusBar("Ready")

;Set focus on first control
GUICtrlSetState($data, $GUI_Focus)

;Display the form
_lbcShow()

;Enter the GUI message loop
While 1
$msg = GUIGetMsg()
Switch $msg
Case $vIdOK
$GetData = _lbcCtrlGetText ($data)
$FormatData = StringReplace ($GetData, "Pages"&@crlf, "Pages: ")
$FormatData = StringReplace ($FormatData, "Duration"&@crlf, "")
$FormatData = StringRegExpReplace ($FormatData, "\dddd\dddd:\dddd\dddd", "")
$FormatData = StringReplace ($FormatData, "Measures"&@crlf, "Measures: ")
$FormatData = StringReplace ($FormatData, "Key signature"&@crlf, "Key signature: ")
$FormatData = StringReplace ($FormatData, "Parts"&@crlf, "Parts: ")
$FormatData = StringReplace ($FormatData, "Part names"&@crlf, "Part names: ")
FileOpen ("@TempDir\Musecoredata.txt", 2)
FileWrite ("@TempDir\Musecoredata.txt", $FormatData)
$Duration = FileReadLine ("@TempDir\Musecoredata.txt", 2)
$FormatData = StringReplace ($FormatData, $Duration&@crlf, "")
;msgBox (64, "test", $duration) ;debug
;msgBox (64, "test", $FormatData) ;debug
clipput ($FormatData)
FileClose ("@TempDir\Musecoredata.txt")
ExitLoop
Case $GUI_EVENT_CLOSE
ExitLoop
EndSwitch
WEnd
_lbcDelete()

Exit
