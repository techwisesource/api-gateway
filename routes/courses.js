const express = require('express');
const router = express.Router();

const courseHandler = require('./handler/course');

router.post("/", courseHandler.create);


module.exports = router;
