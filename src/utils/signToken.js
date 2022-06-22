const jwt = require('jsonwebtoken');

function signToken(user) {
  const secret = process.env.JWT_SECRET;

  const token = jwt.sign({ data: user }, secret);

  return token;
}

module.exports = {
  signToken,
};
