title selenium-node

REM Run from selenium parent directory
set GRID_URL=http://192.168.1.80:4444/grid/register

set          FIREFOX_EXE=c:\apps\Mozilla Firefox\46\firefox.exe
set        IE_DRIVER_EXE=tmp\IEDriverServer.exe
set    CHROME_DRIVER_EXE=tmp\chromedriver.exe
set        PHANTOMJS_EXE=c:\apps\phantomjs\2.1.1\bin\phantomjs.exe
set     GECKO_DRIVER_EXE=tmp\geckodriver.exe
set      EDGE_DRIVER_EXE=tmp\MicrosoftWebDriver.exe

set    CHROME_DRIVER_ARG=-Dwebdriver.chrome.driver="%CHROME_DRIVER_EXE%"
set        IE_DRIVER_ARG=-Dwebdriver.ie.driver="%IE_DRIVER_EXE%"
set   FIREFOX_DRIVER_ARG=-Dwebdriver.firefox.bin="%FIREFOX_EXE%"
set PHANTOMJS_DRIVER_ARG=-Dphantomjs.binary.path="%PHANTOMJS_EXE%"
set     GECKO_DRIVER_ARG=-Dwebdriver.gecko.driver="%GECKO_DRIVER_EXE%"
set      EDGE_DRIVER_ARG=-Dwebdriver.edge.driver="%EDGE_DRIVER_EXE%"

set  FIREFOX_PROFILE_ARG=-Dwebdriver.firefox.profile=ff46-selenium

REM set NODE_CONFIG=-nodeConfig %~dp0Sample_NodeWebDriver.json
set NODE_CONFIG=-nodeConfig %~dp0Sample_NodeWebDriver.json
set DRIVER_ARGS=%FIREFOX_DRIVER_ARG% %CHROME_DRIVER_ARG% %IE_DRIVER_ARG% %PHANTOMJS_DRIVER_ARG% %GECKO_DRIVER_ARG% %EDGE_DRIVER_ARG%
set HUB_ARGS=-hub %GRID_URL%
