const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/reviews", reviewsController.addReviews);
router.get("/reviews/:id", reviewsController.getReviews);
router.delete("/admin/reviews/:id", reviewsController.deleteReviews);

module.exports = router;
