const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/user')

router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);

module.exports = router;
