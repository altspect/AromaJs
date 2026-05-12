import MainPage from "../../pages/main/MainPage.js";
import MenuPage from "../../pages/menu/MenuPage.js";
import CartPage from "../../pages/cart/CartPage.js";

const pages = [
  {
    component: "app-menu",
    url: "menu",
    templateURL: "pages/menu/page.html",
  },
  {
    component: "app-main",
    url: "main",
    templateURL: "pages/main/page.html",
  },
  {
    component: "app-cart",
    url: "cart",
    templateURL: "pages/cart/page.html",
  },
];

const Router = {
  init: () => {
    const initialPath = window.location.pathname.slice(1) || "main";
    Router.go(initialPath, false);

    window.addEventListener("popstate", (event) => {
      const path = window.location.pathname.slice(1);
      Router.go(path, false);
    });

    document.addEventListener(`click`, (e) => {
      const path = e.composedPath();
      const link = path.find((el) => el.tagName === "A");
      console.log(link);

      if (!link) return;

      const isGlobal = link.classList.contains("link-global");

      if (isGlobal) {
        e.preventDefault();
        const url = link.getAttribute("href");
        console.log(url);
        // Przechodzimy do strony
        Router.go(url);
      }
    });
  },
  go: (location, addToHistory = true) => {
    const elementToRender = pages.find((page) => page.url === location);

    if (!elementToRender) {
      console.error("Page not found:", location);
      return;
    }

    // 3. Aktualizacja adresu URL w przeglądarce bez przeładowania
    if (addToHistory) {
      window.history.pushState({ location }, "", `/${location}`);
    }

    const root = document.getElementById("app");
    const newPage = document.createElement(elementToRender.component);

    // Ustawienia dla Web Componentu
    newPage.templatePromise = null;
    newPage.templateURL = elementToRender.templateURL;

    root.innerHTML = "";
    root.appendChild(newPage);

    // Opcjonalnie: scroll na górę strony przy zmianie
    window.scrollTo(0, 0);
  },
};

export default Router;
