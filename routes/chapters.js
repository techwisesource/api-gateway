const express = require('express');
const router = express.Router();

const chapterHandler = require('./handler/chapter');

const verifyToken = require("../middlewares/verifyToken");

router.post("/", chapterHandler.create);
router.put("/:id", chapterHandler.update);
router.delete("/:id", chapterHandler.destroy);
router.get("/", chapterHandler.getAll);
router.get("/:id", chapterHandler.get);

module.exports = router;
