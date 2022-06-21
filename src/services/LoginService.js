const createError = require('http-errors');
const { User } = require('../database/models');

async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) throw new createError.BadRequest('Invalid fields');

  delete user.dataValues.password;

  return user.dataValues;
}

module.exports = {
  login,
};
