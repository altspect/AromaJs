import Main from "./pages/main/MainPage.js";
import Menu from "./pages/menu/MenuPage.js";
import Cart from "./pages/cart/CartPage.js";
import Router from "./core/router.js";

app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
});
