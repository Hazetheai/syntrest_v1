const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
// This Uploads to client
const app = express();

app.use(fileUpload());

const upload = app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No files uploaded" });
  }
  const { file } = req.files;

  file.mv(
    `${path.join(__dirname, "../../")}client/public/uploads/${file.name}`,
    err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      return res.json({
        fileName: file.name,
        filePath: `/uploads/${file.name}`
      });
    }
  );
});

module.exports = { upload };
