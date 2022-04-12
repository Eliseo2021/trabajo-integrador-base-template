const Joi = require('joi')

const usersSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password: Joi.string().required()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),
})

const stadiumsSchema = Joi.object({
    stadiumname: Joi.string().required(),
    imageURL: Joi.string().required(),
    description: Joi.string().required(),
    capacity: Joi.string().required(),
    location: Joi.string().required(),
    map: Joi.string().required(),
})

module.exports = {
    usersSchema,
    stadiumsSchema
}