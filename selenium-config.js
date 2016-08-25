config = (function() {

    return {
        selenium: {
            server: {
                url: "https://selenium-release.storage.googleapis.com/2.53/selenium-server-standalone-2.53.1.jar"
            },
            chromedriver: {
                url: "http://chromedriver.storage.googleapis.com/2.23/chromedriver_win32.zip"
            },
            iedriver: {
                url: "https://selenium-release.storage.googleapis.com/2.53/IEDriverServer_Win32_2.53.1.zip"
            },
            edgedriver: {
                // Pick the webdriver version to match your version of Edge

                // Version: 3.14393 | Edge version supported: 14.14393
                //url: "https://download.microsoft.com/download/3/2/D/32D3E464-F2EF-490F-841B-05D53C848D15/MicrosoftWebDriver.exe"

                // Version: 2.10586 | Edge version supported: 13.10586
                url: "https://download.microsoft.com/download/C/0/7/C07EBF21-5305-4EC8-83B1-A6FCC8F93F45/MicrosoftWebDriver.msi"

                // Version: 1.10240 | Edge version supported: 12.10240
                //url: "https://download.microsoft.com/download/8/D/0/8D0D08CF-790D-4586-B726-C6469A9ED49C/MicrosoftWebDriver.msi"
            }
        },
        sonar: {
            server: {
                url: "http://dist.sonar.codehaus.org/sonar-3.7.3.zip"
            },
            // I don't use runner, I use the sonar maven plugin.
            runner: {
                url: "http://repo1.maven.org/maven2/org/codehaus/sonar/runner/sonar-runner-dist/2.3/sonar-runner-dist-2.3.zip"
            },
            javascript: {
                url: "http://repository.codehaus.org/org/codehaus/sonar-plugins/javascript/sonar-javascript-plugin/1.4/sonar-javascript-plugin-1.4.jar"
            }
        }
    };

}());
