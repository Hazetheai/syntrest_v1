const express = require("express");
const uploadRouter = express.Router();
const upload = require("../services/fileUpload");

const singleUpload = upload.single("image");

uploadRouter.post("/image-upload", (req, res) => {
  singleUpload(req, res, error => {
    if (error) {
      res.status(422).send({
        errors: [{ title: "File upload error", details: error.message }]
      });
    }

    return res.json({ imageUrl: req.file.location });
  });
});

module.exports = uploadRouter;
