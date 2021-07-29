const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  name: String,
});

const Reviews = mongoose.model("Reviews", reviewsSchema);
module.exports = Reviews;
