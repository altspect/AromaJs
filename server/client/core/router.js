import MainPage from "./../pages/main/MainPage.js";
import MenuPage from "./../pages/menu/MenuPage.js";
import CartPage from "./../pages/cart/CartPage.js";

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
    if (window.location.pathname !== "/") {
      Router.go(
        window.location.pathname.slice(1, window.location.pathname.length),
      );
    }

    document.addEventListener(`click`, (e) => {
      const origin = e.target.closest(`a`);
      const isGlobal = e.target.className === "link-global";
      console.log(e.target, e.target.className);

      if (origin) {
        e.preventDefault();
        const navigatedPage =
          origin.href.split("/")[origin.href.split("/").length - 1];
        console.log(origin.href, isGlobal, e.target.className);

        if (isGlobal && window.location.pathname !== navigatedPage) {
          history.replaceState({}, "", "/");
          history.pushState({}, "", navigatedPage);
        }
        Router.go(navigatedPage);
      }
    });
  },
  go: (location) => {
    console.log("going");
    const elementToRender = pages.find((page) => {
      return page.url === location;
    });
    console.log(elementToRender);
    const root = document.getElementById("app");
    const newPage = document.createElement(elementToRender.component);
    newPage.templatePromise = null;
    newPage.templateURL = elementToRender.templateURL;
    console.log(newPage);
    root.innerHTML = "";
    root.appendChild(newPage);
  },
};

export default Router;
