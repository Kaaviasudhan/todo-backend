const asyncHandler = require("../utils/asyncHandler");
const todoService = require("../services/todo.service");

const createTodo = asyncHandler(async (req, res) => {
  const todo = await todoService.createTodo(req.body);

  res.status(201).json({
    success: true,
    data: todo,
  });
});

module.exports = {
  createTodo,
};
