var c = require('celebrate'),
    celebrate = c.celebrate,
    Joi = c.Joi,
    errors = c.errors;

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
        
    }),
}