const axios = require('axios').default;
const config = require('config');

async function getUsers(req, res){
    res.send('Users!')
};

async function createUser(req, res){
    res.send('create User!')
};

async function updateUser(req, res){
    res.send(' updating User!')
};

async function deleteUser(req, res){
    res.send(' delete User!')
};



module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};