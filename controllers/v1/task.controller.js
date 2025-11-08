const taskService = require('../../services/v1/task.service');

const taskController = {
  create: async (req, res, next) => {
    try {
      const createData = ({ title, description } = req.body);
      //   createData.user = req.user; // TODO:

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
};

module.exports = taskController;
