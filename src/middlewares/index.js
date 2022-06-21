const loginValidation = require('./loginValidation');
const userValidation = require('./userValidation');
const errorMiddleware = require('./error');

module.exports = {
  loginValidation,
  userValidation,
  errorMiddleware,
};