const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const randomize = require("../modules/randomize");
const {
  confirmEmailTemplate,
  emailConfirmationURL,
  transporter
} = require("../modules/confirmEmail");
const secret = {};
const useRandomSliceOfPasswordHashToMakeToken = ({
  password: passwordHash,
  _id: userId,
  createdAt
}) => {
  secret.code = randomize(passwordHash) + "-" + createdAt;
  const token = jwt.sign({ userId }, secret.code, {
    expiresIn: 3600 //1hr
  });

  return token;
};

const sendConfirmationEmail = async (email, req, res) => {
  let user;
  try {
    user = await User.findOne({ email }).exec();
  } catch (err) {
    // res.status(404).json("No user with that email");
    console.error("No user with that email", err);
  }
  const token = useRandomSliceOfPasswordHashToMakeToken(user);
  const url = emailConfirmationURL(user, token);
  const emailTemplate = confirmEmailTemplate(user, url);

  const sendEmail = () => {
    transporter.sendMail(emailTemplate, (err, info) => {
      if (err) {
        // res.status(500).json("Error sending email %%@$@£");
        console.error("Error sending email %%@$@£l", err);
      }
    });
  };

  sendEmail();
};

const confirmEmail = async (req, res) => {
  const { userId, token } = req.params;
  console.log(userId, token);
  await User.findOne({ _id: userId })
    .then(user => {
      const payload = jwt.decode(token, secret.code);
      if (payload.userId === user.id) {
        User.findOneAndUpdate({ _id: userId }, { confirmed: true }).then(
          result => {
            res.status(202).json("Huzzah! - We've got your data, Data!!");

            console.log("result of findOneANUpdate", result);
          }
        );
      }
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
