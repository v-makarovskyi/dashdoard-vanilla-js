const { Prisma } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const modelExtentions = Prisma.defineExtension({
  name: "adminHashedPassword",
  model: {
    employee: {
      async getAdminHashedPassword(emp) {
        if (emp.isAdmin && emp.password) {
          const hashedPassword = await bcrypt.hash(emp.password, saltRounds);
          return hashedPassword;
        }
      },
      getToken(emp) {
        if (emp.isAdmin) {
          const token = jwt.sign(
            {
              id: emp.id,
              slug: emp.slug,
              isAdmin: emp.isAdmin,
              email: emp.email,
              first_name: emp.first_name,
              last_name: emp.last_name,
            },
            process.env.JWT_SECRET,
            { expiresIn: 1000 * 60 * 60 * 48 }
          );
          return token;
        }
      },
    },
  },
});

module.exports = modelExtentions;
