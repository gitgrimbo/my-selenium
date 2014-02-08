@echo off

REM    Requires Git setup program to be downloaded
REM    E.g. from here:
REM        https://msysgit.googlecode.com/files/Git-1.8.5.2-preview20131230.exe
REM    Save as / rename to "git-setup.exe".


REM Try "git" and check the ERRORLEVEL
call :command_exists "git"


if not "1" == "%RESULT%" (
    git-setup.exe /VERYSILENT /COMPONENTS="icons,ext\reg\shellhere,assoc,assoc_sh" /DIR="c:\git"
    set PATH=%PATH%;c:\git\bin
) else (
    echo Git already exists.
)

exit /b 0





:command_exists
    REM % ~ will remove quotes
    REM http://stackoverflow.com/questions/1964192/removing-double-quotes-from-variables-in-batch-file-creates-problems-with-cmd-en
    "%~1" >nul 2>&1
    echo ERRORLEVEL=%ERRORLEVEL%
    if %ERRORLEVEL%==9009 (
        set RESULT=0
    ) else (
        set RESULT=1
    )
    goto :eof
