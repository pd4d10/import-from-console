chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({
    currentWindow: true,
    active: true,
  }, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, {
      file: 'scripts/importer.js',
      matchAboutBlank: true,
    }, console.log)
  })
})
