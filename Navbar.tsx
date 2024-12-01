import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8" />
            <span className="text-2xl font-bold">SAVARII</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="hover:text-indigo-200">Plan Trip</Link>
            <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-200">
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;