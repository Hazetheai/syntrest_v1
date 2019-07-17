const jwt = require("jsonwebtoken");
const User = require("../../models/OAuthUser");
const { currentUser } = require("../api/githubAuth");
const express = require("express");
const app = express.Router();
const keys = require("../../config/keys");

function makeOauthJwt(user) {
  const { name } = user;
  const { id } = user;

  const payload = {
    id,
    name
  };

  return jwt.sign(payload, keys.secretOrKey, {
    expiresIn: 31556926 // 1 year in seconds
  });
}

module.exports = app.post("/token", (req, res) => {
  const user = currentUser.user;
  const serverAccessToken = currentUser.accessToken;
  const clientAccessToken = req.body.token;
  if (serverAccessToken === clientAccessToken) {
    User.findOne({
      id: user.id,
      name: user.name
    })
      .then(user => {
        const token = makeOauthJwt(user);

        res.json({
          success: true,
          token: "Bearer " + token
        });
      })
      .catch(err => console.log("Sending back to Client", err));
  } else res.send("Tokens do not match - Not today buster");
});
