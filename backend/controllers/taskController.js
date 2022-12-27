const Task = require('../models/taskModel')

//create task
exports.createTask = async(req, res, next) => {
     const task = await Task.create(req.body)

     res.status(200).json({
          success: true,
          message: "Task added successfully",
          task
     })
}

exports.getAllTasks = async(req, res, next) => {

     const tasks = await Task.find()

     res.status(200).json({
          success: true,
          tasks
     })
}