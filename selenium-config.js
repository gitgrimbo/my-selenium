config = (function() {

    return {
        selenium: {
            server: {
                url: "https://selenium-release.storage.googleapis.com/2.53/selenium-server-standalone-2.53.0.jar"
            },
            chromedriver: {
                url: "http://chromedriver.storage.googleapis.com/2.21/chromedriver_win32.zip"
            },
            iedriver: {
                url: "https://selenium-release.storage.googleapis.com/2.53/IEDriverServer_Win32_2.53.1.zip"
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
