// UI helpers: rendering details, clipboard, tab switching, theme toggle.

function renderDetails(container, info) {
  container.innerHTML = "";
  for (var key in info) {
    if (!info.hasOwnProperty(key)) continue;
    var item = document.createElement("div");
    item.className = "detail-item";
    item.innerHTML = '<span class="detail-label">' + formatKey(key) + '</span><span class="detail-value">' + info[key] + '</span>';
    container.appendChild(item);
  }
}

function formatKey(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, function(s) { return s.toUpperCase(); });
}

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(function() {
    btn.textContent = "Copied!";
    btn.classList.add("copied");
    setTimeout(function() {
      btn.textContent = "Copy";
      btn.classList.remove("copied");
    }, 1500);
  });
}

function initTheme() {
  var saved = localStorage.getItem("ua-theme") || "dark";
  document.documentElement.dataset.theme = saved;
}

function toggleTheme() {
  var current = document.documentElement.dataset.theme;
  var next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("ua-theme", next);
}

function initTabs() {
  var tabs = document.querySelectorAll(".tab");
  var pages = document.querySelectorAll(".page");
  tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      tabs.forEach(function(t) { t.classList.remove("active"); });
      pages.forEach(function(p) { p.classList.remove("active"); });
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
}
