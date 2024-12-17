export default function updateAuthenticationStatus(autenticado) {
    chrome.storage.local.set({ autenticado: autenticado });
  
    const iconPath = autenticado ? "images/icone_autenticado.png" : "images/icone_nao_autenticado.png";
    chrome.action.setIcon({ path: iconPath });
  }