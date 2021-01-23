
chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { urlPrefix: 'https://www.youtube.com/' },
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.extension.onMessage.addListener(gotMessage);



function gotMessage(message, sender, sendResponse) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if(message.todo == "apple")
      {
        chrome.tabs.sendMessage(tabs[0].id,{m:{todo: "msg",key:tabs[0].id}}, function(response) {
      
        });
      }
  });


  setTimeout(function() {
    sendResponse({status: true});
}, 1);
  
  return true;
}