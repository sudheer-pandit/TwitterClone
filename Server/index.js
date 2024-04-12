const express = require("express")
const app = express()
require("dotenv").config()
const routers= require("./routers/routes")
const cookieParser= require("cookie-parser")
const tweetRoute  = require("./routers/tweetRoutes")
const cors = require("cors")
const PORT  = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({
  extended:true,
}))
app.use(cookieParser())

const corsOptions ={
  origin:'http://localhost:5173',
  Credential:true,
  }
  app.use(cors(corsOptions))
  
app.use("/api/v1/user", routers)
app.use("/api/v1/tweet", tweetRoute)
const DB = require("./config/database")

DB.connectDB()

app.listen(PORT,()=>{
  console.log(`App is running at port number ${PORT}`)
})
// http://localhost:8000/api/v1/user/register

app.get("/",(req,res)=>{
  res.status(200).json({
    // success:true,
    message:"coming from backend"
  })
})