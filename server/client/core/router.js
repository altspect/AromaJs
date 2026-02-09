import Main from "./../pages/main/Main.js";
import Menu from "./../pages/menu/Menu.js";

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
];

const Router = {
  init: () => {
    if (window.location.pathname !== "/") {
      Router.go(
        window.location.pathname.slice(1, window.location.pathname.length - 1)
      );
    }

    document.addEventListener(`click`, (e) => {
      e.preventDefault();
      const origin = e.target.closest(`a`);
      const isGlobal = e.target.className === "link-global";
      console.log("yooo", origin, isGlobal, e.target);

      if (origin) {
        const navigatedPage =
          origin.href.split("/")[origin.href.split("/").length - 1];

        if (isGlobal && window.location.pathname !== navigatedPage) {
          history.replaceState({}, "", "/");
          history.pushState({}, "", navigatedPage);
        }
        Router.go(navigatedPage);
      }
    });
  },
  go: (location) => {
    const elementToRender = pages.find((page) => page.url === location);
    const root = document.getElementById("app");
    const newPage = document.createElement(elementToRender.component);
    newPage.templatePromise = null;
    newPage.templateURL = elementToRender.templateURL;
    root.innerHTML = "";
    root.appendChild(newPage);
  },
};

export default Router;
