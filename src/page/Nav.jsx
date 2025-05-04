import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {/* Menu options that appear when circle is clicked */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col gap-3">
            <li className="hover:bg-gray-100 rounded-md px-4 py-2 transition-colors">
              <Link 
                to="/" 
                className="block w-full text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Input
              </Link>
            </li>
            <li className="hover:bg-gray-100 rounded-md px-4 py-2 transition-colors">
              <Link 
                to="/archieve" 
                className="block w-full text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Archive
              </Link>
            </li>
          </ul>
        </div>
      )}
      
      {/* Circle button */}
      <button 
        onClick={toggleMenu} 
        className={`h-16 w-16 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
      >
        {/* "+" icon that rotates to "×" when menu is open */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M12 6v12m-6-6h12"} 
          />
        </svg>
      </button>
    </div>
  );
};

export default Nav;