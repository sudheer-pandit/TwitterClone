const express = require("express")
const router = express.Router();

const{createTweet,  deleteTweet, likeDislike, getAllTweet,getfollowingUserTweet }= require("../controllers/tweetControleer")
const {isAuth}= require("../middleware/Auth.js")


router.post("/createTweet", isAuth, createTweet)
router.delete("/delete/:id",isAuth, deleteTweet)
router.put("/likeDislike/:id",isAuth, likeDislike)
router.get("/getAllTweet/:id",isAuth, getAllTweet)
router.get("/getfollowingUserTweet/:id",isAuth, getfollowingUserTweet)


module.exports = router; 