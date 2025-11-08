import type { Task } from '@/types/task/task';

export interface EditSuccesResponse {
  success: true;
  response: {
    status: number;
    data: Task;
  };
}

export interface EditErrorResponse {
  success: false;
  response: {
    status: number;
    data: {
      message: string;
      errors?: {
        field: string;
        message: string;
      }[];
      stack: string | null;
    };
  };
}

export type EditResponse = EditSuccesResponse | EditErrorResponse;
