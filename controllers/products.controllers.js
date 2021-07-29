const Product = require("../models/Products.model");

module.exports.productController = {
  getRewiews: async (req, res) => {
    try {
      const products = await Product.find().populate("product");
      res.json(products);
    } catch (err) {
      console.log(err);
    }
  },

  getProductByCategory: async (req, res) => {
    try {
      const product = await Product.findById({ category: req.params.id });
      res.json(product);
    } catch (err) {
      console.log(err);
    }
  },

  getProductByBrand: async (req, res) => {
    try {
      const product = await Product.findById({ brand: req.params.id });
      res.json(product);
    } catch (err) {
      console.log(err);
    }
  },

  addProduct: async (req, res) => {
    try {
      await Product.create({
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        category: req.body.category,
      });
      res.send("Продукт добавлен");
    } catch (err) {
      console.log(err);
    }
  },
  editProduct: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.params.id);
      res.send("Продукт изменен");
    } catch (err) {
      console.log(err);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.send("Продукт удален");
    } catch (err) {
      console.log(err);
    }
  },
};
