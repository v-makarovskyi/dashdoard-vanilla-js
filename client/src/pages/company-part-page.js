import { multiSetAttributes, addMultiCloneElems } from "@utils";
import { parseRequestUrl } from "@utils";

class CompanyPartPage {
  name;
  constructor(name) {
    this.name = name;
  }
  render() {
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
      "Директор предприятия"
    );
    companyPartTitle.appendChild(companyPartTitleContent);

    const companyPartContent = document.createElement("div");
    companyPartContent.setAttribute("class", "companyPart__content");

    const companyPartDescription = document.createElement("p");
    companyPartDescription.setAttribute("class", "companyPart__description");
    companyPartDescription.textContent =
      "Lorem ipsum dolor sit amet consectetur" +
      "\n" +
      "adipisicing elit. A beatae vel quas ut nostrum ea corporis temporibus placeat etvoluptatibus" +
      "\n" +
      "asperiores, eligendi qui deleniti necessitatibus, vitae facilis alias minus ipsum dolor iusto, sit officiis." +
      "\n" +
      "Delectus nihil beatae aperiam. Ullam porro recusandae nobis. Expedita officia laboriosam necessitatibus" +
      "\n" +
      "veritatis labore nihil explicabo.";

    const companyPartActions = document.createElement("div");
    companyPartActions.setAttribute("class", "companyPart__actions");

    const companyPartActionsWrapper = document.createElement("div");
    companyPartActionsWrapper.setAttribute(
      "class",
      "companyPart__actions-wrapper"
    );

    const companyPartActionsLink = document.createElement("a");
    companyPartActionsLink.textContent = "На страницу директора";
    multiSetAttributes(companyPartActionsLink, {
      href: "/#/company-part",
      class: "button companyPart__actions-link",
      "data-part": true,
    });
    companyPartActionsWrapper.appendChild(companyPartActionsLink);

    addMultiCloneElems(
      companyPartActionsWrapper,
      companyPartActionsLink,
      1,
      [{ href: "/#", "data-home": true }],
      "На домашнюю"
    );

    companyPartActions.appendChild(companyPartActionsWrapper);

    companyPartContent.append(companyPartDescription, companyPartActions);

    companyPartInner.append(companyPartTitle, companyPartContent);

    companyPartWrapper.appendChild(companyPartInner);

    container.appendChild(companyPartWrapper);

    companyPart.appendChild(container);

    return companyPart;
  }

  afterRender() {
    //const request = parseRequestUrl();
    //console.log("afterRender Request", request);
  }
}

export { CompanyPartPage };

