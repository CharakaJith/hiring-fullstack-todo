const taskService = require('../../services/v1/task.service');

const taskController = {
  getAll: async (req, res, next) => {
    try {
      const response = await taskService.getAllTasks();
      const { success, status, data } = response;

      res.status(status).json({
        success: success,
        response: {
          status: status,
          data: data,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const createData = ({ title, description } = req.body);
      createData.user = {
        id: 1, // NOTE: set to 1 by default, must be request user ID
      };

      const response = await taskService.createNewTask(createData);
      const { success, status, data } = response;

      res.status(status).json({
        success: success,
        response: {
          status: status,
          data: data,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const updateData = ({ title, description } = req.body);
      updateData.id = req.params.id;
      updateData.user = {
        id: 1, // NOTE: set to 1 by default, must be request user ID
      };

      const response = await taskService.updateExistingTask(updateData);
      const { success, status, data } = response;

      res.status(status).json({
        success: success,
        response: {
          status: status,
          data: data,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  toggleStatus: async (req, res, next) => {
    try {
      const toggleData = {};
      toggleData.id = req.params.id;
      toggleData.user = {
        id: 1, // NOTE: set to 1 by default, must be request user ID
      };

      const response = await taskService.toggleTaskStatus(toggleData);
      const { success, status, data } = response;

      res.status(status).json({
        success: success,
        response: {
          status: status,
          data: data,
        },
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = taskController;
