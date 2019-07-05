const axios = require("axios");
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/OAuthUser");
const app = express.Router();
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

app.get("/callback", (req, res) => {
  // retreive code param from callback URL
  const code = req.query.code;
  axios({
    method: "post",
    //  Send post req with my ID & Secret & the code
    url: `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`,
    headers: {
      accept: "application/json"
    }
    // use Token to get user from github
  })
    .then(response => {
      const accessToken = response.data.access_token;
      return axios({
        method: "get",
        url: `https://api.github.com/user`,
        headers: { Authorization: `token ${accessToken}` }
      })
        .then(result => {
          res.redirect(`http://127.0.0.1:3002/home/auth/gh/${accessToken}`);
          return result.data;
        })
        .catch(err => console.log(err));
    })
    // HAve moved this into oAuthUsers.js
    .then(ghuser => {
      User.findOne({ name: ghuser.login })
        .then(user => {
          if (user) {
            // Should I bypass this and go straight with authentication?
            return "Already authenticated with Github";
            throw new Error("That Github user already exists in our system.");
          } else {
            const newUser = new User({
              email: ghuser.email,
              name: ghuser.login,
              password: ghuser.id
            });
            console.log("newUser", newUser);
            // Hash GHuser id as password before saving in DB
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save().catch(err => console.log(err));
              });
            });
          }
        })
        .catch(err => console.log("Inner Err", err));
    })
    .catch(err => console.log("Outer Err", err));
});

module.exports = app;
