import checkSession from '../functions/checkSession.js';

function iniciarPing() {
  checkSession();
  setInterval(checkSession, 10000);
}


iniciarPing();

export { iniciarPing };