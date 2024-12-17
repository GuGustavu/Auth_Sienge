import checkSession from "./checkSession";

export default function iniciarPing() {
    checkSession();
    setInterval(checkSession, 10000);
  }
  