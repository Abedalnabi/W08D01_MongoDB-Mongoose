const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  isCompleted: { type: Boolean, required: true },
  priority: { type: Number, unique: true },
});

module.exports = mongoose.model("todo", todoSchema);
