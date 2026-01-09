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
    if (childrens.length === 0) {
      cloneElement.textContent = textContents[i];
      if (attrsArray && attrsArray.length > 0) {
        multiSetAttributes(cloneElement, attrsArray[i]);
      }
    } else if (childrens.length > 0) {
      for (let i = 0; i < childrens.length; i++) {
        if (childrens[i].dataset.label) {
          multiSetAttributes(childrens[i], attrsArray[i]);
          childrens[i].textContent = textContents[i];
        } else if (childrens[i].dataset.input) {
          multiSetAttributes(childrens[i], attrsArray[i]);
        }
      }
    }
    parentElem.appendChild(cloneElement);
  }
}


export { multiSetAttributes, addMultiCloneElems };
