const express = require('express');
const router = express.Router();

const myCourseHandler = require('./handler/my-course');

router.post("/", myCourseHandler.create);
router.get("/", myCourseHandler.get);

module.exports = router;
