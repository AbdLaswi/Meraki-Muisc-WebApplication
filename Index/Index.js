const express = require("express");
const { signIn, getUsers } = require("../checker/signIn");
const signUp = require("../checker/signUp");
const middleware = require("../Middlewares/middleware");

const authRouter = express.Router();

authRouter.get("/", async (req, res) => {
  res.json(getUsers());
});

authRouter.get("/protected", middleware, (req, res) => {
  res.json("Hello World");
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



module.exports = authRouter;