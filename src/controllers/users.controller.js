const Joi = require('joi')
const UserModel = require('../models/user.model');
const { usersSchema } = require('../schemas/validate.schemas');

async function getUsers(req, res) {
    try {
        const user = await UserModel.find() //get all users
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function getByIdUser(req, res) {
    try {
        const { id } = (req.params)
        const user = await
            UserModel.findById(id) //get user by id
        if (!user) {
            return res.status(404).json({
                code: "bad_request",
                message: "Invalid request, check that the ID is valid",
                severity: "LOW",
            })
        }
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function createUser(req, res) {
    try {
        const data = { username, email, password } = req.body;
        Joi.assert(data, usersSchema); //validate data
        const user = new UserModel({ username, email}); //create new user
        await user.save(); //save user in database
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function deleteUser(req, res) {
    try {
        const { id } = (req.params)
        const user = await
            UserModel.findByIdAndDelete(id) //delete user by id
        if (!user) {
            return res.status(404).json({
                code: "bad_request",
                message: "Invalid request, check that the ID is valid",
                severity: "LOW",
            })
        }
        return res.json('User deleted!')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function updateUser(req, res) {
    try {
        const { id } = (req.params)
        const data = { username, email, password } = req.body;
        Joi.assert(data, usersSchema); //validate data
        const user = await
            UserModel.findByIdAndUpdate(id, { username, email }, { new: true }) //update user by id
        if (!user) {
            return res.status(404).json({
                code: "bad_request",
                message: "Invalid request, check that the ID is valid",
                severity: "LOW",
            })
        }
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


module.exports = {
    getUsers,
    getByIdUser,
    createUser,
    updateUser,
    deleteUser
};