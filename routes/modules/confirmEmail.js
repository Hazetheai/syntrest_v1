const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD
  }
});

const emailConfirmationURL = (user, token) =>
  `${process.env.CLIENT_URI}/confirmed/email-confirmed/${user._id}/${token}`;

const confirmEmailTemplate = (user, url) => {
  const from = process.env.EMAIL_LOGIN;
  const to = user.email;
  const subject = "🌻 Syntrest Email Confirmation 🌻";
  const html = `
  <p>Hey ${user.name || user.email},</p>
  <p>Thanks for signing up!</p>
  <p>Click this link to confirm and aaaaaway we go!</p>
  <a href=${url}>${url}</a>
  <p>If you don’t use this link within 1 hour, it will expire.</p>
  <p>Do something outside today! </p>
  <p>–Your friends at Syntrest</p>
  `;

  return { from, to, subject, html };
};

module.exports = { transporter, emailConfirmationURL, confirmEmailTemplate };
