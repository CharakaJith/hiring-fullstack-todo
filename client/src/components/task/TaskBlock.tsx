import React, { useState } from 'react';
import TaskDisplay from '@/features/task/get/components/TaskDisplay';
import CreateForm from '@/features/task/create/components/CreateForm';

const TaskBlock: React.FC = () => {
  const [editTask, setEditTask] = useState<{ id: string; title: string; description: string } | null>(null);

  // ref to TaskDisplay refetch
  const taskDisplayRef = React.useRef<{ refetch: () => void } | null>(null);

  const handleTaskCreated = () => {
    if (taskDisplayRef.current) {
      taskDisplayRef.current.refetch();
    }
  };

  const handleTaskUpdated = () => {
    if (taskDisplayRef.current) {
      taskDisplayRef.current.refetch();
    }

    setEditTask(null);
  };

  const handleEditTask = (task: { id: string; title: string; description: string }) => {
    setEditTask(task);
  };

  const handleCancelEdit = () => {
    setEditTask(null);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full h-full">
      {/* left - task create/edit form */}
      <div className="flex-1 hidden md:flex items-center">
        <div className="w-full">
          <CreateForm onCreated={handleTaskCreated} onUpdated={handleTaskUpdated} editTask={editTask} onCancelEdit={handleCancelEdit} />
        </div>
      </div>

      {/* right - task display box */}
      <div className="flex-1 flex items-center">
        <div className="w-full h-full">
          <TaskDisplay ref={taskDisplayRef} onEditTask={handleEditTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskBlock;
