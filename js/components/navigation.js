export class Navigation extends HTMLElement {
  static name = "wc-navigation";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#render();
  }

  #routes = [
    {
      href: "/",
      text: "Inicio",
    },
    {
      href: "/about.html",
      text: "Sobre mi",
    },
    {
      href: "/projects.html",
      text: "Proyectos",
    },
    {
      href: "/contact.html",
      text: "Contacto",
    },
  ];

  #render() {
    this.shadowRoot.innerHTML = /*html*/ `
    <style>@import url("/css/components/navigation.css");</style>
    <header class="${Navigation.name} container">
      <nav class="nav">
        <a class="logo h6" href="/">iSaul19</a>
        <ul class="items">
          ${this.#routes
            .map(
              (route) => /*html*/ `
                <li class="item">
                  <a class="link h6" href="${route.href}">${route.text}</a>
                </li>
                `,
            )
            .join("")}
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define(Navigation.name, Navigation);
