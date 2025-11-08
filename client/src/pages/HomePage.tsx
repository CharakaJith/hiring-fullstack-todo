import React from 'react';
import NavBar from '../components/navbar/navbar';
import TaskBlock from '@/components/task/TaskBlock';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat text-black">
      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <main className="flex flex-col items-start justify-start flex-1 text-left px-0 py-0 pt-28 h-[calc(100vh-7rem)] w-full">
        <div className="w-full h-full bg-white/70 shadow-lg p-6 overflow-hidden">
          <TaskBlock />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
