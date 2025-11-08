import React, { useState } from 'react';
import { RefreshCwIcon, CheckCircleIcon, CircleIcon, ListIcon, LoaderIcon } from 'lucide-react';
import { useGet } from '../hooks/useGet';
import { Button } from '@/components/ui/button';
import { TabType } from '../types/tabType';
import { TASK } from '@/common/messages';

const TaskDisplay: React.FC = () => {
  const { activeTasks, completedTasks, loading, error, refetch } = useGet();
  const [activeTab, setActiveTab] = useState<TabType>(TabType.ALL);

  const allTasks = [...activeTasks, ...completedTasks];

  const getTasksToDisplay = () => {
    switch (activeTab) {
      case TabType.ACTIVE:
        return activeTasks;
      case TabType.COMPLETED:
        return completedTasks;
      case TabType.ALL:
      default:
        return allTasks;
    }
  };

  const tasksToDisplay = getTasksToDisplay();

  return (
    // task display area
    <div className="p-4 md:p-6">
      {/* header section */}
      <div className="flex justify-between items-center mb-6 cursor-default">
        {/* header */}
        <h1 className="text-2xl font-bold">Your Tasks</h1>

        {/* refresh button */}
        <Button
          onClick={refetch}
          disabled={loading}
          className="flex items-center justify-center gap-2 w-36 bg-green-700 hover:bg-green-900 text-white px-3 py-2 rounded-md transition disabled:opacity-50 cursor-pointer"
        >
          <RefreshCwIcon size={18} className={`${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* navigation menu */}
      <div className="flex border-b border-gray-200 mb-6 justify-center">
        {/* all tasks */}
        <button
          onClick={() => setActiveTab(TabType.ALL)}
          className={`flex items-center gap-2 px-4 py-2 font-medium text-sm border-b-2 transition-colors cursor-not-allowed ${
            activeTab === TabType.ALL ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 cursor-pointer'
          }`}
        >
          <ListIcon size={16} />
          All Tasks
          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">{allTasks.length}</span>
        </button>

        {/* active tasks */}
        <button
          onClick={() => setActiveTab(TabType.ACTIVE)}
          className={`flex items-center gap-2 px-4 py-2 font-medium text-sm border-b-2 transition-colors cursor-not-allowed ${
            activeTab === TabType.ACTIVE ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 cursor-pointer'
          }`}
        >
          <CircleIcon size={16} />
          Active
          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">{activeTasks.length}</span>
        </button>

        {/* completed tasks */}
        <button
          onClick={() => setActiveTab(TabType.COMPLETED)}
          className={`flex items-center gap-2 px-4 py-2 font-medium text-sm border-b-2 transition-colors cursor-not-allowed ${
            activeTab === TabType.COMPLETED ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 cursor-pointer'
          }`}
        >
          <CheckCircleIcon size={16} />
          Completed
          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">{completedTasks.length}</span>
        </button>
      </div>

      {/* error box */}
      {error && (
        <div className="flex justify-center items-center py-6">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      )}

      {/* loading icon */}
      {loading && (
        <div className="flex justify-center items-center py-6">
          <LoaderIcon className="w-8 h-8 text-gray-800 animate-spin" />
        </div>
      )}

      {/* task display */}
      {!loading && !error && (
        <section>
          {tasksToDisplay.length > 0 ? (
            <ul className="space-y-3">
              {tasksToDisplay.map((task) => {
                const isCompleted = completedTasks.some((completedTask) => completedTask._id === task._id);

                return (
                  <li
                    key={task._id}
                    className={`p-4 rounded-lg border shadow-sm hover:shadow-md transition ${isCompleted ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {isCompleted ? <CheckCircleIcon className="text-green-500 h-4 w-4" /> : <CircleIcon className="text-blue-500 h-4 w-4" />}
                      <h3 className={`font-semibold ${isCompleted ? 'line-through text-gray-500' : ''}`}>{task.title}</h3>
                    </div>
                    <p className={`text-sm ml-6 ${isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>{task.description}</p>
                    {isCompleted && <p className="text-xs text-green-600 ml-6 mt-1 font-medium">Completed</p>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">
                {activeTab === TabType.ALL && <ListIcon size={48} className="mx-auto" />}
                {activeTab === TabType.ACTIVE && <CircleIcon size={48} className="mx-auto" />}
                {activeTab === TabType.COMPLETED && <CheckCircleIcon size={48} className="mx-auto" />}
              </div>
              <p className="text-gray-500">
                {activeTab === TabType.ALL && TASK.NOT_FOUND.ALL}
                {activeTab === TabType.ACTIVE && TASK.NOT_FOUND.ACTIVE}
                {activeTab === TabType.COMPLETED && TASK.NOT_FOUND.COMPLTED}
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default TaskDisplay;
