const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const randomize = require("./randomize");
const {
  getPasswordResetURL,
  resetPasswordTemplate,
  transporter
} = require("../modules/emailReset");

const usePasswordHashToMakeToken = ({
  password: passwordHash,
  _id: userId,
  createdAt
}) => {
  const secret = randomize(passwordHash) + "-" + createdAt;
  const token = jwt.sign({ userId }, secret, {
    expiresIn: 3600 //1hr
  });
  return token;
};

const sendPasswordResetEmail = async (req, res) => {
  const { email } = req.params;
  let user;
  try {
    user = await User.findOne({ email }).exec();
    console.log("user", user);
  } catch (err) {
    res.status(404).json("No user with that email");
  }
  const token = usePasswordHashToMakeToken(user);
  const url = getPasswordResetURL(user, token);
  const emailTemplate = resetPasswordTemplate(user, url);

  const sendEmail = () => {
    transporter.sendMail(emailTemplate, (err, info) => {
      if (err) {
        res.status(500).json("Error sending email %%@$@£");
        // console.log("Error is: ", err, "Info is: ", info);
      }
      // console.log(`** Email Sent **`, info.response);
    });
  };

  sendEmail();
};

const receiveNewPassword = (req, res) => {
  const { userId, token } = req.params;
  const { password } = req.body;

  // Highlight Start -- Callback hell -- **Refactoring needed**

  User.findOne({ _id: userId })
    .then(user => {
      const secret = user.password + "-" + user.createdAt;
      const payload = jwt.decode(token, secret);
      if (payload.userId === user.id) {
        bcrypt.genSalt(10, function(err, salt) {
          // Call error handler:
          if (err) return;
          bcrypt.hash(password, salt, function(err, hash) {
            // Call error handler:
            if (err) return;
            // **TODO** DEPRECEATED CALL
            User.findOneAndUpdate({ _id: userId }, { password: hash })
              .then(() => res.status(202).json("Password successfully changed"))
              .catch(err => res.status(500).json(err));
          });
        });
      }
    })

    // highlight end
    .catch(() => {
      res.status(404).json("Invalid user - You shall not pass!");
    });
};

module.exports = {
  usePasswordHashToMakeToken,
  sendPasswordResetEmail,
  receiveNewPassword
};
