var c = require('celebrate'),
    celebrate = c.celebrate,
    Joi = c.Joi,
    errors = c.errors;

module.exports = {
    create: celebrate({
        body: Joi.object().keys({
            email: Joi.string().email().required(),
            role: Joi.string().valid(['basic', 'admin']).required(),
        })
        
    }),
    update: celebrate({
        body: Joi.object().keys({
            email: Joi.string().email().required(),
            role: Joi.string().valid(['basic', 'admin']).required(),
        })
    }),
}