const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const randomize = require("../modules/randomize");
const emailController = require("../controllers/emailConfirmController");

// Load user input validation

const validateLogInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/register");

// Load user Model

const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ email: "That email has already been registered" });
    } else {
      const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        confirmHash: randomize(req.body.email + Date.now.toString()),
        confirmed: false
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => res.json(user));
        });
      });
    }
  });
  setTimeout(() => {
    emailController.sendConfirmationEmail(req.body.email, req, res);
  }, 5000);
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLogInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { email } = req.body;
  const { password } = req.body;
  const { confirmed } = req.body;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    if (!user.confirmed) {
      return res.status(403).json({
        emailnotconfirmed: "Email not confirmed",
        email: email
      });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.post("/delete-account", (req, res) => {
  const { email } = req.body;
  User.findOneAndDelete({ email })

    .then(user => {
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
      res.json({
        success: true,
        message: "So long old friend."
      });
    })
    .catch(err => console.error("Error Deleting User", err));
});

module.exports = router;
