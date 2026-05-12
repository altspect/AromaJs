import Component from "../../core/services/component.js";
import Cart from "../../core/services/cart.js";

export default class CartPage extends Component {
  constructor() {
    super();
  }

  onRendered() {
    console.log(Cart.items);
  }
}

customElements.define("app-cart", CartPage);
