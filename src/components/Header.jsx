import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-bold cursor-pointer"
            style={{ color: "#483AA0" }}
            onClick={() => navigate('/')}
          >
            ServiceCircle
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <button
              onClick={() => navigate('/')}
              className={`hover:opacity-80 ${location.pathname === '/' ? '' : 'text-gray-700'}`}
              style={{ color: location.pathname === '/' ? '#483AA0' : undefined }}
            >
              Home
            </button>
            <button
              onClick={() => navigate('/register')}
              className={`hover:opacity-80 ${location.pathname === '/register' ? '' : 'text-gray-700'}`}
              style={{ color: location.pathname === '/register' ? '#483AA0' : undefined }}
            >
              Become a Provider
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => navigate('/register')}
              style={{ backgroundColor: "#483AA0" }}
              className="text-white px-3 py-2 rounded-lg text-sm"
            >
              Join
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#483AA0]" /> : <Menu className="w-6 h-6 text-[#483AA0]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3">
            <button
              onClick={() => {
                navigate('/');
                setMobileMenuOpen(false);
              }}
              className="text-left text-gray-800 px-2"
              style={{ color: location.pathname === '/' ? '#483AA0' : undefined }}
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate('/register');
                setMobileMenuOpen(false);
              }}
              className="text-left text-gray-800 px-2"
              style={{ color: location.pathname === '/register' ? '#483AA0' : undefined }}
            >
              Become a Provider
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
