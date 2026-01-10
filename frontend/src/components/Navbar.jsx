import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from './Button';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/login');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <span className="text-xl sm:text-2xl font-bold text-blue-600">GiveHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ?  (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition">
                  Dashboard
                </Link>
                <Link to="/donate" className="text-gray-700 hover:text-blue-600 font-medium transition">
                  Donate
                </Link>
                <Link to="/my-donations" className="text-gray-700 hover:text-blue-600 font-medium transition">
                  My Donations
                </Link>
                <div className="flex items-center space-x-3 ml-4">
                  <span className="text-sm text-gray-600 max-w-[150px] truncate">{user?.email}</span>
                  <Button variant="secondary" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              </>
            ) :(
              <>
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(! mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {mobileMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) :(
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {isAuthenticated ? (
              <div className="flex flex-col space-y-3">
                <span className="text-sm text-gray-600 px-4 py-2 bg-gray-50 rounded">{user?.email}</span>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded transition"
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
                <Link
                  to="/donate"
                  className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded transition"
                  onClick={closeMobileMenu}
                >
                  Donate
                </Link>
                <Link
                  to="/my-donations"
                  className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded transition"
                  onClick={closeMobileMenu}
                >
                  My Donations
                </Link>
                <Button variant="secondary" onClick={handleLogout} fullWidth>
                  Logout
                </Button>
              </div>
            ) :(
              <div className="flex flex-col space-y-3">
                <Link to="/login" onClick={closeMobileMenu}>
                  <Button variant="secondary" fullWidth>Login</Button>
                </Link>
                <Link to="/register" onClick={closeMobileMenu}>
                  <Button variant="primary" fullWidth>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;