const UserService = require('../services/UserService');
const { signToken } = require('../utils/signToken');

async function findUsers(_req, res) {
  const users = await UserService.findUsers();

  res.status(200).json(users);
}

async function findUser(req, res) {
  const { id } = req.params;

  const user = await UserService.findUser(id);

  res.status(200).json(user);
}

async function createUser(req, res) {
  const newUser = await UserService.createUser(req.body);

  const token = signToken(newUser);

  res.status(201).json({ token });
}

module.exports = {
  findUsers,
  findUser,
  createUser,
};
