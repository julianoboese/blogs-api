const LoginService = require('../services/LoginService');
const { signToken } = require('../utils/signToken');

async function login(req, res) {
  const user = await LoginService.login(req.body);

  const token = signToken(user);
  console.log(token);

  res.status(200).json({ token });
}

module.exports = {
  login,
};
