const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  platform: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
});

module.exports = oAuthUser = mongoose.model("oAuthusers", UserSchema);
