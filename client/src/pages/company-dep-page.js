import { multiSetAttributes } from "@utils";
import { parseRequestUrl } from "@utils";
import { getDepartmentData } from "../api/api.js";

class CompanyDepartmentPage {
  name;
  constructor(name) {
    this.name = name;
  }
  async render() {
    const parseUrl = parseRequestUrl();
    const { data } = await getDepartmentData(parseUrl.departmentSlug);

    const companyPart = document.createElement("section");
    companyPart.setAttribute("class", "companyPart");

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const companyPartWrapper = document.createElement("div");
    companyPartWrapper.setAttribute("class", "companyPart__wrapper");

    const companyPartInner = document.createElement("div");
    companyPartInner.setAttribute("class", "companyPart__inner");

    const companyPartTitle = document.createElement("h1");
    companyPartTitle.setAttribute("class", "companyPart__title");
    const companyPartTitleContent = document.createTextNode(
      data.department.name
    );
    companyPartTitle.appendChild(companyPartTitleContent);

    const companyPartContent = document.createElement("div");
    companyPartContent.setAttribute("class", "companyPart__content");

    const companyPartDescription = document.createElement("p");
    companyPartDescription.setAttribute("class", "companyPart__description");
    companyPartDescription.textContent = data.department.description;

    const companyPartHeadLink = document.createElement("a");
    multiSetAttributes(companyPartHeadLink, {
      href: `/#/heads/${data.department.slug}/${data.head}`,
      class: "companyPart__headLink",
    });

    const companyPartHeadPara = document.createElement("p");
    companyPartHeadPara.setAttribute("class", "companyPart__head");
    companyPartHeadPara.textContent = "На страницу руководителя";

    companyPartHeadLink.appendChild(companyPartHeadPara);

    const companyPartSubordinateBranches = document.createElement("div");
    companyPartSubordinateBranches.setAttribute(
      "class",
      "companyPart__subordinate"
    );

    const companyPartSubordinateBranchesText = document.createTextNode(
      "Подчиненные отделы:"
    );

    const companyPartSubordinateBranchesLink = document.createElement("a");
    multiSetAttributes(companyPartSubordinateBranchesLink, {
      href: `/#/${data.department.slug}/branches/${data.department.branches[0].slug}`,
      class: "button companyPart__subordinateLink",
    });
    companyPartSubordinateBranchesLink.textContent =
      data.department.branches[0].name;

    companyPartSubordinateBranches.append(
      companyPartSubordinateBranchesText,
      companyPartSubordinateBranchesLink
    );

    companyPartSubordinateBranches.insertAdjacentHTML(
      "beforeend",
      `
      <a class='button companyPart__subordinateLink' href='/#/${data.department.slug}/branches/${data.department.branches[1].slug}'>${data.department.branches[1].name}</a>
    `
    );

    const companyPartActions = document.createElement("div");
    companyPartActions.setAttribute("class", "companyPart__actions");

    const companyPartActionsWrapper = document.createElement("div");
    companyPartActionsWrapper.setAttribute(
      "class",
      "companyPart__actions-wrapper"
    );

    const companyPartActionsLink = document.createElement("a");
    companyPartActionsLink.textContent = "Сотрудник";
    multiSetAttributes(companyPartActionsLink, {
      href: "/#/company-part",
      class: "button companyPart__actions-link",
      "data-part": true,
    });
    companyPartActionsWrapper.appendChild(companyPartActionsLink);

    companyPartActionsWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <a class='button companyPart__actions-link' href='/#/'>Домой</a>
    `
    );

    companyPartActions.appendChild(companyPartActionsWrapper);

    companyPartContent.append(
      companyPartDescription,
      companyPartHeadLink,
      companyPartSubordinateBranches,
      companyPartActions
    );

    companyPartInner.append(companyPartTitle, companyPartContent);

    companyPartWrapper.appendChild(companyPartInner);

    container.appendChild(companyPartWrapper);

    companyPart.appendChild(container);

    return companyPart;
  }
}

export { CompanyDepartmentPage };
