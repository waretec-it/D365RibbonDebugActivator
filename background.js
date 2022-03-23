chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let debugString = "&flags=FCB.CommandChecker=true&ribbondebug=true";

  if (message === "show-ribbon-debugger") {
    chrome.tabs.query({ active: true }, (tabs) => {
      let activeTab = tabs[0];
      let tabUrl = activeTab.url;

      console.log(tabUrl);

      if (!tabUrl.includes(debugString) && !tabUrl.endsWith("/")) {
        tabUrl += debugString;

        chrome.tabs.update(activeTab.id, { url: tabUrl });
      }
    });
  }
});
