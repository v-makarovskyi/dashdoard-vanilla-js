function multiSetAttributes(element, attrs) {
  const keys = Object.keys(attrs);
  for (let key of keys) {
    element.setAttribute(key, attrs[key]);
  }
}

function addMultiCloneElems(
  parentElem,
  childElem,
  qty,
  attrsArray,
  ...textContents
) {
  let cloneElement;
  for (let i = 0; i < qty; i++) {
    cloneElement = childElem.cloneNode(true);
    let childrens = Array.from(cloneElement.children);
    //Для клонирования элементов, не имеющих потомков
    if (childrens.length === 0) {
      cloneElement.textContent = textContents[i];
      if (attrsArray && attrsArray.length > 0) {
        multiSetAttributes(cloneElement, attrsArray[i]);
      }
    } else if (childrens.length > 0) {
      for (let i = 0; i < childrens.length; i++) {
        //для форм
        if (childrens[i].dataset.label) {
          multiSetAttributes(childrens[i], attrsArray[i]);
          childrens[i].textContent = textContents[i];
        } else if (childrens[i].dataset.input) {
          multiSetAttributes(childrens[i], attrsArray[i]);
        } else if (
          //только для главной страницы при рендере структуры компании
          cloneElement.getAttribute("class") ===
            "homePage__branches-item left" ||
          cloneElement.getAttribute("class") === "homePage__branches-item right"
        ) {
          childrens[0].textContent = textContents[0];
          multiSetAttributes(childrens[0], attrsArray[0]);
        }
      }
    }
    parentElem.appendChild(cloneElement);
  }
}

function parseRequestUrl() {
  const location = document.location
  const address = document.location.hash.slice(1);
  const url = address.toLowerCase() || "/";
  const r = url.split("/");

  return {
    resource: r[1],
    slug: r[2],
    subSlug: (r[3] && isNaN(r[3])) ? r[3] : undefined
  };
}

export { multiSetAttributes, addMultiCloneElems, parseRequestUrl };
