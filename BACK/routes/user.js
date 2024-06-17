const express = require("express");
const {
  subscribe,
  getUser,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
  register
} = require("../controllers/user");
const router = express.Router();

router.route("/adduser").post(subscribe);
router.route("/register").post(register)
router.route("/login").post(login);
router.route("/user/:id").get(getUser);
router.route("/users").get(getAllUsers);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

// const express = require('express');
// const router = express.Router();

// const userCtrl = require('../controllers/user')
// const auth = require('../middlewares/auth');
// const passwordValidator = require('../middlewares/passwordValidator');

// router.post('/register', passwordValidator, userCtrl.register);
// router.post('/login', userCtrl.login);
// router.get('/home', auth, userCtrl.home);

// module.exports = router;

module.exports = router;

