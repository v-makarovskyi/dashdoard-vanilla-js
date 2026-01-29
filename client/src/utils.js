function multiSetAttributes(element, attrs) {
  const keys = Object.keys(attrs);
  for (let key of keys) {
    element.setAttribute(key, attrs[key]);
  }
}

function parseRequestUrl() {
  console.log("ut location", document.location);
  const address = document.location.hash.slice(1);
  console.log("ut address", address);
  const url = address || "/";
  const r = url.split("/").filter(Boolean);
  console.log("ut r", r);

  return {
    resource: r[0],
    ...(r[0] === "heads" && r.length === 2 && { headSlug: r[1] }),
    ...(r[0] === "heads" &&
      r.length > 2 &&
      r[1].startsWith("dep") && {
        departmentSlug: r[1],
        headDepartmentSlug: r[2],
      }),
    ...(r[0] !== void 0 &&
      r[0].startsWith("dep") &&
      r.length === 3 &&
      r[2].startsWith("employee") && { branchSlug: r[1], employee: r[2] }),
    ...(r[0] === "departments" && { departmentSlug: r[1] }),
    ...(((r[0] === "departmentWebDev" && r[1] === "branches") ||
      (r[0] === "departmentWebDesign" && r[1] === "branches")) && {
      branches: r[1],
      branchSlug: r[2],
    }),
    ...(r[0] === 'branchCounting' && {employee: r[1]})
    /* slug: r[2],
    subSlug: (r[3] && isNaN(r[3])) ? r[3] : undefined */
  };
}

export { multiSetAttributes, parseRequestUrl };
