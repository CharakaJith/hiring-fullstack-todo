import type { AxiosResponse } from 'axios';
import api from '@/common/api';
import type { ToggleResponse } from '../types/toggleResponse';

export const ToggleTaskStatus = async (taskId: string): Promise<AxiosResponse<ToggleResponse>> => {
  return api.patch<ToggleResponse>(`/api/v1/todos/${taskId}/done`);
};
