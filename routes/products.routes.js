const { Router } = require("express");
const { productController } = require("../controllers/products.controllers");

const router = Router();

router.get('/product', productController.getRewiews)
router.get('/product/categoties/:id', productController.getProductByCategory)
router.get('/product/brand/:id', productController.getProductByBrand)
router.post("/product", productController.addProduct);
router.patch("/product/:id", productController.editProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
