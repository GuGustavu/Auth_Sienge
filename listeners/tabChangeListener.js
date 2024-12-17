import checkSession from '../functions/checkSession.js';
import { HOME_URL } from "../config/constants.js";


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url && changeInfo.url.includes(HOME_URL)) { checkSession(); }
});