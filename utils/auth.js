const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createToken = (userInfo) => 
  JWT.sign({ sub: userInfo.id, email: userInfo.email }, "thisisasecret");

const verifyPassword = (attemptedPw, hashedPw) =>
  bcrypt.compareSync(attemptedPw, hashedPw);

const hashPassword = (password) => bcrypt.hashSync(password);
//hardcoded secret value. would pull from process.env in production
const verifyToken = (token) => {
  const newtoken = token.split(' ')[1];
  return JWT.verify(newtoken, "thisisasecret");
}

module.exports = { createToken, verifyPassword, hashPassword, verifyToken };
