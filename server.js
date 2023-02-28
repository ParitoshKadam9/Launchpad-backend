const express = require('express');
const app = express();
const port = 5000;
const connectDB = require("./config/db");
connectDB();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require('./routes/ticketRoutes');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/tickets", require("./routes/ticketRoutes"));
app.use("/api/auth", require("./routes/auth"));
app.use("/ca", require("./routes/ca"));

app.listen(port,()=>{
    console.log(`app started on port number ${port}`)
});

