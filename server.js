const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

const emailRouter = require("./routes/controllers/email.restRouter");
const users = require("./routes/api/users");
const { githubAuth } = require("./routes/api/githubAuth");
const { redditAuth } = require("./routes/api/redditAuth");
const makeOauthJwt = require("./routes/modules/makeoAuthJwt");
const { random } = require("./routes/services/unsplash");
const uploadRouter = require("./routes/api/fileUpload");
const reddit = require("./routes/services/reddit").rSynth;
// const multUploadRouter = require("./routes/api/multFileUpload");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

const db = process.env.MONGO_URI || require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo is a go go"))
  .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

// Routes
// email login/register
app.use("/api/users", users);
app.use("/reset_password", emailRouter);
app.use("/login/github", githubAuth);
app.use("/login/reddit", redditAuth);
app.use("/oauthjwt", makeOauthJwt);

// Get Unsplash Photos
app.use("/api/photos", random);

// Get Reddit post images
app.use("/api/services/reddit", reddit);

// File Upload
// app.use("/api/file", upload); Single upload to client
app.use("/services/file", uploadRouter); // single upload
// app.use("/services/files", multUploadRouter); // Multiple Upload

// Serve Static Assets in prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`All systems are on on PORT ${PORT}`));
