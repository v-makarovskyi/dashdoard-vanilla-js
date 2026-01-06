import { multiSetAttributes, addMultiElems } from "@utils";

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

    addMultiElems(
      signinPageFormWrapper,
      signinPageFormControl,
      1,
      [{for: 'password'},
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

    signinPageFormWrapper.appendChild(signinPageFormControl);

    signinPageForm.appendChild(signinPageFormWrapper);

    signinPageInner.append(signinPageTitle, signinPageForm);

    signinPageWrapper.appendChild(signinPageInner);

    container.appendChild(signinPageWrapper);

    signinPage.appendChild(container);

    main.appendChild(signinPage);

    return main;
  }
}

{
  /* <section class="signinPage">
  <div class="container">
    <div class="signinPage__wrapper">
      <div class="signinPage__inner">
        <h2 class="signinPage__title">Войти в систему</h2>
        <form id="signPageForm" class="signinPage__form">
          <div class="signinPage__form-wrapper">
            <div class="signinPage__formControl">
              <label for="email">Введите email</label>
              <input
                id="email"
                class="input"
                type="email"
                name="email"
                placeholder="Enter email..."
              />
            </div>
            <div class="signinPage__formControl">
              <label for="password">Введите пароль</label>
              <input
                id="password"
                class="input"
                type="password"
                name="password"
                placeholder="Enter password..."
              />
            </div>
            <button type="submit" class="button signinPage__form-btn">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>; */
}

export { SigninPage };
