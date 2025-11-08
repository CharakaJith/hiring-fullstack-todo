const Task = require('../../models/task');

const CustomError = require('../../util/customeError');
const STATUS = require('../../enums/task.enum');
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

  getAll: async () => {
    try {
      return await Task.find({});
    } catch (error) {
      throw new CustomError(REPO.FAILED.GET.ALL(ENTITY, error.message), STATUS_CODE.SERVER_ERROR);
    }
  },

  getActiveById: async (taskId) => {
    try {
      return await Task.findOne({
        _id: taskId,
        status: { $ne: STATUS.DELETED }, // only fetch if status is NOT deleted
      });
    } catch (error) {
      throw new CustomError(REPO.FAILED.GET.BY_ID(ENTITY, error.message), STATUS_CODE.SERVER_ERROR);
    }
  },

  update: async (task) => {
    try {
      return await task.save();
    } catch (error) {
      throw new CustomError(REPO.FAILED.UPDATE(ENTITY, error.message), STATUS_CODE.SERVER_ERROR);
    }
  },
};

module.exports = taskRepo;
