// Parses a raw User Agent string into browser and system info objects.

function parseUA(raw) {
  var browserInfo = {};
  var systemInfo = {};

  if (raw.includes("Firefox/") && !raw.includes("Seamonkey")) {
    browserInfo.browser = "Firefox";
    browserInfo.version = raw.match(/Firefox\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "Gecko";
  } else if (raw.includes("Edg/")) {
    browserInfo.browser = "Microsoft Edge";
    browserInfo.version = raw.match(/Edg\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "Blink";
  } else if (raw.includes("OPR/") || raw.includes("Opera")) {
    browserInfo.browser = "Opera";
    browserInfo.version = raw.match(/OPR\/([\d.]+)/)?.[1] || raw.match(/Opera\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "Blink";
  } else if (raw.includes("Brave")) {
    browserInfo.browser = "Brave";
    browserInfo.version = raw.match(/Chrome\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "Blink";
  } else if (raw.includes("Vivaldi")) {
    browserInfo.browser = "Vivaldi";
    browserInfo.version = raw.match(/Vivaldi\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "Blink";
  } else if (raw.includes("SamsungBrowser")) {
    browserInfo.browser = "Samsung Internet";
    browserInfo.version = raw.match(/SamsungBrowser\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "Blink";
  } else if (raw.includes("UCBrowser") || raw.includes("UC Browser")) {
    browserInfo.browser = "UC Browser";
    browserInfo.version = raw.match(/UCBrowser\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "Blink";
  } else if (raw.includes("YaBrowser")) {
    browserInfo.browser = "Yandex Browser";
    browserInfo.version = raw.match(/YaBrowser\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "Blink";
  } else if (raw.includes("CriOS")) {
    browserInfo.browser = "Chrome (iOS)";
    browserInfo.version = raw.match(/CriOS\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "WebKit";
  } else if (raw.includes("FxiOS")) {
    browserInfo.browser = "Firefox (iOS)";
    browserInfo.version = raw.match(/FxiOS\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "WebKit";
  } else if (raw.includes("Safari/") && !raw.includes("Chrome")) {
    browserInfo.browser = "Safari";
    browserInfo.version = raw.match(/Version\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "WebKit";
  } else if (raw.includes("Chrome/") && !raw.includes("Edg/")) {
    browserInfo.browser = "Chrome";
    browserInfo.version = raw.match(/Chrome\/([\d.]+)/)?.[1] || "N/A";
    browserInfo.engine = "Blink";
  } else {
    browserInfo.browser = "Unknown";
    browserInfo.version = "N/A";
    browserInfo.engine = "Unknown";
  }

  if (raw.includes("Windows NT 10.0")) systemInfo.os = "Windows 10/11";
  else if (raw.includes("Windows NT 6.3")) systemInfo.os = "Windows 8.1";
  else if (raw.includes("Windows NT 6.2")) systemInfo.os = "Windows 8";
  else if (raw.includes("Windows")) systemInfo.os = "Windows";
  else if (raw.includes("Mac OS X")) {
    var v = raw.match(/Mac OS X ([\d_]+)/)?.[1]?.replace(/_/g, ".") || "N/A";
    systemInfo.os = "macOS " + v;
  } else if (raw.includes("CrOS")) {
    systemInfo.os = "ChromeOS";
  } else if (raw.includes("Android")) {
    var v2 = raw.match(/Android ([\d.]+)/)?.[1] || "N/A";
    systemInfo.os = "Android " + v2;
  } else if (raw.includes("iPhone") || raw.includes("iPad")) {
    var v3 = raw.match(/OS ([\d_]+)/)?.[1]?.replace(/_/g, ".") || "N/A";
    systemInfo.os = "iOS " + v3;
  } else if (raw.includes("Linux")) {
    systemInfo.os = "Linux";
  } else {
    systemInfo.os = "Unknown";
  }

  if (/Mobi|Android.*Mobile|iPhone/.test(raw)) systemInfo.device = "Mobile";
  else if (/iPad|Tablet|Android(?!.*Mobile)/.test(raw)) systemInfo.device = "Tablet";
  else systemInfo.device = "Desktop";

  if (raw.includes("Win")) systemInfo.platform = "Windows";
  else if (raw.includes("Mac")) systemInfo.platform = "macOS";
  else if (raw.includes("Linux")) systemInfo.platform = "Linux";
  else if (raw.includes("Android")) systemInfo.platform = "Android";
  else if (raw.includes("iPhone") || raw.includes("iPad")) systemInfo.platform = "iOS";
  else systemInfo.platform = "Unknown";

  return { browserInfo: browserInfo, systemInfo: systemInfo };
}
