const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   productName: {
     type: String
   },
  productImageURL: {
    type: String
  },
  productPrice: {
    type: Number
  },
  productRating: {
    type: Number
  }, 
  category: {
    type: String
  }
}, {timestamps: true})

const Product = mongoose.model("Product", productSchema)

module.exports = Product;