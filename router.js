import Main from "./pages/main/Main.js";
import Menu from "./menu/Menu.js";

const pages = [
  {
    component: "app-menu",
    url: "menu",
    templateURL: "./pages/menu/page.html",
  },
  {
    component: "app-main",
    url: "main",
    templateURL: "./pages/main/page.html",
  },
];
// Now,

const Router = {
  init: () => {
    document.addEventListener(`click`, (e) => {
      e.preventDefault();
      const origin = e.target.closest(`a`);

      if (origin) {
        const navigatedPage =
          origin.href.split("/")[origin.href.split("/").length - 1];
        history.pushState({ page: 1 }, null, navigatedPage);
        const elementToRender = pages.find(
          (page) => page.url === navigatedPage
        );
        const root = document.getElementById("app");
        const newPage = document.createElement(elementToRender.component);
        newPage.templatePromise = null;
        newPage.templateURL = elementToRender.templateURL;
        root.innerHTML = "";
        console.log(location);
        root.appendChild(newPage);
      }
    });
  },
  go: () => {},
};

export default Router;
