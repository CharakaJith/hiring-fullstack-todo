const { z } = require('zod');
const mongoose = require('mongoose');

const taskUpdateSchema = z.object({
  params: z.object({
    id: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
      message: 'Invalid task ID!',
    }),
  }),
  body: z.object({
    title: z.string().min(4, { message: 'Title must be at least 4 characters long!' }),
    description: z.string().optional().nullable(),
  }),
});

module.exports = taskUpdateSchema;
