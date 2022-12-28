const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
     username:{
          type: String,
          required: [true, "Username can't be empty"],
          maxLength: [15, "Username can't exceed 15 characters"],
          minLength: [3, "Username should contain atleast 3 characters"],
          unique: true
     },

     name:{
          type: String,
          required: [true, "Name can't be empty"],
          maxLength: [30, "Name can't exceed 30 characters"],
          minLength: [4, "Name should contain atleast 4 characters"]
     },

     email:{
          type: String,
          required: [true, "Eamil can't be empty"],
          unique: true,
          validate: [validator.isEmail, "Please enter a valid Email"]
     },

     password:{
          type: String,
          required: [true, "Password can't be empty"],
          minLength: [6, "Password should contain atleast 6 characters"],
          maxLength: [10, "Password can't exceed 10 characters"],
          select: false
     }
})

userSchema.pre("save", async function(){
     if(!this.isModified()){
          next()
     }

     this.password = await bcrypt.hashSync(this.password, 10)
})

//jwt token
userSchema.methods.getJWTToken = function(){
     return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE
     })
}

//compare password
userSchema.methods.comparePassword = function(enteredPassword){
     return bcrypt.compareSync(enteredPassword, this.password)
}

module.exports = mongoose.model("User", userSchema)