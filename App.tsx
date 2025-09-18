
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Innovation from './components/Innovation';
import Technology from './components/Technology';
import Impact from './components/Impact';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Innovation />
        <Technology />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
