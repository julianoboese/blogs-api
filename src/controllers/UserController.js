const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');

async function createUser(req, res) {
  const newUser = await UserService.createUser(req.body);

  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({ data: newUser }, secret);

  res.status(201).json({ token });
}

module.exports = {
  createUser,
};
