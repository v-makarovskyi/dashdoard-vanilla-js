require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
const cors = require('./middleware/cors')

app.use(cors.useCors());

const authRouter = require("./routers/auth-router");
const companyRouter = require("./routers/company-router");
const employeeRouter = require("./routers/employee-router");

app.use(express.static(path.join(__dirname, "client")));

app.use("/api/auth", authRouter);
app.use("/api/company", companyRouter);
app.use("/api/employees", employeeRouter);

module.exports = app;
