# Componente de Links Sociais Reutilizável com Web Component
Crie um botão de links sociais que pode ser usado em **qualquer site** e atualizado **em um único lugar**.

---

## 1️⃣ Criar o Componente

1. Crie um arquivo chamado `social-links.js`.

```jsx
class SocialLinks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const links = {
      github: "https://github.com/seuusuario",
      linkedin: "https://linkedin.com/in/seuusuario",
      bluesky: "https://bsky.app/profile/seuusuario",
      youtube: "https://youtube.com/@seuusuario"
    };

    const icons = {
      github: "🐱",
      linkedin: "🔗",
      bluesky: "🕊️",
      youtube: "▶️"
    };

    const style = `
      <style>
        .container {
          display: flex;
          gap: 10px;
        }
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #111;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-size: 1.2rem;
          transition: transform 0.2s;
        }
        a:hover {
          transform: scale(1.2);
        }
      </style>
    `;

    const html = `
      <div class="container">
        ${Object.entries(links)
          .map(([name, url]) => `<a href="${url}" target="_blank">${icons[name] || name}</a>`)
          .join("")}
      </div>
    `;

    this.shadowRoot.innerHTML = style + html;
  }
}

customElements.define('social-links', SocialLinks);

```

✅ Este arquivo cria um **Web Component** `<social-links>` com ícones simples.

---

## 2️⃣ Hospedar o Componente

Você precisa que o arquivo JS esteja **acessível publicamente** para todos os sites:

### Opção 1: GitHub Pages

1. Crie um repositório, por exemplo `social-links-component`.
2. Adicione o `social-links.js`.
3. Ative o GitHub Pages:
    - **Settings → Pages → Branch main → Root**
4. URL pública:
    
    ```
    https://seuusuario.github.io/social-links-component/social-links.js
    ```
    

### Opção 2: Vercel ou Netlify

1. Crie projeto.
2. Coloque `social-links.js` na pasta `public/`.
3. Deploy → URL pública:
    
    ```
    https://seusite.vercel.app/social-links.js
    ```
    

> ⚠️ Evite usar raw.githubusercontent.com em produção, pode causar warnings de headers.
> 

---

## 3️⃣ Usar o Componente em Qualquer Site

Basta importar o JS e usar a tag:

```html
<script src="https://seusite.com/social-links.js"></script>

<social-links></social-links>
```

### 🔹 Em React

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://seusite.com/social-links.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Me siga nas redes</h1>
      <social-links></social-links>
    </div>
  );
}

export default App;
```

✅ Funciona em **React, Vue, Svelte ou HTML puro**.

---

## 4️⃣ Personalizações

- Trocar emojis por **SVGs ou ícones reais**.
- Adicionar cores específicas por rede social.
- Alterar tamanho, hover, bordas etc. via CSS no Shadow DOM.
- Carregar links de um **JSON remoto**, para separar dados do componente.

---

## 5️⃣ Atualizações

- Para mudar os links, basta atualizar o arquivo `social-links.js` hospedado.
- Todos os sites que usam a URL vão refletir automaticamente a mudança.

---

## 6️⃣ Dicas Extras

- Use **Shadow DOM** para não interferir nos estilos do site.
- Para ícones mais bonitos, pode usar **FontAwesome** ou SVG inline.
- Combine com **animações CSS** para hover ou transições suaves.
