const express = require("express");
const { connect } = require("./connect");
require('dotenv').config();
const helmet = require('helmet');

const appStart = function(port){
  // Routes for router
  const userRoutes = require("./routes/user");
  const productRoutes = require("./routes/product");
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/api/v1", userRoutes);
  app.use("/api/v1", productRoutes);
  app.use(helmet())

  // connect(
  //   "mongodb+srv://mmonguillon:mercure10@jdrshop.vpc0shq.mongodb.net",
  //   (erreur) => {
  //     if (erreur) {
  //       console.log("erreur a la conection a la base de donnee");
  //       process.exit(-1);
  //     } else {
  //       console.log("connection avec la base de donnee etablie");
  //       console.log("attente des requetes du port 3000");
  //     }
  //   }
  // );

    try {
      connect("mongodb://root:example@localhost:27017", (error) => {
        if(error) throw error
      });
      console.log('Connection to Database is success ✅')
      return app
    } catch(err){
      console.error(err)
      process.exit(-1)
    }
}

module.exports = {appStart}