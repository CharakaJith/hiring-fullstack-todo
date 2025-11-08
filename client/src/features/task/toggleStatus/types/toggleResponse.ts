import type { Task } from '@/types/task/task';

export interface ToggleSuccessResponse {
  success: true;
  response: {
    status: number;
    data: {
      task: Task;
    };
  };
}

export interface ToggleErrorResponse {
  success: false;
  response: {
    status: number;
    data: {
      message: string;
    };
    stack: string | null;
  };
}

export type ToggleResponse = ToggleSuccessResponse | ToggleErrorResponse;
