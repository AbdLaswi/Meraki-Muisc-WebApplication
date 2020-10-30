const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  playList: { type: Array },
  watchLater: { type: Array },
  role_id: { type: Number },
});

const roles = [
  {
    id: 1,
    type: "admin",
    permissions: ["r", "w", "u", "d"],
  },
  {
    id: 2,
    type: "user",
    permissions: ["r", "w"],
  },
];
const users = mongoose.model("Users", userSchema);
module.exports = { users, roles };
