const express = require("express");

const emailController = require("./email.controller");

const emailRouter = express.Router();

emailRouter.route("/user/:email").post(emailController.sendPasswordResetEmail);

emailRouter
  .route("/receive_new_password/:userId/:token")
  .post(emailController.receiveNewPassword);

module.exports = emailRouter;
