const express = require('express')
const { getAllTasks, createTask, updateTask, removeTask, getTaskDetails } = require('../controllers/taskController')
const router = express.Router()


router.route("/create").post(createTask)
router.route("/tasks").get(getAllTasks)
router.route("/tasks/:id").get(getTaskDetails)
router.route("/tasks/:id").put(updateTask)
router.route("/tasks/:id").delete(removeTask)


module.exports = router