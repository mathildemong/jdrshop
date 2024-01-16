const express = require("express");
const {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/user");
const router = express.Router();

router.route("/user").post(addUser);
router.route("/user").get(getAllUsers);
router.route("/user/:id").get(getUser);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

module.exports = router;