import { multiSetAttributes } from "@utils";
import { getMainLinksForApp } from "../api/api.js";

class HomePage {
  name;
  constructor(name) {
    this.name = name;
  }
  async render() {
    const { data } = await getMainLinksForApp();

    const homePage = document.createElement("section");
    homePage.setAttribute("class", "homePage");

    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const title = document.createElement("h1");
    title.setAttribute("class", "homePage__title");
    title.textContent = "Структура IT-компании 'Новый мир'";

    const homePageWrapper = document.createElement("div");
    homePageWrapper.setAttribute("class", "homePage__wrapper");

    const homePageDirector = document.createElement("div");
    homePageDirector.setAttribute("class", "homePage__director");
    const directorLink = document.createElement("a");
    directorLink.setAttribute("href", `/#/heads/head`);
    const directorTitle = document.createElement("span");
    directorTitle.textContent = "Директор предприятия";
    const arrowDirectorLeft = document.createElement("div");
    arrowDirectorLeft.setAttribute("class", "arrow arrow-director left");
    const arrowDirectorRight = document.createElement("div");
    arrowDirectorRight.setAttribute("class", "arrow arrow-director right");
    directorLink.appendChild(directorTitle);
    homePageDirector.append(
      directorLink,
      arrowDirectorLeft,
      arrowDirectorRight
    );

    const homePageDepartmentWrapper = document.createElement("div");
    homePageDepartmentWrapper.setAttribute(
      "class",
      "homePage__department-wrapper"
    );
    const homePageDepartmentItemLeft = document.createElement("div");
    homePageDepartmentItemLeft.setAttribute(
      "class",
      "homePage__department-item left"
    );

    const homePageDepartmentMainLeft = document.createElement("div");
    homePageDepartmentMainLeft.setAttribute(
      "class",
      "homePage__department-main"
    );
    const homePageDepartmentMainLinkLeft = document.createElement("a");
    homePageDepartmentMainLinkLeft.setAttribute(
      "href",
      `/#/departments/${data.depWebDev}`
    );
    const homePageDepartmentMainTitleLeft = document.createElement("span");
    homePageDepartmentMainTitleLeft.textContent = "Департамент web-разработки";
    homePageDepartmentMainLinkLeft.appendChild(homePageDepartmentMainTitleLeft);

    const arrowDepartmentLeft = document.createElement("div");
    arrowDepartmentLeft.setAttribute("class", "arrow arrow-department left");
    homePageDepartmentMainLeft.append(
      homePageDepartmentMainLinkLeft,
      arrowDepartmentLeft
    );

    const homePageBranchesLeft = document.createElement("div");
    homePageBranchesLeft.setAttribute("class", "homePage__branches");
    const homePageBranchesItemLeft = document.createElement("div");
    homePageBranchesItemLeft.setAttribute(
      "class",
      "homePage__branches-item left"
    );
    const homePageBranchesItemLeftLink = document.createElement("a");
    multiSetAttributes(homePageBranchesItemLeftLink, {
      href: `/#/departmentWebDev/branches/${data.branchFront}`,
      class: "homePage__branches-link",
    });
    const homePageBranchesItemLeftTitle = document.createElement("span");
    homePageBranchesItemLeftTitle.textContent = "frontend отдел";
    homePageBranchesItemLeftLink.appendChild(homePageBranchesItemLeftTitle);
    homePageBranchesItemLeft.appendChild(homePageBranchesItemLeftLink);
    const ArrowBranchLeft = document.createElement("div");
    ArrowBranchLeft.setAttribute("class", "arrow arrow-branch left");
    homePageBranchesItemLeft.appendChild(ArrowBranchLeft);
    homePageBranchesLeft.append(homePageBranchesItemLeft);

    homePageBranchesLeft.insertAdjacentHTML(
      "beforeend",
      `
      <div class='homePage__branches-item left'>
        <a class='homePage__branches-link   href='/#/departmentWebDev/branches/${data.branchBack}'>
          <span>backend отдел</span>
        </a>
        <div class='arrow arrow-branch left'></div>
      </div>
    `
    );

    homePageDepartmentItemLeft.append(
      homePageDepartmentMainLeft,
      homePageBranchesLeft
    );

    const homePageDepartmentItemRight = document.createElement("div");
    homePageDepartmentItemRight.setAttribute(
      "class",
      "homePage__department-item right"
    );
    const homePageDepartmentMainRight = document.createElement("div");
    homePageDepartmentMainRight.setAttribute(
      "class",
      "homePage__department-main"
    );
    const homePageDepartmentMainLinkRight = document.createElement("a");
    homePageDepartmentMainLinkRight.setAttribute(
      "href",
      `/#/departments/${data.depWebDesign}`
    );

    const homePageDepartmentMainTitleRight = document.createElement("span");
    homePageDepartmentMainTitleRight.textContent = "Департамент web-дизайна";
    homePageDepartmentMainLinkRight.appendChild(
      homePageDepartmentMainTitleRight
    );
    const arrowDepartmentRight = document.createElement("div");
    arrowDepartmentRight.setAttribute("class", "arrow arrow-department right");
    homePageDepartmentMainRight.append(
      homePageDepartmentMainLinkRight,
      arrowDepartmentRight
    );

    const homePageBranchesRight = document.createElement("div");
    homePageBranchesRight.setAttribute("class", "homePage__branches");
    const homePageBranchesItemRight = document.createElement("div");
    homePageBranchesItemRight.setAttribute(
      "class",
      "homePage__branches-item right"
    );
    const homePageBranchesItemRightLink = document.createElement("a");
    multiSetAttributes(homePageBranchesItemRightLink, {
      href: `/#/departmentWebDesign/branches/${data.branchUiUx}`,
      class: "homePage__branches-link",
    });

    const homePageBranchesItemRightTitle = document.createElement("span");
    homePageBranchesItemRightTitle.textContent = "UI/UX отдел";
    homePageBranchesItemRightLink.appendChild(homePageBranchesItemRightTitle);
    homePageBranchesItemRight.appendChild(homePageBranchesItemRightLink);
    const ArrowBranchRight = document.createElement("div");
    ArrowBranchRight.setAttribute("class", "arrow arrow-branch right");
    homePageBranchesItemRight.appendChild(ArrowBranchRight);
    homePageBranchesRight.append(homePageBranchesItemRight);

    homePageBranchesRight.insertAdjacentHTML(
      "beforeend",
      `
      <div class='homePage__branches-item right'>
        <a class='homePage__branches-link   href: '/#/departmentWebDesign/branches/${data.branchEcommerce}'>
          <span>ecommerce отдел"</span>
        </a>
        <div class='arrow arrow-branch right'></div>
      </div>
    `
    );

    homePageDepartmentItemRight.append(
      homePageDepartmentMainRight,
      homePageBranchesRight
    );

    homePageDepartmentWrapper.append(
      homePageDepartmentItemLeft,
      homePageDepartmentItemRight
    );

    const homePageCounting = document.createElement("div");
    homePageCounting.setAttribute("class", "homePage__counting");
    const homePageCountingLink = document.createElement("a");
    homePageCountingLink.setAttribute("href", `/#/${data.branchCounting}`);
    const homePageCountingTitle = document.createElement("span");
    homePageCountingTitle.textContent = "Бухгалтерия";
    homePageCountingLink.appendChild(homePageCountingTitle);
    const arrowCount = document.createElement("div");
    arrowCount.setAttribute("class", "arrow arrow-count");
    homePageCounting.append(homePageCountingLink, arrowCount);

    homePageWrapper.append(
      homePageDirector,
      homePageDepartmentWrapper,
      homePageCounting
    );

    container.append(title, homePageWrapper);
    homePage.appendChild(container);

    return homePage;
  }
}

export { HomePage };
