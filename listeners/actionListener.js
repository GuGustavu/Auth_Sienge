import checkSession from '../functions/checkSession.js';
import openPopupLogin from "../functions/openPopupLogin.js"

function actionListener() {
  chrome.action.onClicked.addListener(async (tab) => {
    let response = await checkSession()
    if (!response) { openPopupLogin(); }
  });
}

actionListener();

export { actionListener };