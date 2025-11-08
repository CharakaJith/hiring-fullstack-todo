const CustomError = require('../../util/customeError');
const taskRepo = require('../../repos/v1/task.repo');
const displayIdGenerator = require('../../util/displayIdGenerator');
const STATUS = require('../../enums/task.enum');
const { STATUS_CODE } = require('../../constants/app.constants');
const { PAYLOAD, AUTH } = require('../../common/messages');

const taskService = {
  getAllTasks: async () => {
    let tasks = await taskRepo.getAll();

    tasks = tasks.reduce(
      (acc, task) => {
        if (task.status === STATUS.ACTIVE || task.status === STATUS.COMPLETED) {
          acc[task.status].push(task);
        }
        return acc;
      },
      {
        [STATUS.ACTIVE]: [],
        [STATUS.COMPLETED]: [],
      },
    );

    return {
      success: true,
      status: STATUS_CODE.OK,
      data: {
        tasks: tasks,
      },
    };
  },

  createNewTask: async (data) => {
    const { title, description, user } = data;

    // generate display id
    const displayId = await displayIdGenerator.TASK_ID();

    // create task
    const taskDetails = {
      displayId: displayId,
      userId: user.id,
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

  updateExistingTask: async (data) => {
    const { id, title, description, user } = data;

    // get task
    const task = await taskRepo.getActiveById(id);
    if (!task) {
      throw new CustomError(PAYLOAD.TASK.NOT_FOUND, STATUS_CODE.NOT_FOUND);
    }

    // validate request user
    if (task.userId !== user.id) {
      throw new CustomError(AUTH.FORBIDDEN, STATUS_CODE.FORBIDDON);
    }

    // update task
    task.title = title;
    task.description = description;
    const updatedTask = await taskRepo.update(task);

    return {
      success: true,
      status: STATUS_CODE.OK,
      data: {
        task: updatedTask,
      },
    };
  },

  toggleTaskStatus: async (data) => {
    const { id, user } = data;

    // get task
    const task = await taskRepo.getActiveById(id);
    if (!task) {
      throw new CustomError(PAYLOAD.TASK.NOT_FOUND, STATUS_CODE.NOT_FOUND);
    }

    // validate request user
    if (task.userId !== user.id) {
      throw new CustomError(AUTH.FORBIDDEN, STATUS_CODE.FORBIDDON);
    }

    // update task status
    task.status = task.status === STATUS.ACTIVE ? STATUS.COMPLETED : STATUS.ACTIVE;
    const updatedTask = await taskRepo.update(task);

    return {
      success: true,
      status: STATUS_CODE.OK,
      data: {
        task: updatedTask,
      },
    };
  },

  deleteTask: async (data) => {
    const { id, user } = data;

    // get task
    const task = await taskRepo.getActiveById(id);
    if (!task) {
      throw new CustomError(PAYLOAD.TASK.NOT_FOUND, STATUS_CODE.NOT_FOUND);
    }

    // validate request user
    if (task.userId !== user.id) {
      throw new CustomError(AUTH.FORBIDDEN, STATUS_CODE.FORBIDDON);
    }

    // set task status to delete
    task.status = STATUS.DELETED;
    const updatedTask = await taskRepo.update(task);

    return {
      success: true,
      status: STATUS_CODE.OK,
      data: {
        task: updatedTask,
      },
    };
  },
};

module.exports = taskService;
