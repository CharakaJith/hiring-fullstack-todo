import type { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { CreateTask } from '../services/createApi';
import type { CreateErrorResponse } from '../types/createResponse';
import { ERROR, VALIDATE } from '@/common/messages';
import type { Task } from '@/types/task/task';
import type { CreateRequest } from '../types/createRequest';

const useCreate = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [task, setTask] = useState<Task>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // reset error state
    setError([]);
    setIsError(false);
    setLoading(true);

    // validate inputs
    if (!title.trim()) {
      setError([VALIDATE.EMPTY_FIELDS]);
      setIsError(true);
      setLoading(false);
      return;
    }

    try {
      // create task
      const task: CreateRequest = {
        title: title,
        description: description ? description : '',
      };
      const res = await CreateTask(task);

      if (res.data.success) {
        setTask(res.data.response.data);
        setTitle('');
        setDescription('');
      } else {
        const responseData = res.data.response?.data;

        if (responseData?.errors && responseData.errors.length > 0) {
          const messages = responseData.errors.map((error: { field: string; message: string }) => `${error.message}`);
          setError(messages);
        } else if (responseData?.message) {
          setError([responseData.message]);
        } else {
          setError([ERROR.LOAD_FAILED('tasks')]);
        }

        setIsError(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<CreateErrorResponse>;
      const responseData = axiosError.response?.data?.response?.data;

      if (responseData?.errors && responseData.errors.length > 0) {
        const messages = responseData.errors.map((error: { field: string; message: string }) => `${error.field}: ${error.message}`);
        setError(messages);
      } else if (responseData?.message) {
        setError([responseData.message]);
      } else {
        setError([ERROR.LOAD_FAILED('tasks')]);
      }

      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  // error message time out in 5 seconds
  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        setIsError(false);
        setError([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isError]);

  return {
    title,
    description,
    task,
    loading,
    error,
    isError,
    setTitle,
    setDescription,
    handleSubmit,
  };
};

export default useCreate;
