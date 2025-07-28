import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg">
              <Plane className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Wanderlust
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Destinations</a>
            <a href="#packages" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Packages</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Home</a>
              <a href="#destinations" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Destinations</a>
              <a href="#packages" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Packages</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;