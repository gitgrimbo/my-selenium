/*

Run using jrunscript from project root. E.g.:
  jrunscript bin\setup.js

Downloads selenium server and chrome driver and ie driver into ./tmp

Unpacks chrome driver and ie driver.

NOTE! Uses Windows-specific commands such as 'cmd' and 'copy'.

*/

// IMPORTS

importClass(java.lang.System);
importPackage(java.io);
importPackage(java.net);
importPackage(java.nio.channels);
importPackage(java.nio.file);
importPackage(java.util);

// UTIL

function urlFilename(url) {
    // ensure js string
    url += "";
    return url.substring(url.lastIndexOf('/') + 1, url.length);
}

function removeExtension(filename) {
    return new java.lang.String(filename).replaceFirst("[.][^.]+$", "");
}

function download(url, file) {
    var website = new URL(url);
    var rbc = Channels.newChannel(website.openStream());
    var fos = new FileOutputStream(file);
    fos.getChannel().transferFrom(rbc, 0, java.lang.Long.MAX_VALUE);
    return true;
}

function maybeDownload(url, file) {
    if (!file.exists()) {
        return download(url, file);
    }
    return false;
}

function doCommandIn(dir, command) {
    exec('cmd /c cd ' + dir + ' && ' + command);
}

function unzip(zip) {
    var dir = zip.getParentFile().getAbsolutePath();
    doCommandIn(dir, 'jar xvf ' + zip.getName());
}

function copy(from, to) {
    Files.copy(from.toPath(), to.toPath(), StandardCopyOption.REPLACE_EXISTING);
}





/**
 * - Downloads the sonar zip.
 * - Expects the sonar extraction folder to be the same name as the zip name (with .zip removed).
 * - If the sonar extraction folder does not exist, extract the sonar zip.
 */
function downloadAndInstallSonar() {
    // Use for downloading and unzipping a zip that has a version-specific folder when unzipped.
    // e.g. sonar-runner-dist-2.3.zip contains contents like:
    //   sonar-runner-2.3/...
    // And sonar server is distributed the same way.
    // The folder returned is this version-specific folder.
    function maybeDownloadAndUnzip(file, url) {
        var foldername = removeExtension(file.getName());
        var folder = new File(file.getParentFile(), foldername);
        if (!folder.exists()) {
            maybeDownload(url, file);
            // Windows-specific!
            unzip(file);
        } else {
            println('Not downloading ' + url + ' as it seems it has already been extracted here ' + folder.getAbsolutePath() + '.\n');
        }
        return folder;
    }

    var sonarZip = new File(tmp, urlFilename(config.sonar.server.url));
    var sonarRunnerZip = new File(tmp, urlFilename(config.sonar.runner.url));
    var sonarJavascriptJar = new File(tmp, urlFilename(config.sonar.javascript.url));

    var sonarFolder = maybeDownloadAndUnzip(sonarZip, config.sonar.server.url);

    maybeDownloadAndUnzip(sonarRunnerZip, config.sonar.runner.url);

    // Download the javascript plugin, and copy to the right place in sonar.
    maybeDownload(config.sonar.javascript.url, sonarJavascriptJar);
    var sonarPluginsFolder = new File(sonarFolder, 'extensions/plugins');
    copy(sonarJavascriptJar, new File(sonarPluginsFolder, sonarJavascriptJar.getName()));
}

function downloadAndInstallSeleniumAndDrivers() {
    var seleniumJar = new File(tmp, urlFilename(config.selenium.server.url));
    var chromeDriverZip = new File(tmp, urlFilename(config.selenium.chromedriver.url));
    var ieDriverZip = new File(tmp, urlFilename(config.selenium.iedriver.url));

    maybeDownload(config.selenium.server.url, seleniumJar);
    maybeDownload(config.selenium.chromedriver.url, chromeDriverZip);
    maybeDownload(config.selenium.iedriver.url, ieDriverZip);

    // Windows-specific!
    // Overwrite existing drivers and selenium server.
    unzip(chromeDriverZip);
    unzip(ieDriverZip);
}

// START

if ("undefined" === typeof config) {
    throw new Error("config does not exist");
}

var f = new File(".");
var tmp = new File(f, "tmp");

tmp.mkdirs();

downloadAndInstallSeleniumAndDrivers();
downloadAndInstallSonar();

var chromeDriverExe = new File(tmp, "chromedriver.exe");

println("Remember to pass the webdriver.chrome.driver and/or webdriver.ie.driver options to selenium-server-standalone.jar");
println("  (bin/start-selenium.bat script shows you how)");
