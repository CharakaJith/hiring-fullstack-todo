import React from 'react';
import NavBar from '../components/navbar/navbar';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat text-black overflow-hidden">
      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center space-y-4">
        <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold leading-none drop-shadow-lg">Taskly</h1>
      </div>
    </div>
  );
};

export default HomePage;
