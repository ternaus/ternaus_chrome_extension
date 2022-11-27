chrome.contextMenus.create({
  id: "ternaus",
  title: "Search on Ternaus",
  contexts: ["selection", "image"]
});

chrome.contextMenus.onClicked.addListener( (clickData) => {
  if (clickData.selectionText) {
    chrome.tabs.create({
      url: `https://ternaus.com/search/?text=${clickData.selectionText}`,
      active: true
    });
  } else if (clickData.srcUrl) {
    chrome.tabs.create({
      url: `https://ternaus.com/search/?url=${clickData.srcUrl}`,
      active: true
    });
  }
});
