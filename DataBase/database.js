
const options = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/auto-complete',
  params: {term: 'kiss the', locale: 'en-US'},
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': '313c517b57msh0d68b3a5a11ef4bp1f2cd9jsn6c66ecea03c6'
  }
};

const playList = [];
const listenLater = [];
const songRate = [];
module.exports = {
  options,
  playList,
  listenLater,
  songRate,
};
