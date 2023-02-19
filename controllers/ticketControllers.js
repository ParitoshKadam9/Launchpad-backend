const expressAsyncHandler = require("express-async-handler");
const Ticket = require("../modals/TicketModal");
const User = require("../modals/userModal")

const buyTicket = expressAsyncHandler(async (req, res) => {
    let { email, ticketname, verif } = req.body;
    if (verif) {

        let ticket = await Ticket.findOne({ _id: ticketname })
        console.log(ticket)
        await User.updateOne(
            { email: email },
            {$push: {tickets : {$each :[ticket]}}}
        )

        return res.status(201).json({
            name: ticket.name,
            email: email
        })
    }
    else {
        res.status(400)
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