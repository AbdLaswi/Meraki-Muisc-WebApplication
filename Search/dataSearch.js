const axios = require("axios");
const bcrypt = require("bcrypt");
const { options } = require("../API/API");
const {users} = require ("../Users Data/userData")
 const search = (songName) => {
  options.params.term = songName;
  axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
    
};
const findUser = (userName) => {
  const usrName = users.filter((usr) => usr.name === userName);
  if (usrName.length) {
    return userName;
  }
  return "The user Does not exist";
};
module.exports = {
  search,
  findUser,
};
