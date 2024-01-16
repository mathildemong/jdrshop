
const express = require('express');
const { connect } = require('./bd/connect');
// Routes for router

const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/api/v1", userRoutes)
app.use("/api/v1", productRoutes)

// Please replace the following url with what you use :) 
connect('mongodb+srv://mmonguillon:mercure10@jdrshop.vpc0shq.mongodb.net', (erreur) => {  
    if(erreur) {
    console.log("erreur a la conection a la base de donnee");
    process.exit(-1);
}   else {
    console.log("connection avec la base de donnee etablie");
    app.listen(3000);
    console.log("attente des requetes du port 3000");
}});
