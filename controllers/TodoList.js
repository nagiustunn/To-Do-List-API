const Todo = require("../models/Todo");
const errorWrapper = require("../helpers/errors/errorWrapper");

const getAllTodos = errorWrapper(async (req, res) => {
  Todo.find()
    .sort("-createdAt")
    .exec((err, todos) => {
      if (err || !todos) {
        return res.status(400).json({
          error: "Something went wrong in finding all todos",
        });
      }

      res.json(todos);
    });
});

const createTodo = errorWrapper(async (req, res) => {
  const todo = req.body;

  const createTodo = await Todo.create({
    ...todo,
  });

  res.status(200).json({
    success: true,
    message: todo,
  });
});

const updateTodo = errorWrapper(async (req, res) => {
  await Todo.findOneAndUpdate(
    { _id: req.params.todo_id },
    req.body,
    { new: true },
    function (err, Todo) {
      if (err) res.send(err);
      res.json(Todo);
    }
  );
});

const deleteTodo = errorWrapper(async (req, res) => {
  await Todo.remove(
    {
      _id: req.params.todo_id,
    },
    function (err, todo) {
      if (err) res.send(err);

      Todo.find(function (err, todos) {
        if (err) res.send(err);
        res.json(todos);
      });
    }
  );
});

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
