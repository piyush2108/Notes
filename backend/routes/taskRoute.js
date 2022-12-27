const express = require('express')
const { getAllTasks, createTask } = require('../controllers/taskController')
const router = express.Router()

router.route("/getAllTasks").get(getAllTasks)
router.route("/create").post(createTask)

module.exports = router