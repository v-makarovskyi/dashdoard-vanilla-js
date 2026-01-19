import { apiUrl } from "./config.js";

async function getMainLinksForApp() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  try {
    const response = await fetch(`${apiUrl}/company/company-parts`, {
      credentials: "include",
      headers: myHeaders,
    });
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("К нам приехал не JSON");
    }
    console.log("response", response);
    if (!response.ok) {
      throw new Error("Что-то пошло не так на домашней странице!");
    }
    const links = await response.json();
    return links;
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }
}

export { getMainLinksForApp };
