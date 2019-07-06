const jwt = require("jsonwebtoken");
const User = require("../../models/OAuthUser");
const { makeOauthJwt, currentUser } = require("../api/githubAuth");
const express = require("express");
const app = express.Router();

module.exports = app.post("/token", (req, res) => {
  const user = currentUser[1];
  const serverAccessToken = currentUser[0];
  const accessToken = req.body.token;

  if (serverAccessToken === accessToken) {
    User.findOne({
      id: user.id
    })
      .then(user => {
        const token = makeOauthJwt(user);
        res.json({
          success: true,
          token: "Bearer " + token
        });
      })
      .catch(err => console.log("Sending back to Client", err));
  } else res.send("Not today buster");
});
