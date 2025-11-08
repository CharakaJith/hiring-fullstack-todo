// error messages
export const ERROR = {
  UNEXPECTED: 'An unexpected error occurred',

  LOAD_FAILED: (unit: string) => `Failed to load ${unit}!`,
} as const;

// task related messages
export const TASK = {
  NOT_FOUND: {
    ALL: 'No tasks found. Create your first task to get started!',
    ACTIVE: 'No active tasks. All tasks are completed!',
    COMPLTED: 'No completed tasks found. Complete some tasks to see them here!',
  },
};

// validation messages
export const VALIDATE = {
  EMPTY_FIELDS: 'Please fill in all required fields.',
};
