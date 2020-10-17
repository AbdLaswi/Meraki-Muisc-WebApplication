const express = require("express");
const middleware = require("../Middlewares/middleware");
const { signIn, getUsers } = require("../checker/signIn");
const { signUp } = require("../checker/signUp");
const { search, findUser } = require("../Search/dataSearch");
const { playList, listenLater } = require("../DataBase/database");
const { addSong, removeSong } = require("../playList/playlist");
const authRouter = express.Router();
// Welcome page
authRouter.get("/protected", middleware, (req, res) => {
  res.json("Welcome To Music World");
});
//Login/sign up users
authRouter.get("/", async (req, res) => {
  res.json(getUsers());
});
authRouter.post("/signUp", async (req, res) => {
  try {
    res.json(await signUp(req.body));
  } catch (err) {
    throw err;
  }
});
authRouter.post("/signIn", async (req, res) => {
  try {
    res.json(await signIn(req.body));
  } catch (err) {
    throw err;
  }
});
// search for songs
authRouter.get("/search/:songName", async (req, res) => {
  let song = req.params.songName;
  console.log(111, await search(song));
  try {
    res.json(await search(song));
  } catch (err) {
    throw err;
  }
});
// search for users
authRouter.get("/:findUser", async (req, res) => {
  let userName = req.params.findUser;
  try {
    res.json(await findUser(userName));
  } catch (err) {
    throw err;
  }
});
// playlist
authRouter.get("/playList", (req, res) => {
  res.json(playList);
});
authRouter.put("/playList", async (req, res) => {
  try {
    res.json(await addSong(req.body));
  } catch (err) {
    throw err;
  }
});
authRouter.delete("/playList", async (req, res) => {
  try {
    res.json(await removeSong(req.body));
  } catch (err) {
    throw err;
  }
});
// Listen to it later
authRouter.get("/listenLater", (req, res) => {
  res.json(listenLater);
});
authRouter.put("/listenLater", async (req, res) => {
  try {
    res.json(await addSong(req.body));
  } catch (err) {
    throw err;
  }
});
authRouter.delete("/listenLater", async (req, res) => {
  try {
    res.json(await removeSong(req.body));
  } catch (err) {
    throw err;
  }
});
module.exports = authRouter;
