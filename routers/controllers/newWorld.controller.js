const db = require("../../prisma/db");

exports.getAllLinksForHomePage = async (req, res, next) => {
  try {
    const departmentsAndRelationBranchesSlugs = await db.department.findMany({
      select: {
        slug: true,
        branches: {
          select: {
            slug: true,
          },
        },
      },
    });
    const countingBranchSlug = await db.branch.findUnique({
      where: { slug: "branchCounting" },
      select: {
        slug: true,
      },
    });

    let output = [];
    function getMainSlugs(arr) {
      arr.map((el) => {
        const keys = Object.keys(el);
        for (let key of keys) {
          if (typeof el[key] === "string") {
            output.push(el[key]);
          } else if (Array.isArray(el[key])) {
            getMainSlugs(el[key]);
          }
        }
      });
      return output;
    }

    let slugsForHomePage = getMainSlugs(departmentsAndRelationBranchesSlugs);
    slugsForHomePage = [
      ...slugsForHomePage,
      ...Object.values(countingBranchSlug),
    ];

    let data = {
      depWebDev: slugsForHomePage[3],
      branchFront: slugsForHomePage[4],
      branchBack: slugsForHomePage[5],
      depWebDesign: slugsForHomePage[0],
      branchUiUx: slugsForHomePage[1],
      branchEcommerce: slugsForHomePage[2],
      branchCounting: slugsForHomePage[6],
    };

    res.status(200).json({ data });
  } catch (error) {
    console.error("mainSlugsError", error);
  }
};

exports.getDepartment = async (req, res, next) => {
  const { departmentSlug } = req.params;
  try {
    const department = await db.department.findUnique({
      where: { slug: departmentSlug },
      include: {
        branches: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
    });
    let headDepartment = await db.employee.findUnique({
      where: {
        slug:
          "head" + departmentSlug[0].toUpperCase() + departmentSlug.slice(1),
      },
      select: { slug: true },
    });
    headDepartment = Object.values(headDepartment);

    const data = {
      department,
      ...(headDepartment && { head: headDepartment[0] }),
    };
    res.status(200).json({ data: data });
  } catch (error) {
    console.log("GetCompanyPart Error", error);
  }
};

exports.getBranch = async (req, res, next) => {
  const params = req.params;
  try {
    if ("bcount" in req.params) {
      const branchCounting = await db.branch.findUnique({
        where: { slug: req.params.bcount },
        include: {
          employees: true,
        },
      });
      res.status(200).json({ data: branchCounting });
    } else if ("departmentSlug" in req.params && "branchSlug" in req.params) {
      const branch = await db.branch.findUnique({
        where: { slug: req.params.branchSlug },
        include: {
          employees: true,
        },
      });
      res.status(200).json({ data: branch });
    }
  } catch (error) {
    console.error(error)
  }
};
