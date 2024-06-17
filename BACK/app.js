const express = require("express");
const { connect } = require("./connect");
require('dotenv').config();

// Routes for router
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);


// connect(
//   "mongodb+srv://mmonguillon:mercure10@jdrshop.vpc0shq.mongodb.net",
//   (erreur) => {
//     if (erreur) {
//       console.log("erreur a la conection a la base de donnee");
//       process.exit(-1);
//     } else {
//       console.log("connection avec la base de donnee etablie");
//       app.listen(3000);
//       console.log("attente des requetes du port 3000");
//     }
//   }
// );

connect(
  "mongodb://root:example@localhost:27017",
  (erreur) => {
    if (erreur) {
      console.log("erreur a la conection a la base de donnee");
      process.exit(-1);
    } else {
      console.log("connection avec la base de donnee etablie");
      app.listen(3000);
      console.log("attente des requetes du port 3000");
    }
  }
);

// const express = require('express');
// const app = express();
// const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');
// const cors = require('cors');

// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

// app.use(express.json());

// require('./connect');

// app.use(helmet());

// const limiter = rateLimit({
//     window: 15 * 60 * 1000,
//     max: 20
// });
// app.use(limiter);

// const userRoute = require('./router/user');

// app.use('/api', userRoute)

// module.exports = app;
