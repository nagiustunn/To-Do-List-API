const express = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/TodoList");
const router = express.Router();

router.get("/", getAllTodos);
router.post("/create", createTodo);
router.put("/:todo_id/update", updateTodo);
router.delete("/:todo_id/delete", deleteTodo);

module.exports = router;
