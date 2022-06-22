const createError = require('http-errors');
const { User } = require('../database/models');

async function findUsers() {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
}

async function findUser(id) {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) throw new createError.NotFound('User does not exist');

  return user;
}

async function createUser(userData) {
  const user = await User.findOne({ where: { email: userData.email } });

  if (user) throw new createError.Conflict('User already registered');

  const newUser = await User.create(userData);

  delete newUser.dataValues.password;

  return newUser.dataValues;
}

module.exports = {
  findUsers,
  findUser,
  createUser,
};
