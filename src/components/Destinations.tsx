import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    rating: 4.9,
    duration: '7 days',
    price: '$1,299',
    description: 'Tropical paradise with stunning beaches and rich culture'
  },
  {
    id: 2,
    name: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/161852/santorini-oia-greece-water-161852.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    rating: 4.8,
    duration: '5 days',
    price: '$1,899',
    description: 'Iconic white buildings and breathtaking sunsets'
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    rating: 4.7,
    duration: '6 days',
    price: '$2,199',
    description: 'Modern metropolis blending tradition and innovation'
  },
  {
    id: 4,
    name: 'Machu Picchu, Peru',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    rating: 4.9,
    duration: '8 days',
    price: '$1,799',
    description: 'Ancient Incan citadel high in the Andes Mountains'
  },
  {
    id: 5,
    name: 'Maldives',
    image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    rating: 5.0,
    duration: '5 days',
    price: '$3,299',
    description: 'Luxury overwater villas in crystal clear waters'
  },
  {
    id: 6,
    name: 'Swiss Alps',
    image: 'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    rating: 4.8,
    duration: '7 days',
    price: '$2,499',
    description: 'Majestic mountains and pristine alpine landscapes'
  }
];

const Destinations = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the world's most beautiful places with our carefully curated travel packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm font-semibold text-gray-800">{destination.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <span className="text-2xl font-bold text-blue-600">{destination.price}</span>
                </div>

                <p className="text-gray-600 mb-4">{destination.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock size={16} />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <MapPin size={16} />
                    <span className="text-sm">Guided Tour</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;