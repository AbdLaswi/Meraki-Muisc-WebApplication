const bcrypt = require("bcrypt");
const { users } = require("../Users Data/userData");
const UsrNamChecking = (username) => {
  const newUserName = users.filter((usr) => usr.name === username);
  if (newUserName.length) {
    return false;
  }
  return true;
};
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
  return true;
};
const signUp = async (user) => {
  const newUser = users.filter((usr) => usr.email === user.email);

  if (
    UsrNamChecking(user.name) &&
    passwordChecking(user.password) &&
    !newUser.length
  ) {
    user.password = await bcrypt.hash(user.password, Number(process.env.SALT));
    user.role_id = 2;
    users.push(user);
    return "User has been created successfully";
  }
  if (!UsrNamChecking(user.name)) {
    return "The E-mail is already exists";
  }
  if (user.password < 8) {
    return "Password must be greater than 8";
  }
  if (!passwordChecking(user.password)) {
    return "The password must have at least  one number, one upper & lower letters, NO whitespace ";
  } else {
    return "The Username is already exists";
  }
};

module.exports = {
  signUp,
  UsrNamChecking,
};
