const { Prisma } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const resultExtentions = Prisma.defineExtension({
  result: {
    employee: {},
  },
});

module.exports = resultExtentions;
