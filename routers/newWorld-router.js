const newWorldRouter = require("express").Router();
const db = require("../prisma/db");
const newWorldController = require("../controllers/newWorld.controller");

newWorldRouter.get("/get-main-links", newWorldController.getAllLinksForHomePage);
newWorldRouter.get('/test', newWorldController.test)
newWorldRouter.get(/^\/(?<bcount>b\w+[c\w+]g$)/, newWorldController.getBranch);
newWorldRouter.get("/:departmentSlug", newWorldController.getDepartment);
newWorldRouter.get(
  "/:departmentSlug/branches/:branchSlug",
  newWorldController.getBranch
);

module.exports = newWorldRouter;
