export class Orbit extends HTMLElement {
  static name = "wc-orbit";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#render();
  }

  #render() {
    this.shadowRoot.innerHTML = /*html*/ `
    <style>@import url("/css/components/orbit.css");</style>
    <div id="circle" class="${Orbit.name}">
      <div id="icons-container">
        <div class="icon next">
          <img src="/assets/media/icons/about/next.svg" alt="Next.js" />
        </div>
        <div class="icon astro">
          <img src="/assets/media/icons/about/astro.svg" alt="Astro" />
        </div>
        <div class="icon typescript">
          <img src="/assets/media/icons/about/typescript.png" alt="typescript" />
        </div>
        <div class="icon react">
          <img src="/assets/media/icons/about/react.png" alt="React" />
        </div>
        <div class="icon node">
          <img src="/assets/media/icons/about/node.png" alt="Node.js" />
        </div>
        <div class="icon aws">
          <img src="/assets/media/icons/about/aws.svg" alt="AWS" />
        </div>
      </div>
      <div class="center"></div>
    </div>
    `;
  }
}

customElements.define(Orbit.name, Orbit);
