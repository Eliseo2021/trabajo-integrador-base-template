const express = require('express');
const router = express.Router();
//COMPLETE the router
router.get('/', (req, res) => res.send('Hello World!'));

module.exports = router;
