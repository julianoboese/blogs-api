const authorization = require('./auth');
const loginValidation = require('./loginValidation');
const userValidation = require('./userValidation');
const categoryValidation = require('./categoryValidation');
const postValidation = require('./postValidation');
const errorMiddleware = require('./error');

module.exports = {
  authorization,
  loginValidation,
  userValidation,
  categoryValidation,
  postValidation,
  errorMiddleware,
};