const express = require('express');
const taskController = require('../../controllers/v1/task.controller');

const validator = require('../../middleware/requestValidator');
const taskCreateSchema = require('../../schemas/v1/task/taskCreate.schema');
const taskUpdateSchema = require('../../schemas/v1/task/taskUpdate.schema');

const taskRouter = express.Router();

taskRouter.get('/', taskController.getAll);
taskRouter.post('/', validator(taskCreateSchema), taskController.create);
taskRouter.put('/:id', validator(taskUpdateSchema), taskController.update);

module.exports = taskRouter;
