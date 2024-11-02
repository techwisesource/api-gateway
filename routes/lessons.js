const express = require('express');
const router = express.Router();

const lessonHandler = require('./handler/lesson');

const verifyToken = require("../middlewares/verifyToken");

router.post("/", lessonHandler.create);
router.put("/:id", lessonHandler.update);
router.delete("/:id", lessonHandler.destroy);

module.exports = router;
