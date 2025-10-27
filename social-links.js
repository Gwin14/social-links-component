class SocialLinks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const links = {
      github: "https://github.com/seuusuario",
      linkedin: "https://linkedin.com/in/seuusuario",
      bluesky: "https://bsky.app/profile/seuusuario",
      youtube: "https://youtube.com/@seuusuario",
    };

    const icons = {
      github: "🐱",
      linkedin: "🔗",
      bluesky: "🕊️",
      youtube: "▶️",
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
          .map(
            ([name, url]) =>
              `<a href="${url}" target="_blank">${icons[name] || name}</a>`
          )
          .join("")}
      </div>
    `;

    this.shadowRoot.innerHTML = style + html;
  }
}

customElements.define("social-links", SocialLinks);
