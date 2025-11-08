import React from 'react';
import { Button } from '@/components/ui/button';
import { XIcon, Trash2Icon } from 'lucide-react';
import type { TaskDeleteProp } from '../props/taskDeleteProp';
import useDelete from '../hooks/useDelete';

const TaskDeleteModal: React.FC<TaskDeleteProp> = ({ isOpen, onClose, taskId, taskTitle, onDeleted }) => {
  const { deleteTask, loading, error } = useDelete(taskId);

  if (!isOpen) return null;

  // handle confirm
  const handleConfirm = async () => {
    await deleteTask();
    if (!error) {
      onDeleted?.();
      onClose();
    }
  };

  return (
    // modal overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* modal popup */}
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative cursor-default">
        {/* close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 cursor-pointer">
          <XIcon className="h-5 w-5" />
        </button>

        {/* modal content */}
        <div className="text-center">
          {/* icon */}
          <Trash2Icon className="mx-auto h-12 w-12 text-red-600 mb-4" />

          {/* modal heading */}
          <h2 className="text-xl font-bold mb-2">Delete Task</h2>

          {/* warning message */}
          <p className="text-gray-700 mb-6">
            Are you sure you want to delete <span className="font-bold">{taskTitle || 'this task'}</span>? <br />
            <span className="text-red-600">This action cannot be undone!</span>
          </p>

          {/* action buttons */}
          <div className="flex justify-center gap-4">
            {/* delete button */}
            <Button
              onClick={handleConfirm}
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-900 text-white px-4 py-2 rounded-md disabled:opacity-50 cursor-pointer"
            >
              {loading && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
              Confirm
            </Button>

            {/* cancel button */}
            <Button onClick={onClose} disabled={loading} className="bg-gray-700 hover:bg-gray-900 text-white px-5 py-2 rounded-md cursor-pointer">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDeleteModal;
