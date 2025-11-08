import type { AxiosResponse } from 'axios';
import api from '@/common/api';
import type { EditRequest } from '../types/editRequest';
import type { EditResponse } from '../types/editResponse';

export const EditTask = async (taskId: string, task: EditRequest): Promise<AxiosResponse<EditResponse>> => {
  return api.put<EditResponse>(`/api/v1/todos/${taskId}`, task);
};
