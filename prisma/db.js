const { PrismaClient } = require('@prisma/client')
const moment = require('moment')

const db = new PrismaClient()

module.exports = db