window.addEventListener("message", (event) => {
    if (event.data.extension === "Auth_Sienge") {
        chrome.runtime.sendMessage(
            { sessionAuth: "getUserSession" },
            function (response) {
                window.postMessage({ extension: "Auth_Sienge_Response", response: response }, "*");
            }
        );
    }
});