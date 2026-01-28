import { multiSetAttributes } from "@utils";
import { getBranchData } from "../api/api.js";
import { parseRequestUrl } from "@utils";

class CompanyBranchPage {
  name;
  constructor(name) {
    this.name = name;
  }

  async render() {
    const request = parseRequestUrl();
    /*   console.log('request BranchPage', request); */
    let data;
    if (typeof request.branchSlug === "undefined") {
      data = await getBranchData();
    } else {
      data = await getBranchData(request.resource, request.branchSlug);
    }
    /*   console.log('data BRANCH', data); */

    const branchPage = document.createElement("section");
    branchPage.setAttribute("class", "branchPage");

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const branchPageWrapper = document.createElement("div");
    branchPageWrapper.setAttribute("class", "branchPage__wrapper");

    const branchPageContent = document.createElement("div");
    branchPageContent.setAttribute("class", "branchPage__content");

    const branchPageTitle = document.createElement("h1");
    branchPageTitle.setAttribute("class", "branchPage__title");
    const branchPageTitleContent = document.createTextNode("Отдел: ");
    const branchPageTitleSpan = document.createElement("span");
    branchPageTitleSpan.textContent = "FRONTEND";
    branchPageTitle.append(branchPageTitleContent, branchPageTitleSpan);

    const branchPageEmployeeList = document.createElement("ul");
    branchPageEmployeeList.setAttribute("class", "branchPage__employee-list");

    branchPageEmployeeList.insertAdjacentHTML('afterbegin', `
      <li class='branchPage__employee-item'>
        <div clas='branchPage__employee-item-wrapper'>
          <a class='branchPage__employee-link' href='/#/lala'>van Ivanov</a>
        </div>
      </li>
      <li class='branchPage__employee-item'>
        <div clas='branchPage__employee-item-wrapper'>
          <a class='branchPage__employee-link' href='/#/lala'>van Ivanov</a>
        </div>
      </li>
    `)

    const branchPageEmployeeItem = document.createElement("li");
    branchPageEmployeeItem.setAttribute("class", "branchPage__employee-item");

    branchPageContent.append(branchPageTitle, branchPageEmployeeList);

    branchPageWrapper.appendChild(branchPageContent);
    container.appendChild(branchPageWrapper);
    branchPage.appendChild(container);

    return branchPage;
  }
}

export { CompanyBranchPage };
