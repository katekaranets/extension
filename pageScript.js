chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // First, validate the message's structure
    if ((msg.from === 'extension') && (msg.subject === 'name')) {
        alert('ok');
        var mail = document.getElementById('firstHeading').innerText;
        console.log(mail.toUpperCase());
        sendResponse({res: mail});

        var port = chrome.runtime.connect({name: "email"});
        port.postMessage({type: 'mail', content: mail});
        port.onMessage.addListener(function(msg) {
            if (msg.question == "I get it")
                console.log('goooood');
        });
    }
});
