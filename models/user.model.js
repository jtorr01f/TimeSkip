const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
  startingWeight: { type: Number },
  currentWeight: { type: Number },
  goalWeight: { type: Number },
  height: { type: Number },
  profilePicture: { type: String },
});

module.exports = mongoose.model("User", UserSchema);