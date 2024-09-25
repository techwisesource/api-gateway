const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/user')

router.post('/register', usersHandler.register);

module.exports = router;
