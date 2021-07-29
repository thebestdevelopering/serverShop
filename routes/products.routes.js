const { Router } = require("express");
const { productController } = require("../controllers/products.controllers");

const router = Router();

router.post("/product", productController.addProduct);
router.patch("/product/:id", productController.editProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
