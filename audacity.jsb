JFW Script File                                                           ܀ �     getquicksetting         getjfwversion      � 
        $  gsinisection    %           Audacity.jsi      inireadinteger     	         %     getnonjcfoption    	         �     focusintrackpanel        focusinmainwindow   # �         getfocus      getwindowname   1 WN_TRACKPANELTrack Panel    
  
     	      p     focusinselectionbar            getfocus      getparent     getcontrolid      
   
     	      H    gettrackpanelobj            getfocus      getrealwindow   '      %         1 WN_TRACKPANELTrack Panel      findwindow  '        savecursor          invisiblecursor       %     movetowindow            pause                 getcurrentobject    '       restorecursor      %     	      4    sayselectionposition             dialogactive    " X      menusactive 
  " p $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey               noproject           saynoproject       	           focusinmainwindow           AnnounceMessage   getquicksetting       %     schedulepositionfield              typecurrentscriptkey            pause           dialogactive              pause           AnnounceMessage   getquicksetting       %     getpositionfieldhandle  '     %    getpositionfield    '  %          1  To use this feature you must enable the selection toolbar          say    $  ghnull  &  ghsaypositionfield             %  %    sayformattedmessage                   �    markermovement           userbufferisactive    # `      focusintrackpanel   
  # |      isstopped   
  # � $  gfinlabel     
          noproject           saynoproject       	           typecurrentscriptkey            AnnounceMessage   getquicksetting         &   %    sayformattedmessage               <$  %   
    >   
  	  formatstringwithembeddedfunctions            �     mousemovement           focusinmainwindow   # P      ispccursor  
  # p      noproject     
          typecurrentscriptkey               <$  %   
    >   
  	  formatstringwithembeddedfunctions            |    announcekeymessage          userbufferisactive    # `      focusinmainwindow   
  # | $  gfinlabel     
          AnnounceMessage   getquicksetting         Message %          sayusingvoice              typecurrentscriptkey            msaarefresh            saycurrentscriptkeylabel            typecurrentscriptkey             �     saynotstopped        AnnounceMessage   getquicksetting            1  Cannot perform this operation unless stopped.   1 msgNotStopped_snot stopped.   sayformattedmessage          �     saynoproject            1 	 There are no tracks in the project. 1 msgNoProject_sNo tracks   sayformattedmessage       �     noproject        userbufferisactive    # T      focusinmainwindow   
          gettrackpanelobj    '   %       accchildcount         
             	                  	          autostartevent       &  gfaudacityautostarted         &  gfsilence         &  gfsilenceclearonnext          &  gfpreviewing          &  gfinlabel         &  gftogglemotionpreview   $  app_firsttime             &  app_firsttime            1  Wellcome to Audacity. Press %Keyfor(AudacityScriptkeyHelp) to display the list of JAWS hot keys for Audacity.     sayformattedmessage         getjfwversion      � 
       Audacity.jsi    &  gsinifile     Settings    &  gsinisection         Audacity.jcf    &  gsinifile     NonJCFOptions   &  gsinisection            getjfwversion      � 
           $  gsinifile        	  findjawspersonalizedsettingsfile      fileexists            adddefaultconfig                $  gsinisection      JAWSGuideLink   1  http://vip.chowo.co.uk/wp-content/uploads/jaws/Audacity-2.3.2-Guide.html    $  gsinifile     inireadstring     stringtrimtrailingblanks    &  gsjawsguidelink         2,2,0     checkaudacityversion         �
  &  giidselectiontypecombo    �
  &  giidselectionstart    �
  &  giidselectionend      �
  &  giidselectionlength   �
  &  giidselectioncenter   �
  &  giidaudioposition           2,3,0     checkaudacityversion         �
  &  giidselectionstart    �
  &  giidselectionend      �
  &  giidselectionlength   �
  &  giidselectioncenter   �
  &  giidaudioposition           2,4,0     checkaudacityversion         -���&  giidaudioposition           2,4,2     checkaudacityversion         �
  &  giidaudioposition        UpArrow &  gsgotrackupkey    DownArrow   &  gsgotrackdownkey      Control+Shift+UpArrow   &  gsmovetrackupkey      Control+Shift+DownArrow &  gsmovetrackdownkey            saynonhighlightedtext       $  ghslideredit    # \ %   $  ghslideredit    
  
        %    ,     say       $  ghsaypositionfield  # � %   $  ghsaypositionfield  
  
          &  gfpositionfieldupdated        %   %    saynonhighlightedtext         d    screenstabilizedevent      $  ghsaypositionfield  # \ $  gfpositionfieldupdated  
          pause           refresh         msaarefresh          $  ghsaypositionfield    getpositionfield      ,     say    $  ghnull  &  ghsaypositionfield        &  gfpositionfieldupdated        %     screenstabilizedevent         �     newtexteventshouldbesilent            $  gfsilence   " �    %   %  %  %  %  %  %  %    newtexteventshouldbesilent  
  '  %     	      �     tutormessageevent       $  gfsilence      	      $  gfsuppressnexttutor          &  gfsuppressnexttutor 	         %   %    tutormessageevent         x     progressbarchangedevent      $  gfsilence      	         %   %  %    progressbarchangedevent       �    handlecustomappwindows                   getfocus      getrealwindow     getfirstchild     getwindowname   '  $  gfsilencepreview    # �      2,1,2     checkaudacityversion    
  # �      dialogactive    
  # $  gfaudacityautostarted     
  # |%  1
 WN_PREPARING_PREVIEWPreparing preview   
  " x%  1 WN_PREVIEWINGPreviewing 
  
  
          &  gfsilence           	         %     handlecustomappwindows  '  %     	      �    handlecustomrealwindows          %     getfirstchild     getwindowname   '  $  gfsilencepreview    # �      2,1,2     checkaudacityversion    
  # �      dialogactive    
  # � $  gfaudacityautostarted     
  # T%  1
 WN_PREPARING_PREVIEWPreparing preview   
  " P%  1 WN_PREVIEWINGPreviewing 
  
  
          &  gfsilence           	      $  gfsilence              	         %     handlecustomrealwindows '  %     	      L    handlecustomwindows          &  gfaudacityautostarted      %     iswindowvisible         %     getcontrolid      �  
              	              	         %     getwindowclass    button  
  #    %           getwindowtext         
  
           %     iswindowvisible # p   %     getcontrolid      �  
  
        %   $  globalprevfocus 
           &  gfinlabel      $  gfsilence   # �$  gfpreviewing    
           &  gfsilence         &  gfpreviewing                  getcurrentwindow      getrealwindow     getwindowname   '       dialogactive    # �%  1 WN_QUICK_SETTINGSQuickSettings - audacity   
  
     	           dialogactive    # D%  1 WN_EQUALIZATIONEqualization 
  " @%  1 WN_GRAPHIC_EQGraphic EQ 
  
  
  # |   %     getwindowsubtypecode      (   
  
          +     getjcfoption    '       +          setjcfoption          %        getobjectname                                getobjectvalue                saycontrolex            +   %    setjcfoption               	           dialogactive    # �   %     getwindowsubtypecode      '   
  
  # ,      %     getpriorwindow    getwindowsubtypecode         
  
        %     getpriorwindow  &  ghslideredit       $  ghslideredit      getpriorwindow  '     %      %    getwindowname                                               saycontrolex               	           dialogactive    # h   %     getwindowsubtypecode      '   
  
  # �      %     getpriorwindow    getwindowsubtypecode         
  
  #       %     getnextwindow     getwindowsubtypecode         
  
        %     getnextwindow   &  ghslideredit       %     getpriorwindow  '     %      %    getwindowname                              1 msgCompressorSlider%1%%%2      %     getobjectvalue     $  ghslideredit            getwindowtext     formatstring                  saycontrolex               	      $  ghnull  &  ghslideredit            2,1,2     checkaudacityversion      # �%      %     getappmainwindow    
  
          &  gfsilence           	           dialogactive    # H	$  gfsilence   
  # x	   %     getcontrolid      �  
  
  # �	   %     getwindowname   1 WN_STOP_BTNStop 
  
          &  gfpreviewing            	      $  gfsilence      $  gfsilenceclearonnext             &  gfsilence         &  gfsilenceclearonnext               	           focusinmainwindow             dialogactive    # �
        getfocus      getwindowname   1      
  
          +     getjcfoption    '       +          setjcfoption            getobjectname   '       +   %    setjcfoption               getfocus    %                                              saycontrolex               	           iswarningdialog # T     2,0,3     checkaudacityversion      
             getfocus      saywindowtypeandtext               	         %     handlecustomwindows '  %     	         %     getparent   '     %     getwindowname   1 WN_TRACKPANELTrack Panel    
        %    getparent   '     $  ghaudacitylastarea  '  %  %  
     %  &  ghaudacitylastarea     %     getwindowname   1 WN_TRACKPANELTrack Panel    
        1 CS_TrackPanelTrack panel           say       %     handlecustomwindows    	            %    getfirstchild     getwindowname   1 WN_SELECTIONSelection   
        1 CS_SelectionBarSelection bar           say          1 CS_ToolbarsToolbars        say                  gettoolbar    istoolbar           gettoolbar  '  %  $  ghaudacitylasttoolbar   
     %  &  ghaudacitylasttoolbar        AnnounceToolbars      getquicksetting          %    getwindowname          say                %     handlecustomwindows '  %     	           sayfocusedobject    $  gfsilence      $  gfsilenceclearonnext             &  gfsilence         &  gfsilenceclearonnext       	           focusintrackpanel           sayobjectactiveitem            sayfocusedobject             �     saywindowtypeandtext       $  gfsilence      $  gfsilenceclearonnext             &  gfsilence         &  gfsilenceclearonnext       	         %     saywindowtypeandtext          p    istoolbar         %     getparent   '  %        
     %   '        %    getwindowname   1 WN_TOOLDOCKToolDock 
  # �    %    getwindowhierarchyx      
  
  " D   %    getwindowname   1 WN_TOOLDOCKToolDock 
  # @      %    getparent     getwindowhierarchyx      
  
  
             	               	      D     gettoolbar          getfocus      getparent      	      �     findtoolbar               getfocus      getappmainwindow      getfirstchild   '     %        %     findwindow  '  %          %    getnextwindow   '     %        %     findwindow  '     %  '     %     	          focusinmainwindow        getfocus    '      %     getwindowname   1 WN_TRACKPANELTrack Panel    
  " �          %     getparent     getparent     getwindowname   1 WN_TOOLDOCKToolDock 
  
             	               	      �    getpositionfield             '  %        
          +     getjcfoption    '       +          setjcfoption          %     ����      %    getobjectfromevent  '  %     %            accname '          +   %    setjcfoption          %    findfirstdigit  '  %       
 
       %  %       
    stringchopleft  '           %    formatpositionfield    	      �     findfirstdigit        %     123456789     0     stringreplacechars  '     %    0     stringcontains  '  %     	      �    formatpositionfield       %     stringstripallblanks    '     %  1
 csGroupSep,   stringcontains     1 csPositionGroupFmt000,00    '           '     %  1 csDaysdays    stringcontains       00  1 csDaysdays  
  '     %  1 csPositionHHMMFmt00h00m00   
  '        %  %         stringtrimcommon          %  1	 csDecimal.    stringcontains  '  %        
 
       %     %    stringlength    %  
    stringright '        %    0           stringreplacechars    stringtrimleadingblanks '        %              substring     123456789     stringcontainschars         %    stringlength       %    stringlength    
  '  %       
       0   %  
  '  %       
  '           %       %       
    substring     00    0     stringreplacesubstrings '  %     %  %       
  %  
     %    stringlength    %  
    substring   
  '           %       %       
    substring     00    0     stringreplacesubstrings '  %     %  %     %    stringlength    %  
       
    substring   
  '           %    stringlength         
       0   %  
  '     %     	      �    getpositionfieldid          2,2,0     checkaudacityversion                     getfocus      getrealwindow   $  giidselectiontypecombo    finddescendantwindow      getcurrentitem  '  %     �
  
     %       
     $  giidselectionstart  '     %       
     $  giidselectionstart  '     %       
     $  giidselectionlength '     $  giidselectionlength '        %       
     $  giidselectionend    '     %       
     $  giidselectionlength '     %       
     $  giidselectionend    '     $  giidselectioncenter '           %   '     %     	      �     getpositionfieldhandle                getfocus      getrealwindow      %     getpositionfieldid    finddescendantwindow       	      p    saypositionfield           %     getpositionfieldhandle  '     %    getpositionfield    '  %       %    # �      AnnounceMessage   getquicksetting 
        1  To use this feature you must enable the selection toolbar          say                	              %  %    sayformattedmessage               	      �     schedulepositionfield         %     getpositionfieldhandle  &  ghsaypositionfield        &  gfpositionfieldupdated         $sayselectionstart       noproject           saynoproject       	           dialogactive    " �      menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey       	           2,2,0     checkaudacityversion                     getfocus      getrealwindow   $  giidselectiontypecombo    finddescendantwindow      getcurrentitem  '        �
    getpositionfieldid  '  %        
     1 msgStartstart   '     %        
     1 msgStartstart   '     %        
     1	 msgLengthlength '     1	 msgLengthlength '          �
  '                getfocus      getrealwindow   %    finddescendantwindow    '       issamescript          %    setfocus       	         %    getpositionfield    '  %          1  To use this feature you must enable the selection toolbar          say          1 msgPositionField%1 %2   %  %    formatstring    '           %  %    saymessage              �    $sayselectionend         noproject           saynoproject       	           dialogactive    " �      menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey       	           2,2,0     checkaudacityversion                     getfocus      getrealwindow   $  giidselectiontypecombo    finddescendantwindow      getcurrentitem  '        �
    getpositionfieldid  '  %        
     1 msgEndend   '     %        
     1	 msgLengthlength '     %        
     1 msgEndend   '     1	 msgCentercenter '          �
  '                getfocus      getrealwindow   %    finddescendantwindow    '       issamescript          %    setfocus       	         %    getpositionfield    '  %          1  To use this feature you must enable the selection toolbar          say            2,2,0     checkaudacityversion                     getfocus      getrealwindow     �
    finddescendantwindow    '       savecursor          invisiblecursor       %    movetowindow            pause           controlischecked    '       restorecursor      %          %    getnextwindow   '        %    getwindowname   '        1 msgPositionField%1 %2   %  %    formatstring    '           %  %    saymessage              4    cleantrackname     %   '     %  1 CS_SELECT_ON Select On          stringreplacesubstrings '     %  1
 CS_MUTE_ON Mute On          stringreplacesubstrings '     %  1
 CS_SOLO_ON Solo On          stringreplacesubstrings '     %  1 CS_SELECTED Selected            stringreplacesubstrings '     %  1 CS_MUTED Muted          stringreplacesubstrings '     %  1	 CS_SOLOED Soloed            stringreplacesubstrings '     %  1 CS_SYNCLOCKED Sync Locked           stringreplacesubstrings '  %     	          getselectedtracks            '        '       gettrackpanelobj    '  %      accchildcount   '        '       '  %  %  
     %    %    accstate    '  %       
     %     %       
  '  %  '     %     %  1 CS_TRACKS_ITEM_SEP, 
  '     %      %    %    accname '     %    cleantrackname  '  %  %  
  '     %     %    inttostring 
  '     %       
  '        %       
 
    %       
     %  1 CS_TRACKS_ITEM_SEP, 
  '     %  1 CS_TRACKS_RANGE_SEP-    
  '     %      %    %    accname '     %    cleantrackname  '  %  %  
  '     %     %    inttostring 
  '           '        %       
  '   �    %       
 
    %       
     %  1 CS_TRACKS_ITEM_SEP, 
  '     %  1 CS_TRACKS_RANGE_SEP-    
  '     %      %    %    accname '     %    cleantrackname  '  %  %  
  '     %     %    inttostring 
  '           '     %     	          $sayselectedtext         focusinmainwindow              issamescript      getselectedtracks   '   %         %          say               1	 cmsgNothingSelectedNothing selected   saymessage                $sayselectedtext          �    $downcell        ispccursor    " L      userbufferisactive  
  " t      focusintrackpanel     
          $downcell   	           noproject           saynoproject       	                 getfocusobject  '   %       accchildcount   '  %        
          beep       	      %       accfocus    '  %  %  
          beep       	      %       
  '  %  %  
  # �%     %    accstate         
    
     %       
  '   �   %  %  
           %    inttostring $  gsgotrackupkey  $  gsgotrackdownkey      navigatetrackpanel          pause           sayline            beep             �    $upcell      ispccursor    " H      userbufferisactive  
  " p      focusintrackpanel     
          $upcell 	           noproject           saynoproject       	                 getfocusobject  '   %       accchildcount         
          beep       	      %       accfocus    '  %       
          beep       	      %       
  '  %        
 
 # �%     %    accstate         
    
     %       
  '   �   %        
 
         pause            %    inttostring $  gsgotrackupkey  $  gsgotrackdownkey      navigatetrackpanel          sayline            beep             �    $sayactivecursor         focusinmainwindow     " X      issamescript    
  " x      ispccursor    
  " �      userbufferisactive  
  " �      noproject   
          $sayactivecursor    	           2,2,0     checkaudacityversion                  getfocus      getrealwindow   $  giidaudioposition     finddescendantwindow    '                 getfocus      getrealwindow     �
    finddescendantwindow    '         %     getnextwindow     getnextwindow   '         %     getpositionfield    '  %          1  To use this feature you must enable the selection toolbar          say                %  %    saymessage           �     $sayselectiontype                 getfocus      getrealwindow   $  giidselectiontypecombo    finddescendantwindow            getwindowtext   '            %   %     saymessage        �    $setselectiontype                 getfocus      getrealwindow   $  giidselectiontypecombo    finddescendantwindow    '     %    getcurrentitem  '  %  %   
          $sayselectiontype   	      %   %  
 
    1 cksDownArrowdownarrow   '     1
 cksUpArrowUpArrow   '        %   %  
    abs '       getfocus    '  $  gfsilence   '       &  gfsilence      %    setfocus            pause      %        %    typekey         pause      %       
  '   �        pause         %    setfocus            pause      %  &  gfsilence        $sayselectiontype      P     $scriptfilename    1 msgProgNameAudacity   scriptandappnames         �    $audacityscriptkeyhelp       userbufferisactive          userbufferdeactivate               issamescript      # �      focusinmainwindow   
        1  JAWS keystrokes for script version %1, for Audacity 2.0.0 or later:   2.2.2-beta-2020-06-21     formatstring    '        (   %     sayformattedmessage         (   1 \To say the selection start position, press %keyfor (SaySelectionStart).
To say the selection end position, press %keyfor(SaySelectionEnd).
To move focus to these controls, press the key twice quickly.
To say the Audio Position value, press %keyfor(SayActiveCursor).
To say the active cursor while the PC cursor is active, press %keyfor(SayActiveCursor) twice quickly.
To Say the current selection type (Audacity 2.2.0 and later), press %KeyFor(SaySelectionType).
To set the selection type (Audacity 2.2.0 and later), press JAWSKey+a,p followed by s (start-end), l (end-length), e (length-end) or c (length-center).  You can also use the numbers 1-4.
In the main window to say the numbers of the selected tracks, press %KeyFor(SaySelectedText).  Press twice quickly to say track names.

In the track panel and selection bar , to preview audio after (inside) the selection start, press %KeyFor(SayPriorWord)
In the track panel and selection bar , to preview audio before (inside) the selection end, press %KeyFor(SayNextWord)
In the track panel and selection bar , to preview audio before (outside) the selection start, press %KeyFor(SelectPriorWord)
In the track panel and selection bar , to preview audio after (outside) the selection end, press %KeyFor(SelectNextWord)

To switch between playing audio and speaking position time for cursor motion commands, press %KeyFor(ToggleMotionPreview).  
This is the same as setting Motion Preview on and Announce Position off, or setting  Motion Previewing off and Announce Position on.  Thus you can quickly toggle between hearing the cursor position or hearing audio.  This is a temporary change.  It does not change the saved value of these settings, and the settings will revert to the Quick Settings values after opening Quick Settings or switching focus away from Audacity.

To increase gain of focus track, press %keyfor (MouseUp).
To reduce gain of focus track, press %keyfor (MouseDown).
To adjust pan left, press %keyfor (MouseLeft).
To adjust pan right, press %keyfor (MouseRight).
The last 4 keys replace the default JAWS mouse movement scripts while focus is in the main window.  If you want to activate the original functionality while in the main window, turn on the JAWS cursor.

To say the value of the recording meter, press %KeyFor(SayRecordingMeter).
 Press twice quickly to move focus to the meter.
To say the value of the playback meter, press %KeyFor(SayPlaybackMeter).
 Press twice quickly to move focus to the meter.

To go to a track by number, press %KeyFor(GoToTrack).
To move the current track to a track position by number, press %KeyFor(MoveCurrentTrackTo).
To mark the current track, press %KeyFor(MarkTrack).
To go to the marked track, press %KeyFor(GoToMarkedTrack).
To go to the marked track and mark the starting track, press %KeyFor(ExchangeWithMark).
To move the current track to the position of the marked track and set the mark to the current track, press %KeyFor(MoveCurrentTrackToMark).

To find the tempo, press %KeyFor(TempoStartStop).  Playback starts.  Then press %KeyFor(TempoTap) for each beat.  (You only need to press the last key of the sequence for any Tempo layer key once you have entered the Tempo layer.)  
When you are finished press %KeyFor(TempoStartStop) again.  Playback stops and the tempo in beats per minute is spoken.  
After that you can press %KeyFor(TempoAnnounce) to speak the tempo again or %KeyFor(TempoCopy) to copy it to the clipboard.  The value will be retained until %KeyFor(TempoStartStop) is pressed again.  It is wise to press ESC when you are done with the Tempo layer to avoid confusion.  
The tempo is calculated by dividing the time of the last beat minus the time of the first beat by the number of beats minus 1.

To toggle speech on or off, press %keyfor(MuteSynthesizer).
To toggle alert messages on or off, press %keyfor (AnnounceOnOff)).  This duplicates the Announce Audacity messages option in Adjust JAWS options.
See What's new.md for more info.

In a toolbar to move to the next toolbar press %KeyFor (NextDocumentWindow)
In a toolbar to move to the previous toolbar press %KeyFor (PreviousDocumentWindow)

To speak the program's state (play/pause/record/stop) press %KeyFor(SayAudacityState)

To switch between the two lists in the Edit Chains dialog, press %keyfor (SwitchChainsList).

To get help with Audacity hot keys, press %keyfor(AudacityKeysHelp).
To get the default Windows hot key help, press %keyfor(AudacityKeysHelp) twice quickly.

To change settings for the Audacity script, press %KeyFor (AdjustJawsOptions) %Keyfor (AdjustJawsVerbosity) %Keyfor (QuickSettings).
To reset all script options to default values, press %keyfor (ResetConfig)

If the "ENTER pauses during play/record" option is on, pressing %KeyFor(ENTER) while playing or recording sends the Pause key.  Use %KeyFor(CtrlEnter) to execute ENTER in this situation.

If Silence Effect Preview is on and you hit the Preview button in an effect, sometimes the silencing of the previewing does not get turned off.  This will result in missing speech that occurs as a result of focus changes.  You can fix this by switching away from Audacity and back.

In some common VST plugins, such as L1V:
To set focus to the preset control, press %keyfor (VSTPreset).
To load an existing preset, press  %keyfor (VSTLoadPreset).
To save the current settings as a preset, press  %keyfor (VSTSavePreset).

To Change the URL for the Audacity Jaws Guide, press %keyfor (AddAudacityJawsGuide)      sayformattedmessage         addhotkeylinks             dialogactive    # �           getfocus      getrealwindow     �*    finddescendantwindow    
          (   1 1 To set focus to the preset option, press %keyfor (VSTPreset).
To load an existing preset, press  %keyfor (VSTLoadPreset).
To save the current settings as a preset, press  %keyfor (VSTSavePreset).   sayformattedmessage         addhotkeylinks     	           $hotkeyhelp       h    keymapchangedevent       %       
  " L %       
  
        %  1 ksAudacityLayer1JAWSKey+a     stringcompare         
  " �    %  1 ksAudacityLayer2Insert+a      stringcompare         
  
          &  giaudacitykeylayer        &  globalactivelayer        options   KeyLayerSound     playjcfsoundfile       	         %       
     $  giaudacitykeylayer       
        %  1 ksPositionLayerp      stringcompare         
          &  giaudacitykeylayer          1 msgPositionLayer_startposition  1 msgPositionLayer_startposition    saymessage     	         %  1 ksShortLayers     stringcompare         
          &  giaudacitykeylayer          1 msgShortLayer_Startshort    1 msgShortLayer_Startshort      saymessage     	         %  1 ksTempoLayert     stringcompare         
          &  giaudacitykeylayer        &  gftemporunning          1 msgTempoLayer_Starttempo    1 msgTempoLayer_Starttempo      saymessage     	            %        
     $  giaudacitykeylayer           &  giaudacitykeylayer  	         %       
     $  giaudacitykeylayer          options   TableLayerExitSound   playjcfsoundfile             &  giaudacitykeylayer  	            %   %  %    keymapchangedevent        �    $audacitylayerhelp     1 ] Go to a track by number press g.
Move a track by number press m.
Mark current track press k.
Go to marked track press Shift+g.
Exchange current track with mark press x.
Move current track to mark press Shift+m.
Enter layer to set or say position display type layer press p.
Enter layer to say short audio sections (Shift+F5-F8) press s.
Enter layer to find tempo press t.        say       �     $positionlayerhelp     1  start-end press s.
start-length press l.
length-end press e.
length-center press c.
say position display type press p.         say       �     $shortlayerhelp    1  Shift+F5-F8 press j, k, l, ;.
Shift+Control+F5, F7 press Control+j, Control+;.
c press c.          say       0     $sendkey          %     typekey       �     showjawsguide           1 
 loading Audacity JAWS Guide web page    1 msgLoadingJawsGuide_SJAWS Guide   saymessage        $  gsjawsguidelink   run       �    $audacitykeyshelp        issamescript      # X      focusinmainwindow   
          userbufferisactive          userbufferdeactivate               userbufferclear          1  Default keystrokes for Audacity v2.3.3 (from %1, by %2).  Access the guide at   1 CS_JawsGuide_TitleAudacity 2.3.2 and 2.3.3 Guide    1 CS_JawsGuide_AuthorDavid Bailes   formatstring      userbufferaddtext         $  gsjawsguidelink   ShowJawsGuide() 1 CS_JawsGuide_LINK_DISPlink to JAWS guide      userbufferaddtext         1 ,General
Command	Keystroke
Open audio file	Ctrl + O
Import audio file	Ctrl + Shift + I
New project	Ctrl + N
Save project	Ctrl + S
Export Audio	Ctrl + Shift + E
Preferences dialog	Ctrl + P
Cycle forward through Toolbars, Track view table, and Selection bar	Ctrl + F6
Cycle backward through Toolbars, Track view table, and Selection bar	Ctrl + Shift + F6
Cycle forward through the Audacity main window and any open modeless dialogs	Alt + F6
Cycle backward through the Audacity main window and any open modeless dialogs	Alt + Shift + F6
Zoom normal	Ctrl + 2
Zoom in	Ctrl + 1
Zoom out	Ctrl + 3

Playback
Command	Keystroke
Start/Stop	Spacebar
Start/Stop and move cursor	X
Pause/resume	P
Seek backward short period during playback	Left Arrow
Seek forward short period during playback	Right Arrow
Seek backward long period during playback	Shift + Left Arrow
Seek forward long period during playback	Shift + Right Arrow
Play looped	Shift + Spacebar
Select Playback Device dialog	Shift + O
Play cut/delete preview	C
Play short period before selection start	Shift + F5
Play short period after selection start	Shift + F6
Play short period before selection end	Shift + F7
Play short period after selection end	Shift + F8
Play short period before and after selection start	Ctrl + Shift + F5
Play short period before and after selection end	Ctrl + Shift + F7

Track view table
Command	Keystroke
Move to previous track	Up Arrow
Move to next track	Down Arrow
Move to first track	Ctrl + Home
Move to last track	Ctrl + End
Toggle selection of focused track	Enter
Select all the tracks (and a time range which includes all the audio)	Ctrl + A
Deselect all the tracks (and any time-range)	Ctrl + Shift + A
Select all the tracks	Ctrl + Shift + K
Open menu of focused track	Shift + M or Application key
Close (Delete) focused track	Shift + C

Audio track
Command	Keystroke
Change gain of focused track	Shift + G
Change pan of focused track	Shift + P
Mute/Unmute focused track	Shift + U
Mute all tracks	Ctrl + U
Unmute all tracks	Ctrl + Shift + U
Solo/Unsolo focused track	Shift + S

Moving the cursor
Command	Keystroke
Move to start of tracks (time zero)	Home
Move to end of all audio	End
Move to start of audio in selected tracks	J
Move to end of audio in selected tracks	K
New cursor position at playback position	Left Bracket
Stop playback and move cursor	X
Move backward short period	Comma
Move forward short period	Period
Move backward long period	Shift + Comma
Move forward long period	Shift + Period
Cursor left by a small amount	Left Arrow
Cursor right by a small amount	Right Arrow

Selecting a time range
Command	Keystroke
Select time range which includes all the audio, and select all tracks	Ctrl + A
Selection start at start of tracks (time zero)	Shift + Home
Selection end at end of all the audio	Shift + End
Selection end at playback position	Right Bracket
Selection start at start of audio in selected tracks	Shift + J
Selection end at end of audio in selected tracks	Shift + K
To move the end of the selection to the right by a small amount	Shift + Right Arrow
To move the end of the selection to the left by a small amount	Ctrl + Shift + Left Arrow
To move the start of the selection to the right by a small amount	Ctrl + Shift + Right Arrow
To move the start of the selection to the left by a small amount	Shift + Left Arrow

Editing
Command	Keystroke
Undo	Ctrl + Z
Redo	Ctrl + Y
Delete selected audio	Delete
Cut selected audio	Ctrl + X
Copy selected audio	Ctrl + C
Paste	Ctrl + V
Replace selected audio with silence	Ctrl + L
Duplicate the selected audio	Ctrl + D
Close (Delete) focused track	Shift + C
Find zero crossings	Z

Labels
Command	Keystroke
Add label at selection	Ctrl + B
Add label at playback position	Ctrl + M
Move to next label	Alt + Right Arrow
Move to previous label	Alt + Left Arrow

Clips
Command	Keystroke
Select previous clip	Alt + Comma
Select next clip	Alt + Period
Split	Ctrl + I
Split delete	Ctrl + Alt + K
Split cut	Ctrl + Alt + X
Split New	Ctrl + Alt + I
Detach at silences	Ctrl + Alt + J
Join	Ctrl + J

Recording
Command	Keystroke
Record	R
Record in new Track	Shift + R
Punch and roll record	Shift + D
Pause/Resume	P
Stop	Spacebar
Select Audio Host dialog	Shift + H
Select Recording Device dialog	Shift + I
Select Recording Channels dialog	Shift + N   userbufferaddtext         1 cScBufferNewLine
     userbufferaddtext         1 	 Press ESCAPE to close this message.   userbufferaddtext           userbufferactivate          jawstopoffile           sayline            $windowkeyshelp       D     $mouseup      MouseUp '      %     mousemovement         H     $mousedown    MouseDown   '      %     mousemovement         H     $mouseleft    MouseLeft   '      %     mousemovement         H     $mouseright   MouseRight  '      %     mousemovement         l     $selectionstart      �
  1	 msgSelectionStartSelection Start      sayselectionposition          h     $selectionend        �
  1 msgSelectionEndSelection end      sayselectionposition              $finishmarkerright       ispccursor    " T      userbufferisactive  
  " l $  gfinlabel   
          $selectnextcharacter    	           isstopped             typecurrentscriptkey       	           AnnounceMessage   getquicksetting # ,     noproject     
  # P     focusintrackpanel   
  # l$  gfsayposition   
          �
    schedulepositionfield            1 msgMoveSelection%1 %2   1 msgEndend   1 msgRightright     formatstring    '     SelectNextCharacter '     %  %     markermovement          AnnounceMessage   getquicksetting # �     noproject     
  # �     focusintrackpanel   
          pause      $  gfpreviewmotion         Shift+F7      typekey             �    $finishmarkerleft        ispccursor    " T      userbufferisactive  
  " t      isstopped     
  " � $  gfinlabel   
          $selectpriorword    	           AnnounceMessage   getquicksetting #       noproject     
  # $  gfsayposition   
          �
    schedulepositionfield            1 msgMoveSelection%1 %2   1 msgEndend   1 msgLeftleft   formatstring    '     SelectPriorWord '     %  %     markermovement          AnnounceMessage   getquicksetting # 0     noproject     
          pause      $  gfpreviewmotion         Shift+F7      typekey             �    $startmarkerright        ispccursor    " T      userbufferisactive  
  " t      isstopped     
  " � $  gfinlabel   
          $selectnextword 	           AnnounceMessage   getquicksetting # �      noproject     
  # $  gfsayposition   
          �
    schedulepositionfield            1 msgMoveSelection%1 %2   1 msgStartstart   1 msgRightright     formatstring    '     SelectNextWord  '     %  %     markermovement          AnnounceMessage   getquicksetting # 4     noproject     
          pause      $  gfpreviewmotion         Shift+F6      typekey                 $startmarkerleft         ispccursor    " T      userbufferisactive  
  " l $  gfinlabel   
          $selectpriorcharacter   	           isstopped             typecurrentscriptkey       	           AnnounceMessage   getquicksetting # ,     noproject     
  # P     focusintrackpanel   
  # l$  gfsayposition   
          �
    schedulepositionfield            1 msgMoveSelection%1 %2   1 msgStartstart   1 msgLeftleft   formatstring    '     SelectPriorCharacter    '     %  %     markermovement          AnnounceMessage   getquicksetting # �     noproject     
  # �     focusintrackpanel   
          pause      $  gfpreviewmotion         Shift+F6      typekey             H    $jawshome        ispccursor  # @      noproject   
  # d      focusintrackpanel   
          saynoproject       	           ispccursor  # �      focusintrackpanel   
  # �      userbufferisactive    
  # $  gfinlabel     
  # <     AnnounceMessage   getquicksetting 
          isstopped             saynotstopped      	           jawshome                  1	 msgMoveToMove to %1 of %2   1 msgStartstart   1 msgAllAudioall audio      formatstring      sayformattedmessage            $jawshome         �    $jawsend         ispccursor  # @      noproject   
  # d      focusintrackpanel   
          saynoproject       	           ispccursor  # �      focusintrackpanel   
  # �      userbufferisactive    
  # $  gfinlabel     
  # <     AnnounceMessage   getquicksetting 
          isstopped             saynotstopped      	           jawsend               1	 msgMoveToMove to %1 of %2   1 msgEndend   1 msgAllAudioall audio      formatstring      sayformattedmessage    $  gfsayposition         
 
         �
    schedulepositionfield                 $jawsend          �    $movetostartofselectedtracks         dialogactive    " X      menusactive 
  " p $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey               istrackselected           saynotrackselected     	            1	 msgMoveToMove to %1 of %2   1 msgStartstart   1	 msgSelectedTracksselected tracks      formatstring      announcekeymessage          pause           �
    schedulepositionfield            �    $movetoendofselectedtracks       dialogactive    " T      menusactive 
  " l $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey               istrackselected           saynotrackselected     	            1	 msgMoveToMove to %1 of %2   1 msgEndend   1	 msgSelectedTracksselected tracks      formatstring      announcekeymessage          pause           �
    schedulepositionfield            �    $selecttobeginning       dialogactive    " L      menusactive 
  " d $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey               istrackselected           saynotrackselected     	            1 msgSelectToSelect to %1 of %2   1 msgStartstart   1	 msgSelectedTracksselected tracks      formatstring      announcekeymessage          pause           �
    schedulepositionfield            �    $selecttoend         dialogactive    " H      menusactive 
  " ` $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey               istrackselected           saynotrackselected     	            1 msgSelectToSelect to %1 of %2   1 msgEndend   1	 msgSelectedTracksselected tracks      formatstring      announcekeymessage          pause           �
    schedulepositionfield            �    $selectfromstartofline       noproject           saynoproject       	           ispccursor  # �      focusintrackpanel   
  # �      userbufferisactive    
  # � $  gfinlabel     
  #      AnnounceMessage   getquicksetting 
          selectfromstartofline                  1 msgSelectToSelect to %1 of %2   1 msgStartstart   1 msgAllAudioall audio      formatstring      sayformattedmessage            $selectfromstartofline        �    $selecttoendofline       noproject           saynoproject       	           ispccursor  # �      focusintrackpanel   
  # �      userbufferisactive    
  # � $  gfinlabel     
  #       AnnounceMessage   getquicksetting " $  gfsayposition   
  
          selecttoendofline           AnnounceMessage   getquicksetting                1 msgSelectToSelect to %1 of %2   1 msgEndend   1 msgAllAudioall audio      formatstring      sayformattedmessage       $  gfsayposition         
 
         pause           �
    schedulepositionfield                 $selecttoendofline        �    $deleteselectedaudio         noproject           saynoproject       	           dialogactive    " �      menusactive 
  " � $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey       	           istrackselected           saynotrackselected     	           focusinmainwindow           isstopped             saynotstopped      	           typecurrentscriptkey            AnnounceMessage   getquicksetting            1	 msgDelete_lDelete selected audio    1 msgDelete_sDelete     sayformattedmessage               saycurrentscriptkeylabel            typecurrentscriptkey             �     $jawsdelete      focusintrackpanel   # H $  gfinlabel     
          $deleteselectedaudio            $jawsdelete       �     $jawsbackspace       focusintrackpanel   # L $  gfinlabel     
          $deleteselectedaudio            $jawsbackspace             $saypriorcharacter       userbufferisactive  " T      dialogactive    
  " t      ispccursor    
  " �      focusintrackpanel     
  " � $  gfinlabel   
          $saypriorcharacter  	           noproject           saynoproject       	           isstopped      $  gfsayposition           �
    schedulepositionfield              typecurrentscriptkey            pause      $  gfpreviewmotion         Shift+F6      typekey               typecurrentscriptkey                  $saynextcharacter        userbufferisactive  " T      dialogactive    
  " t      ispccursor    
  " �      focusintrackpanel     
  " � $  gfinlabel   
          $saynextcharacter   	           noproject           saynoproject       	           isstopped      $  gfsayposition           �
    schedulepositionfield              typecurrentscriptkey            pause      $  gfpreviewmotion         Shift+F6      typekey               typecurrentscriptkey                  $saypriorword        userbufferisactive  " P      dialogactive    
  " p      ispccursor    
  " �      focusintrackpanel   " �      focusinselectionbar 
    
  " � $  gfinlabel   
          $saypriorword   	           Shift+F6      typekey            $saynextword         userbufferisactive  " P      dialogactive    
  " p      ispccursor    
  " �      focusintrackpanel   " �      focusinselectionbar 
    
  " � $  gfinlabel   
          $saynextword    	           Shift+F7      typekey       (    $selectpriorword         userbufferisactive  " T      dialogactive    
  " t      ispccursor    
  " �      focusintrackpanel   " �      focusinselectionbar 
    
  " � $  gfinlabel   
          $selectpriorword    	           Shift+F5      typekey            $selectnextword      userbufferisactive  " P      dialogactive    
  " p      ispccursor    
  " �      focusintrackpanel   " �      focusinselectionbar 
    
  " � $  gfinlabel   
          $selectnextword 	           Shift+F8      typekey       �    $copy        noproject           saynoproject       	           istrackselected   # �      userbufferisactive    
  # �      dialogactive      
  # �      menusactive   
  # � $  gfinlabel     
          saynotrackselected     	           focusinmainwindow   # P$  gfinlabel     
  # x     userbufferisactive    
          isstopped             saynotstopped      	           typecurrentscriptkey            AnnounceMessage   getquicksetting         Message 1 	 Copy selected audio to clipboard           sayusingvoice                 $copyselectedtexttoclipboard          L    $cuttoclipboard      noproject           saynoproject       	           istrackselected   # �      dialogactive      
  # � $  gfinlabel     
          saynotrackselected     	           focusinmainwindow   # $  gfinlabel     
  # 8     userbufferisactive    
          isstopped             saynotstopped      	           typecurrentscriptkey            AnnounceMessage   getquicksetting         Message 1  cut selected audio to clipboard        sayusingvoice                 $cuttoclipboard       �     $deselectall         noproject           saynoproject       	         1 msgDeselectAlldeselect all    announcekeymessage             refreshfocus          t     refreshfocus         pause              getfocus      refreshwindow           msaarefresh       �    $closefocustrack         noproject           saynoproject       	           userbufferisactive    # �      focusintrackpanel   
  # � $  gfinlabel     
          isstopped             saynotstopped      	         1
 msgCloseFocusedTrackclose focused track   announcekeymessage          refreshfocus               saycurrentscriptkeylabel            typecurrentscriptkey             �     $announceonoff     1  UOAnnounceMessages:Announce Audacity messages     :          stringsegment              uoannouncemessages  
  '      %          say           $togglemotionpreview       1 	 UOMotionPreview:Motion Previewing     :          stringsegment   '   $  gftogglemotionpreview            &  gftogglemotionpreview        PreviewMotion     getquicksetting &  gfpreviewmotion %   1 cScSpace    
  1 cmsg_offOff 
  '        SayPosition   getquicksetting &  gfsayposition           &  gftogglemotionpreview        &  gfpreviewmotion %   1 cScSpace    
  1 cmsg_onOn   
  '         &  gfsayposition         %          say       ,    sayactivelabel       savecursor          invisiblecursor         routeinvisibletopc          pause              �     255255255     rgbstringtocolor                findcolors             getcolorfield           say            restorecursor         �     $tab         $tab         userbufferisactive    # `      dialogactive      
  # �      focusintrackpanel   
          msaarefresh            focusintrackpanel           sayactivelabel           �     $shifttab        $shifttab        userbufferisactive    # h      dialogactive      
  # �      focusintrackpanel   
          msaarefresh            focusintrackpanel           sayactivelabel           �    $nextdocumentwindow         gettoolbar    istoolbar             $nextdocumentwindow         gettoolbar  '      %     getnextwindow   '  %  # �    %    iswindowdisabled    " �    %    iswindowvisible   
  
        %    getnextwindow   '   �    %          %     getfirstwindow  '        %    getfirstchild   '  %  # �   %    iswindowdisabled    " �      %    getwindowclass    wxWindowClass     stringcompare         
  
  " L      %    getwindowclass    wxWindow      stringcompare         
  
  " �   %    getwindowsubtypecode         
  
  
        %    getnextwindow   '   p      %    setfocus                 $previousdocumentwindow         gettoolbar    istoolbar             $previousdocumentwindow         gettoolbar  '      %     getpriorwindow  '  %  # �    %    iswindowdisabled    " �    %    iswindowvisible   
  
        %    getpriorwindow  '   �    %          %     getlastwindow   '           %    getfirstchild     getlastwindow   '  %  # �   %    iswindowdisabled    
        %    getpriorwindow  '   �   %        %    setfocus                �    getaudacitystate               getfocus      getappmainwindow      getfirstchild   '      1 WN_TRANSPORT_TOOLBARTransport     findtoolbar '   %                 	            %     getfirstchild     getnextwindow   '      %     getobjstate '     %     getnextwindow   '      %     getobjstate '     %     getnextwindow   '      %     getobjstate '           %     getnextwindow     getnextwindow     getnextwindow   '      %     getobjstate '  %        
          '     %        
          '          '     %        
     %       
  '     %     	      x    $sayaudacitystate        getaudacitystate    '        dialogactive    " l      menusactive 
          saycurrentscriptkeylabel            typecurrentscriptkey       	      %         
        1  Cannot find transport toolbar.  The transport toolbar must be enabled for this script to work.         say    	           noproject           saynoproject       	      %        
     1 msgPlayplay '     %        
     1	 msgRecordrecord '     1 msgStopstop '     %        
     %  1 cScSpace    
  1 msgPausepause   
  '        %         say       �    $enter  $  gfinlabel            &  gfinlabel        saycurrentscriptkeylabel            typecurrentscriptkey       	           focusinmainwindow   # �      isstopped     
  # �      EnterPause    getquicksetting 
        1
 csPauseKeyp   typekey            userbufferisactive          $enter          saycurrentscriptkeylabel            typecurrentscriptkey                �    $ctrlenter       focusinmainwindow   # L      isstopped     
  # h $  gfinlabel     
  # �      EnterPause    getquicksetting 
        1 cksEnterEnter     typekey       1 cksEnterEnter     %     say            userbufferisactive          $controlenter           saycurrentscriptkeylabel            typecurrentscriptkey                �     $openlistbox         focusintrackpanel           saycurrentscriptkeylabel            typecurrentscriptkey               $openlistbox          �     $closelistbox        focusintrackpanel           saycurrentscriptkeylabel            typecurrentscriptkey               $closelistbox         �     isdigits          %           $     stringreplacechars  '        %    +-0123456789            stringreplacechars    stringstripallblanks    '     %    stringlength          
     	           navigatetrackpanel                  getfocusobject      accfocus    '             getfocusobject      accchildcount   '     %     stringstripallblanks    '      %     isdigits         	         %          stringleft  '     %     stringtoint '  %    +   
  " P%    -   
  
       %  %  
  '     %  %  
  %  
 
    %  %  
  '     %  %  
       
          %  
  '        %    abs '  %        
     %  '     %  '     $  gfsilence   ' 	      &  gfsilence   %        
 
       %    typekey    %       
        
               delay         %       
  '   8        pause           pause      % 	 &  gfsilence      l    $gototrack       focusintrackpanel             saycurrentscriptkeylabel            typecurrentscriptkey       	         1 msgTrackNumbertrack number: 1 msgGoToTrackTitlego to  %     inputbox            pause         %   $  gsgotrackupkey  $  gsgotrackdownkey      navigatetrackpanel          sayfocusedobject             P    $marktrack       focusintrackpanel             saycurrentscriptkeylabel            typecurrentscriptkey       	                 getfocusobject      accfocus    &  gitrackmark            1 msgTrackMarkedTrack %1 marked      $  gitrackmark   inttostring   formatstring      saymessage        �    $gotomarkedtrack         focusintrackpanel             saycurrentscriptkeylabel            typecurrentscriptkey       	      $  gitrackmark       
             1 msgNoTrackMarkedno mark   saymessage     	            $  gitrackmark   inttostring $  gsgotrackupkey  $  gsgotrackdownkey      navigatetrackpanel          sayfocusedobject          �    $exchangewithmark        focusintrackpanel             saycurrentscriptkeylabel            typecurrentscriptkey       	      $  gitrackmark       
             1 msgNoTrackMarkedno mark   saymessage     	                 getfocusobject      accfocus    '         $  gitrackmark   inttostring $  gsgotrackupkey  $  gsgotrackdownkey      navigatetrackpanel          sayfocusedobject       %   &  gitrackmark    |    $movecurrenttrackto      focusintrackpanel             saycurrentscriptkeylabel            typecurrentscriptkey       	         1 msgTrackNumbertrack number: 1 msgMoveTrackToTitleMove to  %     inputbox            pause         %   $  gsmovetrackupkey    $  gsmovetrackdownkey    navigatetrackpanel          sayfocusedobject             �    $movecurrenttracktomark      focusintrackpanel             saycurrentscriptkeylabel            typecurrentscriptkey       	      $  gitrackmark       
             1 msgNoTrackMarkedno mark   saymessage     	                 getfocusobject      accfocus    '         $  gitrackmark   inttostring $  gsmovetrackupkey    $  gsmovetrackdownkey    navigatetrackpanel          sayfocusedobject       %   &  gitrackmark    `    $movetrackup         focusintrackpanel             saycurrentscriptkeylabel            typecurrentscriptkey       	                 getfocusobject  '   %       accfocus         
     	      %     %       accfocus         
    accname '       typecurrentscriptkey          %          say       t    $movetrackdown       focusintrackpanel             saycurrentscriptkeylabel            typecurrentscriptkey       	                 getfocusobject  '   %       accfocus    %       accchildcount   
     	      %     %       accfocus         
    accname '       typecurrentscriptkey          %          say            getobjstate       %     getwindowname   '       +     getjcfoption    '       +          setjcfoption          %   %       %  %    getobjectinfobyname '  %            +     getjcfoption    '       +          setjcfoption          %     ����      %    getobjectfromevent  '  %     %           accstate    '  %       
           '           '          ����'             +   %    setjcfoption       %     	      D     isstopped        getaudacitystate         
     	      |    $adjustjawsverbosity    1  UOAnnounceMessages:Announce Audacity messages     |   
  1 
 UOAnnounceToolbars:Announce toolbars    
    |   
  1  UOEnterPause:ENTER pauses during play/record    
    |   
  1 
 UOSilencePreview:Silence Effect Preview 
    |   
  1 UO_SILENCE_RECORDUOSilenceRecord:Silence Record 
  '      %     jawsverbositycore         �    $adjustjawsoptions       inhjdialog             1 > There is currently an open %product% dialog box. Only one %product% dialog box can be opened at a time.

You must close the current dialog by pressing Escape in order to bring up the requested dialog box
and then activate the desired dialog box.   1 & There is an open %product% dialog. Only one %product% dialog box can be opened at a time.
You must close the current dialog before opening a new one.     sayformattedmessage    	      1  UOAnnounceMessages:Announce Audacity messages     |   
  1 
 UOAnnounceToolbars:Announce toolbars    
    |   
  1  UOEnterPause:ENTER pauses during play/record    
    |   
  1 
 UOSilencePreview:Silence Effect Preview 
    |   
  1 UO_SILENCE_RECORDUOSilenceRecord:Silence Record 
  '        getjfwversion     �� 
 	       %     optionstreecore          %     jawsverbositycore            �     nodehlp       %        getactiveconfiguration    stringcontains     1 msgUO_AudacityOptionsHlpAudacity-specific options      	         %     nodehlp    	         �    uoannouncemessages        $  gsinisection      AnnounceMessage       $  gsinifile     inireadinteger  '  %        %       
           '     %       
  '        $  gsinisection      AnnounceMessage %  $  gsinifile     iniwriteinteger       %        
     1 cmsg_offOff    	      %       
     1 cmsg_onOn      	         d     uoannouncemessageshlp   1  If on, speaks messages for Audacity audio operations.      	      �    uoannouncetoolbars        $  gsinisection      Announcetoolbars          $  gsinifile     inireadinteger  '  %        %       
           '     %       
  '        $  gsinisection      Announcetoolbars    %  $  gsinifile     iniwriteinteger       %        
     1 cmsg_offOff    	      %       
     1 cmsg_onOn      	         |     uoannouncetoolbarshlp   1  If on, speaks the toolbar name when focus moves from one toolbar to another.       	      t    uoenterpause          $  gsinisection      EnterPause       $  gsinifile     inireadinteger  '  %        %       
           '     %       
  '        $  gsinisection      EnterPause  %  $  gsinifile     iniwriteinteger       %        
     1 cmsg_offOff    	      %       
     1 cmsg_onOn      	         �     uoenterpausehlp 1  If on, ENTER executes Pause during playback and record, and Control+ENTER sends ENTER.  Otherwise, sends ENTER to Audacity.    	      �    uosilencepreview          $  gsinisection      SilencePreview       $  gsinifile     inireadinteger  '  %        %       
           '     %       
  '        $  gsinisection      SilencePreview  %  $  gsinifile     iniwriteinteger       %        
     1 cmsg_offOff    	      %       
     1 cmsg_onOn      	         \     uosilencepreviewhlp 1  If on, Turns speech off while previewing an effect.    	      |    uosilencerecord       $  gsinisection      SilenceRecord        $  gsinifile     inireadinteger  '  %        %       
           '     %       
  '        $  gsinisection      SilenceRecord   %  $  gsinifile     iniwriteinteger       %        
     1 cmsg_offOff    	      %       
     1 cmsg_onOn      	         d     uosilencerecordhlp  1  If on, silences speech that occurs when starting to record.    	      �    adddefaultconfig       $  gsinisection      AnnounceMessage      $  gsinifile           iniwriteinteger       $  gsinisection      EnterPause       $  gsinifile           iniwriteinteger       $  gsinisection      AnnounceToolbars         $  gsinifile           iniwriteinteger       $  gsinisection      SilencePreview       $  gsinifile           iniwriteinteger       $  gsinisection      SilenceRecord        $  gsinifile           iniwriteinteger       $  gsinisection      SayPosition      $  gsinifile           iniwriteinteger       $  gsinisection      PreviewMotion         $  gsinifile           iniwriteinteger       $  gsinisection      JAWSGuideLink   1  http://vip.chowo.co.uk/wp-content/uploads/jaws/Audacity-2.3.2-Guide.html    $  gsinifile          iniwritestring     1  http://vip.chowo.co.uk/wp-content/uploads/jaws/Audacity-2.3.2-Guide.html    &  gsjawsguidelink    �    $resetconfig         getjfwversion      � 
  # �       $  gsinifile        	  findjawspersonalizedsettingsfile      fileexists  
        $  gsinisection      announce          $  gsinifile     inireadstring   '   %         $  gsinisection      announce    $  gsinifile           iniremovekey                  adddefaultconfig          1 
 Script options reset to default values         say           $sayappversion       $sayappversion     1  Jaws script version %1, for Audacity 2.0.0 or later.      2.2.2-beta-2020-06-21     formatstring    '      %           say         issamescript          %     userbufferaddtext            h    $selectall       $selectall       noproject           saynoproject       	           focusinmainwindow   # �      noproject     
  # � $  gfinlabel     
  # �      AnnounceMessage   getquicksetting 
          Message 1 MSGSelectAllAll tracks selected        sayusingvoice           refreshfocus             �     $selectinalltracks       noproject           saynoproject       	         1 msgSelectInAllTracksselect in all tracks      announcekeymessage             refreshfocus          �    processvst                getfocus      getrealwindow   %     finddescendantwindow    '       dialogactive    # � %  
        %    getwindowsubtypecode         
          isspeechoff '       speechoff         %    setfocus            pause           enterkey       %            speechon                %    setfocus                  saycurrentscriptkeylabel            typecurrentscriptkey             4     $vstpreset       �*    processvst        8     $vstloadpreset       �*    processvst        8     $vstsavepreset       �*    processvst        x    $sayjump         userbufferisactive    # T      focusintrackpanel   
  # p      noproject   
          typecurrentscriptkey            saynoproject       	           userbufferisactive    #       focusintrackpanel   
  # $  gfinlabel     
  # T$  gfsayposition   " P$  gfpreviewmotion 
  
  # p     isstopped   
     $  gfsayposition           �
    schedulepositionfield              typecurrentscriptkey       $  gfpreviewmotion         Shift+F6      typekey               typecurrentscriptkey            saycurrentscriptkeylabel             l    istrackselected                 	           noproject               	                       getfocus      getappmainwindow      getfirstchild     getlastwindow     getfirstchild   '        +     getjcfoption    '       +          setjcfoption          %     ����      %    getobjectfromevent  '  %      accchildcount   '       '  %  %  
     %    %    accstate    '  %       
          +   %    setjcfoption               	      %       
  '   �        +   %    setjcfoption                	             saynotrackselected       noproject     # P      menusactive   
             1  To use this feature you must select at least one track first. Press ENTER to select a track.    1
 msgNoTrackSelected_SNo tracks selected.   saymessage           H    iswarningdialog         getfocus      getwindowname   '        dialogactive    # ,%   1  Make a copy of the files before editing (safer) 
  " � %   1  Read the files directly from the original (faster)  
  
  " (%   1  Don't warn again and always use my choice above 
  
  
             	         �    $sayline         iswarningdialog # D      ispccursor  
  # l      userbufferisactive    
  # �      2,0,3     checkaudacityversion      
             getfocus      saywindowtypeandtext               ispccursor  #      noproject   
  # 8     focusintrackpanel   
          saynoproject       	           $sayline         userbufferisactive    # �     ispccursor  
  # �     focusintrackpanel   
           1 msgTrackPosition%1 of %2                  getfocusobject      accfocus      inttostring               getfocusobject      accchildcount     inttostring   formatstring           say                 $saypriorline         &  gfinlabel        ispccursor  # \      noproject   
          saynoproject       	           ispccursor  # �      dialogactive    
          getfocus    '              getcurrentwindow      getrealwindow     getwindowname   '  %  1 WN_EQUALIZATIONEqualization 
  " x%  1 WN_GRAPHIC_EQGraphic EQ 
  
  # �   %     getwindowsubtypecode      (   
  
          priorline           pause           +     getjcfoption    '       +          setjcfoption          %         1 cScSpace                           getobjectvalue                saycontrolex            +   %    setjcfoption               	              $saypriorline          $saynextline          &  gfinlabel        ispccursor  # \      noproject   
          saynoproject       	           ispccursor  # �      dialogactive    
          getfocus    '              getcurrentwindow      getrealwindow     getwindowname   '  %  1 WN_EQUALIZATIONEqualization 
  " x%  1 WN_GRAPHIC_EQGraphic EQ 
  
  # �   %     getwindowsubtypecode      (   
  
          nextline            pause           +     getjcfoption    '       +          setjcfoption          %         1 cScSpace                           getobjectvalue                saycontrolex            +   %    setjcfoption               	              $saynextline       h    $selectpriorline         focusinmainwindow     " \      userbufferisactive  
          $selectpriorline    	              getfocus      getcontrolid    '   $  gfsilence   '  %        �
    getpositionfieldid  
          &  gfsilence        typecurrentscriptkey            Shift+F6      typekey         pause      %  &  gfsilence   	      %        �
    getpositionfieldid  
          &  gfsilence        typecurrentscriptkey            Shift+F7      typekey         pause      %  &  gfsilence   	           $selectpriorline       \    $selectnextline      focusinmainwindow     " X      userbufferisactive  
          $selectnextline 	      $  gfsilence   '           getfocus      getcontrolid    '  %       �
    getpositionfieldid  
          &  gfsilence        typecurrentscriptkey            Shift+F6      typekey         pause      %   &  gfsilence   	      %       �
    getpositionfieldid  
          &  gfsilence        typecurrentscriptkey            Shift+F7      typekey         pause      %   &  gfsilence   	           $selectnextline    �    $switchchainslist        2,3,0     checkaudacityversion       1 WN_MANAGE_MACROSManage Macros   '   1	 msgMacrosMacros '  1 msgMacroCommandsMacro commands  '     1 WN_EDIT_CHAINSEdit Chains   '   1	 msgChainsChains '  1 msgChainCommandsChain commands  '             getfocus      getrealwindow   '       dialogactive    # �   %    getwindowname   %   
  
             getfocus      getcontrolid    '  %    Y  
          2,0,4     checkaudacityversion                  getfocus      getrealwindow     Z    finddescendantwindow    '                getfocus      getrealwindow     '    finddescendantwindow    '     %  '        %    Y    finddescendantwindow    '  %  '        %    setfocus            AnnounceMessage   getquicksetting         Message %         sayusingvoice                 saycurrentscriptkeylabel            typecurrentscriptkey             �     $pastefromclipboard      dialogactive    " L      menusactive 
  " d $  gfinlabel   
          $pastefromclipboard 	           isstopped             saynotstopped      	           $pastefromclipboard       T    $sayrecordingmeter       dialogactive    " X      focusinmainwindow     
  " p $  gfinlabel   
          typecurrentscriptkey            saycurrentscriptkeylabel       	         1 WN_RECORDING_METER_TOOLBARRecording Meter     findtoolbar '   %            %     getfirstchild     getnextwindow   '      %     " �   %     iswindowvisible   
        %        1
 WN_COMBINED_METER_TOOLBARCombined Meter   findwindow  '   %            %     getfirstchild     getnextwindow   '         %     " P   %     iswindowvisible   
          2,2,0     checkaudacityversion       1  To use this feature you must enable the Recording Meter '     1  To use this feature you must enable the Recording Meter or Combined Meter toolbar   '        %         say    	           issamescript          %     setfocus       	           savecursor          invisiblecursor       %     movetowindow            pause                 getobjectname   '       restorecursor         %         say       h    $sayplaybackmeter        dialogactive    " X      focusinmainwindow     
  " p $  gfinlabel   
          typecurrentscriptkey            saycurrentscriptkeylabel       	         1
 WN_PLAYBACK_METER_TOOLBARPlayback Meter   findtoolbar '   %            %     getfirstchild     getnextwindow   '      %     " �   %     iswindowvisible   
        %        1
 WN_COMBINED_METER_TOOLBARCombined Meter   findwindow  '   %               %     getfirstchild     getnextwindow     getnextwindow   '         %     " d   %     iswindowvisible   
          2,2,0     checkaudacityversion       1  To use this feature you must enable the Playback Meter  '     1  To use this feature you must enable the Playback Meter or Combined Meter toolbar    '        %         say    	           issamescript          %     setfocus       	           savecursor          invisiblecursor       %     movetowindow            pause                 getobjectname   '       restorecursor         %         say       �    $showcopyright       (   1 � JAWS script for Audacity multitrack sound editor V2.0 or later (http://audacityteam.org).

    Copyright (C) 2012-2020  Gary Campbell and Dang Manh Cuong.  All rights reserved.

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

    See the file copying.txt for details.     saymessage            checkaudacityversion               getappfilepath    FileVersion   getversioninfostring    '     %    ,     stringsegmentcount  '     %     ,     stringsegmentcount  '  %  %  
     %  '          '       '  %  # %  %  
  
           %    ,   %    stringsegment     stringtoint '        %     ,   %    stringsegment     stringtoint '  %  %  
 
            	      %  %  
              	      %       
  '   �            	           $test        ghSayPositionField =       $  ghsaypositionfield    inttostring 
    ,   
     $  gfpositionfieldupdated    inttostring 
    saystring           IsToolBar =                gettoolbar    istoolbar     inttostring 
    saystring             loadnonjcfoptions     NonJCFOptions   '      %     AnnounceMessage        Audacity.jcf      inireadinteger  &  announcemessage    %     AnnounceToolbars           audacity.jcf      inireadinteger  &  announcetoolbars       %     EnterPause         audacity.jcf      inireadinteger  &  gfenterpause       %     SilencePreview         audacity.jcf      inireadinteger  &  gfsilencepreview       %     SilenceRecord          audacity.jcf      inireadinteger  &  gfrecordspeechoff      %     SayPosition        audacity.jcf      inireadinteger  &  gfsayposition      %     PreviewMotion           audacity.jcf      inireadinteger  &  gfpreviewmotion       $  gsinisection      JAWSGuideLink   1  http://vip.chowo.co.uk/wp-content/uploads/jaws/Audacity-2.3.2-Guide.html      audacity.jcf      inireadstring     stringtrimtrailingblanks    &  gsjawsguidelink      getjfwversion      � 
     	           loadnonjcfoptions         0    $addaudacityjawsguide      $  gsinisection      JAWSGuideLink   %   $  gsinifile     inireadstring   '      %     stringisblank      1  http://vip.chowo.co.uk/wp-content/uploads/jaws/Audacity-2.3.2-Guide.html    '      %   '     1  Enter the new URL for the Audacity with Jaws Guide.   Add Audacity Jaws Guide Link    %     inputbox       %   '     %    stringisblank   " �%  %  
  
             1
 msgNoChange_lNo change has been made.   1 msgNoChange_sNo change.   sayformattedmessage    	      %  %  
     %  &  gsjawsguidelink    $  gsinisection      JAWSGuideLink   $  gsjawsguidelink $  gsinifile          iniwritestring                1	
 MSGNewURLThe URL has been change to %1  %    formatstring      sayformattedmessage          �    $record      dialogactive    " @      menusactive 
  " X $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey          $  gfrecordspeechoff        
          &  gfsilence        typecurrentscriptkey            ClearSilence           schedulefunction    &  gischeduleclearsilence          saycurrentscriptkeylabel            typecurrentscriptkey                T     clearsilence          &  gfsilence         &  gischeduleclearsilence     �     $addlabelatselection         focusinmainwindow           &  gfinlabel           saycurrentscriptkeylabel            typecurrentscriptkey          �     $addlabelatplayposition      noproject           saynoproject       	           isstopped             &  gfinlabel           saycurrentscriptkeylabel            typecurrentscriptkey          `    saytimelineend             getfocus      getappmainwindow      getfirstchild   '      %     getnextwindow   '         %     getfirstchild     getnextwindow   '        savecursor        %     movetowindow            pause           jawsend         pause           sayword         restorecursor         �     $zoomnormal      noproject           saynoproject       	         1 msgZoomNormalzoom normal      announcekeymessage          saytimelineend           �     $zoomin      noproject           saynoproject       	         1	 msgZoomInzoom in      announcekeymessage          saytimelineend           �     $zoomout         noproject           saynoproject       	         1
 msgZoomOutzoom out    announcekeymessage          saytimelineend               $mutealltracks       noproject           saynoproject       	           focusinmainwindow   # �      isstopped     
          saynotstopped            1 msgMuteAllTracksmute all tracks   announcekeymessage             refreshfocus               $unmutealltracks         noproject           saynoproject       	           focusinmainwindow   # �      isstopped     
          saynotstopped            1	 msgUnmuteAllTracksunmute all tracks   announcekeymessage             refreshfocus          �    $replacewithsilence      focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgReplaceWithSilencereplace with silence     announcekeymessage           �     $zerocrossing        noproject           saynoproject       	         1 msgZeroCrossingzero crossing      announcekeymessage           �     $importaudio         isstopped             saynotstopped      	         1 msgImportAudioimport audio    announcekeymessage        �     $exportaudio         noproject           saynoproject       	           isstopped             saynotstopped      	         1 msgExportAudioexport audio    announcekeymessage           �     $newwindow       focusinmainwindow   # L      isstopped     
          saynotstopped      	         1 msgNewWindownew window    announcekeymessage        �     $saveproject         noproject           saynoproject       	           focusinmainwindow   # �      isstopped     
          saynotstopped            1 msgSaveProjectsave project    announcekeymessage           �     $preferences         focusinmainwindow   # P      isstopped     
          saynotstopped      	         1 msgPreferencespreferences     announcekeymessage        �    $duplicate       focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgDuplicateduplicate     announcekeymessage           |    $trim        focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgTrimtrim   announcekeymessage                $exportmultiple      noproject           saynoproject       	           focusinmainwindow   # �      isstopped     
          saynotstopped            1	 msgExportMultipleExport Multiple      announcekeymessage           �    $splitcut        focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgSplitCutSplit Cut      announcekeymessage           �    $splitdelete         focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgSplitDeleteSplit Delete    announcekeymessage           �     $pastenewlabel       focusinmainwindow   # P      isstopped     
          saynotstopped            1
 msgPasteNewLabelPaste Text to New Label   announcekeymessage           �    $split       focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgSplitSplit     announcekeymessage           �    $splitnew        focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgSplitNewSplit New      announcekeymessage           |    $join        focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgJoinJoin   announcekeymessage           �    $disjoin         focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1
 msgDisjoinDetach at Silences      announcekeymessage           �    $cutlabels       focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgCutLabelsCut labels    announcekeymessage           �    $deletelabels        focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgDeleteLabelsDelete labels      announcekeymessage           �    $splitcutlabels      focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1	 msgSplitCutLabelsSplit Cut labels     announcekeymessage           �    $splitdeletelabels       focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1
 msgSplitDeleteLabelsSplit Delete labels   announcekeymessage           �    $silencelabels       focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgSilenceLabelsSilence labels    announcekeymessage           �    $copylabels      focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgCopyLabelsCopy labels      announcekeymessage           �    $splitlabels         focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgSplitLabelsSplit labels    announcekeymessage           �    $joinlabels      focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgJoinLabelsJoin labels      announcekeymessage           �    $disjoinlabels       focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgDisjoinLabelsDetach at Silences labels     announcekeymessage           �     $togglespectralselection         noproject           saynoproject       	         1 msgToggleSpectralSelectionToggle spectral selection   announcekeymessage           d    $selsynclocktracks       focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           istrackselected           saynotrackselected     	         1 	 select In All Sync-Locked Tracks      announcekeymessage           �    $zoomsel         focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1
 msgZoomSelZoom to Selection   announcekeymessage          saytimelineend           �     $fitinwindow         noproject           saynoproject       	         1 msgFitInWindowFit in Window   announcekeymessage          saytimelineend           �     $fitv        noproject           saynoproject       	         1 msgFitVFit Vertically     announcekeymessage           �    $goselstart      focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1	 msgGoSelStartGo to Selection Start    announcekeymessage           �    $goselend        focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgGoSelEndGo to Selection End    announcekeymessage           �     $collapsealltracks       noproject           saynoproject       	         1
 msgCollapseAllTracksCollapse All Tracks   announcekeymessage           �     $expandalltracks         noproject           saynoproject       	         1	 msgExpandAllTracksExpand All Tracks   announcekeymessage           �     $playlooped      noproject           saynoproject       	           focusinmainwindow   # �      isstopped     
          saynotstopped            1 msgPlayLoopedLoop Play    announcekeymessage           �     $newmonotrack        focusinmainwindow   # P      isstopped     
          saynotstopped            1 msgNewMonoTrackMono Track     announcekeymessage           �    $mixandrendertonewtrack      focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1 msgMixAndRenderToNewTrackMix and Render to New Track      announcekeymessage           �    $repeatlasteffect        focusinmainwindow             saycurrentscriptkeylabel            typecurrentscriptkey       	           noproject           saynoproject       	           isstopped             saynotstopped              istrackselected           saynotrackselected     	         1
 msgRepeatLastEffectRepeat last effect     announcekeymessage           �     $firsttrack      noproject           saynoproject       	         1 msgFirstTrackFirst Track      announcekeymessage           �     $lasttrack       noproject           saynoproject       	         1 msgLastTrackLast Track    announcekeymessage           �     $trackpan        noproject           saynoproject       	         1 msgTrackPanChange pan     announcekeymessage           �     $trackmovetop        noproject           saynoproject       	         1 msgTrackMoveTopMove focused track to top      announcekeymessage           �     $trackmovebottom         noproject           saynoproject       	         1 msgTrackMoveBottomMove focused track to bottom    announcekeymessage           4    $inputdevice         focusinmainwindow     " L $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey       	           isstopped             saynotstopped            1
 msgInputDeviceChange recording device     announcekeymessage           4    $outputdevice        focusinmainwindow     " L $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey       	           isstopped             saynotstopped            1
 msgOutputDeviceChange playback device     announcekeymessage           (    $audiohost       focusinmainwindow     " H $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey       	           isstopped             saynotstopped            1 msgAudioHostChange audio host     announcekeymessage           8    $inputchannels       focusinmainwindow     " L $  gfinlabel   
          saycurrentscriptkeylabel            typecurrentscriptkey       	           isstopped             saynotstopped            1 msgInputChannelsChange recording channels     announcekeymessage           T    $tempostartstop $  gftemporunning             &  gstempobpm        &  gitempocount          &  gitempostart          &  gitempolast      &  gftemporunning     1 cksSpaceSpace     typekey            getaudacitystate         
        1 cksSpaceSpace     typekey             &  gftemporunning  $  gitempostart    # �$  gitempolast 
  # �$  gitempocount         
 	 
     $  gitempolast $  gitempostart    
  $  gitempocount         
  
  '     �'	 %   
  '     %    inttostring &  gstempobpm     $  gstempobpm         stringright '     $  gstempobpm         stringchopright &  gstempobpm  %    0   
     $  gstempobpm    .   
  %  
  &  gstempobpm          $tempoannounce        1 msgTempoNoBeatsno beats        say    	            �     $tempotap   $  gftemporunning          gettickcount    &  gitempolast $  gitempocount         
  &  gitempocount    $  gitempostart         $  gitempolast &  gitempostart             �     $tempoannounce  $  gstempobpm        $  gstempobpm         say          1
 msgTempoNoTempoStoredNo tempo stored           say               $tempocopy  $  gstempobpm          1
 msgTempoNoTempoStoredNo tempo stored           say    	         $  gstempobpm    copytoclipboard          1 msgTempoCopiedCopied %1 $  gstempobpm    formatstring           say       �     $tempolayerhelp    1  Start/stop press SPACE.
tap press ENTER.
Announce press a.
Copy to clipboard press c.          say       