export class Footer extends HTMLElement {
  static name = "wc-footer";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#render();
  }

  #render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/css/components/footer.css">
      <footer class="${Footer.name}">
        <div class="contact">
          <h3>Contact</h3>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 1234 Street, City, Country</p>
        </div>
        <div class="social">
          <h3>Social Media</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </footer>
    `;
  }
}

customElements.define(Footer.name, Footer);
