const express = require('express');
const router = express.Router();

const mentorHandler = require('./handler/mentor');

router.get("/", mentorHandler.getAll);
router.get("/:id", mentorHandler.get);
router.post("/", mentorHandler.create);


module.exports = router;
