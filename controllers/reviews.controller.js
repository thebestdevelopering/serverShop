const Reviews = require("../models/Reviews.model");

module.exports.reviewsController = {
   getReviews: (req, res) => {
       try {
           const review = await Reviews.find().populate('product')
           res.json(review)
       } catch (err) {
           console.log(err)
       }
   },


  addReviews: (req, res) => {
    try {
      await Reviews.create({
        name: req.body.name,
      });
      res.send("Отзыв добавлен");
    } catch (err) {
      console.log(err);
    }
  },

  deleteReviews: (req, res) => {
    try {
      await Reviews.findByIdAndDelete(req.params.id);
      res.send("Отзыв удален");
    } catch (err) {
      console.log(err);
    }
  },
};
