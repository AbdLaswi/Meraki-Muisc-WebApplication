// const {listenLater} = require("../DataBase/database");
// const songChecking = (songName) => {
//   const newSong = listenLater.filter((song) => song === songName);
//   if (newSong.length) {
//     return false;
//   }
//   return true;
// };
// const addSong = (song) => {
//     let tune = song.name
//   if (songChecking(tune)) {
//     listenLater.push(tune);
//     return "The song has been added successfully";
//   }
//   return "This song is already exist";
// };
// const removeSong = (song) => {
//   if (songChecking(song)) {
//     let tune = song.name
//     let songPos = listenLater.indexOf(tune);
//     listenLater.splice(songPos, songPos + 1);
//     return "The song has been deleted successfully";
//   }
//   return "This song does not exist";
// };

// module.exports = {
//   addSong,
//   removeSong,
// };
