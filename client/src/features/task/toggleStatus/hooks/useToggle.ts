import type { AxiosError } from 'axios';
import { useState } from 'react';
import { ToggleTaskStatus } from '../services/toggleApi';
import type { ToggleErrorResponse } from '../types/toggleResponse';
import { ERROR } from '@/common/messages';
import type { Task } from '@/types/task/task';

const useToggle = () => {
  const [task, setTask] = useState<Task>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const changeTaskStatus = async (taskId: string) => {
    try {
      setLoading(true);
      setError('');

      const res = await ToggleTaskStatus(taskId);

      if (res.data.success) {
        setTask(res.data.response.data.task);
      } else {
        setError(res.data.response.data.message);
      }
    } catch (error) {
      const axiosError = error as AxiosError<ToggleErrorResponse>;
      const message = axiosError.response?.data?.response?.data?.message || ERROR.LOAD_FAILED('tasks');

      setError(message);
    } finally {
      setLoading(true);
    }
  };

  return {
    task,
    loading,
    error,
    changeTaskStatus,
  };
};

export default useToggle;
