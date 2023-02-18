const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
  userDetails,
} = require("../controller/UserController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/me").get(isAuthenticatedUser, userDetails);  

module.exports = router;
