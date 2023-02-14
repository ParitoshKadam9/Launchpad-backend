const express = require('express');
const router = express.Router();
const {buyTicket} = require("../controllers/ticketControllers")

router.route("/:ticketId").post(buyTicket)
router.route("/attendence/").post(ticketBool)

module.exports = router;