import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          src="/logo_text80.webp"
          alt="Logo"
          className="h-10 w-auto object-contain"
          loading='lazy'
        />
        
      </div>
      <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition duration-300">
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;

