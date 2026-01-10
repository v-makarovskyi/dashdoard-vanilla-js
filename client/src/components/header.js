import { multiSetAttributes, addMultiCloneElems } from "@utils";

class Header {
  render() {
    const header = document.createElement("header");
    multiSetAttributes(header, { id: "header-box", class: "header" });
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const headerActions = document.createElement("div");
    headerActions.setAttribute("class", "header__actions");
    const headerActionsLink = document.createElement("a");
    multiSetAttributes(headerActionsLink, {
      href: "#/",
      ["data-path"]: "/",
      class: "header__actions-link",
    });
    headerActionsLink.textContent = "На главную";
    headerActions.append(headerActionsLink);
    addMultiCloneElems(
      headerActions,
      headerActionsLink,
      3,
      [
        { href: "#/allEmployes", ["data-path"]: "allEmployes" },
        { href: "#/search", ["data-path"]: "search" },
        { href: "#/signin", ["data-path"]: "signin" },
      ],
      "Все сотрудники",
      "Детальный поиск",
      "Выйти"
    );

    container.appendChild(headerActions);
    header.appendChild(container);

    return header;
  }
}

export { Header };
