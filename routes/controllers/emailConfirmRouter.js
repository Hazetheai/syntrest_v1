const express = require("express");
const emailRouter = express.Router();
const emailController = require("./emailConfirmController");

emailRouter
  .route("/email-confirmed/:userId/:token")
  .post(emailController.confirmEmail);

module.exports = emailRouter;
