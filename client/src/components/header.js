import { multiSetAttributes, addMultiElems } from "@utils";

class Header {
  render() {
    const header = document.createElement("header");
    multiSetAttributes(header, { id: "header-box", class: "header" });
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const headerActions = document.createElement("div");
    headerActions.setAttribute("class", "header__actions");
    const headerActionsBtn = document.createElement("a");
    multiSetAttributes(headerActionsBtn, {
      id: "allEmployes",
      href: '#',
      class: "button header__actions-btn",
    });
    headerActionsBtn.textContent = "Все сотрудники";
    headerActions.append(headerActionsBtn);
    addMultiElems(
      headerActions,
      headerActionsBtn,
      2,
      [{ id: "searh", href: '#' }, { id: "signout", href: '#' }],
      "Детальный поиск",
      "Выйти"
    );

    container.appendChild(headerActions);
    header.appendChild(container);
    return header;
  }
}

export { Header };
