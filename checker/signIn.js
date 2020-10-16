const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { users, roles } = require("../Users Data/userData");
const signIn = async (user) => {
  const savedUser = users.filter((usr) => usr.email === user.email);
  console.log(1, savedUser);
  if (savedUser.length) {
    console.log(2);
    console.log(await bcrypt.compare(user.password, savedUser[0].password));
    if (await bcrypt.compare(user.password, savedUser[0].password)) {
      console.log(3);
      const permissions = roles.filter(
        (role) => role.id === savedUser[0].role_id
      );
      console.log(4);
      const payload = {
        email: savedUser[0].email,
        permissions: permissions[0].permissions,
      };
      console.log(5);
      const options = {
        expiresIn: process.env.TOKEN_EXPIRATION,
      };
      console.log(6);
      return jwt.sign(payload, process.env.SECRET, options);
    }
  }
  return "Invalid login";
};
const getUsers = () => {
  return users;
};
module.exports = {
  signIn,
  getUsers,
};
