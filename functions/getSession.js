import { USER_DATA_URL, BASE_URL } from "../config/constants.js";

export default async function getSession() {

    let response = await fetch(USER_DATA_URL);
    if (response.headers.get('content-type') && response.headers.get('content-type').includes('application/json')) {
        response = await response.json();

        var cookie = () => {
            return new Promise((resolve, reject) => {
                chrome.cookies.get({ url: BASE_URL, name: "JSESSIONID" }, function (cookie) {
                    if (cookie) { resolve(cookie); }
                    else { reject("Cookie não encontrado"); }
                });
            });
        }
        return {
            "nome": response.nome,
            "email": response.emailDoUsuario,
            "sessao": (await cookie()).value,
        };

    } else {
        return {
            "nome": null,
            "email": null,
            "sessao": null
        };
    }
}