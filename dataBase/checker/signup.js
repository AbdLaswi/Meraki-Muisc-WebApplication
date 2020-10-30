const bcrypt = require("bcrypt");
const { users } = require("../DataBase/userBD");
const passwordChecking = (password) => {
  let passStrength = 0;
  const [upperLetter, lowerLetter, symbol, number] = [
    /[A-Z]/,
    /[a-z]/,
    /[.,!,@,#,$,%,^,&,*,?,_,~,-,(,)]/,
    /[0-9]/,
  ];
  const [
    upperLetterChecker,
    lowerLetterChecker,
    symbolChecker,
    numberChecker,
  ] = [
    password.match(upperLetter),
    password.match(lowerLetter),
    password.match(symbol),
    password.match(number),
  ];

  if (password.length >= 8) {
    passStrength += 1;
  } else {
    return false;
  }
  if (password.length >= 12) {
    passStrength += 1;
  }
  if (upperLetterChecker === null) {
    return false;
  } else {
    passStrength += 1;
  }
  if (lowerLetterChecker === null) {
    return false;
  } else {
    passStrength += 1;
  }
  if (symbolChecker === null) {
  }
  passStrength += 1;
  if (numberChecker === null) {
    return false;
  } else {
    passStrength += 1;
  }
  let passWord = password.split("");

  const userPassword = passWord.filter((pass) => pass === " ");
  if (!userPassword.length) {
    passStrength += 1;
  } else {
    return false;
  }
  if (passStrength >= 5) {
    return true;
  } else {
    return false;
  }
};
const signUp = async (user) => {
  if (passwordChecking(user.password)) {
    user.password = await bcrypt.hash(user.password, Number(process.env.SALT));
    user.role_id = 2;
    try {
      const newUser = new users(user);
      await newUser.save();
      return "User has been created successfully";
    } catch (err) {
      if (await err.keyPattern.name) return "username is already used";
      if (await err.keyPattern.email) return "email is already used";
    }
  }
  if (user.password < 8) {
    return "Password must be greater than 8";
  }
  if (!passwordChecking(user.password)) {
    return "The password must have at least  one number, one upper & lower letters, NO whitespace ";
  }
};
module.exports = signUp;
