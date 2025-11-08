import React from 'react';
import useCreate from '../hooks/useCreate';
import useEdit from '../../edit/hooks/useEdit';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ErrorBox from './ErrorBox';

interface CreateFormProps {
  onCreated?: () => void;
  onUpdated?: () => void;
  editTask?: {
    id: string;
    title: string;
    description: string;
  } | null;
  onCancelEdit?: () => void;
}

const CreateForm: React.FC<CreateFormProps> = ({ onCreated, onUpdated, editTask, onCancelEdit }) => {
  const createHook = useCreate();
  const editHook = useEdit(editTask?.id || '');

  // use edit in edit mode else create
  const isEditMode = !!editTask;
  const { title, description, setTitle, setDescription, handleSubmit, loading, error, isError, task } = isEditMode ? editHook : createHook;

  // pass data on edit mode
  React.useEffect(() => {
    if (isEditMode && editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
    } else if (!isEditMode) {
      // reset values
      setTitle('');
      setDescription('');
    }
  }, [isEditMode, editTask, setTitle, setDescription]);

  // handle submit
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
  };

  // callback on success
  React.useEffect(() => {
    if (task) {
      if (isEditMode && onUpdated) {
        onUpdated();
      } else if (!isEditMode && onCreated) {
        onCreated();
      }
    }
  }, [task, isEditMode, onCreated, onUpdated]);

  return (
    <form onSubmit={handleFormSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold mb-2">{isEditMode ? `Edit Task: ${editTask?.title}` : 'Create New Task'}</h2>

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

      {/* action buttons */}
      <div className="flex justify-end gap-2">
        {/* save/update button */}
        <Button type="submit" className="bg-green-700 hover:bg-green-900 text-white px-4 py-2 rounded-md cursor-pointer" disabled={loading}>
          {loading ? (isEditMode ? 'Updating...' : 'Creating...') : isEditMode ? 'Update' : 'Save'}
        </Button>

        {/* cancel button */}
        {isEditMode && (
          <Button type="button" onClick={onCancelEdit} className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-md cursor-pointer">
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default CreateForm;
