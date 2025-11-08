import type { AxiosResponse } from 'axios';
import api from '@/common/api';
import type { CreateResponse } from '../types/createResponse';
import type { CreateRequest } from '../types/createRequest';

export const CreateTask = async (task: CreateRequest): Promise<AxiosResponse<CreateResponse>> => {
  return api.post<CreateResponse>('/api/v1/todos', task);
};
