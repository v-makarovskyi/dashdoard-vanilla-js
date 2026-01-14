require('dotenv').config()
const path = require('node:path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'client')))


module.exports = app