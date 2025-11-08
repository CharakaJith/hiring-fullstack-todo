import type { TaskStatus } from '@/enums/task/status';

export interface TaskToggleProp {
  isOpen: boolean;
  onClose: () => void;
  taskId: string;
  taskTitle?: string;
  taskStatus?: TaskStatus;
  onDeleted?: () => void;
}
