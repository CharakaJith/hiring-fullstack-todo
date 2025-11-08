export interface TaskDeleteProp {
  isOpen: boolean;
  onClose: () => void;
  taskId: string;
  taskTitle?: string;
  onDeleted?: () => void;
}
