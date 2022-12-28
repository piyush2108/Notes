const User = require('../models/userModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError')
const sendToken = require('../utils/jwtToken')

//reqister user
exports.registerUser = catchAsyncError(
     async(req, res, next) => {
          
          const {username, name, email, password} = req.body
          const user = await User.create({
               username, name, email, password
          })

          sendToken(user, 200, res)
     }
)

//user login
exports.login = catchAsyncError(
     async(req, res, next) => {
          
          const { username, password } = req.body

          if(!username || !password){
               return next(new ErrorHandler(400, "Please enter Username and Password"))
          }

          const user = await User.findOne({username}).select("+password")

          if(!user){
               return next(new ErrorHandler(401, "Invalid Username or password"))
          }

          const isPasswordMatched = user.comparePassword(password)
          if(!isPasswordMatched){
               return next(new ErrorHandler(401, "Invalid Username or password"))
          }

          sendToken(user, 200, res)
     }
)

//user logout
exports.logout = catchAsyncError(
     async(req, res, next) => {

          res.cookie('token', null, {
               expires: new Date(Date.now()),
               httpOnly: true
          })

          res.status(200).json({
               success: true,
               message: "Logged Out"
          })
     }
)