// const {playList} = require("../DataBase/userBD");

// const songChecking = (songName) => {
//   const newSong = playList.filter((song) => song === songName);
//   if (newSong.length) {
//     return false;
//   }
//   return true;
// };
// const addSong = (song) => {
//     let tune = song.name
//   if (songChecking(tune)) {
//     playList.push(tune);
//     return "The song has been added successfully";
//   }
//   return "This song is already exist";
// };
// const removeSong = (song) => {
//   if (songChecking(song)) {
//     let tune = song.name
//     let songPos = playList.indexOf(tune);
//     playList.splice(songPos, songPos + 1);
//     return "The song has been deleted successfully";
//   }
//   return "This song does not exist";
// };

// module.exports = {
//   addSong,
//   removeSong,
// };
