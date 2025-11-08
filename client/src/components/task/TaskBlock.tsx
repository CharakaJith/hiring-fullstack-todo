import React from 'react';
import TaskDisplay from '@/features/task/get/components/TaskDisplay';

const TaskBlock: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full h-full">
      {/* left - task create form */}
      <div className="flex-1 hidden md:block" />

      {/* right - task display box */}
      <div className="flex-1 w-full h-full overflow-y-auto">
        <TaskDisplay />
      </div>
    </div>
  );
};

export default TaskBlock;
