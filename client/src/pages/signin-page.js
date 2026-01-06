import { multiSetAttributes, addMultiCloneElems } from "@utils";

class SigninPage {
  render() {
    const main = document.createElement("main");

    const signinPage = document.createElement("section");
    signinPage.setAttribute("class", "signinPage");

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const signinPageWrapper = document.createElement("div");
    signinPageWrapper.setAttribute("class", "signinPage__wrapper");

    const signinPageInner = document.createElement("div");
    signinPageInner.setAttribute("class", "signinPage__inner");

    const signinPageTitle = document.createElement("h2");
    signinPageTitle.setAttribute("class", "signinPage__title");
    signinPageTitle.textContent = "Войти в систему";

    const signinPageForm = document.createElement("form");
    multiSetAttributes(signinPageForm, {
      id: "signPageForm",
      class: "signinPage__form",
    });

    const signinPageFormWrapper = document.createElement("div");
    signinPageFormWrapper.setAttribute("class", "signinPage__form-wrapper");

    const signinPageFormControl = document.createElement("div");
    signinPageFormControl.setAttribute("class", "signinPage__formControl");

    const signinPageFormControlLabel = document.createElement("label");
    multiSetAttributes(signinPageFormControlLabel, {
      for: "email",
      "data-label": true,
    });
    signinPageFormControlLabel.textContent = "Введите email";

    const signinPageFormControlInput = document.createElement("input");
    multiSetAttributes(signinPageFormControlInput, {
      id: "email",
      type: "email",
      name: "email",
      class: "input",
      placeholder: "Enter email...",
      "data-input": true,
    });

    signinPageFormControl.append(
      signinPageFormControlLabel,
      signinPageFormControlInput
    );

    signinPageFormWrapper.appendChild(signinPageFormControl);

    addMultiCloneElems(
      signinPageFormWrapper,
      signinPageFormControl,
      1,
      [
        { for: "password" },
        {
          id: "password",
          name: "password",
          type: "password",
          class: "input",
          placeholder: "Enter password...",
        },
      ],
      "Введите пароль"
    );

    const signinPageFormBtn = document.createElement("button");
    multiSetAttributes(signinPageFormBtn, {
      type: "submit",
      class: "button signinPage__form-btn",
    });
    signinPageFormBtn.textContent = "Войти";

    signinPageFormWrapper.appendChild(signinPageFormBtn);

    signinPageForm.appendChild(signinPageFormWrapper);

    signinPageInner.append(signinPageTitle, signinPageForm);

    signinPageWrapper.appendChild(signinPageInner);

    container.appendChild(signinPageWrapper);

    signinPage.appendChild(container);

    main.appendChild(signinPage);

    return main;
  }
}

export { SigninPage };
