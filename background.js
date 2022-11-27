chrome.contextMenus.create({
  id: "ternaus",
  title: "Search on Ternaus",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener( (clickData) => {
  chrome.tabs.create({
    url: `https://ternaus.com/search/?search=${clickData.selectionText}`,
    active: true
  });
});
