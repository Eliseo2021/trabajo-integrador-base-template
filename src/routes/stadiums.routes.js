const express = require('express');
const router = express.Router();
const {
    getStadiums,
    getByIdStadium,
    createStadium,
    updateStadium,
    deleteStadium,
} = require('../controllers/Stadiums.controller');

router.get('/Stadiums', getStadiums);

router.get('/Stadiums/:id', getByIdStadium);

router.post('/Stadiums', createStadium);

router.patch('/Stadiums/:id', updateStadium);

router.delete('/Stadiums/:id', deleteStadium);

module.exports = router;
