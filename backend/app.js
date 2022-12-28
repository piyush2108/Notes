const cookieParser = require('cookie-parser')
const express = require('express')
const errorMiddleware = require('./middlewares/error')

const app = express()
app.use(express.json())
app.use(cookieParser())

//route imports
const task = require('./routes/taskRoute')
const user = require('./routes/userRoute')

app.use("/api/v1", task)
app.use("/api/v1", user)

//middleware for error
app.use(errorMiddleware)

module.exports = app