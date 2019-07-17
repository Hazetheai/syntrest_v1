const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

const emailRouter = require("./routes/controllers/email.restRouter");
const users = require("./routes/api/users");
const { githubAuth } = require("./routes/api/githubAuth");
const makeOauthJwt = require("./routes/modules/makeoAuthJwt");

// const passCheck = require("./config/passport");

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

// Passport Middleware
app.use(passport.initialize());

// Passport config
// passCheck(passport);
//
require("./config/passport")(passport);

// Routes
// email login/register
app.use("/api/users", users);
// email password reset
app.use("/reset_password", emailRouter);
// oAuth login/signup
app.use("/login/github", githubAuth);
// Get oAuth token to client
app.use("/oauthjwt", makeOauthJwt);

// Serve Static Assets in prod

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`All systems are on on port ${port}`));
