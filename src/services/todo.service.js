const Todo = require("../models/Todo");

const createTodo = async (data) => {
  return await Todo.create(data);
};

module.exports = {
  createTodo,
};
