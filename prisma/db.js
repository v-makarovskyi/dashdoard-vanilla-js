const { PrismaClient } = require("@prisma/client");
const modelExtentions = require('./extentions/model')
const resultExtentions = require('./extentions/result')
const moment = require("moment");


const db = new PrismaClient().$extends(modelExtentions, resultExtentions);

module.exports = db;
