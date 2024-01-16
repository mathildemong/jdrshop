const {
  ObjectId
} = require("mongodb");
const client = require("../bd/connect");
const {
  Product
} = require("../models/products");

const addProduct = async (req, res) => {
  try {
    const product = new Product(
      req.body.name,
      req.body.category
    );
    const result = await client
      .bd()
      .collection("products")
      .insertOne(product);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
   return res.status(500).json(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const cursor = client
      .bd()
      .collection("products")
      .find()
      .sort({
        name: 1
      });

    const result = await cursor.toArray();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(501).json(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const cursor = client.bd().collection("products").find({
      _id: id
    });
    const [result] = await cursor.toArray();
    if (result) {
      return res.status(200).json({
        ...result,
      createdAt : new ObjectId(result._id).getTimestamp()});
    } else {
      return res.status(404).json({
        msg: "Ce produit n'existe pas"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const {
      name,
      category
    } = req.body
    const result = await client
      .bd()
      .collection("products")
      .updateOne({
        _id: id
      }, {
        $set: {
          name,
          category
        }
      });

    if (result.modifiedCount === 1) {
      return res.status(200).json({
        msg: "Modification réussie"
      });
    } else {
      return res.status(404).json({
        msg: "Ce produit n'existe pas"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await client
      .bd()
      .collection("products")
      .deleteOne({
        _id: id
      });
    if (result.deletedCount === 1) {
      return res.status(200).json({
        msg: "Suppression réussie"
      });
    } else {
      return res.status(404).json({
        msg: "Ce produit n'existe pas"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json(error);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};