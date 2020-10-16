const bcrypt = require("bcrypt");
const { users } = require("../Users Data/userData");
const UsrNamChecking = (username) => {
  const newUserName = users.filter((usr) => usr.name === username);
  if (newUserName.length) {
    return false;
  }
  return true;
};
const signUp = async (user) => {
  const newUser = users.filter((usr) => usr.email === user.email);
  if (UsrNamChecking(user.name) && !newUser.length) {
    user.password = await bcrypt.hash(user.password, Number(process.env.SALT));
    user.role_id = 2;
    users.push(user);
    return "User has been created successfully";
  }
  if (UsrNamChecking(user.name)) {
    return "The E-mail is already exists";
  } else {
    return "The Username is already exists";
  }
};
//let password more secure
module.exports = {
  signUp,
  UsrNamChecking,
};
