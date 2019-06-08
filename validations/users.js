var c = require('celebrate')

var celebrate = c.celebrate

var Joi = c.Joi

var errors = c.errors

module.exports = {
  create: celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      role: Joi.string().valid(['basic', 'admin']).required()
    })

  }),
  update: celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      role: Joi.string().valid(['basic', 'admin']).required()
    })
  })
}
