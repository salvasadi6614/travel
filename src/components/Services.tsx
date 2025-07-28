import React from 'react';
import { Plane, Shield, HeadphonesIcon, MapPin, Camera, Utensils } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight Bookings',
    description: 'Best deals on flights worldwide with flexible booking options and 24/7 support.'
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage for peace of mind during your adventures.'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock assistance wherever you are in the world.'
  },
  {
    icon: MapPin,
    title: 'Local Guides',
    description: 'Expert local guides to show you hidden gems and authentic experiences.'
  },
  {
    icon: Camera,
    title: 'Photo Tours',
    description: 'Capture stunning memories with our professional photography services.'
  },
  {
    icon: Utensils,
    title: 'Culinary Experiences',
    description: 'Taste authentic local cuisine with our curated food experiences.'
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive travel services to make your journey seamless and unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;