// Main entry: initializes theme, tabs, detect page, and generate page.

document.addEventListener("DOMContentLoaded", function() {
  initTheme();
  initTabs();

  var themeToggle = document.getElementById("themeToggle");
  var copyCurrent = document.getElementById("copyCurrent");
  var copyGenerated = document.getElementById("copyGenerated");
  var generateBtn = document.getElementById("generateBtn");
  var currentUABox = document.getElementById("currentUA");
  var browserDetails = document.getElementById("browserDetails");
  var systemDetails = document.getElementById("systemDetails");
  var generatedUABox = document.getElementById("generatedUA");
  var generatedDetails = document.getElementById("generatedDetails");
  var generatedResult = document.getElementById("generatedResult");
  var osSelect = document.getElementById("os");
  var extrasSection = document.getElementById("extrasSection");

  function updateMobileOption() {
    var os = osSelect.value;
    var isMobile = os.startsWith("android") || os.startsWith("ios");
    extrasSection.style.display = isMobile ? "" : "none";
  }

  osSelect.addEventListener("change", updateMobileOption);
  updateMobileOption();

  themeToggle.addEventListener("click", toggleTheme);

  var ua = navigator.userAgent;
  currentUABox.textContent = ua;

  var parsed = parseUA(ua);
  renderDetails(browserDetails, parsed.browserInfo);
  renderDetails(systemDetails, parsed.systemInfo);

  copyCurrent.addEventListener("click", function() {
    copyToClipboard(ua, copyCurrent);
  });

  copyGenerated.addEventListener("click", function() {
    copyToClipboard(generatedUABox.textContent, copyGenerated);
  });

  generateBtn.addEventListener("click", function() {
    var browser = document.getElementById("browser").value;
    var os = document.getElementById("os").value;
    var mobile = document.getElementById("mobileOptimized").checked;

    var generated = generateUA(browser, os, mobile);
    generatedUABox.textContent = generated;
    generatedResult.hidden = false;

    var genParsed = parseUA(generated);
    var merged = {};
    for (var k in genParsed.browserInfo) merged[k] = genParsed.browserInfo[k];
    for (var k2 in genParsed.systemInfo) merged[k2] = genParsed.systemInfo[k2];
    renderDetails(generatedDetails, merged);
  });
});
