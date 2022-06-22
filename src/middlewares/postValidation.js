const Joi = require('joi');

function postValidation(req, _res, next) {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()),
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

module.exports = postValidation;
