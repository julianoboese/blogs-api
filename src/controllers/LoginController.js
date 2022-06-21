const jwt = require('jsonwebtoken');
const LoginService = require('../services/LoginService');

async function login(req, res) {
  const user = await LoginService.login(req.body);

  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({ data: user }, secret);

  res.status(200).json({ token });
}

module.exports = {
  login,
};
