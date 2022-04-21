const Joi = require('joi')

const usersSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
})

const stadiumsSchema = Joi.object({
    stadiumname: Joi.string().required(),
    imageURL: Joi.string().required(),
    description: Joi.string().required(),
    capacity: Joi.number().required(),
    location: Joi.string().required(),
    map: Joi.string().required(),
    trk: Joi.array().items(
        Joi.object({
            lat: Joi.number().required(),
            lng: Joi.number().required(),
        })
    ).required(),
})


module.exports = {
    usersSchema,
    stadiumsSchema
}