import { Header } from "@components/header.js";
import { Footer } from "@components/footer.js";
import { HomePage } from "@pages/home-page.js";
import { SigninPage } from "@pages/signin-page.js";

const rootBox = document.getElementById("root");

let header = new Header();
let footer = new Footer();
let homePage = new HomePage();
let signinPage = new SigninPage();

const routes = {
  "#/": homePage.render(),
  "#/signin": signinPage.render(),
};
const main = document.createElement("main");

function render() {
  console.log("location", window.location);
  const hash = window.location.hash || "/#";
  let page = routes[hash] ? routes[hash] : null;
  console.log(page);

  const headerBox = header.render();
  rootBox.appendChild(headerBox);
  main.appendChild(page);
  rootBox.appendChild(main);
  const footerBox = footer.render();
  rootBox.appendChild(footerBox);
}

window.addEventListener("load", render);

window.addEventListener("hashchange", (e) => {
  if (e.oldURL !== e.newURL) {
    const newUrl = new URL(e.newURL);
    const { hash: newHash } = newUrl;

    if (main.children.length > 0) {
      Array.from(main.children).map((child) => child.remove());
      let page = routes[newHash];
      main.appendChild(page);
    }
  }
});
