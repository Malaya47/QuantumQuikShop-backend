const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    wishlist: [
      {
        productName: { type: String, required: true },
        productImageURL: { type: String, required: true },
        productPrice: { type: Number, required: true },
        productRating: { type: Number, required: true },
        category: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
