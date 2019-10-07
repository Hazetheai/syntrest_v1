const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const randomize = require("./randomize");
const {
  confirmEmailTemplate,
  emailConfirmationURL,
  transporter
} = require("../modules/confirmEmail");

const useRandomSliceOfPasswordHashToMakeToken = ({
  password: passwordHash,
  _id: userId,
  createdAt
}) => {
  const secret = randomize(passwordHash) + "-" + createdAt;
  const token = jwt.sign({ userId }, secret, {
    expiresIn: 3600 //1hr
  });
  console.log("Made hash browns. Yum. Check it -->", token);
  return token;
};

const sendConfirmationEmail = async email => {
  console.log("emailInConfirm Func", email);
  let user;
  try {
    user = await User.findOne({ email }).exec(); // Cannot find User ???
    console.log("user", user);
  } catch (err) {
    res.status(404).json("No user with that email");
  }
  const token = useRandomSliceOfPasswordHashToMakeToken(user);
  const url = emailConfirmationURL(user, token);
  const emailTemplate = confirmEmailTemplate(user, url);

  const sendEmail = () => {
    transporter.sendMail(emailTemplate, (err, info) => {
      if (err) {
        res.status(500).json("Error sending email %%@$@£");
        console.log("Error is: ", err, "Info is: ", info);
      }
      console.log(`** Email confirmation sent **`, info.response);
    });
  };

  sendEmail();
};

const confirmEmail = (req, res) => {
  const { userId, token } = req.params;

  // Highlight Start -- Callback hell -- **Refactoring needed**

  User.findOne({ _id: userId })
    .then(user => {
      const payload = jwt.decode(token, secret);
      if (payload.userId === user.id) {
        User.findOneAndUpdate({ _id: userId }, { confirmed: true });
      }
      console.log("Confirmed! Huzzah!", user.confirmed);
    })

    // highlight end
    .catch(() => {
      res.status(404).json("Whoops - We couldn't validate you!!");
    });
};

module.exports = {
  useRandomSliceOfPasswordHashToMakeToken,
  sendConfirmationEmail,
  confirmEmail
};
