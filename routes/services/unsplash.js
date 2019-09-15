global.fetch = require("node-fetch");
const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;
const express = require("express");
const app = express();

// require syntax

const unsplash = new Unsplash({
  applicationId: process.env.UNSPLASH_CLIENT_ID,
  secret: process.env.UNSPLASH_CLIENT_SECRET,
  callbackUrl: process.env.UNSPLASH_CALLBACK_URL
});

const random = app.get("/unsplash", (req, res) => {
  unsplash.photos
    .listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then(json => {
      return res.json(json);
    })
    .catch(err => console.error(err));
});

const synth = app.get("/unsplash/synth", (req, res) => {
  unsplash.search
    .photos("synth")
    .then(toJson)
    .then(json => {
      return res.json(json);
    })
    .catch(err => console.error(err));
});

module.exports = { random, synth };
