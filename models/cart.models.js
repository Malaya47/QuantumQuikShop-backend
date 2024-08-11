const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    cart: [
      {
        productName: { type: String, required: true },
        productImageURL: { type: String, required: true },
        productPrice: { type: Number, required: true },
        productRating: { type: Number, required: true },
        category: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
