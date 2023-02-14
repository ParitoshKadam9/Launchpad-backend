const mongoose = require('mongoose')

const ticketModal = mongoose.Schema(
    {
        name: { type: String, require: true },
        amount: { type: String, required: true },
        time: { type: String, required: true },
        location: { type: String, required: true },
        about: { type: String, required: true },
        id: { type: Number, require: true },
    }
);

const Ticket = mongoose.model("Ticket", ticketModal);
module.exports = Ticket;

