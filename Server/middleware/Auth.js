const jwt = require("jsonwebtoken")

exports.isAuth = async(req, res, next)=>{
  try{
     const token  = req.cookies.token;
     console.log(token)
     if(!token){
      return res.status(401).json({
        success:false,

        message:"token is missing"
      })
     }
     const decode =  jwt.verify(token,process.env.TOKEN_SECRET)
     console.log(decode)
     req.user= decode;
     next();
   
  }
  
  catch(err){
   console.log(err)
   return res.status(500).json({
    success:false,
    message:"something went wrong while checking authentication"
   })
  }
}

