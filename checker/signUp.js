const bcrypt = require("bcrypt");
require("dotenv").config();
const users = require("../Users Data/userData");
const UsrNamChecking = (username) => {
  const newUserName = users.filter((usr) => usr.Name === username.Name);
  if (newUserName.length) {
    return "The userName is already exists";
  }
  return false;
};
const signUp = async (user) => {
  const newUser = users.filter((usr) => usr.email === user.email);
  if (!newUser.length && !UsrNamChecking(user.name)) {
    user.password = await bcrypt.hash(user.password, Number(process.env.SALT));
    user.role_id = 2
    users.push(user);
    return "User has been created successfully";
  }
  return "The E-mail is already exists";
};
//let password more secure 
module.exports = {
  signUp,
  UsrNamChecking,
};
