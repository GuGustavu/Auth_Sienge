#  ![icons-48](https://github.com/user-attachments/assets/f16a1fff-c88e-40eb-a878-9d7c91954790) Sienge Auth

Esta extensão facilita o monitoramento de sessões, fornece o cookie de sessão e automatiza o processo de login para o site Sienge.

## 🚀 Funcionalidades
- Monitora mudanças de cookies.
- Verifica sessões ativas periodicamente.
- Abre uma janela popup para autenticação, quando necessário.
- Fornece a sessão do usuario quando requerido.
- Atualiza o ícone conforme o estado de autenticação.

## 🛠️ Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/GuGustavu/Auth_Sienge
2. Ajuste a URL de referência:
   Abra o arquivo ```config/constants.js``` e ajuste a constante `BASE_URL` que está definida e substitua pelo domínio do seu ambiente Sienge.
   ```bash
   export const BASE_URL = "https://SEU-DOMINIO.sienge.com.br";
3. Carregue a extensão no Chrome
- Acesse chrome://extensions/ no navegador Chrome.
- Ative o modo Desenvolvedor (canto superior direito).
- Clique em Carregar sem compactação e selecione a pasta onde o repositório foi clonado.
- A extensão estará agora instalada e pronta para uso.

## 📄 Como usar
- A extensão irá monitorar as sessões do Sienge e atualizar automaticamente o ícone para refletir o estado da autenticação.
- Caso a autenticação seja necessária, uma janela popup será aberta para o login.
- Para obter a sessão do usuário, a página deverá ter a função abaixo declarada de forma asyncrona para obter informação desejada:
```javascript
function getUserSienge() {
    window.postMessage({ extension: "Auth_Sienge" }, "*");
    return new Promise((resolve, reject) => {
        window.addEventListener("message", function listener(event) {
            if (event.data.extension === "Auth_Sienge_Response") {
                resolve(event.data.response);
                window.removeEventListener("message", listener);
            }
        });
    });
}