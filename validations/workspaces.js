var c = require('celebrate')

var celebrate = c.celebrate

var Joi = c.Joi

module.exports = {
  create: celebrate({
    body: Joi.object().keys({
      displayName: Joi.string().required(),
      name: Joi.string().default(function (values) {
        return values.displayName.toLowerCase()
      }, 'Lower case name')
    })

  }),
  update: celebrate({
    body: Joi.object().keys({
      displayName: Joi.string().required(),
      name: Joi.string().default(function (values) {
        return values.displayName.toLowerCase()
      }, 'Lower case name')
    })
  })
}
