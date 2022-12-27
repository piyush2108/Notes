const express = require('express')

const app = express()
app.use(express.json())

//route imports
const task = require('./routes/taskRoute')

app.use("/api/v1", task)

module.exports = app