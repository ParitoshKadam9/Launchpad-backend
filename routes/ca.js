const express = require("express");
const router = express.Router();

const { addCa, checkCode } = require("../controllers/caControllers")

router.route("/createCA").post(addCa);
router.route("/checkCode").post(checkCode);

module.exports = router;