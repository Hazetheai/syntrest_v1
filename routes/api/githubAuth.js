const axios = require("axios");
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/OAuthUser");

const app = express.Router();

let currentUser = {};

const { CLIENT_URI } = process.env;
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

const githubAuth = app.get("/callback", (req, res, next) => {
  // retreive code param from callback URL
  const code = req.query.code;
  // code = null;
  if (code) {
    axios({
      method: "post",
      //  Send post req with my ID & Secret & the code
      url: `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`,
      headers: {
        accept: `application/json`
      }
      // use Token to get user from github
    })
      .then(response => {
        const accessToken = response.data.access_token;
        // pass to global variable to move to different file **Need Better Method**
        currentUser.accessToken = accessToken;
        return axios({
          method: "get",
          url: `https://api.github.com/user`,
          headers: { Authorization: `token ${accessToken}` }
        })
          .then(result => {
            // with user info from GH-api -> direct to Loading component
            res.redirect(`${CLIENT_URI}/auth/github/callback/${accessToken}`);
            return result.data;
          })
          .catch(err =>
            console.log("Error generating user from accesstoken", err)
          );
      })
      // authenticate user if in db; else make user from data
      .then(ghuser => {
        User.findOne({ id: ghuser.id })
          .then(user => {
            if (user) {
              // return this and go straight to authentication ->via React Router verifying params
              //  Add to global variable to access in makeOAuthJwt
              currentUser.user = user;

              return "Already authenticated with Github";
            } else {
              const newUser = new User({
                email: ghuser.email,
                name: ghuser.login,
                password: ghuser.id,
                platform: "Github",
                id: ghuser.id
              });

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
  } else {
    // **TODO** Add Notice to alert user that they did not authenticate
    res.redirect(`${CLIENT_URI}/register`);
  }
});
module.exports = { githubAuth, currentUser };
