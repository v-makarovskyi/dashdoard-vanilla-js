const employeeRouter = require("express").Router();
const db = require("../prisma/db");

employeeRouter.get("/", (req, res, next) => {
  const asd = new Promise((resolve) => {
    const test = db.employee.findUnique({
      where: {
        emp_id: { email: "tishinskaya@nw.test.com", first_name: "Ирина" },
      },
    });
    resolve(test)
  });
  asd.then(data => res.status(200).json(data))
});

module.exports = employeeRouter;
