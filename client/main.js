import { Header } from "@components/header.js";
import { Footer } from "@components/footer.js";
import { HomePage } from "@pages/home-page.js";
import { SigninPage } from "@pages/signin-page.js";
import { Router } from "./src/router.js";

const rootBox = document.getElementById("root");

const header = new Header();
const footer = new Footer();
const homePage = new HomePage();
const signinPage = new SigninPage();

const routes = [
  { path: "/", template: homePage.render() },
  { path: "/signin", template: signinPage.render() },
];

const router = new Router(routes);
console.log(router);

function render() {
  const main = document.createElement("main");
  let page;
  rootBox.appendChild(header.render());
  //навигационные кнопки в header
  Array.from(document.querySelectorAll(".header__actions-btn")).forEach(
    (actionBtn) => {
      actionBtn.addEventListener("click", (e) => {
        if (main.children.length > 0) {
          Array.from(main.children).map((el) => el.remove());
        }
        page = router.loadRoute(actionBtn.dataset.path);
        main.appendChild(page);
      });
    }
  );
  main.appendChild(router.loadRoute(""));
  rootBox.appendChild(main);
  rootBox.appendChild(footer.render());
}

window.addEventListener("load", () => {
  render();
});
