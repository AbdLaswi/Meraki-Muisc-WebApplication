
const { signIn, getUsers } = require("../checker/LogIn");
const signUp  = require("../checker/signup");
// get user 
const getUser = async (req, res) => {
    res.json(getUsers());
};
// sign up
const register = async (req, res) => {
    try {
      console.log("ssiiiis", await signUp(req.body))
        res.send(await signUp(req.body));
    } catch (err) {
        throw err;
    }
};
//Login
const logIn = async (req, res) => {
  try {
    res.json(await signIn(req.body));
  } catch (err) {
    throw err;
  }
};
module.exports = {
    getUser,
    logIn,
    register
}
