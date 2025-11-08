const mongoose = require('mongoose');

const STATUS = require('../enums/task.enum');

const taskSchema = new mongoose.Schema(
  {
    displayId: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      //   ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: STATUS.values,
      required: true,
      default: STATUS.ACTIVE,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Task', taskSchema);
