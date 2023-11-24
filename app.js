
const express = require('express');
const { connect } = require('./bd/connect');
const routesUtilisateur = require("./route/utilisateur");
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

appUse("/api/v1", routesUtilisateur);

connect( "mongodb://127.0.0.1:27017/", (erreur) => {   // mongodb+srv://mmonguillon:mercure10@jdrshop.vpc0shq.mongodb.net/ ?? 
    if(erreur) {
    console.log("erreur a la conection a la base de donnee");
    process.exit(-1);
}   else {
    console.log("connection avec la base de donnee etablie");
    app.listen(3000);
    console.log("attente des requetes du port 3000");
}});
