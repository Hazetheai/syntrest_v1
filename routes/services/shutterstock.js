const express = require("express");
const sstk = require("shutterstock-api");
const app = express();

const { SHUTTERSTOCK_CONSUMER_KEY, SHUTTERSTOCK_CONSUMER_SECRET } = process.env;

sstk.setBasicAuth(SHUTTERSTOCK_CONSUMER_KEY, SHUTTERSTOCK_CONSUMER_SECRET);

const imagesApi = new sstk.ImagesApi();

const queryParams = {
  query: "kites",
  image_type: "photo",
  page: 1,
  per_page: 5,
  sort: "popular",
  view: "minimal"
};

const synth = app.get("/synth", (req, res) => {
  console.log("res", res);
  imagesApi
    .searchImages(queryParams)
    .then(data => data.json())
    .then(result => {
      console.log("result", result);
      return res.json(result);
    })
    .catch(error => {
      console.error(error);
    });
});

module.exports = { synth };
