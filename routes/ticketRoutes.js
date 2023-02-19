const express = require('express');
const router = express.Router();
const {buyTicket, addTicket, ticketBool} = require("../controllers/ticketControllers")

// router.route("/:ticketId").post(buyTicket)
router.route("/attendence/").post(ticketBool)
router.route("/addTicket").post(addTicket)

module.exports = router;