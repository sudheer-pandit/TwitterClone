const User = require("../models/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const Tweet require("../models/tweetSchema")
exports.registerControllers = async (req, res) => {
  try {
    const { name, userName, password, email } = req.body;
    if (!name || !userName || !password || !email) {
      return res.status(401).json({
        success: false,
        message: "All fields are required ",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = User.create({
      name,
      userName,
      password: hashedPassword,
      email,
    });
    return res.status(200).json({
      success: true,
      message: "User Registerd Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while register user",
    });
  }
};

// login controllers

exports.loginControllers = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not register with this email",
      });
    }
    const comparedPassword = await bcrypt.compare(password, user.password);
    if (!comparedPassword) {
      return res.status(401).json({
        success: false,
        message: "incorrect password or email",
      });
    }
    const tokenData = {
      userId: user._id,
    };

    console.log("tokenData", tokenData)
    const token =  jwt.sign(tokenData, process.env.TOKEN_SECRET);
    console.log("token :-", token);
    

    // return res.cookie("token", token,{
    //   expireIn:"1d",
    //   httpOnly:true,
    //   user,

    // })
    return res.status(201).cookie("token",token,{expiresIn:"1d"}).json({
      success:true,
      message:`Welcome back ${user.name}`
    })
      
      
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "something went wrong while creating login controllers",
    });
  }
};

exports.logoutControllers = (req, res) => {
  return res.cookie("token", "", { expireIn: new Date(Date.now()) }).json({
    success: true,
    message: "User Logged Out Successfully",
  });
};

/// bookmarks controllers

exports.bookmarksControllers = async (req, res) => {
  try {
    const loggedInId = req.body.id;
    const tweetId = req.params.id;

    const tweet = await User.findById(loggedInId);

    if (tweet.bookMarks.includes(tweetId)) {
      await User.findByIdAndUpdate(
        loggedInId,
        { $pull: { bookMarks: tweetId } },
        { new: true }
      );
      return res.status(200).json({
        success: true,
        message: "Tweet remove from bookmarks",
      });
    } else {
      await User.findByIdAndUpdate(
        loggedInId,
        { $push: { bookMarks: tweetId } },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Tweet add in bookmarks",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error creating bookmarks controllers",
    });
  }
};

// get profile controllers

exports.profileControllers = async (req, res) => {
  try {
    const id = req.params.id.trim(); 
    console.log("User id:", id);

    const user = await User.findById(id).select("-password");
    console.log(user);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// getOther user

exports.getOtherUser = async (req, res) => {
  try {
    const id = req.params.id.trim();
    const otherUser = await User.find({ _id: { $ne: id } }).select("-password");
    if (!otherUser) {
      return res.status(401).json({
        success: false,
        message: "Currently you do not have any user",
      });
    }
    return res.status(200).json({
      success: true,
      message: "other user finded",
      otherUser,
    });
  } catch (err) {
    console.log("error in other user", err);
    return res.status(500).json({
      success: false,
      message: "Error while finding other user",
    });
  }
};

// follow  controllers

exports.followControllers = async (req, res) => {
  try {
    const loggedinId = req.body.id;
    const userId = req.params.id.trim();

    const loggedInUser = await User.findById(loggedinId);
    const user = await User.findById(userId);

    if (!user.followers.includes(loggedInUser)) {
      await user.updateOne({ $push: { followers: loggedinId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User already followed to ${user.name}`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} just follow to ${user.name}`,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error while creating follow controllers",
    });
  }
};

//unfollow controllers

exports.unfollowControllers = async (req, res) => {
  try {
    const loggedinId = req.body.id;
    const userId = req.params.id.trim();

    const loggedInUser = await User.findById(loggedinId);
    const user = await User.findById(userId);

    if (loggedInUser.following.includes(userId)) {
      await user.updateOne({ $pull: { followers: loggedinId } });
      await loggedInUser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(400).json({
        message: `user has yet not follow `,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} unfollow to ${user.name}`,
    });
  } catch (err) {
    console.log("error is:-", err);
    return res.status(500).json({
      success: false,
      message: "error while creating unfollow controllers",
    });
  }
};
