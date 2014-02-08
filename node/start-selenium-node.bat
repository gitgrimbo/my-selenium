REM    Setup the customisable variables

call %~dp0node-config.bat


REM    Start the node

set MY_SEL_DRIVER_ARGS=-Dwebdriver.ie.driver=%MY_SEL_IEDRIVER_LOCATION% -Dwebdriver.chrome.driver=%MY_SEL_CHROMEDRIVER_LOCATION%

set MY_SEL_HUB_ARGS=-hub %MY_SEL_GRID_URL% %MY_SEL_DRIVER_ARGS%

java -jar %MY_SEL_SERVER_LOCATION% -role node %MY_SEL_HUB_ARGS% -nodeConfig %MY_SEL_NODE_CONFIG%