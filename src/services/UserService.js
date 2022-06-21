const createError = require('http-errors');
const { User } = require('../database/models');

async function createUser(userData) {
  const user = await User.findOne({ where: { email: userData.email } });

  if (user) throw new createError.Conflict('User already registered');

  const newUser = await User.create(userData);

  return newUser;
}

module.exports = {
  createUser,
};
