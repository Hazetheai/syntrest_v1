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

module.exports = app.get("/unsplash", (req, res) => {
  unsplash.photos
    .listPhotos(1, 30)
    .then(toJson)
    .then(json => res.json(json));
});
console.log("beans");
