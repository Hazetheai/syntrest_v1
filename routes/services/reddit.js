const express = require("express");
const app = express();
const axios = require("axios");
const url = "https://www.reddit.com/r/synthesizers.json?limit=100&raw_json=1";

const todaysArray = () => {
  return axios
    .get(url, (req, res) => res.data)
    .then(result => result.data.data.children);
};

const rSynth = app.get("/rsynthesizers", (req, res) => {
  todaysArray()
    .then(posts =>
      posts
        .filter(el => /\.jpg$/.test(el.data.url))
        .map(el =>
          el.data.preview.images.map(el =>
            el.resolutions[4]
              ? el.resolutions[4].url
              : el.resolutions[3]
              ? el.resolutions[3].url
              : el.resolutions[2].url
          )
        )
    )
    .then(imgPosts =>
      res.send(imgPosts.reduce((acc, val) => acc.concat(val), []))
    )
    .catch(err => console.error(err));
});

module.exports = { rSynth };
