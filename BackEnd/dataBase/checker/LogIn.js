const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, roles } = require("../DataBase/userBD");

const signIn = async (user) => {
  console.log(1,user);
  let logUser = await  users.find({email :user.email},(err, result) => {
    if (err) throw err;
    return result
  })
  console.log(2,logUser[0]);
  if (await bcrypt.compare(user.password, logUser[0].password)) {
    const permissions = roles.filter((role) => role.id === logUser[0].role_id);
    const payload = {
      email: logUser[0].email,
      permissions: permissions[0].permissions,
    };

    const options = {
      expiresIn: process.env.TOKEN_EXPIRATION,
    };

    return jwt.sign(payload, process.env.SECRET, options);
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
