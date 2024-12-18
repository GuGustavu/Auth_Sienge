export default function updateAuthenticationStatus(autenticado) {
  chrome.storage.local.set({ autenticado: autenticado });

  const iconPath = autenticado ? "assets/icone_autenticado.png" : "assets/icone_nao_autenticado.png";
  chrome.action.setIcon({ path: iconPath });
}