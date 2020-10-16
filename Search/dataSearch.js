const axios = require("axios");



const search = (songName) => {
    options.params.term = songName;
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };