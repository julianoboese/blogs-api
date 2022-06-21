const authorization = require('./auth');
const loginValidation = require('./loginValidation');
const userValidation = require('./userValidation');
const categoryValidation = require('./categoryValidation');
const errorMiddleware = require('./error');

module.exports = {
  authorization,
  loginValidation,
  userValidation,
  categoryValidation,
  errorMiddleware,
};