const express = require('express');
const taskController = require('../../controllers/v1/task.controller');

const validator = require('../../middleware/requestValidator');
const taskCreateSchema = require('../../schemas/v1/task/taskCreate.schema');

const taskRouter = express.Router();

taskRouter.post('/', validator(taskCreateSchema), taskController.create);

module.exports = taskRouter;
