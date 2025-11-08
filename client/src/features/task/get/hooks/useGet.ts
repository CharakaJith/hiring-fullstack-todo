import type { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import type { Task } from '@/types/task/task';
import { GetTasks } from '../services/getApi';
import type { GetErrorResponse } from '../types/getResponse';
import { ERROR } from '@/common/messages';

const useGet = () => {
  const [activeTasks, setActiveTasks] = useState<Task[]>([]);
  const [completedTasks, setCompltedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError('');

      const res = await GetTasks();

      if (res.data.success) {
        setActiveTasks(res.data.response.data.tasks.active);
        setCompltedTasks(res.data.response.data.tasks.completed);
      } else {
        setError(res.data.response.data.message);
      }
    } catch (error) {
      const axiosError = error as AxiosError<GetErrorResponse>;
      const message = axiosError.response?.data?.response?.data?.message || ERROR.LOAD_FAILED('tasks');

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // auto fetch
  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    activeTasks,
    completedTasks,
    loading,
    error,
    refetch: fetchTasks,
  };
};

export default useGet;
