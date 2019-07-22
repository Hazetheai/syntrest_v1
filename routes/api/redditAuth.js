const axios = require("axios");
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/OAuthUser");

const app = express.Router();

const {
  REDDIT_CLIENT_ID,
  REDDIT_CLIENT_SECRET,
  CLIENT_URI,
  REDDIT_CALLBACK_URL
} = process.env;

let encodedData = Buffer.from(
  `${REDDIT_CLIENT_ID}:${REDDIT_CLIENT_SECRET}`
).toString("base64");

let currentRedditUser = { platform: "reddit" };

const redditAuth = app.get("/callback", (req, res, next) => {
  // retreive code param from callback URL
  const code = req.query.code;
  //   console.log("code", code);
  if (code) {
    axios
      .post(
        "https://www.reddit.com/api/v1/access_token",
        `grant_type=authorization_code&code=${code}&redirect_uri=${REDDIT_CALLBACK_URL}`,
        {
          //  Send post req with my ID & Secret & the code

          headers: {
            Authorization: `Basic ${encodedData}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )

      // use Token to get user from github

      .then(response => {
        // console.log("response", response.data);
        const accessToken = response.data.access_token;
        // pass to global variable to move to different file **Need Better Method**
        currentRedditUser.accessToken = accessToken;
        return axios({
          method: "get",
          url: `https://oauth.reddit.com/api/v1/me`,
          headers: { Authorization: `bearer ${accessToken}` }
        })
          .then(result => {
            // with user info from GH-api -> direct to Loading component
            res.redirect(`${CLIENT_URI}/auth/reddit/callback/${accessToken}`);
            // console.log("result.data", result.data);
            return result.data;
          })
          .catch(err =>
            console.log("Error generating user from accesstoken", err)
          );
      })
      // authenticate user if in db; else make user from data
      .then(redUser => {
        User.findOne({ id: redUser.created_utc + redUser.created })
          .then(user => {
            if (user) {
              // return this and go straight to authentication ->via React Router verifying params
              //  Add to global variable to access in makeOAuthJwt
              currentRedditUser.user = user;

              return "Already authenticated with Github";
            } else {
              const newUser = new User({
                email: redUser.email,
                url: `https://reddit.com${redUser.url}`,
                name: redUser.name,
                password: redUser.id,
                platform: "reddit",
                id: redUser.created_utc + redUser.created
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
module.exports = { redditAuth, currentRedditUser };
