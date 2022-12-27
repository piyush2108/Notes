const Task = require('../models/taskModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError')

//create task
exports.createTask = catchAsyncError(
     async(req, res, next) => {
          const task = await Task.create(req.body)
     
          res.status(200).json({
               success: true,
               message: "Task added successfully",
               task
          })
     }
)

//get all tasks
exports.getAllTasks = catchAsyncError(
     async(req, res, next) => {

          const tasks = await Task.find()
     
          res.status(200).json({
               success: true,
               tasks
          })
     }
)

//get task details
exports.getTaskDetails = catchAsyncError(
     async(req, res, next) => {

          const task = await Task.findById(req.params.id)
     
          if(!task){
               return next(new ErrorHandler(500, "Task not found"))
          }
     
          res.status(200).json({
               success: true,
               task
          })
     }
)

//update task
exports.updateTask = catchAsyncError(
     async(req, res, next) => {

          let task = await Task.findById(req.params.id)
     
          if(!task){
               return next(new ErrorHandler(500, "Task not found"))
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
)

//remove a task
exports.removeTask = catchAsyncError(
     async(req, res, next) => {
     
          const task = await Task.findById(req.params.id)
     
          if(!task){
               return next(new ErrorHandler(500, "Task not found"))
          }
     
          await task.remove()
     
          res.status(200).json({
               success: true,
               message: "Task removed successfully"
          })
     }
)