const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo is a go go"))
  .catch(err => console.log(err));

// process.env.port is Heroku's port if you choose to deploy the app there
const port = 5000;

app.listen(port, () => console.log(`All systems are gon on port ${port}`));
