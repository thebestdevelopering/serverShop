const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  name: String,
  title: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Reviews = mongoose.model("Reviews", reviewsSchema);
module.exports = Reviews;
