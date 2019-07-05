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
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = oAuthUser = mongoose.model("oAuthusers", UserSchema);