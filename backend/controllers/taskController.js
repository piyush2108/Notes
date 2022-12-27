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

//get all tasks
exports.getAllTasks = async(req, res, next) => {

     const tasks = await Task.find()

     res.status(200).json({
          success: true,
          tasks
     })
}

//update title, description and category of a task
exports.updateTask = async(req, res, next) => {

     let task = await Task.findById(req.params.id)

     if(!task){
          return res.status(500).json({
               success: false,
               message: "Task not available"
          })
     }

     task = await Task.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false
     })

     res.status(200).json({
          success: true,
          task
     })
}

//remove a task
exports.removeTask = async(req, res, next) => {
     
     const task = await Task.findById(req.params.id)

     if(!task){
          return res.status(500).json({
               success: false,
               message: "Product not available"
          })
     }

     await task.remove()

     res.status(200).json({
          success: true,
          message: "Task removed successfully"
     })
}