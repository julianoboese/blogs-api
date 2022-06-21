const Joi = require('joi');

function categoryValidation(req, _res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    next(error.details[0]);
  }

  next();
}

module.exports = categoryValidation;
