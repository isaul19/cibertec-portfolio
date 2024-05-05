class Alert extends HTMLElement {
  static name = "wc-alert";
  static duration = 5000; // in milliseconds
  timer = null; // reference to hidden

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#render();
  }

  connectedCallback() {
    this.wcAlertElement = this.shadowRoot.querySelector(".wc-alert");
    this.imageBoxElement = this.shadowRoot.querySelector(".image-box");
    this.titleAlertElement = this.shadowRoot.querySelector(".title-alert");
    this.messageAlertElement = this.shadowRoot.querySelector(".message-alert");
  }

  error(message) {
    this.#hide();
    clearTimeout(this.timer);
    this.wcAlertElement.classList.remove("success");
    this.wcAlertElement.classList.add("error");
    this.imageBoxElement.style.backgroundColor = "#dc2626";
    this.imageBoxElement.innerHTML = `
    <svg
      style="width: 16px; height: 16px; color: white;"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"></path>
    </svg>`;
    this.titleAlertElement.textContent = "Error";
    this.messageAlertElement.textContent = message;
    this.#show();
  }

  success(message) {
    this.#hide();
    clearTimeout(this.timer);
    this.wcAlertElement.classList.remove("error");
    this.wcAlertElement.classList.add("success");
    this.imageBoxElement.style.backgroundColor = "#10b981";
    this.imageBoxElement.innerHTML = `
    <svg
      style="width: 16px; height: 16px; color: white;"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>`;
    this.titleAlertElement.textContent = "Exitoso";
    this.messageAlertElement.textContent = message;
    this.#show();
  }

  #show() {
    this.wcAlertElement.style.opacity = "1";
    this.wcAlertElement.style.height = "auto";

    this.timer = setTimeout(() => {
      this.#hide();
    }, Alert.duration);
  }

  #hide() {
    this.wcAlertElement.style.opacity = "0";
    this.wcAlertElement.style.height = "0";
  }

  #render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>@import url("/css/components/alert.css");</style>
      <div class=${Alert.name}>
        <div class="main-container">
          <div class="image-box"></div>
          <div class="text-box">
            <span class="title-alert"></span>
            <p class="message-alert"></p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(Alert.name, Alert);
