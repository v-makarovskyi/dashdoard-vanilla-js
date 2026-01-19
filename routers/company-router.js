const companyRouter = require("express").Router();
const db = require("../prisma/db");

companyRouter.get("/company-parts", async (req, res, next) => {
  try {
    const mainCompanyLinks = await db.company.findUnique({
      where: { slug: "new-world" },
      select: {
        branch: {
          select: { slug: true },
        },
        employees: {
          select: {
            slug: true,
            department: {
              select: { slug: true, branches: {select: {slug: true}} },
            },
          },
        },
      },
    });
    console.log(mainCompanyLinks);
    const headLink = mainCompanyLinks.employees[0].slug;
    const webDevLink = mainCompanyLinks.employees[1].department.slug;
    const webDesignLink = mainCompanyLinks.employees[2].department.slug;
    const countingBranchLink = mainCompanyLinks.branch[0].slug;

    res.status(200).json({data: mainCompanyLinks})

    /* res.status(200).json({
      data: {
        
        headLink,
        webDevLink,
        webDesignLink,
        countingBranchLink,
      },
    }); */
  } catch (error) {
    console.error(error);
  }
});

module.exports = companyRouter;
