import { multiSetAttributes, addMultiCloneElems } from "@utils";

class Header {
  render() {
    const header = document.createElement("header");
    multiSetAttributes(header, { id: "header-box", class: "header" });
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const headerActions = document.createElement("div");
    headerActions.setAttribute("class", "header__actions");
    const headerActionsBtn = document.createElement("button");
    multiSetAttributes(headerActionsBtn, {
      ['data-path']: "/",
      href: "#/",
      class: "button header__actions-btn",
    });
    headerActionsBtn.textContent = "На главную";
    headerActions.append(headerActionsBtn);
    addMultiCloneElems(
      headerActions,
      headerActionsBtn,
      1,
      [
        /* { id: "allEmployes", href: "allEmployes" },
        { id: "search", href: "search" }, */
        { ['data-path']: "/signin", href: "/#/signin" },
      ],
      "Все сотрудники",
      "Детальный поиск",
      "Выйти"
    );

    container.appendChild(headerActions);
    header.appendChild(container);

    return header;
  }

 /*  afterRender() {
    Array.from(document.querySelectorAll(".header__actions-btn")).map((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e)
      })
    })
  }  */
}

export { Header };
