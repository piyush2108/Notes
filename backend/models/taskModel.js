const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
     title:{
          type: String,
          required: [true, "Please enter a Title for your task"],
          maxLength: [50, "Title for a task can't exceed 50 characters"]
     },

     description:{
          type: String,
          required: false,
          maxLength: [150, "Task description can't exceed 150 characters"]
     },

     progress:{
          type: String,
          required: true,
          default: "Active"
     },

     category:{
          type: String,
          required: true,
     },

     createdAt:{
          type: Date,
          default: Date.now
     },

     user:{
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true
     }
})

module.exports = mongoose.model("Task", taskSchema)