chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.CloseMe) {
        chrome.tabs.remove(sender.tab.id)
    }
})