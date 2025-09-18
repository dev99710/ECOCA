import React from 'react';
import AnimatedSection from './AnimatedSection';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-green-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Transform Environmental Education at Your Institution?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-green-100">
            Partner with us to empower students and make a measurable impact on our planet.
          </p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-full text-lg font-bold border-b-4 border-gray-300 hover:bg-gray-50 hover:border-gray-200 transform hover:-translate-y-1 active:translate-y-0.5 active:border-b-2 transition-all duration-150 ease-in-out shadow-lg"
          >
            Schedule a Free Demo Today
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;