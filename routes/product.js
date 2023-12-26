const express = require("express");
const {
  addProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const router = express.Router();

router.route("/product").post(addProduct);
router.route("/product").get(getAllProducts);
router.route("/product/:id").get(getProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);

module.exports = router;