const express = require('express');
const router = express.Router();
const {
    getUsers,
    getByIdUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/users.controller');

router.get('/users', getUsers);

router.get('/users/:id', getByIdUser);

router.post('/users', createUser);

router.patch('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router;
