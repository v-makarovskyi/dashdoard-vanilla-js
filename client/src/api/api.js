import { apiUrl } from "./config.js";

async function getMainLinksForApp() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  try {
    const response = await fetch(`${apiUrl}/newWorld/get-main-links`, {
      credentials: "include",
      headers: headers,
    });
    const contentType = response.headers.get("content-type");
   if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("К нам приехал не JSON");
    } 
    if (!response.ok) {
      throw new Error("Что-то пошло не так на домашней странице!");
    }
    const links = await response.json();
    return links;
  } catch (error) {
    console.error("error homePage: " + error.name + ": " + error.message);
  }
}

async function getDepartmentData(departmentSlug) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  try {
    const response = await fetch(`${apiUrl}/newWorld/${departmentSlug}`, {
      credentials: "include",
      headers,
    });
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("К нам приехал не JSON");
    }
    if (!response.ok) {
      throw new Error("Что-то пошло не так на странице департамента!");
    }
    const department = await response.json();
    return department;
  } catch (error) {
    console.log("get department error: ", error);
  }
}

async function getBranchData(departmentSlug, branchSlug) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  try {
    if (typeof branchSlug === "undefined") {
      const response = await fetch(`${apiUrl}/newWorld/branchCounting`, {
        credentials: "include",
        headers,
      });
      const branchCountingData = await response.json();
      return branchCountingData;
    } else {
      const response = await fetch(
        `${apiUrl}/newWorld/${departmentSlug}/branches/${branchSlug}`
      );
      const branchData = await response.json();
      return branchData;
    }
  } catch (error) {
    console.log("error branch page: ", error);
  }
}

export { getMainLinksForApp, getDepartmentData, getBranchData };
