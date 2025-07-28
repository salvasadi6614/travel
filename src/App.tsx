import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import PackageBooking from './components/PackageBooking';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="destinations">
          <Destinations />
        </section>
        <section id="packages">
          <PackageBooking />
        </section>
        <Services />
        <Testimonials />
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;