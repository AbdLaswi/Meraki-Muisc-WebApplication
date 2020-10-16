const axios = require("axios");
const Options = require("../DataBase/database");
const search = (songName) => {
  options.params.term = songName;
  axios
    .request(options)
    .then((response) => {

      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
module.exports = {
   search,
  };
  