function multiSetAttributes(element, attrs) {
  const keys = Object.keys(attrs);
  for (let key of keys) {
    element.setAttribute(key, attrs[key]);
  }
}

function parseRequestUrl() {
  /* console.log("ut location", document.location); */
  const address = document.location.hash.slice(1);
  /*  console.log("ut address", address); */
  const url = address || "/";
  const r = url.split("/");
  /*  console.log("ut r", r); */

  return {
    resource: r[1],
    ...(r[1] === "heads" && r.length === 3 && { headSlug: r[2] }),
    ...(r[1] === "heads" &&
      r.length > 3 &&
      r[2].startsWith("dep") && {
        departmentSlug: r[2],
        headDepartmentSlug: r[3],
      }),
    ...(r[1] === "departments" && { departmentSlug: r[2] }),
    ...(((r[1] === "departmentWebDev" && r[2] === "branches") ||
      (r[1] === "departmentWebDesign" && r[2] === "branches")) && {
      branches: r[2],
      branchSlug: r[3],
    }),
    /* slug: r[2],
    subSlug: (r[3] && isNaN(r[3])) ? r[3] : undefined */
  };
}

export { multiSetAttributes, addMultiCloneElems, parseRequestUrl };
