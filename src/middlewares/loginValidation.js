const Joi = require('joi');

function loginValidation(req, _res, next) {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  });

  const { error } = schema.validate(req.body);

  if (error) {
    next(error.details[0]);
  }

  next();
}

module.exports = loginValidation;
