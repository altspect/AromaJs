import Component from "../../core/component.js";

export default class CartPage extends Component {
  constructor() {
    super();
    console.log("Cart class loaded");
  }

  onRendered() {
    console.log("thing has dun");
  }
}

customElements.define("app-cart", CartPage);
