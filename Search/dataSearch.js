const axios = require("axios");
const { options } = require("../DataBase/database");
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
console.log ()
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
