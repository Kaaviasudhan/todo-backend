const express = require("express");

const router = express.Router();

const validate = require("../middleware/validate.middleware");

const { createTodoSchema } = require("../validations/todo.validation");

const { createTodo } = require("../controllers/todo.controller");

router.post("/", validate(createTodoSchema), createTodo);

module.exports = router;
