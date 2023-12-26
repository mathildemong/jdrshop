const { ObjectID } = require("bson");
const client = require("../bd/connect");
const { User } = require("../models/user");

const addUser = async (req, res) => {
  try {
    let user = new User(
      req.body.name,
      req.body.adress,
      req.body.phone,
    );
    let result = await client
      .bd()
      .collection("users")
      .insertOne(user);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    let cursor = client
      .bd()
      .collection("users")
      .find()
      .sort({ name: 1 });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ msg: "Aucun utilisateur trouvé" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let cursor = client.bd().collection("users").find({ _id: id });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(204).json({ msg: "Cet utilisateur n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let name = req.body.name;
    let adress = req.body.adress;
    let phone = req.body.phone;
    let result = await client
      .bd()
      .collection("users")
      .updateOne({ _id: id }, { $set: { name, adress, phone } });

    if (result.modifiedCount === 1) {
      res.status(200).json({ msg: "Modification réussie" });
    } else {
      res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let result = await client
      .bd()
      .collection("users")
      .deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      res.status(200).json({ msg: "Suppression réussie" });
    } else {
      res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
    }
  } catch (error) {
    console.log(error);

    res.status(501).json(error);
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};