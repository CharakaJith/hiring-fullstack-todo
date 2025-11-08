import type { AxiosError } from 'axios';
import { useState } from 'react';
import { DeleteTask } from '../services/deleteApi';
import type { DeleteErrorResponse } from '../types/deleteResponse';
import { ERROR } from '@/common/messages';

export const useDelete = (taskId: string) => {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const deleteTask = async () => {
    try {
      setLoading(true);
      setError('');

      const res = await DeleteTask(taskId);

      if (res.data.success) {
        setMessage(res.data.response.data.message);
      } else {
        setError(res.data.response.data.message);
      }
    } catch (error) {
      const axiosError = error as AxiosError<DeleteErrorResponse>;
      const message = axiosError.response?.data?.response?.data?.message || ERROR.LOAD_FAILED('tasks');

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    message,
    loading,
    error,
    deleteTask,
  };
};

export default useDelete;
