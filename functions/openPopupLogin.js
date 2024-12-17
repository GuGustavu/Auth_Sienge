import { LOGIN_URL, HOME_URL } from "../config/constants.js";
import updateAuthenticationStatus from "../functions/updateAuthenticationStatus.js"

export default async function openPopupLogin() {
    return new Promise((resolve) => {
        const dimensions = { width: 400, height: 600 };

        chrome.system.display.getInfo((displays) => {
            let activeDisplay = displays.find(display => display.isPrimary) || displays[0];

            const left = Math.round(activeDisplay.workArea.left + (activeDisplay.workArea.width - dimensions.width) / 2);
            const top = Math.round(activeDisplay.workArea.top + (activeDisplay.workArea.height - dimensions.height) / 2);

            if (popupWindowId) { chrome.windows.remove(popupWindowId, () => { abrirNovoPopup(); }); }
            else { abrirNovoPopup(); }

            async function abrirNovoPopup() {
                await fetch(HOME_URL)
                // Abrir o popup na posição centralizada no monitor ativo
                chrome.windows.create({ url: LOGIN_URL, type: "popup", width: dimensions.width, height: dimensions.height, left: left, top: top }, function (window) {
                    popupWindowId = window.id; // Armazenar o ID do popup

                    // Adicionar um ouvinte para detectar o fechamento da janela
                    chrome.windows.onRemoved.addListener(function listener(closedWindowId) {
                        if (closedWindowId === popupWindowId) {
                            popupWindowId = null; // Resetar a variável quando a janela é fechada
                            chrome.windows.onRemoved.removeListener(listener); // Remover o ouvinte após o fechamento
                        }
                    });

                    chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo, tab) {
                        if (tabId === window.tabs[0].id && changeInfo.url) {
                            if (changeInfo.url.includes(HOME_URL)) {
                                updateAuthenticationStatus(true);
                                chrome.windows.remove(window.id, function () {
                                    popupWindowId = null; // Resetar a variável quando a janela for fechada
                                    resolve(); // Resolve a Promise quando o login for concluído
                                });
                                chrome.tabs.onUpdated.removeListener(listener);
                            }
                        }
                    });
                });
            }
        });
    });
}