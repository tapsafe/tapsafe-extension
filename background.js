if(typeof browser === "undefined") {
    chrome.browserAction.onClicked.addListener(
        () => chrome.tabs.query(
            {active: true, currentWindow: true},
            activeTabs => chrome.tabs.create({
                url: "https://tapsafe.github.io/#" + activeTabs[0].url.split("/")[2],
            })
        )
    );
} else {
    browser.browserAction.onClicked.addListener(
        () => browser.tabs.query({active: true, currentWindow: true}).then(
            activeTabs => browser.tabs.create({
                url: "https://tapsafe.github.io/#" + activeTabs[0].url.split("/")[2],
            })
        )
    );
}
