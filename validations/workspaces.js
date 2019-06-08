var c = require('celebrate')

var celebrate = c.celebrate

var Joi = c.Joi

var errors = c.errors

module.exports = {
  create: celebrate({
    body: Joi.object().keys({
      displayName: Joi.string().required()
    })

  }),
  update: celebrate({
    body: Joi.object().keys({
      displayName: Joi.string().required()
    })

  })
}
