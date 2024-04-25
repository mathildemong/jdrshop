const express = require("express");
const {
  addUser,
  getUser,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/user");
const router = express.Router();

router.route("/adduser").post(addUser);
router.route("/login").post(login);
router.route("/user/:id").get(getUser);
router.route("/users").get(getAllUsers);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

module.exports = router;