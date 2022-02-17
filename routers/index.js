const express = require("express");
const todo = require("./Todo");

const router = express.Router();

router.use("/todo", todo);

module.exports = router;
