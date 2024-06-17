const express = require("express");
const {
  addProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

router.route("/product").post(authenticateToken, addProduct);
router.route("/product").get(authenticateToken, getAllProducts);
router.route("/product/:id").get(authenticateToken, getProduct);
router.route("/product/:id").put(authenticateToken, updateProduct);
router.route("/product/:id").delete(authenticateToken, deleteProduct);

module.exports = router;