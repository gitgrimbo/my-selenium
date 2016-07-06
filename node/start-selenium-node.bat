REM    Setup the customisable variables

call %~dp0node-config.bat

java -jar tmp\selenium-server-standalone.jar -role node %HUB_ARGS% %DRIVER_ARGS% %NODE_CONFIG%
