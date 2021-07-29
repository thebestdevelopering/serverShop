const Product = require("../models/Products.model");

module.exports.productController = {
  addProduct: async (req, res) => {
    try {
      await Product.create({
        name: req.body.name,
      });
      res.send("Продукт добавлен");
    } catch (err) {
      console.log(err);
    }
  },
  editProduct: async (req, res) => {
    try {
      await Product.findById(req.params.id);
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
