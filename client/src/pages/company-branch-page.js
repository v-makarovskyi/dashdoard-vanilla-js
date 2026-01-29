import { multiSetAttributes } from "@utils";
import { getBranchData } from "../api/api.js";

class CompanyBranchPage {
  name;
  constructor(name) {
    this.name = name;
  }

  async render() {
    let departmentSlugString;
    let branchSlugString;
    let slugsFromUrl = document.location.hash
      .slice(1)
      .split("/")
      .filter(Boolean);

    if (slugsFromUrl.length > 1) {
      [departmentSlugString, branchSlugString] = [
        slugsFromUrl[0],
        slugsFromUrl[2],
      ];
    }
    let result;
    try {
      if (typeof departmentSlugString === "undefined") {
        result = await getBranchData();
      } else {
        result = await getBranchData(departmentSlugString, branchSlugString);
      }
    } catch (error) {
      console.log("errorin companyBranchPage: ", error);
    }

    const { description, slug: branchSlug, employees, name } = result.data;

    const isDepDesign =
      branchSlug === "branchUiUx" || branchSlug === "branchEcommerce";

    const branchPage = document.createElement("section");
    branchPage.setAttribute("class", "branchPage");

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    container.innerHTML = `
      <div class='branchPage__wrapper'>
        <div class='branchPage__inner'>
          <h1 class='${
            isDepDesign ? "branchPage__title depDesignBg" : "branchPage__title"
          }'>${name}</h1>
          <div class='branchPage__description'>
            <p>${description}</p>
          </div>
          <div class='branchPage__employees'>
            <p>Сотрудники отдела: </p>
            <ul class='branchPage__employees-list'>
              ${employees.map(
                (emp) => `
                  <li class='branchPage__employees-item'>
                <div class='${
                  isDepDesign
                    ? "branchPage__employees-item-wrapper depDesignBg"
                    : "branchPage__employees-item-wrapper"
                }'>
                  <p class='branchPage__employees-item-name'>${
                    emp.first_name
                  } ${emp.last_name}</p>
                  <div class='branchPage__employees-item-info'>
                    <div class='branchPage__employees-item-jobTitle'>
                      <span>Должность:</span>
                      <span>${emp.job_title}</span>
                    </div>
                    <div class='branchPage__employees-item-email'>
                     <span>Email:</span>
                     <span>${emp.email}</span>
                  </div>
                  <div class='branchPage__employees-item-phone'>
                    <span>phone:</span>
                    <span>${emp.tel}</span>
                  </div>
                  </div>
                  <a href='/#${
                    departmentSlugString ? "/" + departmentSlugString : ""
                  }/${branchSlug}/employee-${emp.id}' 
                  class='branchPage__employees-item-link'>На персональную страницу</a>
                </div>
              </li>
                `
              )}
            </ul>
          </div>
        </div>
      </div>
    `;

    branchPage.appendChild(container);

    return branchPage;
  }
}

export { CompanyBranchPage };
