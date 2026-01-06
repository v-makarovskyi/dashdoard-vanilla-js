import { Header } from "@components/header.js";
import { Footer } from "@components/footer.js";
import { HomePage } from "@pages/home-page.js";
import { SigninPage } from "@pages/signin-page.js";

const header = new Header();
const footer = new Footer()
const homePage = new HomePage()
const signinPage = new SigninPage()

const rootBox = document.getElementById("root");

function router() {

  rootBox.appendChild(header.render());
  //rootBox.appendChild(homePage.render())
  rootBox.appendChild(signinPage.render())
  rootBox.appendChild(footer.render())

}

window.addEventListener("load", () => {
  router();
});
