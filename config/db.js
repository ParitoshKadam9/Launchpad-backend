const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Manan:Ecell@manan.lggpayd.mongodb.net/test/launchpad";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },()=>{
        console.log("connected to mongo db!");
    });
};

module.exports = connectToMongo;


