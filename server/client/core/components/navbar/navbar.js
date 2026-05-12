import Component from "../../services/component.js";
import Cart from "./../../services/cart.js";

export default class NavBar extends Component {
  templateURL = "./core/components/navbar/component.html";

  constructor() {
    super();
  }

  onRendered() {
    addEventListener("cart:update", (e) => {
      const counter = this.shadowRoot.querySelector("#counter");
      console.log(e.detail);
      counter.innerHTML = e.detail.items.length;
    });
  }

  // Some sort of observable to know when cart number is being updated
}

customElements.define("app-navbar", NavBar);
