const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  address: [
    {
      id: { type: String },
      name: { type: String, required: true },
      house: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      postalCode: { type: Number, required: true },
      number: { type: Number, required: true },
    },
  ],
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
