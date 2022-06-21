function errorMiddleware(error, _req, res, _next) {
  const joiTypesStatusCodes = {
    'any.required': 400,
    'string.empty': 400,
    'string.min': 400,
    'string.email': 400,
  };

  let { message } = error;

  let statusCode;
  if (message === 'jwt malformed') {
    statusCode = 401;
    message = 'Expired or invalid token';
  } else {
    statusCode = error.statusCode || joiTypesStatusCodes[error.type];
  }

  res.status(statusCode).json({ message });
}

module.exports = errorMiddleware;
