window.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        document.getElementById('get-info').addEventListener(
            "click",
            function () {
                chrome.tabs.sendMessage(tabs[0].id, {from: 'extension', subject: 'name'}, function (response) {
                    document.getElementById('info').innerHTML(response.res);
                });
            },
            false);

    });
});
