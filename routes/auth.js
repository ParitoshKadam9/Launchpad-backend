const express = require("express");
const router = express.Router();
const {createUser,loginUser} = require("../controllers/authControllers");

router.route("/createuser").post(createUser);
router.route("/login").post(loginUser);

module.exports = router;
