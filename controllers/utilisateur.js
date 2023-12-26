const {
  ObjectId
} = require("mongodb");
const client = require("../bd/connect");
const {
  Utilisateur
} = require("../models/utilisateur");

const ajouterUtilisateur = async (req, res) => {
  try {
    const utilisateur = new Utilisateur(
      req.body.noms,
      req.body.adresse,
      req.body.telephone
    );
    const result = await client
      .bd()
      .collection("utilisateurs")
      .insertOne(utilisateur);

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(501).json(error);
  }
};

const getTousUtilisateurs = async (_, res) => {
  try {
    const cursor = client
      .bd()
      .collection("utilisateurs")
      .find()
      .sort({
        noms: 1
      });
    const result = await cursor.toArray();
    if (result) {
      return res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getUtilisateur = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const cursor = client.bd().collection("utilisateurs").find({
      _id: id
    });
    const [result] = await cursor.toArray();
    if (result) {
      return res.status(200).json(result[0]);
    } else {
      return res.status(404).json({
        msg: "Cet utilisateur n'existe pas"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json(error);
  }
};

const updateUtilisateur = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const {
      nom,
      adresse,
      telephone
    } = req.body
    let result = await client
      .bd()
      .collection("utilisateurs")
      .updateOne({
        _id: id
      }, {
        $set: {
          nom,
          adresse,
          telephone
        }
      });

    if (result.modifiedCount === 1) {
      return res.status(200).json({
        msg: "Modification réussie"
      });
    } else {
      return res.status(404).json({
        msg: "Cet utilisateur n'existe pas"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json(error);
  }
};

const deleteUtilisateur = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await client
      .bd()
      .collection("utilisateurs")
      .deleteOne({
        _id: id
      });
    if (result.deletedCount === 1) {
      return res.status(204).json({
        msg: "Suppression réussie"
      });
    } else {
      return res.status(404).json({
        msg: "Cet utilisateur n'existe pas"
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(501).json(error);
  }
};

module.exports = {
  ajouterUtilisateur,
  getTousUtilisateurs,
  getUtilisateur,
  updateUtilisateur,
  deleteUtilisateur,
};