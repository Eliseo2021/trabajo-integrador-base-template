const axios = require('axios').default;
const config = require('config');
const UserModel = require('../models/user.model');

async function getUsers(req, res) {
    const user = await UserModel.find()
    res.send(user)
};

async function getByIdUser(req, res) {
    const { id } = (req.params)
    const user = await
        UserModel.findById(id)
        if (!user) {
            return res.status(404).json({ message: "error: user does not exists" })
        }
    return res.send(user)
};

async function createUser(req, res) {
    const { username, email, password } = req.body;
    const user = new UserModel({ username, email, password });
    await user.save();
    res.send(user)
};

async function deleteUser(req, res) {
    const { id } = (req.params)
    const user = await
        UserModel.findByIdAndDelete(id)
    
        if (!user) {
            return res.status(404).json({ message: "error: user does not exists" })
        }
    
        return res.send('User deleted!')
};

async function updateUser(req, res) {
    const { id } = (req.params)
    const { username, email, password } = req.body;
    const user = await
        UserModel.findByIdAndUpdate(id, { username, email, password }, { new: true })
    
        if (!user) {
            return res.status(404).json({ message: "error: user does not exists" })
        }
    
        return res.send(user)
};



module.exports = {
    getUsers,
    getByIdUser,
    createUser,
    updateUser,
    deleteUser
};