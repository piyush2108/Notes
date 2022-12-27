const errorHandler = require('../utils/errorHandler')

module.exports =  (err, req, res, next) => {
     
     err.statusCode = err.statusCode || 500
     err.message = err.message || "Internal Server Error"

     //wrong id error
     if(err.name === "CastError"){
          const message = `Resource not found, Invalid: ${err.path}`
          err = new ErrorHandler(400, message)
     }

     //mongoose duplicate key error
     if(err.name === 11000){
          const message = `Duplicate ${Object.keys(err.keyValue)} Entered}`
          err = new ErrorHandler(400, message)
     }
     
     res.status(err.statusCode).json({
          success: false,
          message: err.message
     })
}