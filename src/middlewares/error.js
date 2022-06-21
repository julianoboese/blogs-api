function errorMiddleware(error, _req, res, _next) {
  const joiTypesStatusCodes = {
    'any.required': 400,
    'string.empty': 400,
    'string.min': 400,
    'string.email': 400,
  };

  const { message } = error;
  const statusCode = error.statusCode || joiTypesStatusCodes[error.type];

  res.status(statusCode).json({ message });
}

module.exports = errorMiddleware;
