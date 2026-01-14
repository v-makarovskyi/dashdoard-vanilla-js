import { multiSetAttributes } from "@utils";

class Footer {
  name;
  constructor(name) {
    this.name = name;
  }
  render() {
    const footer = document.createElement("footer");
    footer.setAttribute("class", "footer");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const footerInfo = document.createElement("div");
    footerInfo.setAttribute("class", "footer__info");
    const footerInfoCopyright = document.createElement("span");
    footerInfoCopyright.textContent = "© 2026";
    const footerInfoContacts = document.createElement("a");
    multiSetAttributes(footerInfoContacts, {
      href: "https://github.com/v-makarovskyi",
      target: "_blank",
    });
    footerInfoContacts.innerHTML = "makarovskyi.v@gmail.com &nbsp;✅";
    footerInfo.append(footerInfoCopyright, footerInfoContacts);
    container.appendChild(footerInfo);
    footer.appendChild(container);

    return footer;
  }
}

export { Footer };

{
  /* <footer class="footer">
<div class="container">
  <div class="footer__info">
    <span>© 2026 &nbsp; </span>
    <a href="https://github.com/v-makarovskyi" target="_blank"
      >makarovskyi.v@gmail.com &nbsp;✅</a
    >
  </div>
</div>
</footer>  */
}
