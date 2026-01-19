const db = require("./db");
const chalk = require("chalk");
const seedData = require("./dataForSeed");
const { request } = require("express");
const bcrypt = require("bcrypt");

async function main() {
  await Promise.all(
    seedData.companyData.map(async (c) => {
      await db.company.upsert({
        where: { slug: c.slug },
        update: {},
        create: {
          name: c.name,
          slug: c.slug,
        },
      });
    })
  );

  await Promise.all(
    seedData.departmentData.map(async (dep) => {
      await db.department.upsert({
        where: { slug: dep.slug },
        update: {},
        create: {
          name: dep.name,
          slug: dep.slug,
          description: dep.description,
        },
      });
    })
  );

  await Promise.all(
    seedData.branchData.map(async (b) => {
      await db.branch.upsert({
        where: { slug: b.slug },
        update: {},
        create: {
          name: b.name,
          slug: b.slug,
          description: b.description,
          company: b.company
            ? { connect: { slug: b.company.slug } }
            : undefined,
          department: b.department
            ? { connect: { slug: b.department.slug } }
            : undefined,
        },
      });
    })
  );

  await Promise.all(
    seedData.employeesData.map(async (emp) => {
      await db.employee.upsert({
        where: { email: emp.email },
        update: {},
        create: {
          job_title: emp.jobTitle,
          first_name: emp.firsName,
          last_name: emp.lastName,
          slug: emp?.slug,
          description: emp?.description,
          birthday: emp.birthday,
          email: emp.email,
          tel: emp.tel,
          address: {
            create: {
              index: emp.address.index,
              country: emp.address.country,
              city: emp.address.city,
              street: emp.address.street,
              building: emp.address.building,
              num: emp.address.num,
            },
          },
          isAdmin: emp.isAdmin,
          password: emp.password ? emp.password : undefined,
          company: emp.company
            ? { connect: { slug: emp.company.slug } }
            : undefined,
          department: emp.department
            ? {
                connect: { slug: emp.department.slug },
              }
            : undefined,
          branch: emp.branch
            ? {
                connect: { slug: emp.branch.slug },
              }
            : undefined,
        },
      });
    })
  );
}

main()
  .then(async () => {
    console.log();
    console.log(chalk.blueBright("База данных отлично заполнена"));
    db.$disconnect();
  })
  .catch(async (err) => {
    console.log("err: ", err);
    db.$disconnect();
    process.exit(1);
  });
