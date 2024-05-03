export class Button extends HTMLElement {
  static name = "wc-button";
  #id = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#setup();
    this.#render();
  }

  #setup() {
    this.#id = this.getAttribute("id") ?? "";
  }

  #render() {
    this.shadowRoot.innerHTML = /*html*/ `
    <style>@import url("/css/components/button.css");</style>
    <button id="${this.#id}" class="${Button.name}">
      ${this.textContent}
    </button>
    `;
  }
}

customElements.define(Button.name, Button);
