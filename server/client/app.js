import MainPage from "./pages/main/MainPage.js";
import MenuPage from "./pages/menu/MenuPage.js";
import CartPage from "./pages/cart/CartPage.js";
import NavBar from "./core/components/navbar/navbar.js";
import Router from "./core/services/router.js";

window.app = window.app || {};
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
});
