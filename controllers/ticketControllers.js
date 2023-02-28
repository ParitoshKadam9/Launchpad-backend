const expressAsyncHandler = require("express-async-handler");
const Ticket = require("../modals/TicketModal");
const User = require("../modals/userModal");
const Razorpay = require("razorpay");
var crypto = require("crypto");

//creating orderid to be sent to the frontend.
var orderid;
const Orderid = expressAsyncHandler(async (req, res) => {
  const ticketid = req.params.ticketId;
  let ticket = await Ticket.findOne({ id: ticketid });
  const instance = new Razorpay({
    key_id: "rzp_test_Ef3Hus21Zu9tyy",
    key_secret: "SgkEyuw6RLMfJjS3ms2Y0TgK",
  });
  const response = await instance.orders.create({
    amount: ticket.amount * 100,
    currency: "INR",
  });
  orderid = response.id;
  return res.json({
    id: response.id,
    amount: ticket.amount * 100,
  });
});

const buyTicket = expressAsyncHandler(async (req, res) => {
  const ticketname = req.params.ticketId;
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const userId = req.params.userId;
  const body = orderid + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "SgkEyuw6RLMfJjS3ms2Y0TgK")
    .update(body.toString())
    .digest("hex");

  const verif = expectedSignature === razorpay_signature;
  if (verif) {
    let ticket = await Ticket.findOne({ id: ticketname });
    console.log(ticket);
    await User.updateOne(
      { _id: userId },
      { $push: { tickets: { $each: [ticket] } } }
    );

    // return res.status(201).json({
    //   name: ticket.name,
    //   id: userId,
    // });
    res.send("success");
  } else {
    res.status(400);
  }
});

const getUserTickets = async (req, res) => {
  let data = await User.findOne({ email: req.body.email });
  let arr = data.tickets;
  let ans = [];
  try {
    for (let i = 0; i < arr.length; i++) {
      let tic = await Ticket.findById(arr[i]._id);
      ans.push(tic);
    }
    res.status(201).send(ans);
  } catch (err) {
    console.log(err);
    res.send(400).send("error h");
  }
};

const getAllTickets = async (req, res) => {
  let data = await Ticket.find({});
  if (data) {
    res.status(200).send(data);
  } else {
    console.log("BT hai");
  }
};

const addTicket = async (req, res) => {
  const { name, amount, time, location, about, id } = req.body;
  try {
    const ticket = await Ticket.create({
      name,
      time,
      amount,
      location,
      id,
      about,
    });
    if (ticket) {
      res.status(201).json({
        _id: ticket._id,
        name: ticket.name,
        amount: ticket.amount,
      });
    } else {
      res.status(400);
    }
  } catch (err) {
    console.log(err);
  }
};

const ticketBool = expressAsyncHandler(async (req, res) => {
  try {
    // get ticket id and user id from the qr code from the openCV scanner scans
    // make the bool of the ticket of the user true.
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  buyTicket,
  ticketBool,
  addTicket,
  getAllTickets,
  Orderid,
  getUserTickets,
};
