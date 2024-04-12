const mongoose = require("mongoose")
require("dotenv").config()
exports.connectDB= ()=>{
  mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connection successfully")
  }).catch((err)=>{
    console.log("issue in connection ", err)
  })
}
// module.exports = connectDB;