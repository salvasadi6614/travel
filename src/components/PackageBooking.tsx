import React, { useState } from 'react';
import { Calendar, Users, MapPin, Phone, Mail, CreditCard, Shield, CheckCircle } from 'lucide-react';

const PackageBooking = () => {
  const [selectedPackage, setSelectedPackage] = useState('premium');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    specialRequests: ''
  });

  const packages = [
    {
      id: 'basic',
      name: 'Explorer Package',
      price: 899,
      features: ['3-star accommodation', 'Breakfast included', 'Airport transfers', 'City tour']
    },
    {
      id: 'premium',
      name: 'Luxury Package',
      price: 1599,
      features: ['5-star accommodation', 'All meals included', 'Private transfers', 'All tours & activities', 'Spa treatments']
    },
    {
      id: 'ultimate',
      name: 'Ultimate Package',
      price: 2499,
      features: ['Luxury resort', 'All inclusive', 'Private jet transfers', 'Personal concierge', 'Exclusive experiences']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Booking request submitted! We will contact you shortly.');
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Dream Package
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully crafted travel packages and create memories that last a lifetime
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Package Selection */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Package</h3>
            <div className="space-y-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    selectedPackage === pkg.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{pkg.name}</h4>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-blue-600">${pkg.price}</span>
                      <span className="text-gray-500 block text-sm">per person</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="text-green-500" size={20} />
                  <span>Secure Booking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="text-blue-500" size={20} />
                  <span>Flexible Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Travel Details */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 text-gray-400" size={20} />
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
                    required
                  >
                    <option value="">Select destination</option>
                    <option value="bali">Bali, Indonesia</option>
                    <option value="santorini">Santorini, Greece</option>
                    <option value="tokyo">Tokyo, Japan</option>
                    <option value="machu-picchu">Machu Picchu, Peru</option>
                    <option value="maldives">Maldives</option>
                    <option value="swiss-alps">Swiss Alps</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-4 text-gray-400" size={20} />
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-4 text-gray-400" size={20} />
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-4 text-gray-400" size={20} />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Any special requirements or requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Package - ${packages.find(p => p.id === selectedPackage)?.price}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageBooking;