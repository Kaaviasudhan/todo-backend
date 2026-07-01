const Joi = require("joi");

const createTodoSchema = Joi.object({
  title: Joi.string().trim().min(3).max(100).required(),

  description: Joi.string().trim().max(500).allow("").optional(),

  completed: Joi.boolean().optional(),

  priority: Joi.string().valid("Low", "Medium", "High").optional(),

  dueDate: Joi.date().optional(),
});

module.exports = {
  createTodoSchema,
};
