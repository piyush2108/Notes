const express = require('express')
const { getAllTasks, createTask, updateTask, removeTask, getTaskDetails } = require('../controllers/taskController')
const { isAuthenticatedUser } = require('../middlewares/auth')
const router = express.Router()


router.route("/create").post(isAuthenticatedUser, createTask)
router.route("/tasks").get(isAuthenticatedUser, getAllTasks)
router.route("/tasks/:id").get(isAuthenticatedUser, getTaskDetails)
router.route("/tasks/:id").put(isAuthenticatedUser, updateTask)
router.route("/tasks/:id").delete(isAuthenticatedUser, removeTask)


module.exports = router