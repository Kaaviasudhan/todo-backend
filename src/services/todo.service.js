const Todo = require("../models/Todo");

const createTodo = async (data) => {
  const todo = new Todo(data);

  await todo.save();

  return todo;
};

module.exports = {
  createTodo,
};