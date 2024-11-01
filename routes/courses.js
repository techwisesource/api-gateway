const express = require('express');
const router = express.Router();

const courseHandler = require('./handler/course');

router.post("/", courseHandler.create);
router.put("/:id", courseHandler.update);


module.exports = router;
