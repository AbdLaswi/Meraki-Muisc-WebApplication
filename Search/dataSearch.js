const axios = require("axios");
const { options } = require("../DataBase/database");
const Options = require("../DataBase/database");
const search = (songName) => {
  axios
    .request(options)
    .then((response) => {
      options.params.term = songName;
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
  search,
};
