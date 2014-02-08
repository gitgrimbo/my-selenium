my-selenium
===========

Scripts to setup a (Windows) node for Selenium grid testing.

5 steps

- Install Git.
- Clone this repo.
- Install Java.
- Install Selenium and download IEDriver and ChromeDriver.
- Start the node.

## pre-req

Requires Git setup program to be downloaded. E.g.:

    https://msysgit.googlecode.com/files/Git-1.8.5.2-preview20131230.exe

Rename to `git-setup.exe`.

Install:

    git-setup.exe /VERYSILENT /COMPONENTS="icons,ext\reg\shellhere,assoc,assoc_sh" /DIR="c:\git"

Set `PATH`:

    set PATH=%PATH%;c:\git\bin

## 1) Clone this repo:

    git clone https://github.com/gitgrimbo/my-selenium.git

## 2) Install Java

Edit `config.bat` if you want Java downloading from an alternate location. Default is `oracle.com`.

    setup-java.bat

Java is required for both Selenium and the scripts that download/setup Selenium (the scripts use `jrunscript`).

## 3) Install Selenium, IEDriver and ChromeDriver

Edit `selenium-config.js` if you want to use alternate download URLs, or see `selenium-local-config.js` for if you want to install from setup programs on your LAN.

    setup-selenium.bat selenium-config.js

## 4) Start the node

    node\start-selenium-node.bat

To customise the node, edit:

- `node\node-config.bat` - To set `GRID_URL`, `NODE_CONFIG`, `IEDRIVER_LOCATION`, `CHROMEDRIVER_LOCATION`, etc. The defaults should be ok for most uses.
- `node\Sample_NodeWebDriver.json` - To set node capabilities, e.g. [DefaultNodeWebDriver.json](https://code.google.com/p/selenium/source/browse/java/server/src/org/openqa/grid/common/defaults/DefaultNodeWebDriver.json).
