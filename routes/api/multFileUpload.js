const express = require("express");
const multUploadRouter = express.Router();
const upload = require("../services/multFileUpload");

const multUpload = upload.array("image", 6);

multUploadRouter.post("/image-upload", (req, res) => {
  multUpload(req, res, error => {
    if (error) {
      res.status(422).send({
        errors: [{ title: "File upload error", details: error.message }]
      });
    }

    return res.json({ imageUrl: req.files.location });
  });
});

module.exports = multUploadRouter;
