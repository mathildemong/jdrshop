const {
  ObjectId
} = require("mongodb");
const client = require("../bd/connect");
const {
  User
} = require("../models/user");

const subscribe = async (req, res) => {
  try {
    const user = new User(
      req.body.email,
      req.body.adress,
      req.body.name,
      req.body.password,
    );
    const result = await client
      .bd()
      .collection("users")
      .insertOne(user);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(501).json(error);
  }
};

const getAllUsers = async (_, res) => {
  try {
    const cursor = client
      .bd()
      .collection("users")
      .find()
      .sort({
        name: 1
      });
    const result = await cursor.toArray();
    if (result) {
      return res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const cursor = client.bd().collection("users").find({
      _id: id
    });
    const [result] = await cursor.toArray();
    if (result) {
      return res.status(200).json(result);
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


const login = async (req, res) => {
  try {
    const {email, password}= req.body;
    const cursor = client.bd().collection("users").find({
      _email: email,
      _password: password
    });
    const result = await cursor.tojson(); 
    if (result) {
      return res.status(200).json(result);
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


const updateUser = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const {name, adress, phone} = req.params
    const result = await client
      .bd()
      .collection("users")
      .updateOne({
        _id: id
      }, {
        $set: {
          name,
          adress,
          phone
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

const deleteUser = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await client
      .bd()
      .collection("users")
      .deleteOne({
        _id: id
      });
    if (result.deletedCount === 1) {
      res.status(200).json({
        msg: "Suppression réussie"
      });
    } else {
      res.status(404).json({
        msg: "Cet utilisateur n'existe pas"
      });
    }
  } catch (error) {
    console.log(error);

    res.status(501).json(error);
  }
};

module.exports = {
  
  getAllUsers,
  login,
  subscribe,
  getUser,
  updateUser,
  deleteUser,
};