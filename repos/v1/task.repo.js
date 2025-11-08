const Task = require('../../models/task');

const CustomError = require('../../util/customeError');
const { REPO } = require('../../common/messages');
const { STATUS_CODE } = require('../../constants/app.constants');

const ENTITY = 'task';

const taskRepo = {
  insert: async (taskData) => {
    try {
      const task = new Task(taskData);
      return await task.save();
    } catch (error) {
      throw new CustomError(REPO.FAILED.CREATE(ENTITY, error.message), STATUS_CODE.SERVER_ERROR);
    }
  },
};

module.exports = taskRepo;
