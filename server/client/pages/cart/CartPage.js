import Component from "../../core/services/component.js";
import Cart from "../../core/services/cart.js";

export default class CartPage extends Component {
  constructor() {
    super();
    console.log("Cart class loaded");
  }

  onRendered() {
    console.log("thing has dun");
    console.log(Cart.items);
  }
}

customElements.define("app-cart", CartPage);
