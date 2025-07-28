import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Beautiful tropical destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Your Next
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Adventure
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Explore breathtaking destinations, create unforgettable memories, and embark on journeys that will inspire you for a lifetime.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-gray-100 focus-within:border-blue-500 transition-colors">
              <MapPin className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Where to?"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-gray-100 focus-within:border-blue-500 transition-colors">
              <Calendar className="text-gray-400" size={20} />
              <input
                type="date"
                className="flex-1 outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-gray-100 focus-within:border-blue-500 transition-colors">
              <Users className="text-gray-400" size={20} />
              <select className="flex-1 outline-none text-gray-700 bg-transparent">
                <option>2 Guests</option>
                <option>1 Guest</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Search size={20} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;