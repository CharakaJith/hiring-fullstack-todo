import type { Task } from '@/types/task/task';

export interface CreateSuccesResponse {
  success: true;
  response: {
    status: number;
    data: Task;
  };
}

export interface CreateErrorResponse {
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

export type CreateResponse = CreateSuccesResponse | CreateErrorResponse;
