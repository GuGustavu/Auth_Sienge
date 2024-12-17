import { USER_DATA_URL, BASE_URL } from "../config/constants.js";

export default async function getUserSession() {

    let response = await fetch(USER_DATA_URL);
    if (response.headers.get('content-type') && response.headers.get('content-type').includes('application/json')) {
        response = await response.json();

        chrome.cookies.get({ url: BASE_URL, name: "JSESSIONID" }, function (cookie) {
            return {
                "nome": response.nome,
                "email": response.emailDoUsuario,
                "sessao": cookie
            };
        });
    } else {
        return {
            "nome": null,
            "email": null,
            "sessao": null
        };
    }

}