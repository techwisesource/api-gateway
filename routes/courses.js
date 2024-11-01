const express = require('express');
const router = express.Router();

const courseHandler = require('./handler/course');

router.post("/", courseHandler.create);
router.put("/:id", courseHandler.update);
router.get("/", courseHandler.getAll);
router.get("/:id", courseHandler.get);
router.delete("/:id", courseHandler.destroy);

module.exports = router;
