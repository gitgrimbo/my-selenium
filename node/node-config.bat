REM    Use this file to set node-specific config

set MY_SEL_GRID_URL=http://192.168.1.80:4444/grid/register

REM    This sets a sample node config file.
REM    Override this for each unique node.
set MY_SEL_NODE_CONFIG=%~dp0Sample_NodeWebDriver.json


set MY_SEL_IEDRIVER_LOCATION=tmp\IEDriverServer.exe
set MY_SEL_CHROMEDRIVER_LOCATION=tmp\chromedriver.exe


set MY_SEL_SERVER_LOCATION=tmp\selenium-server-standalone.jar
