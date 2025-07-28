import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Wanderlust
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in creating unforgettable travel experiences. We turn your dream destinations into reality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={24} />
              <Twitter className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={24} />
              <Instagram className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" size={24} />
              <Youtube className="text-gray-400 hover:text-red-400 cursor-pointer transition-colors" size={24} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Flight Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hotel Reservation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Car Rental</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tour Guides</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1" size={20} />
                <span className="text-gray-300">123 Travel Street, Adventure City, AC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-400" size={20} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-400" size={20} />
                <span className="text-gray-300">info@wanderlust.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-2 rounded-r-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Wanderlust Travel. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;