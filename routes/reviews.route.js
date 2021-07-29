const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/reviews", reviewsController.addReviews);
router.patch("/reviews/:id", reviewsController.editReviews);
router.delete("/reviews/:id", reviewsController.deleteReviews);

module.exports = router;
