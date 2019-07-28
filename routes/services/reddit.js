const express = require("express");
const axios = require("axios");

const url = "https://www.reddit.com/r/synthesizers.json";

const app = express();

const todaysArray = () => {
  return axios
    .get(url, (req, res) => res.data)
    .then(result => result.data.data.children);
};
todaysArray().then(res => {
  console.log("res.length", res.length);
  return res.map(el => {
    console.log(el.data.url);
  });
});

// if the url ends with .jpg // jpeg // png // svg add to array
// add to DB

module.exports = {
  todaysArray
};
