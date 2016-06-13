chrome.tabs.onCreated.addListener(loadCss);
chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
  if (info.status == 'complete') loadCss(tab);
});

function loadCss(tab) {
  var tabUrl = tab.url;

  if (tabUrl && tabUrl.indexOf("https://trello.com") != -1) {
    change(tab.id, "columnCount", "css/count.css");
    change(tab.id, "cardId", "css/numbers.css");
    change(tab.id, "labelName", "css/labels.css");
  }
}

function change(tabId, key, cssFile) {
  chrome.storage.sync.get(key, function(item) {
    if (item[key]) {
      chrome.tabs.insertCSS(tabId, { file: cssFile });
    }
  });
}
