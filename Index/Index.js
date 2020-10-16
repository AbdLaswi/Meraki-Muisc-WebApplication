const express = require("express");
const middleware = require("../Middlewares/middleware");
const { signIn, getUsers } = require("../checker/signIn");
const { signUp } = require("../checker/signUp");
const { search, findUser } = require("../Search/dataSearch");
const authRouter = express.Router();

authRouter.get("/protected", middleware, (req, res) => {
  res.json("Welcome To Music World");
});
authRouter.get("/", async (req, res) => {
  res.json(getUsers());
});
authRouter.post("/signUp", async (req, res) => {
  console.log(req.body);
  try {
    res.json(await signUp(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.post("/signIn", async (req, res) => {
  console.log(req.body);
  try {
    res.json(await signIn(req.body));
  } catch (err) {
    throw err;
  }
});
authRouter.get("/search/:songName", async (req, res) => {
  let songName = req.params.songName;
  console.log(500, songName);
  try {
    res.json(await search(songName));
  } catch (err) {
    throw err;
  }
});
authRouter.get("/:findUser", async (req, res) => {
  let userName = req.params.name;
  console.log(300);
  try {
    res.json(await findUser(userName));
  } catch (err) {
    throw err;
  }
});
module.exports = authRouter;
