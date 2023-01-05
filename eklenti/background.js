chrome.tabs.onCreated.addListener((tab) => {
   //alert('Google\'s homepage has been closed!');
});

chrome.tabs.onRemoved.addListener((tabId) => {
  //alert('Google\'s homepage has been closed!');
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    //alert('Google\'s homepage has been closed!');
  }
});
