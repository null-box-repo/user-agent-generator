// Generates User Agent strings based on browser, OS, and mobile options.

var androidVersions = {
  "android-14": "14",
  "android-13": "13",
  "android-12": "12",
  "android-11": "11",
  "android-10": "10"
};

var iosVersions = {
  "ios-17": "17_4",
  "ios-16": "16_7",
  "ios-15": "15_8"
};

var chromeVersions = ["124.0.6367.60", "123.0.6312.86", "122.0.6261.69", "121.0.6167.85", "120.0.6099.109"];
var firefoxVersions = ["125.0", "124.0.2", "123.0.1", "122.0.1", "121.0"];
var safariVersions = ["17.4.1", "17.3.1", "17.2.2", "16.6.1"];
var edgeVersions = ["124.0.2478.51", "123.0.2420.65", "122.0.2365.66"];
var operaVersions = ["109.0.5074.25", "108.0.5067.25", "107.0.5050.35"];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateUA(browser, os, mobile) {
  var chromeV = pick(chromeVersions);
  var firefoxV = pick(firefoxVersions);
  var edgeV = pick(edgeVersions);
  var operaV = pick(operaVersions);

  if (os === "windows-11" || os === "windows-10") {
    var ntVer = "10.0";
    switch (browser) {
      case "chrome": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "chrome-mobile": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Mobile Safari/537.36";
      case "brave": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "vivaldi": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36 Vivaldi/" + pick(["6.6", "6.5", "6.4"]);
      case "edge": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + edgeV + " Safari/537.36 Edg/" + edgeV;
      case "opera": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + operaV + " Safari/537.36 OPR/" + operaV;
      case "opera-mini": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + operaV + " Safari/537.36 OPR/" + operaV;
      case "firefox": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV;
      case "firefox-mobile": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV;
      case "librewolf": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV + " LibreWolf/" + pick(["115.0", "114.0"]);
      case "waterfox": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV + " Waterfox/" + pick(["G6.0", "G5.1"]);
      case "safari": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "safari-mobile": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "uc": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36 UCBrowser/" + pick(["16.0", "15.5"]);
      case "samsung": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "yandex": return "Mozilla/5.0 (Windows NT " + ntVer + "; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36 YaBrowser/" + pick(["24.4", "24.3"]);
    }
  }

  if (os === "macos-sonoma" || os === "macos-ventura") {
    var macVer = os === "macos-sonoma" ? "14_4" : "13_3";
    switch (browser) {
      case "chrome": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "brave": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "vivaldi": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36 Vivaldi/" + pick(["6.6", "6.5"]);
      case "edge": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + edgeV + " Safari/537.36 Edg/" + edgeV;
      case "opera": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + operaV + " Safari/537.36 OPR/" + operaV;
      case "firefox": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + "; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV;
      case "librewolf": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + "; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV + " LibreWolf/" + pick(["115.0", "114.0"]);
      case "waterfox": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + "; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV + " Waterfox/" + pick(["G6.0", "G5.1"]);
      case "safari": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Version/" + pick(safariVersions) + " Safari/605.1.15";
      case "safari-mobile": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Version/" + pick(safariVersions) + " Safari/605.1.15";
      case "uc": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36 UCBrowser/" + pick(["16.0", "15.5"]);
      case "samsung": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "yandex": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36 YaBrowser/" + pick(["24.4", "24.3"]);
      case "chrome-mobile": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "firefox-mobile": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + "; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV;
      case "opera-mini": return "Mozilla/5.0 (Macintosh; Intel Mac OS X " + macVer + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + operaV + " Safari/537.36 OPR/" + operaV;
    }
  }

  if (os.startsWith("linux")) {
    switch (browser) {
      case "chrome": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "brave": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "vivaldi": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36 Vivaldi/" + pick(["6.6", "6.5"]);
      case "edge": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + edgeV + " Safari/537.36 Edg/" + edgeV;
      case "opera": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + operaV + " Safari/537.36 OPR/" + operaV;
      case "firefox": return "Mozilla/5.0 (X11; Linux x86_64; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV;
      case "librewolf": return "Mozilla/5.0 (X11; Linux x86_64; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV + " LibreWolf/" + pick(["115.0", "114.0"]);
      case "waterfox": return "Mozilla/5.0 (X11; Linux x86_64; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV + " Waterfox/" + pick(["G6.0", "G5.1"]);
      case "safari": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "uc": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36 UCBrowser/" + pick(["16.0", "15.5"]);
      case "samsung": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "yandex": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36 YaBrowser/" + pick(["24.4", "24.3"]);
      case "chrome-mobile": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "firefox-mobile": return "Mozilla/5.0 (X11; Linux x86_64; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV;
      case "safari-mobile": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
      case "opera-mini": return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + operaV + " Safari/537.36 OPR/" + operaV;
    }
  }

  if (os === "chromeos") {
    return "Mozilla/5.0 (X11; CrOS x86_64 " + pick(["15236.82.0", "15236.81.0", "15183.59.0"]) + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + chromeV + " Safari/537.36";
  }

  if (os.startsWith("android")) {
    var av = androidVersions[os];
    var dev = pick(["SM-S926B", "SM-S918B", "Pixel 8", "Pixel 7", "M2101K6G"]);
    var uaBase = "Mozilla/5.0 (Linux; Android " + av + "; " + dev + ") AppleWebKit/537.36 (KHTML, like Gecko)";
    var mobileSuffix = mobile ? " Mobile" : "";

    switch (browser) {
      case "chrome":
      case "chrome-mobile": return uaBase + " Chrome/" + chromeV + mobileSuffix + " Safari/537.36";
      case "brave": return uaBase + " Chrome/" + chromeV + mobileSuffix + " Safari/537.36";
      case "samsung": return uaBase + " SamsungBrowser/" + pick(["24.0", "23.0", "22.0"]) + mobileSuffix + " Chrome/" + chromeV + " Safari/537.36";
      case "uc": return uaBase + " UCBrowser/" + pick(["16.0", "15.5"]) + mobileSuffix + " Chrome/" + chromeV + " Safari/537.36";
      case "firefox":
      case "firefox-mobile": return "Mozilla/5.0 (Android " + av + "; Mobile; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV;
      case "opera":
      case "opera-mobile": return uaBase + " Opera/" + pick(["75.0", "74.0"]) + mobileSuffix + " Chrome/" + chromeV + " Safari/537.36";
      case "opera-mini": return "Opera/9.80 (Android " + av + "; Opera Mini/" + pick(["39.0", "38.0"]) + ") Presto/2.12.423 Version/12.16";
      case "edge": return uaBase + " Chrome/" + edgeV + mobileSuffix + " Safari/537.36 EdgA/" + pick(["124.0.2478.50", "123.0.2420.57"]);
      case "yandex": return uaBase + " YaBrowser/" + pick(["24.4", "24.3"]) + ".100" + mobileSuffix + " Chrome/" + chromeV + " Safari/537.36";
      case "vivaldi": return uaBase + " Chrome/" + chromeV + mobileSuffix + " Safari/537.36 Vivaldi/" + pick(["6.6", "6.5"]);
      case "safari": return uaBase + " Chrome/" + chromeV + mobileSuffix + " Safari/537.36";
      case "safari-mobile": return uaBase + " Chrome/" + chromeV + mobileSuffix + " Safari/537.36";
      case "librewolf": return "Mozilla/5.0 (Android " + av + "; Mobile; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV;
      case "waterfox": return "Mozilla/5.0 (Android " + av + "; Mobile; rv:" + firefoxV.split(".")[0] + ".0) Gecko/20100101 Firefox/" + firefoxV;
    }
  }

  if (os.startsWith("ios")) {
    var iv = iosVersions[os];

    switch (browser) {
      case "safari":
      case "safari-mobile": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/" + pick(safariVersions) + " Mobile/15E148 Safari/604.1";
      case "chrome":
      case "chrome-mobile": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/" + chromeV + " Mobile/15E148 Safari/604.1";
      case "firefox":
      case "firefox-mobile": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/" + firefoxV + " Mobile/15E148 Safari/605.1.15";
      case "edge": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/" + pick(safariVersions) + " Mobile/15E148 EdgiOS/" + edgeV;
      case "opera": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/" + pick(safariVersions) + " Mobile/15E148 OPIOS/" + operaV;
      case "opera-mini": return "Opera/9.80 (iPhone; CPU OS " + iv + " like Mac OS X) Opera/Mini/" + pick(["39.0", "38.0"]) + " Presto/2.12.423 Version/12.16";
      case "brave": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/" + chromeV + " Mobile/15E148 Safari/604.1";
      case "vivaldi": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/" + chromeV + " Mobile/15E148 Safari/604.1";
      case "uc": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) UCBS/" + pick(["16.0", "15.5"]) + " Mobile/15E148 Safari/604.1";
      case "samsung": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/" + chromeV + " Mobile/15E148 Safari/604.1";
      case "yandex": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/" + chromeV + " Mobile/15E148 YaBrowser/" + pick(["24.4", "24.3"]) + ".100.10 Mobile/15E148 Safari/604.1";
      case "librewolf": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/" + firefoxV + " Mobile/15E148 Safari/605.1.15";
      case "waterfox": return "Mozilla/5.0 (iPhone; CPU OS " + iv + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/" + firefoxV + " Mobile/15E148 Safari/605.1.15";
    }
  }

  return "Unable to generate User Agent";
}
