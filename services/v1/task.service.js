const taskRepo = require('../../repos/v1/task.repo');
const displayIdGenerator = require('../../util/displayIdGenerator');
const STATUS = require('../../enums/task.enum');
const { STATUS_CODE } = require('../../constants/app.constants');

const taskService = {
  createNewTask: async (data) => {
    const { title, description } = data;

    // generate display id
    const displayId = await displayIdGenerator.TASK_ID();

    // create task
    const taskDetails = {
      displayId: displayId,
      userId: 1, // NOTE: set to 1 by default, must be request user ID
      title: title,
      description: description,
      status: STATUS.ACTIVE,
    };
    const newTask = await taskRepo.insert(taskDetails);

    return {
      success: true,
      status: STATUS_CODE.CREATED,
      data: {
        task: newTask,
      },
    };
  },
};

module.exports = taskService;
