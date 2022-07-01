const jwt = require('jsonwebtoken');
const createError = require('http-errors');

function authorization(req, _res, next) {
  const token = req.headers.authorization;

  if (!token) throw new createError.Unauthorized('Token not found');

  const secret = process.env.JWT_SECRET;

  const decoded = jwt.verify(token.replace('Bearer ', ''), secret);

  req.user = decoded.data;

  next();
}

module.exports = authorization;
