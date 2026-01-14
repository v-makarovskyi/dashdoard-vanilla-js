import { Header } from "@components/header.js";
import { Footer } from "@components/footer.js";
import { HomePage } from "@pages/home-page.js";
import { SigninPage } from "@pages/signin-page.js";
import { CompanyPartPage } from "@pages/company-part-page.js";
import { parseRequestUrl } from "@utils";

const rootBox = document.getElementById("root");

let header = new Header("header");
let footer = new Footer("footer");
let homePage = new HomePage("homePage");
let signinPage = new SigninPage("signinPage");
let companyPartPage = new CompanyPartPage("companyPartPage");

const main = document.createElement("main");

//static elements for every pages
const headerBox = header.render();
rootBox.appendChild(headerBox);
const footerBox = footer.render();
rootBox.appendChild(footerBox);

//routes for client app
const routes = {
  "/": homePage,
  "/signin": signinPage,
  "/company-part/:slug": companyPartPage,
};

function router() {
  const request = parseRequestUrl();
  if (request.subSlug) {
    routes["/company-part/:slug/:subSlug"] = routes["/company-part/:slug"];
    delete routes["/company-part/:slug"];
  } else if (routes["/company-part/:slug/:subSlug"]) {
    routes["/company-part/:slug"] = routes["/company-part/:slug/:subSlug"];
    delete routes["/company-part/:slug/:subSlug"];
  }

  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.slug ? "/:slug" : "") +
    (request.subSlug ? "/:subSlug" : "");
    let page = routes[parseUrl] ? routes[parseUrl] : null;


  if (main.children.length === 0) {
    main.appendChild(page.render());
  } else {
    Array.from(main.children).map((child) => child.remove());
    main.appendChild(page.render());
  }
  rootBox.firstChild.insertAdjacentElement("afterend", main);
  if (page.afterRender) {
    page.afterRender();
  }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
