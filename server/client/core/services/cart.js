class Cart {
  #items;

  constructor(items) {
    this.#items = items;
  }

  get items() {
    return this.#items;
  }

  set items(items) {
    this.#items = items;
    const e = new CustomEvent("cart:update", { detail: { items } });
    console.log("event has been updated");
    dispatchEvent(e);
  }
}

const cartService = new Cart();
export default cartService;
