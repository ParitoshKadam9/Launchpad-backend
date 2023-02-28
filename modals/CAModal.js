const mongoose = require("mongoose");

const Camodal = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true },
  year: { type: String, required: true },
  college: { type: String, required: true },
  city: { type: String, required: true },
  contact: { type: String, require: true },
  how: { type: String },
  code: { type: String, require: true },
});

const CA = mongoose.model("CA", Camodal);
module.exports = CA;
