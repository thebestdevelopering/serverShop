const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brend",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
