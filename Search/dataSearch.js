const axios = require("axios");
const { options } = require("../DataBase/database");
const users = require("../Users Data/userData");
const search = (songName) => {
  axios;
  console
    .log(22, songName)
    .request(options)
    .then((response) => {
      options.params.term = songName;
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};
const findUser = (userName) => {
  const usrName = users.filter((usr) => usr.name === userName);
  if (usrName.length) {
    return usrName;
  }
  return "The user Does not exist";
};
module.exports = {
  search,
  findUser,
};
