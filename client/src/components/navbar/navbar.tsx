import React from 'react';

import Logo from '../../../public/logo.png';

const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between px-5 md:px-20 py-4 shadow-md z-50 cursor-default">
      {/* logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 sm:h-15" />
        {'  '}
        <h1 className="text-3xl">Taskly</h1>
      </div>

      {/* tagline */}
      <span className="hidden md:inline text-lg text-gray-300">Get Things Done, Effortlessly</span>
    </header>
  );
};

export default NavBar;
