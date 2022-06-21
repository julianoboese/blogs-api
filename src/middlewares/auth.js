const jwt = require('jsonwebtoken');
const createError = require('http-errors');

function authorization(req, res, next) {
  const token = req.headers.authorization;

  if (!token) throw new createError.Unauthorized('Token not found');

  const secret = process.env.JWT_SECRET;

  jwt.verify(token, secret);

  next();
}

module.exports = authorization;
