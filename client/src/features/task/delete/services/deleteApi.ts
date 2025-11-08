import type { AxiosResponse } from 'axios';
import api from '@/common/api';
import type { DeleteResponse } from '../types/deleteResponse';

export const DeleteTask = async (taskId: string): Promise<AxiosResponse<DeleteResponse>> => {
  return api.delete<DeleteResponse>(`/api/v1/todos/${taskId}`);
};
