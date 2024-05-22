const express = require("express");
const {
  subscribe,
  getUser,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/user");
const authenticateToken = require("../middleware/auth");
const router = express.Router();

router.route("/adduser").post(subscribe);
router.route("/login").post(login);
router.route("/user/:id").get(authenticateToken, getUser);
router.route("/users").get(authenticateToken, getAllUsers);
router.route("/user/:id").put(authenticateToken, updateUser);
router.route("/user/:id").delete(authenticateToken, deleteUser);

module.exports = router;