const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: false,
  },
},{ timestamps: true });

const Phone = mongoose.model("Phone", phoneSchema);
module.exports = Phone;
