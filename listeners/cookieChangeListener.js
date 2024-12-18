import checkSession from '../functions/checkSession.js';

function cookieChangeListener() {
  chrome.cookies.onChanged.addListener((changeInfo) => {
    if (changeInfo.cookie.name === 'JSESSIONID') {
      checkSession();
    }
  });
}

cookieChangeListener();

export { cookieChangeListener };