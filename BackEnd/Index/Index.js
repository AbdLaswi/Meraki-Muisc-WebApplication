const express = require("express");
const middleware = require("../dataBase/Middlewares/middleware");
const {
  getUser,
  logIn,
  register,
} = require("../dataBase/controller/controller");
const authRouter = express.Router();
// Welcome page
const Home = (req, res) => {
  res.json("Welcome To Music World");
};
authRouter.get("/", middleware, Home);
//Login/sign up users
authRouter.get("/findUser", getUser);
authRouter.post("/signUp", register);
authRouter.post("/signIn", logIn);
module.exports = authRouter;
