const express = require("express")
const router = express.Router();

const {registerControllers,loginControllers,logoutControllers, bookmarksControllers, profileControllers,getOtherUser,followControllers,unfollowControllers} = require("../controllers/RegisterController")
// const {bookmarksControllers}= require("../controllers/RegisterController")

router.post("/register", registerControllers);
router.post("/login", loginControllers);
router.get("/logout", logoutControllers);
router.put("/bookmarks/:id", bookmarksControllers)
router.get("/profile/:id", profileControllers)
router.get("/getOtherUser/:id", getOtherUser)
router.post("/followControllers/:id", followControllers)
router.post("/unfollowControllers/:id",unfollowControllers)

module.exports = router;