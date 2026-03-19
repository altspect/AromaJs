import Component from "../../core/component.js";

export default class MenuPage extends Component {
  constructor() {
    super();
  }

  onRendered() {
    const form = this.shadowRoot.querySelector("#form");
    const btn = this.shadowRoot.querySelector('input[type="submit"]');

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      console.log(formData.getAll("products"));
    });
  }
}

customElements.define("app-menu", MenuPage);
