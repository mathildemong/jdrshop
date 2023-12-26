const express = require("express");
const {
  ajouterUtilisateur,
  getTousUtilisateurs,
  getUtilisateur,
  updateUtilisateur,
  deleteUtilisateur,
} = require("../controllers/utilisateur");
const router = express.Router();

router.route("/utilisateurs").post(ajouterUtilisateur);
router.route("/utilisateurs").get(getTousUtilisateurs);
router.route("/utilisateurs/:id").get(getUtilisateur);
router.route("/utilisateurs/:id").put(updateUtilisateur);
router.route("/utilisateurs/:id").delete(deleteUtilisateur);

module.exports = router;