const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
