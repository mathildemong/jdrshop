const express = require("express");
const {
  addUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const router = express.Router();

router.route("/user").post(addUser);
router.route("/user").get(getUser);
router.route("/user/:id").get(getUsers);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

module.exports = router;