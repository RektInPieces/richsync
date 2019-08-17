chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': 'src/tab/tab.html'}, function(tab) {
    // Tab opened.
  });
});