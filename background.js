browser.browserAction.onClicked.addListener(function(tab) { 
    browser.tabs.query({url: '*://stackoverflow.com/*'}, function(tabs){     
        tabs.forEach(function(tab){
            browser.tabs.remove(tab.id);
        });
    });
});