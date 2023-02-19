const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
          "mongodb+srv://Paritosh:12345@launchpad23.cewfzia.mongodb.net/?retryWrites=true&w=majority",
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        );

        console.log("mongo connected");
    }
    catch (err) {
        console.log(err)
        process.exit()
    }
}
module.exports = connectDB;


