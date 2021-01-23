var storage = chrome.storage.local;

function reset() {
    chrome.extension.sendMessage({todo: "apple"});
}

chrome.extension.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	
	var key = String(message.m.key);
	
	if (message.m.todo == "msg") {
        var v1 = key;
					var obj = {};
					obj[v1] = 1;
					storage.set(obj);
    }
    setTimeout(function() {
        sendResponse({status: true});
    }, 1);
	return true;
}

if (window.performance) {
    console.info("window.performance working on this browser");
  }
    if (performance.navigation.type == 1) {
      reset();
    } else {
      console.info( "Page not reloaded");
    }