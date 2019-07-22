const express = require("express");
const emailRouter = express.Router();
const emailController = require("./email.controller");

emailRouter.route("/user/:email").post(emailController.sendPasswordResetEmail);

emailRouter
  .route("/receive_new_password/:userId/:token")
  .post(emailController.receiveNewPassword);

module.exports = emailRouter;
