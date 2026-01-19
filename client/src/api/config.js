const apiUrl = document.location.href.startsWith("http://localhost")
  ? "http://localhost:9000/api"
  : "";

export { apiUrl };
