const express = require("express");
const router = express.Router();
const {createUser,loginUser, getUserdata} = require("../controllers/authControllers");

router.route("/createuser").post(createUser);
router.route("/login").post(loginUser);
router.route("/getUser").post(getUserdata)

module.exports = router;
