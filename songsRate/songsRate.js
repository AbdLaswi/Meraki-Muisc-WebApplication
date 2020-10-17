// I didnt activate it yet, I'll do it in stage two of project
let { songRate } = require("../DataBase/database");
const { search } = require("../Search/dataSearch");
const rate = (r8) => {
  let sRate = 0;
  songRate.push(r8);
  songRate.forEach((elem) => {
    sRate += elem;
  });
  return sRate / songRate.length;
};
const rateSong = (song, r8) => {
  let tune = search(song);
  let newRate = rate(r8);
  tune.rate = newRate;
  return newRate;
};
module.exports = { rateSong };
