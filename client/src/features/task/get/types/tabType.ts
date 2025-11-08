export const TabType = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed',
} as const;

export type TabType = (typeof TabType)[keyof typeof TabType];
