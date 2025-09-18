import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative text-white min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden animated-gradient">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative container mx-auto px-4 sm:px-6 text-center z-10">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 text-gradient bg-gradient-to-r from-green-200 via-emerald-300 to-white">
            Turn Environmental Education into Action
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
            Environmental education in India remains largely theoretical. Our platform empowers students to engage in real-world, eco-friendly practices, making learning actionable and impactful.
          </p>
          <a href="#cta" className="inline-block bg-white text-green-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg font-semibold border-b-4 border-gray-300 hover:bg-gray-50 hover:border-gray-200 transform hover:-translate-y-1 active:translate-y-0.5 active:border-b-2 transition-all duration-150 ease-in-out shadow-lg">
            Request a Demo
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;