
require("dotenv").config();
const Tweet = require("../models/tweetSchema")
const User = require("../models/userSchema")
exports.createTweet = async(req, res)=>{
  try{
const {description , id}= req.body;
if(!description || !id){
  return res.json({
    success:false,
    message:"All fields are requireds"
  })
}
const newTweet = await Tweet.create({
  description,
  userId:id
})
return res.status(201).json({
  success:true,
  message:"Tweet created Successflly",
})
  }
  catch(err){
  console.log(err)
  return res.status(500).json({
    success:false,
    message:"something went wrong while creating new tweet "
  })
  }
}


// delete tweet 
 
exports.deleteTweet = async(req, res)=>{
  try{

    const {id}= req.params;

    const tweet = await Tweet.findByIdAndDelete(id)
  return res.status(200).json({
    success:true,
    message:"Tweet successfully deleted"
  })
  }
  catch(err){
 
  }
}


/// likeDislike Controllers

exports.likeDislike = async(req, res)=>{
  try{
    const loggedInId = req.body.id;
    const tweetId = req.params.id;

    const tweet = await Tweet.findById(tweetId)

    if(tweet.like.includes(loggedInId)){
      await Tweet.findByIdAndUpdate(tweetId, {$pull:{like:loggedInId}},{new:true})
      return res.status(200).json({
        success:true,
        message:"User dislike tweet successfully "
      })
    }
    else{
      await Tweet.findByIdAndUpdate(tweetId, {$push:{like:loggedInId}},{new:true})
      return res.status(200).json({
        success:true,
        message:"User like tweet successfully"
      })
    }

  }
  catch(err){
  console.log(err)
  return res.status(500).json({
    success:false,
    message:"Error in like and dislike controllers"
  })
  }
}



// getall tweet

exports.getAllTweet  = async(req, res)=>{
  try{
    const id = req.params.id.trim();
    const loggedInUser = await User.findById(id)
    const loggedInUserTweet = await Tweet.find({userId:id})
    const followingUserTweet = await Promise.all(loggedInUser.following.map((otheruser)=>{
      return Tweet.find({userId:otheruser})
    }))

    return res.status(200).json({
      tweets:loggedInUserTweet.concat(...followingUserTweet)
    })
  }
  catch(err){
   console.log("err:-", err)
   return res.status(500).json({
    success:false,
    message:"Error while geting all tweets"
   })
  }
}


// get following user tweet 

exports.getfollowingUserTweet = async(req, res)=>{
  try{
    const id = req.params.id.trim();
    const loggedInUser = await User.findById(id)
   
    const followingUserTweet = await Promise.all(loggedInUser.following.map((otheruser)=>{
      return Tweet.find({userId:otheruser})
    }))

    return res.status(200).json({
      tweets:[].concat(...followingUserTweet)
    })
  }
  catch(err){
    console.log("err:-", err)
    return res.status(500).json({
     success:false,
     message:"Error while geting following user tweet"
    })
  }
}