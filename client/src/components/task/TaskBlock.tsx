import React from 'react';
import TaskDisplay from '@/features/task/get/components/TaskDisplay';
import CreateForm from '@/features/task/create/components/CreateForm';

const TaskBlock: React.FC = () => {
  // ref to TaskDisplay refetch
  const taskDisplayRef = React.useRef<{ refetch: () => void } | null>(null);

  const handleTaskCreated = () => {
    if (taskDisplayRef.current) {
      taskDisplayRef.current.refetch();
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full h-full">
      {/* left - task create form */}
      <div className="flex-1 hidden md:flex items-center">
        <div className="w-full">
          <CreateForm onCreated={handleTaskCreated} />
        </div>
      </div>

      {/* right - task display box */}
      <div className="flex-1 flex items-center">
        <div className="w-full h-full">
          <TaskDisplay ref={taskDisplayRef} />
        </div>
      </div>
    </div>
  );
};

export default TaskBlock;
