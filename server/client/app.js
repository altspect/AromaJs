import Main from "./pages/main/Main.js";
import Menu from "./pages/menu/Menu.js";
import Router from "./core/router.js";

app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
});
