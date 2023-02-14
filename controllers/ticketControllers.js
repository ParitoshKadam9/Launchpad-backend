const expressAsyncHandler = require("express-async-handler");
const Ticket = require("../modals/TicketModal");

const buyTicket = expressAsyncHandler(async (req, res) => {
    try {
        // call razorpay (create post req for an order)
        // recieve a boolean in response, bool = payment true or false

        // if true, make the push the ticket Id (get it from req.query.ticketId)
        // to the user id, get it from query as well
        // 
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});

const ticketBool = expressAsyncHandler(async (req, res) => {
    try {
        // get ticket id and user id from the qr code from the openCV scanner scans
        // make the bool of the ticket of the user true.
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = {buyTicket, ticketBool}