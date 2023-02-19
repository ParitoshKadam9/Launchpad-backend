const mongoose = require('mongoose');

const Usermodel = mongoose.Schema(
    {
        name: {
            type: String, required: true
        },
        email: {
            type: String, require: true
        },
        password: {
            type: String, require: true
        },
        college: {
            type: String
        },
        city: {
            type: String, required: true
        },
        // tickets: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Ticket"
        //     }
        // ]
    }
);

const User = mongoose.model("User", Usermodel);
module.exports = User;