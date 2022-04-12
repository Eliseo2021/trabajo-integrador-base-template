const axios = require('axios').default;
const config = require('config');
const UserModel = require('../models/user.model');

async function getUsers(req, res) {
    try {
        const user = await UserModel.find()

        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function getByIdUser(req, res) {
    try {
        const { id } = (req.params)
        const user = await
            UserModel.findById(id)
        if (!user) {
            return res.status(404).json({ message: "error: user does not exists" })
        }

        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function createUser(req, res) {
    try {
        const { username, email, password } = req.body;
        const user = new UserModel({ username, email, password });
        await user.save();

        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function deleteUser(req, res) {
    try {
        const { id } = (req.params)
        const user = await
            UserModel.findByIdAndDelete(id)

        if (!user) {
            return res.status(404).json({ message: "error: user does not exists" })
        }

        return res.json('User deleted!')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

async function updateUser(req, res) {
    try {
        const { id } = (req.params)
        const { username, email, password } = req.body;
        const user = await
            UserModel.findByIdAndUpdate(id, { username, email, password }, { new: true })

        if (!user) {
            return res.status(404).json({ message: "error: user does not exists" })
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