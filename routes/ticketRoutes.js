const express = require("express");
const router = express.Router();
const {buyTicket, addTicket, ticketBool, getAllTickets, getUserTickets} = require("../controllers/ticketControllers")

router.route("/buy").post(buyTicket)
router.route("/attendence/").post(ticketBool)
router.route("/addTicket").post(addTicket)
router.route("/getAllTs").get(getAllTickets)
router.route("/getUserTickets").post(getUserTickets)
const {
  buyTicket,
  addTicket,
  ticketBool,
  getAllTickets,
  Orderid,
} = require("../controllers/ticketControllers");

router.route("/buy/:ticketId/:userId").post(buyTicket);
router.route("/attendence/").post(ticketBool);
router.route("/addTicket").post(addTicket);
router.route("/getAllTs").get(getAllTickets);
router.route("/getOrderId").get(Orderid);

module.exports = router;
