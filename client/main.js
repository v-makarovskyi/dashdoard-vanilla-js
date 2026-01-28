import { Header } from "@components/header.js";
import { Footer } from "@components/footer.js";
import { HomePage } from "@pages/home-page.js";
import { SigninPage } from "@pages/signin-page.js";
import { CompanyDepartmentPage } from "@pages/company-dep-page.js";
import { EmployeeDetailPage } from "@pages/employee-detail-page.js";
import { CompanyBranchPage } from "@pages/company-branch-page.js";
import { parseRequestUrl } from "@utils";

const rootBox = document.getElementById("root");

let header = new Header("header");
let footer = new Footer("footer");
let homePage = new HomePage("homePage");
let signinPage = new SigninPage("signinPage");
let companyDepartmentPage = new CompanyDepartmentPage("companyDepartmentPage");
let employeeDetailPage = new EmployeeDetailPage("employeeDetailPage");
let companyBranchPage = new CompanyBranchPage('companyBranchPage')

const main = document.createElement("main");

//static elements for every pages
const headerBox = header.render();
rootBox.appendChild(headerBox);
const footerBox = footer.render();
rootBox.appendChild(footerBox);

const routes = {
  //главная страница со структурой предприятия
  "/": homePage,
  //страница департамента. Содержит ссылку на профиль руководителя и ссылки на
  //подчиненный отделы
  "/departments/:departmentSlug": companyDepartmentPage,
  //маршрут для страницы отдела
  "/:departmentSlug/branches/:branchSlug": companyBranchPage,
  //только для бухгалтерии, которая не входит ни в один из департаментов
  "/branchCounting": companyBranchPage,
  //маршруты руководства
  "/heads/:headSlug": employeeDetailPage,
  "/heads/:departmentSlug/:headDepartmentSlug": employeeDetailPage,
  "/heads/:branchSlug/:headBranchSlug": employeeDetailPage,
  //маршрут на страницу сотрудника
  "/:departmentSlug/:branchSlug/:employeeId": employeeDetailPage,
  //страница входа для админа
  "/signin": signinPage,
};

async function router() {
  const request = parseRequestUrl();
  /* console.log("request", request); */

  const parseUrl =
    (request.resource
      ? request.resource.startsWith("departmentWeb")
        ? "/:departmentSlug"
        : `/${request.resource}`
      : "/") +
    (request.headSlug ? "/:headSlug" : "") +
    (request.departmentSlug ? "/:departmentSlug" : "") +
    (request.headDepartmentSlug ? "/:headDepartmentSlug" : "") +
    (request.branches ? "/branches" : "") +
    (request.branchSlug ? "/:branchSlug" : "");
  /* console.log("parseUrl", parseUrl); */

  let page = routes[parseUrl] ? routes[parseUrl] : null;
 /*  console.log('page', page); */

  if (main.children.length === 0) {
    main.appendChild(await page.render());
  } else {
    Array.from(main.children).map((child) => child.remove());
    main.appendChild(await page.render());
  }
  rootBox.firstChild.insertAdjacentElement("afterend", main);
  if (page.afterRender) {
    page.afterRender();
  }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
