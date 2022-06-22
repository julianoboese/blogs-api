const jwt = require('jsonwebtoken');

function getCurrentUser(token) {
  const secret = process.env.JWT_SECRET;
  
  const decoded = jwt.verify(token, secret);

  return decoded.data;
}

module.exports = getCurrentUser;
