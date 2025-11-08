import React from 'react';
import TaskDisplay from '@/features/task/get/components/TaskDisplay';

const TaskBlock: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full h-full">
      {/* Left panel (empty) */}
      <div className="flex-1 hidden md:block" />

      {/* Right panel (tasks) */}
      <div className="flex-1 w-full h-full overflow-y-auto">
        <TaskDisplay />
      </div>
    </div>
  );
};

export default TaskBlock;
