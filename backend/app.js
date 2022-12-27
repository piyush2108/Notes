const express = require('express')
const errorMiddleware = require('./middlewares/error')

const app = express()
app.use(express.json())

//route imports
const task = require('./routes/taskRoute')

app.use("/api/v1", task)

//middleware for error
app.use(errorMiddleware)

module.exports = app