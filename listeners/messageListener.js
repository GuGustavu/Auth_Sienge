import getSession from "../functions/getSession.js";
import openPopupLogin from "../functions/openPopupLogin.js"

chrome.runtime.onMessage.addListener(function (request, sendResponse) {
    if (request.sessionAuth === "getUserSession") {
        (async () => {
            var userInfo = await getSession();

            if (userInfo.nome != null) { sendResponse(userInfo) }
            else {
                await openPopupLogin();
                userInfo = await getSession();
                sendResponse(userInfo)
            }
        })()
        return true; // Indica que a resposta será assíncrona
    }
});