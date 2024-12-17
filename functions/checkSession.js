import updateAuthenticationStatus from '../functions/updateAuthenticationStatus.js';
import { USER_DATA_URL } from "../config/constants.js";

export default async function checkSession() {
    var userRequest = await fetch(USER_DATA_URL)

    if (userRequest.ok) {
        requestUser = await requestUser.json()
        if (requestUser.nome) {
            updateAuthenticationStatus(true);
            return true
        } else {
            updateAuthenticationStatus(false);
            return false;
        }
    } else {
        throw new Error("Sessão inválida.");
    }
}