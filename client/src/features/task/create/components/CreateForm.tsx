import React from 'react';
import useCreate from '../hooks/useCreate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ErrorBox from './ErrorBox';

const CreateForm: React.FC<{ onCreated?: () => void }> = ({ onCreated }) => {
  const { title, description, setTitle, setDescription, handleSubmit, loading, error, isError, task } = useCreate();

  // call onCreated callback when a new task is successfully created
  React.useEffect(() => {
    if (task && onCreated) {
      onCreated();
    }
  }, [task, onCreated]);

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold mb-2">Create New Task</h2>

      {/* task title */}
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-1 font-medium text-gray-700">
          Title <span className="text-red-500">*</span>
        </label>
        <Input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter task title" />
      </div>

      {/* task description */}
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-1 font-medium text-gray-700">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description (optional)"
          className="min-h-[120px] resize-none"
          rows={6}
        />
      </div>

      {/* errors */}
      {isError && error.length > 0 && <ErrorBox messages={error} />}

      {/* submit button */}
      <div className="flex justify-end">
        <Button type="submit" className="bg-green-700 hover:bg-green-900 text-white px-4 py-2 rounded-md cursor-pointer" disabled={loading}>
          {loading ? 'Creating...' : 'Create Task'}
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
