const express = require('express')
const { getAllTasks, createTask, updateTask, removeTask } = require('../controllers/taskController')
const router = express.Router()

//create new task
router.route("/create").post(createTask)
//get all tasks
router.route("/tasks").get(getAllTasks)
//update title, desc and category of task
router.route("/tasks/:id").put(updateTask)
//remove a task
router.route("/tasks/:id").delete(removeTask)


module.exports = router