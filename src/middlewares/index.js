const authorization = require('./auth');
const loginValidation = require('./loginValidation');
const userValidation = require('./userValidation');
const errorMiddleware = require('./error');

module.exports = {
  authorization,
  loginValidation,
  userValidation,
  errorMiddleware,
};