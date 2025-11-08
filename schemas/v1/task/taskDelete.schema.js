const { z } = require('zod');
const mongoose = require('mongoose');

const taskDeleteSchema = z.object({
  params: z.object({
    id: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
      message: 'Invalid task ID!',
    }),
  }),
});

module.exports = taskDeleteSchema;
