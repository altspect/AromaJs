import Main from "./pages/main/Main.js";
import Menu from "./menu/Menu.js";
import Router from "./router.js";

app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
});
