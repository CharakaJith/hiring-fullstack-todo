import { TaskStatus } from '../../enums/task/status';

export interface Task {
  _id: string;
  displayId: string;
  userId: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
