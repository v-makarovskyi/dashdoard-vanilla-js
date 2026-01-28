require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
//const cors = require('./middleware/cors')
const cors = require('cors')

app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true,
}));

const authRouter = require("./routers/auth-router");
const newWorldRouter = require("./routers/newWorld-router");
const employeeRouter = require("./routers/employee-router");

app.use(express.static(path.join(__dirname, "client")));

app.use("/api/auth", authRouter);
app.use("/api/newWorld", newWorldRouter);
app.use("/api/employees", employeeRouter);

module.exports = app;
