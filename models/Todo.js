const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  task: {
    type: String,
    required: [true, "Please provide a task"],
    trim: true,
    maxlength: [30, "Please provide a task with max length 30."],
  },
  description: {
    type: String,
    minlength: 10,
    required: [true, "Please a provide task description"],
  },
  title: {
    type: String,
    required: [true, "Please provide a task title"],
    minlength: 10,
    maxlength: 30,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
  is_completed: {
    type: String,
    default: "not done",
    enum: ["not done", "done"],
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
