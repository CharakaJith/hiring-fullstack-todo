import type { AxiosResponse } from 'axios';
import api from '@/common/api';
import type { GetResponse } from '../types/getResponse';

export const GetTasks = async (): Promise<AxiosResponse<GetResponse>> => {
  return api.get<GetResponse>('/api/v1/todos');
};
