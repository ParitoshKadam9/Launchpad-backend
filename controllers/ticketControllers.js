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

const addTicket = async (req, res) => {
    const { name, amount, time, location, about, id } = req.body;
    try {
        const ticket = await Ticket.create(
{name, time, amount, location, id, about
            }
        )
        if (ticket) {
            res.status(201).json(
                {
                    _id: ticket._id,
                    name: ticket.name,
                    amount: ticket.amount
               }
           )
        }
        else {
            res.status(400)
        }
    }
    catch (err) {
        console.log(err)
    }

}

const ticketBool = expressAsyncHandler(async (req, res) => {
    try {
        // get ticket id and user id from the qr code from the openCV scanner scans
        // make the bool of the ticket of the user true.
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = {buyTicket, ticketBool, addTicket}