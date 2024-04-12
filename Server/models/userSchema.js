const mongoose  = require("mongoose")

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
  },
  userName:{
    type:String,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    required:true,
    trim:true,
  },
  password:{
    type:String,
    required:true,
    trim:true,
  },
  followers:{
    type:Array,
    default:[],
  },
  following:{
    type:Array,
    default:[],
  },
  bookMarks:{
    type:Array,
    default:[]
  }
},{timestamps:true})

const User = mongoose.model("User", userSchema);
module.exports = User;