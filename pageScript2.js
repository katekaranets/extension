chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "email");
    port.onMessage.addListener(function(msg) {
        if (msg.type == "mail")
            console.log(msg.content);
            port.postMessage({question: "I get it"});
    });
});