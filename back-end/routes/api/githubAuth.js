const axios = require("axios");
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/OAuthUser");
const { CLIENT_URI } = process.env;
const app = express.Router();
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
console.log(CLIENT_URI);
app.get("/callback", (req, res, next) => {
  // retreive code param from callback URL
  let code = req.query.code;
  code = null;
  if (code) {
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
            res.redirect(`${CLIENT_URI}/home/auth/gh/`);
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
              console.log("Already authenticated with Github");
              return "Already authenticated with Github";
              throw new Error("That Github user already exists in our system.");
            } else {
              const newUser = new User({
                email: ghuser.email,
                name: ghuser.login,
                password: ghuser.id,
                platform: "Github"
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
    // next();
  }
});

module.exports = app;

// .send({
//   noCodePresent:
//     "If this way isn't to your liking, you can always login with an email and password instead. We'll put a button here to do just that, but we're not getting paid, soooo, it might take a while. :)"
// });
