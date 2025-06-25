// src/components/Header.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
          
            className="text-2xl font-bold cursor-pointer"
            style={{ color: "#483AA0" }}
            onClick={() => navigate('/')}
          >
            ServiceCircle
          </div>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => navigate('/')}
              className={`hover:opacity-80 ${location.pathname === '/' ? '' : 'text-gray-700'}`}
             style={{ color: location.pathname === '/' ? '#483AA0' : undefined }}

            >
              Home
            </button>
            <button
              onClick={() => navigate('/register')}
             // className={`hover:text-blue-600 ${location.pathname === '/register' ? 'text-blue-600' : 'text-gray-700'}`}
             className={`hover:opacity-80 ${location.pathname === '/register' ? '' : 'text-gray-700'}`}
             style={{ color: location.pathname === '/register' ? '#483AA0' : undefined }}
            >
              Become a Provider
            </button>
          </nav>
          <button
            onClick={() => navigate('/register')}
            style={{ backgroundColor: "#483AA0" }}
            className=" text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Join as Provider
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;