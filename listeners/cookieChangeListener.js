import checkSession from '../functions/checkSession.js';

chrome.cookies.onChanged.addListener((changeInfo) => {
  if (changeInfo.cookie.name === 'JSESSIONID') {
    checkSession();
  }
});