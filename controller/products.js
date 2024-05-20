const { ObjectID } = require("bson");
const client = require("../bd/connect");
const { Product } = require("../models/products");

const addProduct = async (req, res) => {
  try {
    let user = new Product(
      req.body.productId,
      req.body.name,
      req.body.category,
      req.body.creationDate,
    );
    let result = await client
      .bd()
      .collection("products")
      .insertOne(product);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    let cursor = client
      .bd()
      .collection("products")
      .find()
      .sort({ name: 1 });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ msg: "Aucun produit trouvé" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getProduct = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let cursor = client.bd().collection("products").find({ _id: id });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(204).json({ msg: "Ce produit n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let name = req.body.name;
    let productId = req.body.productId;
    let category = req.body.category;
    let result = await client
      .bd()
      .collection("products")
      .updateOne({ _id: id }, { $set: { name, productId, category } });

    if (result.modifiedCount === 1) {
      res.status(200).json({ msg: "Modification réussie" });
    } else {
      res.status(404).json({ msg: "Ce produit n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let result = await client
      .bd()
      .collection("products")
      .deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      res.status(200).json({ msg: "Suppression réussie" });
    } else {
      res.status(404).json({ msg: "Ce produit n'existe pas" });
    }
  } catch (error) {
    console.log(error);

    res.status(501).json(error);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};