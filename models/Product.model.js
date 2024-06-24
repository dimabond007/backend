const mongoose = require("mongoose");

// Create a schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    categories: {
        type: [String],
        default:[],
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;