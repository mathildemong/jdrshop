const express = require("express");
const {
  addProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const router = express.Router();

router.route("/product").post(addProduct);
router.route("/product").get(getProduct);
router.route("/product/:id").get(getProducts);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);

module.exports = router;