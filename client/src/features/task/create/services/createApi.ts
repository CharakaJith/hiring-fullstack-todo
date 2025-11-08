import type { AxiosResponse } from 'axios';
import api from '@/common/api';
import type { CreateRequest } from '../types/createRequest';
import type { CreateResponse } from '../types/createResponse';

export const CreateTask = async (task: CreateRequest): Promise<AxiosResponse<CreateResponse>> => {
  return api.post<CreateResponse>('/api/v1/todos', task);
};
