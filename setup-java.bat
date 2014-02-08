@echo off

REM    Pre-requisites

REM    JAVA_SETUP_URL
REM        URL to download Java from. E.g. http://something or file://something.
REM    JAVA_HOME
REM        Where we install Java to.


REM Requires Git and the Bash utilities


call %~dp0config.bat


set MY_SEL_JAVA_SETUP_FILE=java-setup.exe


REM Use "java", not "java -version", as they return different ERRORLEVEL
call :command_exists "java"

if not "1" == "%RESULT%" (
    echo Copying Java

    REM Relies on Git associating .sh files with its Bash shell.
    REM Provide the Oracle cookie, in case this is a download from Oracle.
    curl -v -L -o %MY_SEL_JAVA_SETUP_FILE% -H "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com" %MY_SEL_JAVA_SETUP_URL%

    echo Installing Java
    start /w %MY_SEL_JAVA_SETUP_FILE% /s INSTALLDIR=%java_home% WEB_JAVA=0 /L c:\jdk.log
) else (
    echo Java already exists.
)


set path=%path%;%java_home%\bin


echo **************************************************
echo Now run setup-selenium.bat and pass the config file
echo E.g. setup-selenium.bat selenium-local-config.js

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
