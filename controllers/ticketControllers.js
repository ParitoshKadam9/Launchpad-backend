const expressAsyncHandler = require("express-async-handler");
const Ticket = require("../modals/TicketModal");
const User = require("../modals/userModal")

const buyTicket = expressAsyncHandler(async (req, res) => {
    
    let verif = true;
    let { email, ticketname} = req.body;
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

const getUserTickets = async (req, res) => {
    let data = await User.findOne({ email: req.body.email })
    let arr = data.tickets
    let ans =[]
    try {
        for (let i = 0; i < arr.length; i++){
            let tic = await Ticket.findById(arr[i]._id);
            ans.push(tic);
        }
        res.status(201).send(ans)        
    }
    catch (err) {
        console.log(err)
        res.send(400).send("error h")
    }

}

const getAllTickets = async (req, res) => {
    let data = await Ticket.find({})
    if (data) {
        res.status(201).send(data)
    }
    else {
        console.log("BT hai")
    }
}

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

module.exports = {buyTicket, ticketBool, addTicket, getAllTickets, getUserTickets}