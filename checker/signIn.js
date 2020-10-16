const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, roles } = require("../Users Data/userData.js");
const signIn = async (user) => {
  const savedUser = users.filter((usr) => usr.email === user.email);
  if (savedUser.length) {
    if (await bcrypt.compare(user.password, savedUser[0].password)) {
      const permissions = roles.filter(
        (role) => role.id === savedUser[0].role_id
      );

      const payload = {
        email: savedUser[0].email,
        permissions: permissions[0].permissions,
      };

      const options = {
        expiresIn: process.env.TOKEN_EXPIRATION,
      };

      return jwt.sign(payload, process.env.SECRET, options);
    }
  }
  return "Invalid login";
};

const getUsers = () => {
  return users;
};
module.exports = {
  getUsers,
  signIn,
};
