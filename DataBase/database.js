const axios = require("axios");

const options = {
  method: "GET",
  url: "https://rapidapi.p.rapidapi.com/auto-complete",
  params: { term: " ", locale: "en-US" },
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "94bae2da82msha16adcdcc5ed391p153c34jsn5221ad60098c",
  },
};
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
search("the Last");

module.exports = {
  options,
};
