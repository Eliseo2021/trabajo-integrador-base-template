const express = require('express');
const router = express.Router();
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controller');

router.get('/users', getUsers);

router.post('/users', createUser);

router.put('/users', updateUser);

router.delete('/users', deleteUser);

module.exports = router;
