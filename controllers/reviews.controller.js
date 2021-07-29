const Reviews = require("../models/Reviews.model");

module.exports.reviewsController = {
  addReviews: async (req, res) => {
    try {
      await Reviews.create({
        name: req.body.name,
      });
      res.send("Отзыв добавлен");
    } catch (err) {
      console.log(err);
    }
  },
  editReviews: async (req, res) => {
    try {
      await Reviews.findById(req.params.id);
      res.send("Отзыв изменен");
    } catch (err) {
      console.log(err);
    }
  },

  deleteReviews: async (req, res) => {
    try {
      await Reviews.findByIdAndDelete(req.params.id);
      res.send("Отзыв удален");
    } catch (err) {
      console.log(err);
    }
  },
};
