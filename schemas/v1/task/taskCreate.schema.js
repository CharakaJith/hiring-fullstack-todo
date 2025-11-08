const { z } = require('zod');

const taskCreateSchema = z.object({
  body: z.object({
    title: z.string().min(4, { message: 'Title must be at least 4 characters long!' }),
    description: z.string().optional().nullable(),
  }),
});

module.exports = taskCreateSchema;
