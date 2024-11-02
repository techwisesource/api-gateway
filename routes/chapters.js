const express = require('express');
const router = express.Router();

const chapterHandler = require('./handler/chapter');

const verifyToken = require("../middlewares/verifyToken");

router.post("/", chapterHandler.create);

module.exports = router;
