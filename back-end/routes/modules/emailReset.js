const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const getPasswordResetURL = (user, token) =>
  `http://localhost:5000/password/reset/${user._id}/${token}`;

export const resetPasswordTemplate = (user, url) => {
  const from = process.env.EMAIL_LOGIN;
  const to = user.email;
  const subject = "🌻 Syntrest Password Reset 🌻";
  const html = `
  <p>Hey ${user.displayName || user.email},</p>
  <p>We heard that you lost your Syntrest password. Sorry about that!</p>
  <p>But don’t worry! You can use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>If you don’t use this link within 1 hour, it will expire.</p>
  <p>Do something outside today! </p>
  <p>–Your friends at Syntrest</p>
  `;

  return { from, to, subject, html };
};