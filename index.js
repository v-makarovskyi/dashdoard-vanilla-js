const http = require("node:http");
const app = require("./app");
const debug = require("debug")("dashboard:server");

const port = normalizePort(process.env.PORT || '9000');
app.set("port", port);

const server = http.createServer(app).listen(port);
server.on("listening", onListening);
server.on("error", onError);

function normalizePort(value) {
  const port = parseInt(value, 10);
  if (Number.isNaN(port)) {
    return value;
  }
  if (port > 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + "требует прав администратора!");
      process.exit(1);

    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Server listening on " + bind);
}
