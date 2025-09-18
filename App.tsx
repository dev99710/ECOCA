
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Innovation from './components/Innovation';
import Technology from './components/Technology';
import Impact from './components/Impact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Innovation />
        <Technology />
        <Impact />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;