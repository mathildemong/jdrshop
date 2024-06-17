const express = require("express");
const {
  addProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const authenticateToken = require("../middlewares/auth");

const router = express.Router();

router.route("/product").post(authenticateToken, addProduct);
router.route("/product").get(getAllProducts);
router.route("/product/:id").get(getProduct);
router.route("/product/:id").put(authenticateToken, updateProduct);
router.route("/product/:id").delete(authenticateToken, deleteProduct);

module.exports = router;