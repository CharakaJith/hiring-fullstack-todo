import type { Task } from '@/types/task/task';

export interface GetSuccessResponse {
  success: true;
  response: {
    status: number;
    data: {
      tasks: {
        active: Task[] | [];
        completed: Task[] | [];
      };
    };
  };
}

export interface GetErrorResponse {
  success: false;
  response: {
    status: number;
    data: {
      message: string;
    };
    stack: string | null;
  };
}

export type GetResponse = GetSuccessResponse | GetErrorResponse;
