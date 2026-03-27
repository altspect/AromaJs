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
  }
}

const cartService = new Cart();
export default cartService;
