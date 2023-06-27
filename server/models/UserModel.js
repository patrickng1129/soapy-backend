const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  checkIns: [{ date: Date, streak: Number }],
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
