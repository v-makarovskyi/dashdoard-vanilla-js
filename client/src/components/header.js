import { multiSetAttributes } from "@utils";

class Header {
  name;
  constructor(name) {
    this.name = name;
  }
  render() {
    const header = document.createElement("header");
    multiSetAttributes(header, { id: "header-box", class: "header" });
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const headerActions = document.createElement("div");
    headerActions.setAttribute("class", "header__actions");
    const headerActionsLink = document.createElement("a");
    multiSetAttributes(headerActionsLink, {
      href: "/#/",
      ["data-path"]: "/",
      class: "header__actions-link",
    });
    headerActionsLink.textContent = "На главную";
    headerActions.append(headerActionsLink);
    headerActions.insertAdjacentHTML(
      "beforeend",
      `
      <a class='header__actions-link' href="/#/allEmployees">Все сотрудники</a>
      <a class='header__actions-link' href="/#/search">Детальный поиск</a>
      <a class='header__actions-link' href="/#/signin">Выйти</a>
    `
    );

    container.appendChild(headerActions);
    header.appendChild(container);

    return header;
  }
}

export { Header };
