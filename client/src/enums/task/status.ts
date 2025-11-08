export const TaskStatus = {
  ACTIVE: 'active',
  COMPLETED: 'completed',
  DELETED: 'deleted',
} as const;

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
